# Desarrollo

Pasos para levantar el proyecto

1. Levantar base de datos
``` 
docker-compose up -d
```

2. Iniciar prisma 
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```
