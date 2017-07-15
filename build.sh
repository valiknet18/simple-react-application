#!/bin/bash

npm run build
cp -R build/* ../frontend-build
cd ../frontend-build && git add . && git commit -m 'New build' && git push origin master && cd -
rm -R build/
echo "Project successful build"
