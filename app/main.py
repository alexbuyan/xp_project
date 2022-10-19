import time

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware


from app.api.routers import router

import logging

app = FastAPI(
    title="BaseApp",
    description=("BaseApp"),
    version="0.0.1",
    docs_url="/docs",
    redoc_url="/docs/redoc",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


logging.basicConfig(filename='info.log', encoding='utf-8', level=logging.INFO)
app.include_router(router)