# descargar imagen 

FROM node:22    

LABEL developer="Ivonne"

# Establecer la carpeta de trabajo en la imagen 
WORKDIR /app

# En la carpeta copiamos los json, ficheros con informacion de las dependenicas
COPY package*.json ./

# Obtener los modules
RUN npm install

# copiamos todo
COPY . .


CMD ["npm", "start"]
