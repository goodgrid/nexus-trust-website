#!/bin/bash

set -a; . ./.env; set +a
npm run build
npm start
