# fallback-messaging

https://registry.hub.docker.com/_/rabbitmq/

To launch a rabbitMQ with docker:

* -d: daemon
* -e: adding env variable RABBITMQ_NODENAME
* --name: docker instance name
* -p bind 5672 internal port to 5672 external port
* using image name rabbitmq:3.4.4

docker run -d -e RABBITMQ_NODENAME=my-rabbit -p 5672:5672 --name test-rabbit rabbitmq:3.4.4



Monitoring: queues size, messages state, memeroy, disk size, io perf

Add rabbitmq monitoring plugin: https://raw.githubusercontent.com/rabbitmq/rabbitmq-management/rabbitmq_v3_5_0/priv/www/api/index.html
https://www.rabbitmq.com/management.html

possibility: StatsD + graphite
https://github.com/boinger/statsd-rabbitmq

Clustering: https://www.rabbitmq.com/clustering.html

Check BEAM node and magic cookies.

Ansible playbook:
https://github.com/CharlesBlonde/ansible-rabbitmq

Docker command:
docker run  -d -e RABBITMQ_NODENAME=my-rabbit -p 5672:5672 -v /opt/rabbitmq/:/var/lib/rabbitmq --name test-rabbit rabbitmq:3.4.4
