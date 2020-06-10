Phase de mise au point :
==============
cd /vagrant
cd conf-docker
./build-docker-image.sh

docker image list

docker network create --driver bridge mynetwork

docker run -p 8282:8282 -d --name backend-api-container --network mynetwork --network-alias=backend.api.service xyz/backend-api
docker container ls
--> test via http://localhost:8282/index.html

docker run -p 80:80 -d --network mynetwork --name frontend-container xyz/frontend
docker container ls
--> test via http://localhost:80/index.html ou http://localhost:80/ng-bs4-app/index.html

docker container  rm -f backend-api-container
docker container  rm -f frontend-container
docker network rm mynetwork
docker image rm xyz/backend-api
docker image rm xyz/frontend

