const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/temp', function(req, res) {
  res.send('20');
});

router.get('/hum', function(req, res) {
  res.send('15');
});

module.exports = router;
