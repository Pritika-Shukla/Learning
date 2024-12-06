FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./

RUN npm install --include=dev --legacy-peer-deps

COPY . .

RUN npm run build

FROM public.ecr.aws/lambda/nodejs:18

WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist

RUN npm install --only=production --legacy-peer-deps

ENV NODE_ENV=production

CMD ["dist/index.handler"]
