kube-toolkit-dashboard
======================

WIP dashboard for [kube-toolkit](https://github.com/radu-matei/kube-toolkit)


Generate REST API client based on Swagger definition, from grpc-gateway
------------------------------------------------------------------------

docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli generate \
    -i /local/rpc.swagger.json \
    -l typescript-angular  \
    -c /local/swagger.config.json \
    -o /local/src/generated-client
