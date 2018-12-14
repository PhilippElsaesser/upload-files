const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'tmp/' });
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/uploaddufichier', upload.array('monfichier'), (req, res, next) => {
  req.files.map(file =>{
    fs.rename(file.path, 'public/images/' + file.originalname, (err, rep) => {
      err ? res.send(err) : res.send(rep);
    });
  });
});

module.exports = router;
