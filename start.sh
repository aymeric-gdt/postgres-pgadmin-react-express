#!/bin/bash
sh ./clean.sh all
mkdir -p letsencrypt
docker-compose build
docker-compose up -d
