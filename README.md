## APP-ROOT

[[_TOC_]]

---

:scroll: **START**

### Description

This project shows the root page of Microservice Architecture Application example.
The Application includes the microservices: clients, orders, drones, delivering

### Requirements
___

JDK 17, Maven 3+  
Docker  
Minikube  
Kubectl  
Helm  
Linux is better than Windows  

### How To Build

---
Firstly, you have to create a maven profile which will be active by default (or you can switch it by yourself),
where you have to set a credentials to get access to your repository 
to deploy docker images and helm charts: username, password, registry, oci-url 

Clone each microservice repository,
for each one open the console, go to the root application project folder and enter the command:  

_mvn install_-DimageVer=$imageVer -DskipTests=true  

where $imageVer matches the version of the image in file helm-$artifactId/src/main/resources/$artifactId/values.yaml    
image:  
    tag: <imageVer>  

### How To Use

___

After you have deployed all the images and charts to the repository, you need to start a minikube cluster,
then it is better to create your own namespace and set it as default.

Copy file helm-approot/chart-deploy.sh to your home folder and change the oci-url to yours one. 
Run command:

./chart-deploy.sh

after the command is done, you have to see like this:

ubu>kubectl get pod  
NAME       READY   STATUS    RESTARTS   AGE  
approot    1/1     Running   0          4h12m  
clients    1/1     Running   0          4h12m  
delivery   1/1     Running   0          4h12m  
drones     1/1     Running   0          4h12m  
orders     1/1     Running   0          4h12m  


### Explore application

---
go to:
_http://localhost:8085

You will see the main menu on the left side of the page.
When you click the menu item you see the matched microservice hello page on the right side.

### API Gateway (coming soon)

:scroll: END


