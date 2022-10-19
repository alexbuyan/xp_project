import time

from fastapi import FastAPI, Request

from app.api.routers import router

import logging

app = FastAPI(
    title="BaseApp",
    description=("BaseApp"),
    version="0.0.1",
    docs_url="/docs",
    redoc_url="/docs/redoc",
)
logging.basicConfig(filename='info.log', encoding='utf-8', level=logging.INFO)
app.include_router(router)