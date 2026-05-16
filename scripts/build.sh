#!/bin/bash
# Простой скрипт сборки для копирования файлов в корень для публикации
# Simple build script to copy files to root for publication

echo "Building project..."
cp src/index.html ./index.html
mkdir -p css js images
cp src/styles/style.css css/style.css
cp src/js/script.js js/script.js
cp -r public/assets/images/* images/ 2>/dev/null || true

# Исправление путей в index.html для продакшена (если необходимо)
# В нашем случае пути в src/index.html должны указывать на папки в корне
echo "Build complete."
