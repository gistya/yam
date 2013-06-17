var fs   = require('fs'),
    jsyaml = require('js-yaml');
/*
 * GET home page.
 */

exports.index = function(req, res){
    //var doc = fs.readFileSync('./files/Questions.yaml', 'utf8');
    //console.log(doc);
    var JString = jsyaml.safeLoad(req.body,['DEFAULT_SAFE_SCHEMA']);
    //var JString = jsyaml.safeLoad(doc,['DEFAULT_SAFE_SCHEMA']);
    //console.log('the string: ',JString);
    res.send(200,JString);
  //res.render('index', { title: 'Express' });
};