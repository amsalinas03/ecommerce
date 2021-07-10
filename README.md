# ecommerce

Created for Week 13 ORM homework

# Installation

1. Open a Terminal

2. Create a local copy of this repository by typing:

`` git clone https://github.com/amsalinas03/ecommerce.git``

3. Redirect into the local created repository

`` cd Github/ecommerce `` (Note: the file path to this repository may be different based on the names you chose)

4. Install NPM and required dependencies for this project (Sequelize, dotenv, Express, MySql2)

`` npm i ``
`` npm i sequelize ``
`` npm i dotenv ``
`` npm i express ``
`` npm i mysql2 ``

5. Download MySQL Workbench to visualize the data imported from this repository (https://dev.mysql.com/downloads/workbench/)
  -Additionally, download Insomnia to test the routes created in this app (https://insomnia.rest/pricing)
  
6. Copy schema.sql into MySQL Workbench to create database

7. Seed data into database using CLI

`` npm run seed `` <-- This will pull from Seeds folder

8. Start server and observe~

`` node server.js ``

# Usage

This repository can serve as a template for ecommerce-backend functions, allowing users to request and receive server information based on the products displayed in the table.

# Credits
Shout out to the Trilogy team for providing the initial Develop folder, to which I added my own code for full functionality.

# Contributing
ExpressJS, dotenv, MySQL & Sequelize, Node & NPM
