# Use the official Node.js image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application source code
COPY src/ ./src/

# Expose the port your app runs on
EXPOSE 3000

# Start the application
CMD ["node", "src/app.js"]
