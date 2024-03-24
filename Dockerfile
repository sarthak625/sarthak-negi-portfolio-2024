# Stage 1: Build the Angular app
FROM node:alpine as builder
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the Angular app
RUN npm run build -- --configuration production

# Stage 2: Serve the app using Nginx
FROM nginx:1.25.1-alpine

# Copy the built app from the previous stage
COPY --from=builder /app/dist/sarthak-negi-portfolio-2024 /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the default Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]