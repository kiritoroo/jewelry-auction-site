from fastapi import APIRouter, Depends
from constants.ad_constant import ad_response_data
from deps.ad import get_ad_repository
from services.ad_service import AdService
from schemas.ad_schema import AdSchemaCreate, AdSchemaPatch, AdSchemaUpdate

"""Endpoints for Ad"""
ad_router = APIRouter(prefix='/api/ad', tags=['Advertise'])

@ad_router.get('/', **ad_response_data.get('show_all'))
async def retrieve_ads(
  repository=Depends(get_ad_repository)
):
  """Return all schemas.ad"""
  return await AdService(**repository).retrieve_ads()

@ad_router.get('/{ad_id}', **ad_response_data.get('detail'))
async def detail_ad(
  ad_id: str,
  repository=Depends(get_ad_repository)
):
  """Detail of schemas.ad"""
  return await AdService(**repository).detail_ad(ad_id=ad_id)

@ad_router.post('/', **ad_response_data.get('create'))
async def create_ad(
  ad_payload: AdSchemaCreate,
  repository=Depends(get_ad_repository)
):
  """Create new schemas.ad"""
  return await AdService(**repository).create_ad(ad_payload=ad_payload)

@ad_router.put('/{ad_id}', **ad_response_data.get('patch'))
async def update_ad(
  ad_id: str,
  ad_data: AdSchemaUpdate,
  repository=Depends(get_ad_repository)
):
  """Path exists schemas.ad"""
  return await AdService(**repository).update_ad(ad_id=ad_id, ad_data=ad_data)

@ad_router.patch('/{ad_id}', **ad_response_data.get('patch'))
async def patch_ad(
  ad_id: str,
  ad_data: AdSchemaPatch,
  repository=Depends(get_ad_repository)
):
  """Path exists schemas.ad"""
  return await AdService(**repository).patch_ad(ad_id=ad_id, ad_data=ad_data)

@ad_router.delete('/{ad_id}', **ad_response_data.get('delete'))
async def delete_ad(
  ad_id:str,
  repository=Depends(get_ad_repository)
):
  """Delete exists schemas.ad"""
  return await AdService(**repository).delete_ad(ad_id=ad_id)
