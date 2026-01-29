from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.core.logging import logger
from app.core.middleware import RequestLoggingMiddleware
from app.api import health

app = FastAPI(
    title=settings.app_name,
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Middleware customizado
app.add_middleware(RequestLoggingMiddleware)

# Rotas
app.include_router(health.router, prefix="/health", tags=["health"])

@app.on_event("startup")
async def startup_event():
    logger.info(f"🚀 {settings.app_name} iniciando")
    logger.info(f"📊 Ambiente: {settings.app_env}")
    logger.info(f"🔧 Debug: {settings.debug}")

@app.on_event("shutdown")
async def shutdown_event():
    logger.info("Aplicação encerrando")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=8000,
        reload=settings.debug
    )
