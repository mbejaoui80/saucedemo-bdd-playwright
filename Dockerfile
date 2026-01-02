# 👇 ON A CHANGÉ LA VERSION ICI (1.57.0)
FROM mcr.microsoft.com/playwright:v1.57.0-noble

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

CMD ["npx", "cucumber-js"]