# Use the official Node.js image as the base image
FROM node:14

# Set the working directory for the backend
WORKDIR /app

# Copy the backend package.json and package-lock.json
COPY backend/package*.json ./

# Install backend dependencies
RUN npm install

# Copy the backend code to the container
COPY backend/. .

# Copy the frontend code to the public directory in the backend
COPY frontend/. ./public

# Expose the port on which the app will run
EXPOSE 3000

# Start the Node.js application
CMD ["node", "app.js"]
