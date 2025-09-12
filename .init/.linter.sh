#!/bin/bash
cd /home/kavia/workspace/code-generation/angular-based-clickable-application-34390-34525/AngularPrototypeApplication
npx eslint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

