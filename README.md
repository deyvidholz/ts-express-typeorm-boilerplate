# Project Name

## 📜 Description

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id tellus sodales, rhoncus libero ut, auctor sem. Morbi at maximus lacus, in bibendum massa. Vestibulum tempor a lacus a ultrices. Curabitur arcu ante, fringilla et ligula nec, luctus feugiat justo. Donec finibus dui a erat consequat varius.

## 📝TL;DR

- Use `yarn` to install dependencies
- Use `docker-compose up` to setup database
- Use `yarn start:dev` to start the app in development mode

## ⚠️ Pre-requisites

- [Node](https://nodejs.org/) >= v12.8
- [Yarn](https://yarnpkg.com/) (global) >= 1.22
- [Docker](https://www.docker.com/)

## ➕ Install dependencies

Use `yarn`

## 📦 Database setup

Change the connection information on `.env` file and run `docker-compose up`

## 👷 Building the project

Build the project using `yarn build`. It will create a folder named `dist`.

## 💻 Running development server

Use `yarn serve`

## 🚀 Running project

Use `yarn start`

## ✅ Testing

Use `yarn test`

## ☁️ Deploying

- `yarn deploy:prd`: deploy for production
- `yarn deploy:stg`: deploy for stage
- `yarn deploy:qa`: deploy for QA

## 📚 Documentation

After start the app, access `/swagger` route in order to use the playground which allows manually tests in the API routes.
It will also provide all the models and routes available in the application.
