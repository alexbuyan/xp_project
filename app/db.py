import logging
from typing import List

from app.model.model import User, Task

db: List[User] = [User(login='test_user', password='password',
                       tasks=[Task(name='test user task', status='help', deadline=1)])]


def add_user(login: str, password: str):
    user = User(login=login, password=password,
                tasks=[
                    Task(name='test task', status='help', deadline=1)])  # should be []
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
    else:
        raise Exception('No such user')


def add_task(login: str, task_name: str, task_status: str, task_deadline: int):
    user = find_user(login)
    if user:
        task = Task(name=task_name, status=task_status, deadline=task_deadline)
        user.tasks.append(task)
        logging.info(f'new task: {task} for user: {user}')
        return task
    else:
        raise Exception('No such user')
