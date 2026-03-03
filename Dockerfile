# Use an official Node.js 18 image as a base
FROM node:18

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json from the 'backend' folder
COPY backend/package*.json ./

# Install the backend's dependencies
RUN npm install

# Copy the rest of the backend source code into the container
COPY backend/ ./

# Expose the port the app runs on
# (This doesn't need to be the same as process.env.PORT, it's internal)
EXPOSE 3000

# The command to run the application
CMD [ "node", "server.js" ]
