```#!/bin/bash
docker build . -t 535853415/record-life

docker images

docker ps

docker run --rm -d -p 3000:3000 -p 9229:9229 535853415/record-life:v1.0.1
```
