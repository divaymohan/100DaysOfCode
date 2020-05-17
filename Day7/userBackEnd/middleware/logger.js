const debug = require('debug')('app:loging');
function log(req,res,next){
    debug("loging...!!");
    next();
}

module.exports = log;