build:
	docker build -t cmd1 .
run:
	docker run -it -d -p 8000:80 cmd1
ps:
	docker ps -a
rm:
	docker rm $$(docker ps -aq)
rmi:
	docker rmi $$(docker images -q)
