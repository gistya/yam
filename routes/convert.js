jsyaml = require('js-yaml');
/*
 * GET home page.
 */

exports.convert = function(req, res){
    var JString = jsyaml.safeLoad(req.body,['DEFAULT_SAFE_SCHEMA']).toString;
    res.send(200,JString);
};