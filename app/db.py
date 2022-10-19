from typing import List

import logging

from app.model.model import User

db: List[User] = []


def add_user(user_login: str, user_password: str):
    user = User(login=user_login, password=user_password, tasks=[])
    logging.info('new user: ' + str(user))
    db.append(user)
