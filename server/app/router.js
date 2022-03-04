const { Router } = require('express');

const router = Router();

router.get('/thrillers', function (req, res) {
  res.send('Here is the list of thriller movies')
})

module.exports = router;