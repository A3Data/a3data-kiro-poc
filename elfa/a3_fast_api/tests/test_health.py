import pytest
from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health_check():
    """Testa o endpoint de healthcheck"""
    response = client.get("/health/")
    
    assert response.status_code == 200
    
    data = response.json()
    assert data["status"] == "healthy"
    assert "app" in data
    assert "env" in data
    assert "timestamp" in data


def test_health_check_response_structure():
    """Testa a estrutura da resposta do healthcheck"""
    response = client.get("/health/")
    data = response.json()
    
    required_fields = ["status", "app", "env", "timestamp"]
    for field in required_fields:
        assert field in data, f"Campo {field} não encontrado na resposta"
