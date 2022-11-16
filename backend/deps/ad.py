from fastapi import Depends

from database import database
from repositories.ad_repository import AdRepository

ad_collection = database.get_collection('ad')

async def get_ad_collection():
  yield ad_collection

async def get_ad_repository(
  _ad_collection=Depends(get_ad_collection)
):
  yield { 'repository': AdRepository(ad_collection=_ad_collection) }