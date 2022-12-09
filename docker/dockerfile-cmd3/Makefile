build:
	docker build -t ctop .
run:
	docker run -it ctop
run2:
	docker run -it ctop -d 2
ps:
	docker ps -a
rm:
	docker rm $$(docker ps -aq)
rmi:
	docker rmi $$(docker images -q)
