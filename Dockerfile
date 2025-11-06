# --------------------------------------------------
# Stage 1: Build the Next.js app
# --------------------------------------------------
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Copy dependency files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy all source files
COPY . .

# Build the app for production
RUN npm run build

# --------------------------------------------------
# Stage 2: Run the app
# --------------------------------------------------
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy necessary build output and dependencies from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/src ./src
COPY --from=builder /app/tailwind.config.js ./
COPY --from=builder /app/postcss.config.js ./
COPY --from=builder /app/jsconfig.json ./

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose the port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
