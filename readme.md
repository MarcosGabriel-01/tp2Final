dependecias: 
    - express

el formato de ingreso literal en 1.a. no funciona en RAW yo use 
{
 "id": "AAB001",
 "xa": 7500,
 "ya": 6200,
 "za": 1000
}

create_
post: http://localhost:8080/app/
body:
{
 "id": "AAB001",
 "xa": 7500,
 "ya": 6200,
 "za": 1000
}

getAll_
get: http://localhost:8080/app/

getById_
get: http://localhost:8080/app/{id}