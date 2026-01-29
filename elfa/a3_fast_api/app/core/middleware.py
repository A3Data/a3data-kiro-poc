import time
import uuid
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request

from app.core.logging import logger


class RequestLoggingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        trace_id = str(uuid.uuid4())
        request.state.trace_id = trace_id
        
        start_time = time.time()
        
        response = await call_next(request)
        
        duration = (time.time() - start_time) * 1000
        
        logger.info(
            "Request completed",
            extra={
                "trace_id": trace_id,
                "method": request.method,
                "path": request.url.path,
                "status": response.status_code,
                "duration_ms": f"{duration:.2f}"
            }
        )
        
        response.headers["X-Trace-ID"] = trace_id
        return response
