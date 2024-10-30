#!/bin/bash
sh ./clean.sh all
docker-compose build
docker-compose up -d
