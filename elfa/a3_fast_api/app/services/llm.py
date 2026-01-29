from typing import Any, Dict, AsyncGenerator
import httpx
from tenacity import retry, stop_after_attempt, wait_exponential

from app.core.config import settings
from app.core.logging import logger


class LLMClient:
    """Cliente genérico para integração com LLMs"""
    
    def __init__(self, provider: str | None = None):
        self.provider = provider or settings.llm_provider
        self.timeout = settings.llm_timeout
        self.max_retries = settings.llm_max_retries
        
        logger.info(f"LLM Client inicializado: {self.provider}")
    
    @retry(
        stop=stop_after_attempt(3),
        wait=wait_exponential(multiplier=1, min=2, max=10)
    )
    async def invoke(
        self,
        prompt: str,
        options: Dict[str, Any] | None = None
    ) -> str:
        """
        Invoca o LLM com um prompt.
        Implementação específica do provider deve ser adicionada.
        """
        logger.info(
            "LLM invocation",
            extra={
                "provider": self.provider,
                "prompt_length": len(prompt)
            }
        )
        
        # Implementação específica do provider aqui
        # Exemplo: Bedrock, OpenAI, etc.
        raise NotImplementedError(f"Provider {self.provider} não implementado")
    
    async def stream(
        self,
        prompt: str,
        options: Dict[str, Any] | None = None
    ) -> AsyncGenerator[str, None]:
        """
        Invoca o LLM em modo streaming.
        Implementação específica do provider deve ser adicionada.
        """
        logger.info(
            "LLM streaming",
            extra={"provider": self.provider}
        )
        
        # Implementação de streaming aqui
        raise NotImplementedError("Streaming não implementado")
        
        # Exemplo de uso:
        # async for chunk in self.stream(prompt):
        #     yield chunk
