#!/env/bin/bash

NODE_ENV=development
WEBPACKDEVSERVER_BIN=scripts/start.mjs

# node --experimental-modules $WEBPACKDEVSERVER_BIN
node -r @std/esm $WEBPACKDEVSERVER_BIN
