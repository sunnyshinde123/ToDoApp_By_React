# Base Images
FROM node:latest

# WorkDir
WORKDIR /app

# Copy the Dependencies
COPY package.json /app/

# Install All Dependencies
RUN npm install

# Copy All the Code
COPY . .

# Expose the Port
EXPOSE 5173

# Start the Application
CMD ["npm", "run", "dev"]
