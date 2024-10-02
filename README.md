# Social Network App

A social network built with Django on the backend and NextJS on the frontend.

> [!IMPORTANT]
> This project is being developed to be part of my portfolio, and is an work in progress. I will start with the basic features such as profiles and posts. The backend will be developed first, then I will work on the frontend for these initial features and on the integration of both. Then, the further features will be added one by one.

## 💡 Features
These are the features that will be developed (not necessarily in this order):
- [x] Profiles
- [x] Posts
- [ ] Likes
- [ ] Follows
- [ ] Notifications
- [ ] Live Chat

## 🔧 Tech Stack
#### `backend`
- `Django` :white_check_mark:
- `Django REST Framework` :white_check_mark:
- `PostgreSQL` :white_check_mark:
- `JWT Tokens` :white_check_mark:
- `WebSockets` :warning:
- `Unit Tests and Integration Tests` :warning:
#### `frontend`
- `NextJS` :warning:
- `JWT Tokens` :warning:
- `WebSockets` :warning:
#### `others`
- `Docker` :white_check_mark:
- `Docker Compose` :white_check_mark:
- `Swagger Documentation` :warning:

> [!NOTE]
> :white_check_mark: Resource already in use on the project 
> :warning: Resource not being used yet

## 💥 How to run the project?
The requirements to execute the project are:
- **`Docker`** version 27.1.1, build 6312585 or later
- **`Docker Compose`** version v2.29.1-desktop.1 or later

> [!IMPORTANT]
> Older Docker and Docker Compose versions may also be capable of executing the project, however, it's being developed using these ones. 

You also need to define the environment variables in a file called `.env` on the root folder of the project. It should be defined in accordance with the `.env.example` provided. 

Once the requirements are installed and the environment variables are defined, run the following command on the terminal:
```bash
docker compose up -d
```
This will build all the docker containers and run the application's server. Once the application is up, it can be accessed through: 

```http://<your-ip-or-hostname>:<backend-api-port>```

The `<backend-api-port>` is the one defined on the `.env` file.

