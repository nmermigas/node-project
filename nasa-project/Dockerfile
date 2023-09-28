FROM node:lts-alpine

WORKDIR /app

# the first . is the source and the second . is the destination
# we copy the package*.json into the folder app (./ means paste to app)
COPY package*.json ./

COPY client/package*.json client/
RUN npm run install-client --omit=dev
# only install the dependencies for production

#we split the installations to be cached easier aka to save the state of the installation
COPY server/package*.json server/
RUN npm run install-server --omit=dev


# build the client 
COPY client/  client/
RUN npm run build --prefix client


COPY server/  server/


# by default it runs on the root user, which has many priviledges
USER node

# what to do when the container runs (after the image is built)
CMD ["npm","start","--prefix","server"]

# Expose the port that the api runs on 
EXPOSE 8000