FROM node:22-alpine

WORKDIR /app

COPY package.json arquitectura-7243.js ./

EXPOSE 9090

CMD ["node", "arquitectura-7243.js"]