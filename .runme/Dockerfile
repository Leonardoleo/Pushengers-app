FROM node:14.0.0
WORKDIR /app
COPY . .
RUN npm install && npm run build
ENTRYPOINT npx serve -s build
