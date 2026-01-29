from abc import ABC, abstractmethod
from typing import Any, Dict

from app.core.logging import logger


class BaseAgent(ABC):
    """Classe base para criação de agentes"""
    
    def __init__(self, name: str, config: Dict[str, Any] | None = None):
        self.name = name
        self.config = config or {}
        self.context: Dict[str, Any] = {}
    
    @abstractmethod
    async def execute(self, input_data: Any) -> Any:
        """
        Método principal de execução do agente.
        Deve ser implementado pelas classes filhas.
        """
        raise NotImplementedError("Método execute() deve ser implementado")
    
    def set_context(self, key: str, value: Any) -> None:
        """Define um valor no contexto do agente"""
        self.context[key] = value
        logger.debug(f"Contexto atualizado: {key}", extra={"agent": self.name})
    
    def get_context(self, key: str) -> Any:
        """Recupera um valor do contexto do agente"""
        return self.context.get(key)
    
    def clear_context(self) -> None:
        """Limpa todo o contexto do agente"""
        self.context = {}
        logger.debug("Contexto limpo", extra={"agent": self.name})
