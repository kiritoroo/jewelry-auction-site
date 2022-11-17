from abc import ABC, abstractmethod
from schemas.ad_schema import AdSchemaCreate, AdSchemaPatch, AdSchemaUpdate

class AdRepositoryInterface(ABC):
  @abstractmethod
  async def retrieve_ads(self):
    pass
  
  @abstractmethod
  async def detail_ad(self, ad_id: str):
    pass
  
  @abstractmethod
  async def create_ad(self, ad: AdSchemaCreate):
    pass

  @abstractmethod
  async def update_ad(self, ad_id: str, ad_data: AdSchemaUpdate):
    pass

  @abstractmethod
  async def patch_ad(self, ad_id: str, ad_data: AdSchemaPatch):
    pass

  @abstractmethod
  async def delete_ad(self, ad_id: str):
    pass