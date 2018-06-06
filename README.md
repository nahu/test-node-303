# Test Node JS 303

The application skeleton was created using  `express-generator`.
## Database
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


### Configuring the connection

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

### Run migrations

```
$ sequelize db:migrate
```

### Seeding the database

```
$ sequelize db:seed:all
```

or 

```
$ npm run seed
```


## Endpoints

The API of the model (_review_).


### Show a Review

  Returns json data about a single review.

* **URL**

  /reviews/:id

* **Method:**

  `GET`
  
* **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
  ```
    { 
      id : 1,
      title : "Code Review",
      author: "Matt",
      content: "This is amazing!",
      createdAt: "2018-06-06T20:21:45.343Z",
      updatedAt: "2018-06-06T20:21:45.343Z"
    }
  ```
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** 
  ```
    { 
      message: "Review Not Found"
    }
  ```     
  * **Code:** 400 <br />
    **Content:** 
  ```
    { 
      message: "ID must be integer"
    }
  ```     

### Show All Reviews

  Returns json data about all reviews.

* **URL**

  /reviews

* **Method:**

  `GET`
  
* **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
  ```
    [
      { 
        id : 1,
        title : "Code Review",
        author: "Matt",
        content: "This is amazing!",
        createdAt: "2018-06-06T20:21:45.343Z",
        updatedAt: "2018-06-06T20:21:45.343Z"
      },
      { 
        id : 2,
        title : "Ramdon review",
        author: "Matt",
        content: "This is amazing!",
        createdAt: "2018-06-06T20:21:45.343Z",
        updatedAt: "2018-06-06T20:21:45.343Z"
      }
    ]

  ```
 
* **Error Response:**

  None

### Create a Review

  Returns json data about a review created.

* **URL**

  /reviews

* **Method:**

  `POST`
  
* **URL Params**

  None

* **Data Params**

  ```
    { 
      title : "Code Review",
      author: "Matt",
      content: "This is amazing!"
    }
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
  ```
    { 
      id : 1,
      title : "Code Review",
      author: "Matt",
      content: "This is amazing!",
      createdAt: "2018-06-06T20:21:45.343Z",
      updatedAt: "2018-06-06T20:21:45.343Z"
    }
  ```
 
* **Error Response:**
    
  * **Code:** 400 <br />
    **Content:** 
  ```
    { 
      message: "Bad Request"
    }
  ```
### Update a Review

  Returns json data about an updated review.

* **URL**

  /reviews/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  ```
    { 
      title : "Code Review 2",
      author: "Matt J.",
      content: "This is amazing!"
    }
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
  ```
    { 
      id : 1,
      title : "Code Review 2",
      author: "Matt J",
      content: "This is amazing!",
      createdAt: "2018-06-06T20:21:45.343Z",
      updatedAt: "2018-06-06T20:21:45.343Z"
    }
  ```
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** 
  ```
    { 
      message: "Review Not Found"
    }
  ```     
  * **Code:** 400 <br />
    **Content:** 
  ```
    { 
      message: "ID must be integer"
    }
  ```

### Delete a Review

  Deletes a Review.

* **URL**

  /reviews/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** 
    No Content
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** 
  ```
    { 
      message: "Review Not Found"
    }
  ```     
  * **Code:** 400 <br />
    **Content:** 
  ```
    { 
      message: "ID must be integer"
    }
  ```