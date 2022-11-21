from fastapi import Depends
from passlib.context import CryptContext

from repositories.account_respository import AccountRepository
from services.password_service import PasswordService
from services.token_service import TokenService
from database import database

account_collection = database.get_collection('account')

async def get_account_collection():
  yield account_collection

async def get_account_service(
  _account_collection=Depends(get_account_collection)
):
  yield {
    'repository': AccountRepository(account_collection=_account_collection),
    'password_service': PasswordService(context=CryptContext(schemes=['bcrypt'], deprecated='auto')),
    'token_service': TokenService()
  }