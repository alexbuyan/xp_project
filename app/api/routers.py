import json

from fastapi import APIRouter

import app.db as db

router = APIRouter()


@router.get("/")
def read_root():
    """Description."""
    return {"data": "heeelp"}


@router.post("/user/add")
def add_user(login: str, password: str):
    """Description."""
    return {'user': db.add_user(login, password)}


# @router.post("/user/list/add")
# def read_root(user_login: str, list_name: str):
#     """Description."""
#     pass


@router.get("/user/tasks")
def get_tasks(login: str):
    """Description."""
    try:
        tasks = db.get_tasks(login)
    except Exception as error:
        return {'error': str(error)}
    return {'tasks': tasks}


# @router.get("/user/lists")
# def read_root(user_login: str):
#     """Description."""
#     pass


@router.post("/user/task/add")
def add_task(login: str, task_name: str, task_status: str, task_deadline: int):
    """Description."""
    try:
        task = db.add_task(login, task_name, task_status, task_deadline)
    except Exception as error:
        return {'error': str(error)}
    return task


# @router.get("/user/list/task/status")
# def read_root(user_login: str, list_name: str, task_name: str):
#     """Description."""
#     pass
#
#
# @router.get("/user/list/task/deadline")
# def read_root(user_login: str, list_name: str, task_name: str):
#     """Description."""
#     pass
#
#
# @router.post("/user/list/task/edit")
# def read_root(user_login: str, list_name: str):
#     """Description."""
#     pass


def to_json(data):
    return json.dumps(data.__dict__)
