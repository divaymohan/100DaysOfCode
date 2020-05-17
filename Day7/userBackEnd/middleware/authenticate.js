const debug = require('debug')('app:auth');

function authenticate(req,res,next){
    debug('authhenticating..!!');
    next();
}

module.exports = authenticate;