# Test Node JS 303

The application skeleton was created using  `express-generator`.

### Create Postgres Database

There must be a postgres database `test-node-303`.

__If postgres binaries are installed locally__

```
$ createdb test-node-303
```


### Install the sequelize command line tool

```
$ npm install sequelize-cli -g
```

In addition, you will need to also install `sequelize` module __localy__ in order to utilize the command line tool.


## Configuring your database

Edit your development settings in `config/config.json` to point to your postgres database.

**Example `config/config.json`**

```
{
  "development": {
    "username": <your username>,
    "password": null,
    "database": "test-node-303",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  ...
}
```

## Run migrations

```
$ sequelize db:migrate
```

## Seeding the database

```
$ sequelize db:seed:all
```
