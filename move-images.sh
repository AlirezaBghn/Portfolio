#!/bin/bash

# Create public directories if they don't exist
mkdir -p public/assets/images
mkdir -p public/assets/images/backgrounds
mkdir -p public/assets/images/projects

# Copy all image files
cp -r src/assets/images/* public/assets/images/

echo "Images moved to public directory. Now update your imports to use '/assets/images/...' instead of '@/assets/images/...'"
