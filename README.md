## Server is live on:
https://use-my-tech-stuff.herokuapp.com



# AUTH ROUTES

## **REGISTER**

*Method Url:* `/api/auth/register`


*HTTP method:* **[POST]**

#### Body

| name           | type    | required | description              |
| -------------- | ------  | -------- | ------------------------ |
| `username`     | String  | Yes      | Must be unique           |
| `email`        | String  | Yes      | Must be unique           |
| `password`     | String  | Yes      |                          |
| `firstname`    | String  | Yes      |                          |
| `lastname`     | String  | Yes      |                          |
| `phone`        | Integer | No       |                          |

*example:*

```
{
      "username": "matt04",
      "password": "password",
      "firstName": "Matt",   
      "lastName": "Jones", 
      "email": "matt@gmail.com",  
      "phone": 4156267688
}
```

#### Response

##### 201 (Created)
>If you successfully register a user the endpoint will return an HTTP response with a status code `200` and a body as below.
```
{
    "message": "Registration successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Implbm55IiwicGFzc3dvcmQiOiIkMmEkMTEkME5UTXFlcGF1YmQ0eXU2Lk9obFZsLlU3NGNXUVdWMVBwd0d2WnVGNldBYXB3cDlCTkNMd0MiLCJmaXJzdE5hbWUiOiJKZW5ueSIsImxhc3ROYW1lIjoiTGkiLCJlbWFpbCI6Implbm55QGdtYWlsLmNvbSIsInBob25lIjo0MTU2MjY3Njg4LCJpYXQiOjE1NDkxNzA1MjMsImV4cCI6MTU0OTE3NDEyM30.jOxH0YlAABmP_W3BaF3TowhCKHP9hFkLcyw-P-dQE_M"
}
```

____

## **LOGIN**

*Method Url:* `/api/auth/login`

*HTTP method:* **[POST]**

#### Body

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `email`        | String | Yes      | Must match an email in the database |
| `password`     | String | Yes      | Must match a password in the database corresponding to above email |

*example:*

```
{
  username: "matt@gmail.com",
  password: "password"
}
```

#### Response

##### 200 (OK)
>If you successfully login, the endpoint will return an HTTP response with a status code `200` and a body as below.
```
{
    "message": "Welcome back Matt Jones",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRvbW15IiwicGFzc3dvcmQiOiIkMmEkMTEkaDBMb3hsU0pTTWxzcXNVUVQ3ZHBRZUVXbGxrNXk2M2xKVC9BQy9kU0kvWERPdnFxaHNiUjYiLCJlbWFpbCI6InRvbW15QGdtYWlsLmNvbSIsInBob25lIjo1MTA0MDgyNTg3LCJpYXQiOjE1NDkzMDEyNDMsImV4cCI6MTU0OTMwNDg0M30.TXnqIh3moCBZX-FDK5kuUURkLZtWfxmIZO3IqQhlT50"
}
```
___




# USERS ROUTES

## **GET USERS**

*Method Url:* `/api/users`


*HTTP method:* **[GET]**


#### Response

##### 200 (OK)

```
[
    {
        "userId": 1,
        "username": "tommy",
        "password": "$2a$11$LQImXlHE7dt0RSD9gjuvBecaZMMKYuW.vGcWsi3YumGU25PwLiFM2",
        "firstname": "Tommy",
        "lastname": "Carr",
        "email": "tommy@gmail.com",
        "phone": 5104082587
    },
    {
        "userId": 2,
        "username": "linda",
        "password": "$2a$11$d6mtGCQJBekPkqHvyog7GuaE82AfjcXzytL3ELtR8Dc.ENBNu7i/a",
        "firstname": "Linda",
        "lastname": "La",
        "email": "linda@gmail.com",
        "phone": 5102382227
    },
    {
        "userId": 3,
        "username": "jimmy",
        "password": "$2a$11$zXVFMlzrFfu9aYoJFOJCs.94KBfBvt3/BODdYaMWCj4ozs1EHj/Vy",
        "firstname": "Jimmy",
        "lastname": "Butler",
        "email": "jimmy@gmail.com",
        "phone": 7072272555
    }
]
```
___

## **GET USER BY ID**

*Method Url:* `/api/users/:id`


*HTTP method:* **[GET]**


#### Response

##### 200 (OK)

```
    {
        "userId": 2,
        "username": "linda",
        "password": "$2a$11$d6mtGCQJBekPkqHvyog7GuaE82AfjcXzytL3ELtR8Dc.ENBNu7i/a",
        "firstname": "Linda",
        "lastname": "La",
        "email": "linda@gmail.com",
        "phone": 5102382227
    }
```
___


## **GET ITEMS BY USERID**

*Method Url:* `/api/users/:id/items`


*HTTP method:* **[GET]**


#### Response

##### 200 (OK)

```
[
    {
        "itemId": 1,
        "owner": 1,
        "title": "Portable Speaker",
        "description": "Great speaker for a gathering or party",
        "brand": "Bose",
        "model": "5000XL",
        "label": "Speaker",
        "dailyPrice": 100,
        "weeklyPrice": 450,
        "available": 1,
        "renter": null
    },
    {
        "itemId": 6,
        "owner": 1,
        "title": "32 inch Curve Monitor",
        "description": "Dominate your enemies with this awesome monitor",
        "brand": "Samsung",
        "model": "32xl",
        "label": "Monitor",
        "dailyPrice": 60,
        "weeklyPrice": 250,
        "available": 0,
        "renter": 3
    }
]
```
___


## **UPDATE USER**

*Method Url:* `/api/users/:id`


*HTTP method:* **[PATCH]**


#### Response

##### 202 (Accepted)

```
{
    "message": "User: matt04 has been updated"
}
```
___

## **DELETE USER**

*Method Url:* `/api/users/:id`


*HTTP method:* **[DELETE]**


#### Response

##### 202 (Accepted)

```
{
    "message": "The user has been deleted."
}
```
___


# ITEMS ROUTES

## **GET ITEMS**

*Method Url:* `/api/items`


*HTTP method:* **[GET]**


#### Response

##### 200 (OK)

```
[
    {
        "itemId": 1,
        "owner": 1,
        "title": "Portable Speaker",
        "description": "Great speaker for a gathering or party",
        "brand": "Bose",
        "model": "5000XL",
        "label": "Speaker",
        "dailyPrice": 100,
        "weeklyPrice": 450,
        "available": 1,
        "renter": null
    },
    {
        "itemId": 2,
        "owner": 2,
        "title": "Projector",
        "description": "Awesome display for sports, movies and video games",
        "brand": "Samsung",
        "model": "H3000",
        "label": "Display",
        "dailyPrice": 50,
        "weeklyPrice": 180,
        "available": 1,
        "renter": null
    }
]
```
___

## **GET ITEM BY ID**

*Method Url:* `/api/items/:id`


*HTTP method:* **[GET]**


#### Response

##### 200 (OK)

```
    {
        "itemId": 2,
        "owner": 2,
        "title": "Projector",
        "description": "Awesome display for sports, movies and video games",
        "brand": "Samsung",
        "model": "H3000",
        "label": "Display",
        "dailyPrice": 50,
        "weeklyPrice": 180,
        "available": 1,
        "renter": null
    }
```
___

## **ADD AN ITEM**

*Method Url:* `/api/items`


*HTTP method:* **[POST]**

#### Body

| name           | type    | required |
| -------------- | ------  | -------- | 
| `itemId`       | Integer | Yes      |
| `owner`        | Integer | Yes      |
| `title`        | String  | Yes      | 
| `description`  | String  | Yes      | 
| `model`        | String  | Yes      |                          
| `label`        | String  | No       |                          
| `dailyPrice`   | String  | Yes      |                          
| `weeklyPrice`  | String  | Yes      |   
| `available`    | Boolean | Yes      |   
| `renter`       | Integer | Yes      |   


*example:*

```
{
    "itemId": 1,
    "owner": 1,
    "title": "Portable Speaker",
    "description": "Great speaker for a gathering or party",
    "brand": "Bose",
    "model": "5000XL",
    "label": "Speaker",
    "dailyPrice": 80,
    "weeklyPrice": 300,
    "available": 1,
    "renter": null
}
```

#### Response

##### 201 (Created)

```
{
    "message": "item: 'Portable Speaker' has been updated"
}
```
___

## **UPDATE ITEM**

*Method Url:* `/api/items/:id`


*HTTP method:* **[PATCH]**


#### Response

##### 202 (Accepted)

```
{
    "message": "item: 'Portable Speaker' has been updated"
}
```
___

## **DELETE ITEM**

*Method Url:* `/api/items/:id`


*HTTP method:* **[DELETE]**


#### Response

##### 202 (Accepted)

```
{
    "message": "The item has been deleted."
}
```
___

## **UPLOAD ITEM IMAGE**

*Method Url:* `/api/items/upload`


*HTTP method:* **[POST]**


#### Response

##### 200 (Accepted)

```
{
    "message": "Your image has been uploaded successfully to cloudinary."
}
```
___
