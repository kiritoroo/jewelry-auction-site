from fastapi import status
from schemas.ad_schema import AdSchema
from typing import Union

"""Definition Response Constants for ad"""
ad_response_data = {
  'show_all': {
    'status_code': status.HTTP_200_OK,
    'response_description': "List all Advertise",
    'response_model': list[AdSchema],
    'response_model_by_alias': False
  },
  'detail': {
    'status_code': status.HTTP_200_OK,
    'response_description': "Detail Advertise",
    'response_model': AdSchema,
    'response_model_by_alias': False
  },
  'create': {
    'status_code': status.HTTP_201_CREATED,
    'response_description': "Create new Advertise",
    'response_model': Union[AdSchema, dict],
    'response_model_by_alias': False
  },
  'update': {
    'status_code': status.HTTP_200_OK,
    'response_description': "Update exists Advertise",
    'response_model': AdSchema,
    'response_model_by_alias': False
  },
  'delete': {
    'status_code': status.HTTP_204_NO_CONTENT,
    'response_description': "Delete exists Advertise",
  }
}

ad_response_exept = {
  'not_found': {
    'status_code': status.HTTP_404_NOT_FOUND,
    'detail': 'Ad not found'
  }
}