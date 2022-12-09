build : 
	docker build -t ubuntu:x .
run : 
	docker run -it --name ubuntu -d -p 8080:80 ubuntu
exec : 
	docker exec -it ubuntu /bin/bash
ps : 
	docker ps -a
img : 
	docker images
rm : 
	docker stop ubuntu
	docker rm ubuntu
rmi : 
	docker rmi $$(docker images -q)
