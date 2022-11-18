from fastapi import APIRouter, Depends
from constants.ad_constant import ad_response_data
from deps.ad import get_ad_service
from services.ad_service import AdService
from schemas.ad_schema import AdSchemaCreate, AdSchemaPatch, AdSchemaUpdate

"""Endpoints for Ad"""  
"""Return all schemas.ad"""
ad_router = APIRouter(prefix='/api/ad', tags=['Advertise'])

@ad_router.get('/', **ad_response_data.get('show_all'))
async def retrieve_ads(
  repository=Depends(get_ad_service)
):
  
  return await AdService(**repository).retrieve_ads()
"""Detail of schemas.ad"""
@ad_router.get('/{ad_id}', **ad_response_data.get('detail'))
async def detail_ad(
  ad_id: str,
  repository=Depends(get_ad_service)
):
  return await AdService(**repository).detail_ad(ad_id=ad_id)

"""Create new schemas.ad"""
@ad_router.post('/', **ad_response_data.get('create'))
async def create_ad(
  ad_payload: AdSchemaCreate,
  repository=Depends(get_ad_service)
):
  return await AdService(**repository).create_ad(ad_payload=ad_payload)

"""Update exists schemas.ad"""
@ad_router.put('/{ad_id}', **ad_response_data.get('update'))
async def update_ad(
  ad_id: str,
  ad_data: AdSchemaUpdate,
  repository=Depends(get_ad_service)
):
  return await AdService(**repository).update_ad(ad_id=ad_id, ad_data=ad_data)

"""Patch exists schemas.ad"""
@ad_router.patch('/{ad_id}', **ad_response_data.get('patch'))
async def patch_ad(
  ad_id: str,
  ad_data: AdSchemaPatch,
  repository=Depends(get_ad_service)
):
  return await AdService(**repository).patch_ad(ad_id=ad_id, ad_data=ad_data)

"""Delete exists schemas.ad"""
@ad_router.delete('/{ad_id}', **ad_response_data.get('delete'))
async def delete_ad(
  ad_id:str,
  repository=Depends(get_ad_service)
):
  return await AdService(**repository).delete_ad(ad_id=ad_id)
