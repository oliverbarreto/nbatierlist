FROM node:20-alpine

# WORKDIR /web

ENV NEXT_TELEMETRY_DISABLED 1

COPY . .
RUN rm -rf node_modules

RUN npm install --production
RUN npm install autoprefixer

RUN npm run build

# COPY ./app ./app
# COPY ./components ./components
# COPY ./lib ./lib
# COPY ./public ./public

CMD ["npm", "run", "start"]