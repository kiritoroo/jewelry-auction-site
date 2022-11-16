from bson import ObjectId

class ObjID(ObjectId):
  @classmethod
  def __get_validators__(cls):
    yield cls.validate

  @classmethod
  def validate(cls, v):
    if not isinstance(v, ObjectId):
      raise TypeError('ObjectId required')
    return str(v)

  @classmethod
  def __modify_schema__(cls, field_schema):
    field_schema.update(type="string")