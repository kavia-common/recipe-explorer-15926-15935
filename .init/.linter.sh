#!/bin/bash
cd /home/kavia/workspace/code-generation/recipe-explorer-15926-15935/frontend_recipe_app
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

