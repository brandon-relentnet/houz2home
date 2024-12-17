#!/bin/bash

# Define breakpoints and widths
declare -A breakpoints=(
  ["sm"]=480
  ["md"]=768
  ["lg"]=1024
  ["xl"]=1280
  ["2xl"]=1536
)

# Input and output directories
input_dir="png"
output_dir="../../public/images/webp"

# Ensure output directory exists
mkdir -p "$output_dir"

# Loop through all PNG images in the input directory
for img in "$input_dir"/*.png; do
  filename=$(basename -- "$img" .png) # Extract the filename without extension
  
  # Loop through each breakpoint and resize
  for breakpoint in "${!breakpoints[@]}"; do
    width=${breakpoints[$breakpoint]}
    
    # Convert and resize to WebP
    convert "$img" -resize "${width}x" "$output_dir/${filename}-${breakpoint}.webp"
    
    echo "Created: $output_dir/${filename}-${breakpoint}.webp"
  done
done
