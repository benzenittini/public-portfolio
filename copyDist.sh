#!/bin/bash

# Remember to run 'yarn generate' from portfolio project prior to running this script!

rm -rf $(ls -A | grep -v .git | grep -v CNAME | grep -v copyDist.sh)
cp -r ../portfolio/dist/. ./
