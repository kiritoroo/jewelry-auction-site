from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime
from utils.custom_objectID import ObjID

class AccountSchemaBase(BaseModel):
  username: str
  email: Optional[EmailStr]
  phone: Optional[int]

class AccountSchemaCreate(AccountSchemaBase):
  password: str = Field(..., min_length=5)

class AccountSchema(AccountSchemaBase):
  id: ObjID = Field(default_factory=ObjID, alias='_id')
  created_at: datetime
  is_admin: bool

  class Config:
    json_encoders = {
      ObjID: lambda x: str(x),
      datetime: lambda x: x.strftime('%Y:%m:%d %H:%M')
    }

class Token(BaseModel):
  access_token: str
  refresh_token: str