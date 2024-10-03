var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/form', function(req, res, next) {
  res.render('form');
});

router.post('/form', function(req, res, next) {
    var fileobject = req.files.file123;
    var filename = req.files.file123.name;
    var filesize = req.files.file123.size;
    var filemimetype = req.files.file123.mimetype;
    
    fileobject.mv("public/upload/"+filename,function(err){
      if(err)
        return res.status(500).send(err);
        res.send("File Upload!");
    });
});


module.exports = router;
