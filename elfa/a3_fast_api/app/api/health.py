from datetime import datetime
from fastapi import APIRouter
from pydantic import BaseModel

from app.core.config import settings


class HealthResponse(BaseModel):
    status: str
    app: str
    env: str
    timestamp: datetime


router = APIRouter()


@router.get("/", response_model=HealthResponse)
async def health_check():
    """Endpoint de healthcheck da aplicação"""
    return HealthResponse(
        status="healthy",
        app=settings.app_name,
        env=settings.app_env,
        timestamp=datetime.now()
    )
