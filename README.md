# Hostelme node backend Project Build with TypeScript, Express, MySQL, TypeORM


Steps to Project creation:

<hr>

Steps to run this project:
1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

<hr>

Steps to build this project:
1. Run `npm run build` command
2. `dist` folder will be created with built files
3. Run this `dist` in a server

<hr>

Steps to run in docker container:
1. Run `docker build -t hostlme-node-backend .` to build image from docker file
2. Run `docker run -p 3000:3000 hostlme-node-backend` to run the docker container from the above image
OR
1. Run `docker-compose -f docker-compose.yml up` to create and start container using docker compose

