from abc import ABC, abstractmethod
from constants.account_constants import TokenType


class TokenServiceInterface(ABC):
  @abstractmethod
  async def decode_access_token(self, access_token: str, secret_key: str, algorithm: str) -> dict:
    pass

  @abstractmethod
  async def decode_refresh_token(self, refresh_token: str, secret_key: str, algorithm: str) -> dict:
    pass

  @abstractmethod
  async def encode_token( self, username: str, secret_key: str, algorithm: str, exp_time: int, token_type: TokenType):
    pass
