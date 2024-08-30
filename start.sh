#!/bin/sh
json-server --watch db.json --port 3001 &
serve -s build -l 3000