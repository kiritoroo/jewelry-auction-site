from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
from utils.custom_objectID import ObjID

class AdSchemaUpdate(BaseModel):
  """Schema for update ad"""
  current_price: int
  
class AdSchemaCreate(AdSchemaUpdate):
  """Schema for create ad"""
  product_name: str
  description: Optional[str]
  category: Optional[str]
  base_price: int
  image: Optional[str]

class AdSchema(AdSchemaCreate):
  """Schema for ad"""
  id: ObjID = Field(default_factory=ObjID, alias='_id')
  current_price: int
  created_at: datetime

  class Config:
    validate_assignment = True
    json_encoders = {
      ObjID: lambda x: str(x),
      datetime: lambda x: x.strftime('%Y:%m:%d %H:%M')
    }
