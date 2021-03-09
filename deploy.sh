#!/bin/bash
git pull origin dev
npm run build
cd /www/
rm -rf build
cd -
mv build /www/