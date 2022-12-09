build : 
	docker build -t greet .
run : 
	docker run -it --rm greet asa
ps : 
	docker ps -a
img : 
	docker images
rm :
	docker rm $$(docker ps -aq)
rmi : 
	docker rmi $$(docker images -q)
