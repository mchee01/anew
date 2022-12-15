# Step1 : Base images
FROM python

# Step2 : Package install
RUN apt -y update && apt -y upgrade && apt -y install git net-tools vim

# Step3 : Specify a working directory
WORKDIR '/root'

# Step4 : Config file copy
COPY ./.bashrc .
COPY ./.exrc .
