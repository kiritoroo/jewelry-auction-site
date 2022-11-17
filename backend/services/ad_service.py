from repositories.ad_repository_interface import AdRepositoryInterface
from schemas.ad_schema import AdSchemaCreate, AdSchemaPatch, AdSchemaUpdate

class AdService:
  def __init__(self, repository: AdRepositoryInterface ) -> None:
    self._repository = repository

  async def retrieve_ads(self):
    return await self._repository.retrieve_ads()

  async def detail_ad(self, ad_id: str):
    return await self._repository.detail_ad(ad_id=ad_id)

  async def create_ad(self, ad_payload: AdSchemaCreate):
    return await self._repository.create_ad(ad=ad_payload)

  async def update_ad(self, ad_id: str, ad_data: AdSchemaUpdate):
    return await self._repository.update_ad(ad_id=ad_id, ad_data=ad_data)

  async def patch_ad(self, ad_id: str, ad_data: AdSchemaPatch):
    return await self._repository.patch_ad(ad_id=ad_id, ad_data=ad_data)

  async def delete_ad(self, ad_id: str):
    return await self._repository.delete_ad(ad_id=ad_id)