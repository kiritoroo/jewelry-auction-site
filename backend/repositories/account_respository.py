from fastapi import HTTPException
from .account_repository_interface import AdRepositoryInterface
from schemas.account_schema import AccountSchemaCreate
from constants.account_constants import account_response_exept
from bson import ObjectId
import datetime

"""CRUD operations to be used by endpoints for Account"""
class AccountRepository(AdRepositoryInterface):
  def __init__(self, account_collection) -> None:
    self._account_collection = account_collection

  """Get detail of models.account from collection.account"""
  async def detail_user(self, user_id: str):
    if not ObjectId.is_valid(user_id):
      raise HTTPException(**account_response_exept.get('not_found'))
    data = {
      'filter': {
        '_id': ObjectId(user_id)
      }
    }
    if not (user := await self._account_collection.find_one(**data)):
      raise HTTPException(**account_response_exept.get('not_found'))
    return user

  """Register new models.account from schemas.AccountSchemaCreate"""
  async def save_user(self, user: AccountSchemaCreate):
    data = dict(
      **user.dict(exclude_none=True),
      created_at=datetime.datetime.utcnow(),
      is_admin=False
    )
    result = await self._account_collection.insert_one(document=data)
    return await self.detail_user(user_id=result.inserted_id)

  """Get detail of models.account by username"""
  async def get_user(self, username: str):
    data = {
      'filter': {
        'username': username
      }
    }
    return await self._account_collection.find_one(**data)