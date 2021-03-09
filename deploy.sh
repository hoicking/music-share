#!/bin/bash
git pull origin main
npm run build
cd /www/
rm -rf build
cd -
mv build /www/