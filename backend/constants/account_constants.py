from fastapi import status
from enum import Enum
from schemas.account_schema import Token, AccountSchema

"""Definition Response Constants for account"""

account_response_data = {
  'register': {
    'status_code': status.HTTP_201_CREATED,
    'response_description': "Register new Account",
    'response_model': AccountSchema
  },
  'login': {
    'status_code': status.HTTP_200_OK,
    'response_description': "Login Account",
    'response_model': Token
  },
  'detail': {
    'status_code': status.HTTP_200_OK,
    'response_description': "Detail Account",
    'response_model': AccountSchema,
    'response_model_by_alias': False
  },
}

account_response_exept = {
  'not_found': {
    'status_code': status.HTTP_404_NOT_FOUND,
    'detail': 'User not found'
  }
}

class TokenType(Enum):
  ACCESS_TOKEN = 'access_token'
  REFRESH_TOKEN = 'refresh_token'