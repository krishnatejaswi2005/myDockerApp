# 🐳 Docker Practice Project

This is a Docker practice project built to understand how to containerize a Node.js backend with MongoDB using Docker and Docker Compose. The frontend is a React app (Vite).

---

## 🚀 Project Overview

This project contains:

- **Backend**: A Node.js application that connects to a MongoDB database.
- **MongoDB & Mongo Express**: Deployed using Docker Compose.
- **Frontend**: A Vite-powered React app.

You’ll learn how to:

- Create and use Dockerfiles
- Use Docker Compose for multi-container setups
- Understand Docker commands and syntaxes

---

## 🐳 What is Docker?

Docker is a tool designed to make it easier to create, deploy, and run applications using containers. Containers allow a developer to package up an application with all parts it needs (libraries, dependencies, etc.) and ship it as one package.

---

## ⚙️ Dockerfile: Full Explanation

```dockerfile
FROM node:24.1-alpine3.21
```

- `FROM`: Specifies the base image (lightweight Alpine Linux + Node.js 24.1). Every image starts from a base.

```dockerfile
ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password
```

- `ENV`: Declares environment variables inside the container.

```dockerfile
RUN mkdir -p docker Backend
```

- `RUN`: Executes a command in the container at build time. Here, it creates nested folders `docker/Backend`.

```dockerfile
COPY . docker/Backend
```

- `COPY`: Copies files/folders from local machine to container image.

```dockerfile
CMD ["node", "docker/Backend/index.js"]
```

- `CMD`: Sets the default command to run when the container starts. Uses exec form (`["executable", "param1"]`).

### Other Dockerfile Keywords (Not used here but important)

| Keyword      | Description                                   |
| ------------ | --------------------------------------------- |
| `WORKDIR`    | Sets the working directory inside container   |
| `EXPOSE`     | Documents which port the container listens on |
| `ENTRYPOINT` | Provides more control over command execution  |
| `LABEL`      | Adds metadata (e.g. version info)             |
| `ARG`        | Declares variables only during build time     |

---

## 🧱 docker-compose (mongo.yaml) Explained

```yaml
services:
  mongo:
    image: mongo
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: password
```

### YAML Keywords

- `services`: Top-level key to define each containerized service.
- `image`: Pulls image from Docker Hub.
- `ports`: Maps host:container ports.
- `environment`: Passes environment variables into container.

```yaml
mongo-express:
  image: mongo-express
  ports:
    - "8081:8081"
  environment:
    ME_CONFIG_MONGODB_ADMINUSERNAME: admin
    ME_CONFIG_MONGODB_ADMINPASSWORD: password
    ME_CONFIG_MONGODB_URL: mongodb://admin:password@mongo:27017/
```

- The mongo-express connects to the `mongo` service using internal Docker DNS.

---

## 🛠️ Common Docker CLI Commands

| Command                           | Description                       |
| --------------------------------- | --------------------------------- |
| `docker build -t <name> .`        | Builds an image from a Dockerfile |
| `docker run -p 3000:3000 <image>` | Runs container & maps ports       |
| `docker ps`                       | Lists running containers          |
| `docker images`                   | Lists locally stored images       |
| `docker stop <id>`                | Stops a running container         |
| `docker rm <id>`                  | Removes a container               |
| `docker rmi <image>`              | Removes an image                  |
| `docker exec -it <id> /bin/sh`    | Opens terminal inside container   |

---

## 🛠️ Common Docker Compose Commands

| Command                | Description                   |
| ---------------------- | ----------------------------- |
| `docker-compose up`    | Builds & starts containers    |
| `docker-compose down`  | Stops & removes containers    |
| `docker-compose ps`    | Lists containers              |
| `docker-compose build` | Builds images                 |
| `-f mongo.yaml`        | Specifies compose file to use |

---

## 📦 Running This Project

### 1. Build and Run Backend

```bash
cd Backend
docker build -t backend-image .
docker run -p 3000:3000 backend-image
```

### 2. Run MongoDB and Mongo Express

```bash
docker-compose -f mongo.yaml up
```

Mongo Express: [http://localhost:8081](http://localhost:8081)

### 3. Run Frontend

```bash
cd Frontend
npm install
npm run dev
```

---

## 🧠 Concepts Covered

- Dockerfile usage for Node.js
- Multi-container setup via Compose
- MongoDB and Mongo Express environment setup
- Port mapping & container networking

---

## 📄 License

This project is open for educational use.
