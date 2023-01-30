FROM node:18-alpine
WORKDIR /app
COPY . .
RUN /bin/bash -c 'source $HOME/.bashrc; echo $HOME'
CMD ["node", "src/index.js"]
EXPOSE 3000