# Проект по SE

## Требования

- Регистрация пользователя (логин, пароль)
- Создание списка задач
- Задача: название, статус, срок
- Получение списка со всеми задачами
- Редактирование параметров задачи в списке
- Удаление задачи из списка


## Frontend

### Технологии

- React
- Typescript

### Экраны

- Главная страница со списком задач
- Страница регистрации

## Backend

### Технологии

- Python
- FastApi

### Структура API

- Add user: post /user/add {login: str, password: str} {} 
- Add list: post /user/list/add {user_id: int, name: str} {id: int}
- Get all tasks from list: get /user/list/tasks {user_id: int} {tasks: list[Task]}
- Get task: get /user/list/task {user_id: int} {name: str, status: str, deadline: str}
- Get task feature: get /user/list/task/<status, name, deadline> {} {data: str}
- Edit task: post /user/list/task/edit {user_id: int, feture1: str ... } {}
