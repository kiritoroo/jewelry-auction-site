from fastapi import APIRouter, Depends
from constants.ad_constant import ad_response_data
from deps.ad_dep import get_ad_service
from services.ad_service import AdService
from schemas.ad_schema import AdSchemaCreate, AdSchemaPatch, AdSchemaUpdate

"""Endpoints for Ad"""  
ad_router = APIRouter(prefix='/api/ad', tags=['Advertise'])

"""Return all schemas.ad"""
@ad_router.get('/', **ad_response_data.get('show_all'))
async def retrieve_ads(
  service_data=Depends(get_ad_service)
):
  return await AdService(**service_data) \
    .retrieve_ads()

"""Detail of schemas.ad"""
@ad_router.get('/{ad_id}', **ad_response_data.get('detail'))
async def detail_ad(
  ad_id: str,
  service_data=Depends(get_ad_service)
):
  return await AdService(**service_data) \
    .detail_ad(ad_id=ad_id)

"""Create new schemas.ad"""
@ad_router.post('/', **ad_response_data.get('create'))
async def create_ad(
  ad_data: AdSchemaCreate,
  service_data=Depends(get_ad_service)
):
  return await AdService(**service_data) \
    .create_ad(ad_data=ad_data)

"""Update exists schemas.ad"""
@ad_router.put('/{ad_id}', **ad_response_data.get('update'))
async def update_ad(
  ad_id: str,
  ad_data: AdSchemaUpdate,
  service_data=Depends(get_ad_service)
):
  return await AdService(**service_data) \
    .update_ad(ad_id=ad_id, ad_data=ad_data)

"""Patch exists schemas.ad"""
@ad_router.patch('/{ad_id}', **ad_response_data.get('patch'))
async def patch_ad(
  ad_id: str,
  ad_data: AdSchemaPatch,
  service_data=Depends(get_ad_service)
):
  return await AdService(**service_data) \
    .patch_ad(ad_id=ad_id, ad_data=ad_data)

"""Delete exists schemas.ad"""
@ad_router.delete('/{ad_id}', **ad_response_data.get('delete'))
async def delete_ad(
  ad_id:str,
  service_data=Depends(get_ad_service)
):
  return await AdService(**service_data) \
    .delete_ad(ad_id=ad_id)