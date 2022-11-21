from fastapi import Depends

from repositories.ad_repository import AdRepository
from database import database

ad_collection = database.get_collection('ad')

async def get_ad_collection():
  yield ad_collection

async def get_ad_service(
  _ad_collection=Depends(get_ad_collection)
):
  yield { 'repository': AdRepository(ad_collection=_ad_collection) }