from fastapi import HTTPException, status

from repositories.account_repository_interface import AdRepositoryInterface
from schemas.account_schema import AccountSchemaCreate, AccountSchemaBase
from .password_service_interface import PasswordServiceInterface
from .token_service_interface import TokenServiceInterface
from constants.account_constants import TokenType
import os

class AccountService:
  def __init__(self, 
    repository: AdRepositoryInterface,
    password_service: PasswordServiceInterface,
    token_service: TokenServiceInterface
  ) -> None:
    self._repository = repository
    self._password_service = password_service
    self._token_service = token_service

  async def _create_token_data(self, username: str, token_type: TokenType, exp_time: int):
    return await self._token_service.encode_token(
      username=username,
      token_type=token_type,
      secret_key=os.environ.get('SECRET_KEY'),
      algorithm=os.environ.get('ALGORITHM'),
      exp_time=int(os.environ.get('EXP_TIME'))
    )

  async def _authenticate(self, username: str, password: str):
    if not (user := await self._repository.get_user(username=username)) \
      or not await self._password_service \
        .verify_passwords(plain_password=password, hashed_password=user['password']):
      raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Incorrect username or password')
    return user

  async def detail_user(self, user_id: str):
    return await self._repository.detail_user(user_id=user_id)

  async def login(self, username: str, password: str):
    user = await self._authenticate(username=username, password=password)
    access_token = await self._create_token_data(
      username=user['username'],
      token_type=TokenType.ACCESS_TOKEN,
      exp_time=int(os.environ.get('EXP_TIME')))

    refresh_toekn = await self._create_token_data(
      username=user['username'],
      token_type=TokenType.REFRESH_TOKEN,
      exp_time=10)
    return {
      'access_token': access_token,
      'refresh_token': refresh_toekn
    }
  
  async def register(self, user_data: AccountSchemaCreate):
    if await self._repository.get_user(username=user_data.username):
      raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='User with this username exists')
    hashed_password = await self._password_service.hashed_password(plain_password=user_data.password)
    user_data.password = hashed_password
    return await self._repository.save_user(user=user_data)
