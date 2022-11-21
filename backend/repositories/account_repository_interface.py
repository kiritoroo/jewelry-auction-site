from abc import ABC, abstractmethod
from schemas.account_schema import AccountSchemaCreate

class AdRepositoryInterface(ABC):
  @abstractmethod
  async def detail_user(self, user_id: str):
    pass

  @abstractmethod
  async def save_user(self, user: AccountSchemaCreate):
    pass

  @abstractmethod
  async def get_user(self, username: str):
    pass
