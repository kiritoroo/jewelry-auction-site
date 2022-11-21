from fastapi import APIRouter, Depends
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from constants.account_constants import account_response_data
from deps.account_dep import get_account_service
from services.account_service import AccountService
from schemas.account_schema import AccountSchemaCreate
from fastapi.security import HTTPBearer

token_auth_scheme = HTTPBearer()

"""Endpoints for Account"""
account_router = APIRouter(prefix='/api/account', tags=['Account'])

@account_router.post('/register', **account_response_data.get('register'))
async def register(
  user_data: AccountSchemaCreate,
  service_data=Depends(get_account_service)
):
  return await AccountService(**service_data) \
    .register(user_data=user_data)

@account_router.post('/login', **account_response_data.get('login'))
async def login(
  form_data: OAuth2PasswordRequestForm = Depends(),
  service_data=Depends(get_account_service)
):
  return await AccountService(**service_data) \
    .login(username=form_data.username, password=form_data.password)

@account_router.get('/user/{user_id}', **account_response_data.get('detail'))
async def detail_user(
  user_id: str,
  token: str = Depends(token_auth_scheme),
  service_data=Depends(get_account_service)
):
  return await AccountService(**service_data) \
    .detail_user(user_id=user_id)