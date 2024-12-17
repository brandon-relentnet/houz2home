#!/bin/bash

# Define breakpoints and widths
declare -A breakpoints=(
  ["sm"]=640      # Small devices (e.g., phones) - ~320px width @2x
  ["md"]=960      # Medium devices (e.g., tablets) - ~480px width @2x
  ["lg"]=1280     # Large devices (e.g., small laptops) - ~640px width @2x
  ["xl"]=1920     # Extra-large devices (e.g., desktops) - ~800px width @2x
  ["2xl"]=2560    # Ultra-large screens - ~960px width @2x
)

# Input and output directories
input_dir="png"
output_dir="../../public/images/webp"

# Ensure output directory exists
mkdir -p "$output_dir"

# Loop through all PNG images in the input directory
for img in "$input_dir"/*.png; do
  filename=$(basename -- "$img" .png) # Extract the filename without extension

  # Generate the 2xl image (largest size)
  output_2xl="$output_dir/${filename}.webp"
  convert "$img" -resize "2560x" -quality 90 -define webp:method=6 "$output_2xl"
  echo "Created: $output_2xl"
done
