docker build --platform linux/amd64 -t sarthaknegi/snm:latest .
docker push sarthaknegi/snm:latest

ssh main "sh deployments/snm-angular.sh"