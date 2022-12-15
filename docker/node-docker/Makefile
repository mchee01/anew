build:
	docker build -t nodejs .
run:
	docker run -p 8000:8000 -d --name nodejs nodejs
exec:
	docker exec -it nodejs /bin/bash
start:
	docker start nodejs
logs:
	docker logs nodejs
ps:
	docker ps -a
img:
	docker images
rm :
	docker rm -f $$(docker ps -aq)
rmi:
	docker rmi $$(docker images -q)
