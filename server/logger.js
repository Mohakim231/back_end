//Describes a middleware that logs any attempt to talk to the API.

function logger(req, res, next) {
    //req - the client's request
    //res - the response that will be sent to the client
    //next - the next step down in the API
    console.log(req.method, req.originalUrl)

    next();
}

module.exports = logger;