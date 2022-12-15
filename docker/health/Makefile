build:
	docker build -t health_test .
run:
	docker run -it -d --name health_test health_test
inspect:
	docker inspect health_test
ps:
	docker ps -a
img:
	docker images
rm :
	docker rm -f $$(docker ps -aq)
rmi:
	docker rmi $$(docker images -q)

