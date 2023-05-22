#sistem de linux muy ligero
FROM node:lts-alpine

#servidor que permite ejecutar un servidor
RUN npm install -g http-server

#carpete de trabajo
RUN mkdir /appdocker

WORKDIR /appdocker

#copiamos los ficheros configuración al servidor
COPY package*.json ./

#copia lo necesario para ejecutar el proyecto en el directorio app
RUN npm install

#copiamos todo a la carpeta app
COPY . . 

#creamos la aplicación
RUN npm run build

#en la máquina docker le decimos que se ejecute en el puerto que se indica
EXPOSE 3000

#es el comando que ejecuta la aplicación en el contenedor
CMD ["http-server", "public"]