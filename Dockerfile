FROM node:alpine
WORKDIR /app

COPY ./ ./

RUN npm install -g serve

EXPOSE 3000

ENV PORT 3000

CMD ["serve"]
