let appConfig={};

appConfig.port=3000;
appConfig.allowedCorsOrigin="*";
appConfig.env="dev";
appConfig.db={
    uri:'mongodb://127.0.0.1:27017/blogAppDB'
    // mongodb+srv://jayesh:<password>@cluster0-yia1e.mongodb.net/test?retryWrites=true&w=majority
}
appConfig.apiVersion='/api/vi';
module.exports={
    port:appConfig.port,
    allowedCorsOrigin:appConfig.allowedCorsOrigin,
    environment:appConfig.env,
    db:appConfig.db,
    apiVersion:appConfig.apiVersion
}