from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False
    )
    
    # App
    app_name: str = "fastapi-agents"
    app_env: str = "local"
    debug: bool = True
    
    # Logging
    log_level: str = "INFO"
    
    # LLM
    llm_provider: str = "bedrock"
    llm_timeout: int = 30
    llm_max_retries: int = 3
    
    # AWS (opcional)
    aws_region: str = "us-east-1"
    aws_access_key_id: str | None = None
    aws_secret_access_key: str | None = None


settings = Settings()
