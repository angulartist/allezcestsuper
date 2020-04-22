# Image node (v10 car je l'ai déjà, WiFi de nul)
FROM node:10
# C moi
LABEL maintainer="mohamed.belabes@edu.devinci.fr"
# On crée un répertoire de travail /app
WORKDIR /usr/src/app
# On récupère les fichiers de config
COPY package*.json ./
# On install les modules
RUN npm install --only=production
# On copie l'app dans notre workdir
COPY . .