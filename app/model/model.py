from typing import List

from pydantic import BaseModel


class Task(BaseModel):
    """Task class."""

    name: str
    status: str
    deadline: int


class User(BaseModel):
    """User class."""

    login: str
    password: str
    tasks: List[Task]
