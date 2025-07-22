FROM node:20-alpine
WORKDIR /app

# Install dependencies
COPY package.json .
RUN npm install --legacy-peer-deps

# Copy all source code
COPY . .
COPY .env .

# Build the Next.js app
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"] 