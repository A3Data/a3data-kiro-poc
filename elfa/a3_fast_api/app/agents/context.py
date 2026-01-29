from typing import Any, Dict, List
from datetime import datetime


class AgentContext:
    """Gerenciador de contexto para agentes"""
    
    def __init__(self):
        self.data: Dict[str, Any] = {}
        self.history: List[Dict[str, Any]] = []
        self.created_at = datetime.now()
    
    def add(self, key: str, value: Any) -> None:
        """Adiciona um item ao contexto"""
        self.data[key] = value
        self._add_to_history("add", key, value)
    
    def get(self, key: str, default: Any = None) -> Any:
        """Recupera um item do contexto"""
        return self.data.get(key, default)
    
    def remove(self, key: str) -> None:
        """Remove um item do contexto"""
        if key in self.data:
            value = self.data.pop(key)
            self._add_to_history("remove", key, value)
    
    def clear(self) -> None:
        """Limpa todo o contexto"""
        self.data = {}
        self.history = []
    
    def _add_to_history(self, action: str, key: str, value: Any) -> None:
        """Adiciona uma ação ao histórico"""
        self.history.append({
            "action": action,
            "key": key,
            "value": value,
            "timestamp": datetime.now()
        })
    
    def get_history(self) -> List[Dict[str, Any]]:
        """Retorna o histórico de ações"""
        return self.history
