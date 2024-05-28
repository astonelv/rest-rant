const router = require('express').Router()

//GET /places
router.get('/', (req, res) => {
  res.render('places/index', {places})
})

router.get('/new', (req, res) => {
  res.render('places/new')
});

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } else if (!places[id]) {
    res.render('error404')
  } else {
    console.log('id', id)
    res.render('places/show', { place: places[id], id })
  }
})

module.exports = router
