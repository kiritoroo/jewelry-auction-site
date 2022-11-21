from fastapi import HTTPException, status
from jose import JWTError, jwt
from constants.account_constants import TokenType
from .token_service_interface import TokenServiceInterface
from datetime import datetime, timedelta

def token_exception(token_type: str, error_detail: str, headers: dict = None):
  def decorator(func):
    async def wrapper(*args, **kwargs):
      try:
        return await func(*args, **kwargs)
      except jwt.ExpiredSignatureError:
        raise HTTPException(
          status_code=status.HTTP_401_UNAUTHORIZED,
          detail=f'{token_type.capitalize()} expired')
      except JWTError:
        raise HTTPException(
          status_code=status.HTTP_401_UNAUTHORIZED,
          detail=error_detail, headers=headers)
    return wrapper
  return decorator

class TokenService(TokenServiceInterface):
  @token_exception(
    token_type='access_token',
    error_detail='Could not validate credentials')
  async def decode_access_token(self, access_token: str, secret_key: str, algorithm: str) -> dict:
    payload: dict = jwt.decode(
      token=access_token,
      key=secret_key,
      algorithms=algorithm)
    if payload.get('token_type') == TokenType.ACCESS_TOKEN.value:
      return payload
    
  @token_exception(
    token_type='refresh_token',
    error_detail='Invalid refresh token'
  )
  async def decode_refresh_token(self, refresh_token: str, secret_key: str, algorithm: str) -> dict:
    payload: dict = jwt.decode(
      token=refresh_token,
      key=secret_key,
      algorithms=algorithm)
    if payload.get('token_type') != TokenType.REFRESH_TOKEN.value:
      raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid type for token')

  async def encode_token(self, username: str, secret_key: str, algorithm: str, exp_time: int, token_type: TokenType):
    expire_time = datetime.utcnow() + timedelta(minutes=exp_time)
    data = {
      'sub': username,
      'exp': expire_time,
      'token_type': token_type.value
    }
    return jwt.encode(data, key=secret_key, algorithm=algorithm)