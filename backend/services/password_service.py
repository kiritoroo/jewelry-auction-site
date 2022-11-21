from passlib.context import CryptContext
from .password_service_interface import PasswordServiceInterface

class PasswordService(PasswordServiceInterface):
  def __init__(self, context: CryptContext):
    self._context = context

  async def verify_passwords(self, plain_password: str, hashed_password: str) -> bool:
    return self._context.verify_and_update(secret=plain_password, hash=hashed_password)

  async def hashed_password(self, plain_password: str) -> str:
    return self._context.hash(secret=plain_password)