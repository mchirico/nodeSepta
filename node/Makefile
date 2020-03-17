PROJECT = nodesepta
NAME = septa
TAG = latest


docker-build:
	rm -rf build
	docker build --no-cache -t gcr.io/$(PROJECT)/$(NAME):$(TAG) -f Dockerfile .


push:
	docker push gcr.io/$(PROJECT)/$(NAME):$(TAG) 

pull:
	docker pull gcr.io/$(PROJECT)/$(NAME):$(TAG) 


run:
	docker run -p 3000:3000 --rm -it -d --name $(NAME) gcr.io/$(PROJECT)/$(NAME):$(TAG) 



runnod:
	docker run -p 3000:3000 --rm -it --name $(NAME) gcr.io/$(PROJECT)/$(NAME):$(TAG) 

stop:
	docker stop $(NAME)

logs:
	docker logs $(NAME)



