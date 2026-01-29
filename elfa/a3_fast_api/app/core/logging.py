import sys
from loguru import logger as loguru_logger

from app.core.config import settings

# Remove handler padrão
loguru_logger.remove()

# Adiciona handler customizado
loguru_logger.add(
    sys.stdout,
    format="<green>{time:YYYY-MM-DD HH:mm:ss}</green> | <level>{level: <8}</level> | <cyan>{name}</cyan>:<cyan>{function}</cyan> | <level>{message}</level> | {extra}",
    level=settings.log_level,
    serialize=False,
)

logger = loguru_logger
