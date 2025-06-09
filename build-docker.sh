#!/bin/bash

# University of AI Website - Docker Build Script

echo "🚀 Building University of AI Website Docker Image..."

# Build the Docker image
docker build -t university-of-ai:latest .

if [ $? -eq 0 ]; then
    echo "✅ Docker image built successfully!"
    echo ""
    echo "To run the container:"
    echo "  docker run -p 7701:7701 university-of-ai:latest"
    echo ""
    echo "Or use Docker Compose:"
    echo "  docker-compose up"
    echo ""
    echo "Access the website at: http://localhost:7701"
else
    echo "❌ Docker build failed!"
    exit 1
fi
