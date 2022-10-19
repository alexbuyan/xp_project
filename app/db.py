import logging
from typing import List

from app.model.model import User, Task

db: List[User] = []


def add_user(login: str, password: str):
    user = User(login=login, password=password,
                tasks=[Task(name='test', status='help', deadline=1)])
    logging.info('new user: ' + str(user))
    db.append(user)
    return user


def find_user(login: str):
    for user in db:
        if user.login == login:
            return user
    return None


def get_tasks(login: str):
    user = find_user(login)
    if user:
        return user.tasks

def add_task(login: str, task_name: str, task_status: str, task_deadline: int):
    user = find_user(user_login)
    print(user)
    print(user.tasks)
    if user:
        user.tasks.append(
            Task(name=task_name, status=task_status, deadline=task_deadline))
