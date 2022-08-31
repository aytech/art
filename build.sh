#!/usr/bin/env bash

rm --force art.zip &&
  (cd ui/app && PUBLIC_URL=/static BUILD_PATH=../dist yarn build) &&
  zip -r \
    --exclude=*.git* \
    --exclude=*.idea* \
    --exclude=*.venv* \
    --exclude=*.env* \
    --exclude=*.pytest_cache* \
    --exclude=*__pycache__* \
    --exclude=*art/asgi.py* \
    --exclude=*art/wsgi.py* \
    --exclude=*art/logs* \
    --exclude=*art/media* \
    --exclude=*art/static* \
    --exclude=*tests* \
    --exclude=*ui/app* \
    --exclude=*.gitignore* \
    --exclude=*build.sh* \
    --exclude=*db.sqlite3* \
    --exclude=*docker-compose.yml* \
    --exclude=*Dockerfile* \
    --exclude=*manage.py* \
    art.zip .