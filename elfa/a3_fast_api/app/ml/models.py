from typing import Any
from pathlib import Path

from app.core.logging import logger


class MLModel:
    """Classe base para modelos de ML"""
    
    def __init__(self, model_path: str | Path | None = None):
        self.model_path = model_path
        self.model = None
        self.is_loaded = False
    
    def load(self) -> None:
        """Carrega o modelo"""
        if self.model_path is None:
            logger.warning("Nenhum caminho de modelo especificado")
            return
        
        logger.info(f"Carregando modelo de {self.model_path}")
        
        # Implementação de carregamento aqui
        # Exemplo: joblib.load(self.model_path)
        
        self.is_loaded = True
        logger.info("Modelo carregado com sucesso")
    
    def predict(self, data: Any) -> Any:
        """Realiza predição"""
        if not self.is_loaded:
            raise RuntimeError("Modelo não carregado. Execute load() primeiro.")
        
        # Implementação de predição aqui
        raise NotImplementedError("Método predict() deve ser implementado")
    
    def unload(self) -> None:
        """Descarrega o modelo da memória"""
        self.model = None
        self.is_loaded = False
        logger.info("Modelo descarregado")
