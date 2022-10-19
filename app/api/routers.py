from fastapi import APIRouter

from app.db import add_user

router = APIRouter()


@router.get("/")
def read_root():
    """Description."""
    return {"data": "heeeeelp"}


@router.post("/user/add")
def read_root(user_login: str, user_password: str):
    """Description."""
    add_user(user_login, user_password)


@router.post("/user/list/add")
def read_root(user_login: str, list_name: str):
    """Description."""
    pass


@router.get("/user/list/tasks")
def read_root(user_login: str, list_name: str):
    """Description."""
    pass


@router.get("/user/lists")
def read_root(user_login: str):
    """Description."""
    pass


@router.get("/user/list/task")
def read_root(user_login: str, list_name: str, task_name: str):
    """Description."""
    pass


@router.get("/user/list/task/status")
def read_root(user_login: str, list_name: str, task_name: str):
    """Description."""
    pass


@router.get("/user/list/task/deadline")
def read_root(user_login: str, list_name: str, task_name: str):
    """Description."""
    pass


@router.post("/user/list/task/edit")
def read_root(user_login: str, list_name: str):
    """Description."""
    pass