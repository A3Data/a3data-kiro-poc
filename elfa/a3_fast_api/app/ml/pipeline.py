from typing import Any, Dict
from abc import ABC, abstractmethod

from app.core.logging import logger


class MLPipeline(ABC):
    """Pipeline base para Machine Learning"""
    
    def __init__(self, name: str, config: Dict[str, Any] | None = None):
        self.name = name
        self.config = config or {}
        self.model = None
    
    @abstractmethod
    async def preprocess(self, data: Any) -> Any:
        """Pré-processamento dos dados"""
        raise NotImplementedError
    
    @abstractmethod
    async def predict(self, data: Any) -> Any:
        """Inferência do modelo"""
        raise NotImplementedError
    
    @abstractmethod
    async def postprocess(self, predictions: Any) -> Any:
        """Pós-processamento das predições"""
        raise NotImplementedError
    
    async def run(self, data: Any) -> Any:
        """Executa o pipeline completo"""
        logger.info(f"Pipeline {self.name} iniciando")
        
        # Pré-processamento
        processed_data = await self.preprocess(data)
        logger.debug("Pré-processamento concluído")
        
        # Predição
        predictions = await self.predict(processed_data)
        logger.debug("Predição concluída")
        
        # Pós-processamento
        result = await self.postprocess(predictions)
        logger.info(f"Pipeline {self.name} concluído")
        
        return result
