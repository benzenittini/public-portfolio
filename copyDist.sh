#!/bin/bash

rm -rf $(ls -A | grep -v .git | grep -v CNAME | grep -v copyDist.sh)
cp -r ../portfolio/dist/* ./
