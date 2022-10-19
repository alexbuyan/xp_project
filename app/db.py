import logging
from typing import List

from app.model.model import User, Task

db: List[User] = []


def add_user(user_login: str, user_password: str):
    user = User(login=user_login, password=user_password,
                tasks=[Task(name='test', status='help', deadline=1)])
    logging.info('new user: ' + str(user))
    db.append(user)


def find_user(user_login: str):
    for user in db:
        if user.login == user_login:
            return user
    return None


def get_tasks(user_login: str):
    user = find_user(user_login)
    if user:
        return user.tasks


def add_task(user_login: str, task_name: str, task_status: str, task_deadline: int):
    user = find_user(user_login)
    print(user)
    print(user.tasks)
    if user:
        user.tasks.append(
            Task(name=task_name, status=task_status, deadline=task_deadline))
