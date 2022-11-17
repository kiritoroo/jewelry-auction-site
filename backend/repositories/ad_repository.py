import datetime
from fastapi import HTTPException
from bson import ObjectId
from .ad_repository_interface import AdRepositoryInterface
from schemas.ad_schema import AdSchemaCreate, AdSchemaPatch, AdSchemaUpdate
from constants.ad_constant import ad_response_exept

"""CRUD operations to be used by endpoints for Ad"""
class AdRepository(AdRepositoryInterface):
  def __init__(self, ad_collection) -> None:
    self._ad_collection = ad_collection

  """Get all models.ad from collection.ad"""
  async def retrieve_ads(self):
    cursor = self._ad_collection.find()
    return [ad async for ad in cursor]

  """Get detail of models.ad from collection.ad"""
  async def detail_ad(self, ad_id: str):
    if not ObjectId.is_valid(ad_id):
      raise HTTPException(**ad_response_exept.get('not_found'))
    data = {
      'filter': {
        '_id': ObjectId(ad_id)
      }
    }
    if not (ad := await self._ad_collection.find_one(**data)):
      raise HTTPException(**ad_response_exept.get('not_found'))
    return ad

  """Create new models.ad from schemas.AdSchemaCreate"""
  async def create_ad(self, ad: AdSchemaCreate):
    data = dict(
      **ad.dict(exclude_none=True),
      created_at=datetime.datetime.utcnow())
    result = await self._ad_collection.insert_one(document=data)
    return await self.detail_ad(ad_id=result.inserted_id)

  """Update existing models.ad from schemas.AdSchemaUpdate"""
  async def update_ad(self, ad_id: str, ad_data: AdSchemaUpdate):
    if not ObjectId.is_valid(ad_id):
      raise HTTPException(**ad_response_exept.get('not_found'))
    data = {
      'filter': {
        '_id': ObjectId(ad_id)
      },
      'update': {
        '$set': ad_data.dict(exclude_none=True)
      },
      'return_document': True
    }
    return await self._ad_collection.find_one_and_update(**data)

  """Patch existing models.ad from schemas.AdSchemaUpdate"""
  async def patch_ad(self, ad_id: str, ad_data: AdSchemaPatch):
    if not ObjectId.is_valid(ad_id):
      raise HTTPException(**ad_response_exept.get('not_found'))
    data = {
      'filter': {
        '_id': ObjectId(ad_id)
      },
      'update': {
        '$set': ad_data.dict(exclude_none=True)
      },
      'return_document': True
    }
    return await self._ad_collection.find_one_and_update(**data)

  """Delete an ad from collection.ad by `ad_id`"""
  async def delete_ad(self, ad_id: str):
    if not ObjectId.is_valid(ad_id):
      raise HTTPException(**ad_response_exept.get('not_found'))
    data = {
      'filter': {
        '_id': ObjectId(ad_id)
      }
    }
    if not (_ := await self._ad_collection.find_one(**data)):
      raise HTTPException(**ad_response_exept.get('not_found'))
    result = await self._ad_collection.delete_one(**data)

    return False if not result.deleted_count else True


