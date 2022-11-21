from abc import ABC, abstractmethod

class PasswordServiceInterface(ABC):
  @abstractmethod
  async def verify_passwords(self, plain_password: str, hashed_password: str) -> bool:
    pass

  @abstractmethod
  async def hashed_password(self, plain_password: str) -> str: 
    pass
