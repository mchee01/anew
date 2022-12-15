build:
	docker build -t node_signal_test_app .
run:
	docker run -it -p 3000:3000 --name node_signal_test_app node_signal_test_app
history:
	docker history node_signal_test_app 
stop:
	docker stop node_signal_test_app
kill:
	docker kill --signal="SIGTERM" node_signal_test_app 
ps:
	docker ps -a
img:
	docker images
rm :
	docker rm -f $$(docker ps -aq)
rmi:
	docker rmi $$(docker images -q)

