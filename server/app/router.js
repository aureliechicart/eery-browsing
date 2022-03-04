require('dotenv').config()
const {
  Router
} = require('express');
const fetch = require('node-fetch')

const router = Router();

// route to get all thrillers from moviedb sorted by popularity
// A page number can be specified as query string, example : ?page=3
router.get('/thrillers', async function (req, res) {
  try {
    const pageNumber = req.query.page;
    const response = await fetch(`${process.env.EXTERNAL_API_BASE_URL}/discover/movie?api_key=${process.env.EXTERNAL_API_KEY}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=thriller&page=${pageNumber}&with_watch_monetization_types=flatrate`);
    if (response.status === 401) {
      res.status(401).json({
        message: response.statusText
      });
    } else if (response.status === 404) {
      res.status(404).json({
        message: response.statusText
      });
    } else {
      const movies = await response.json();
      res.status(200).json(movies);
    }

  } catch (error) {
    console.log('error :', error.stack)
    res.status(500).json({
      message: error.stack
    });
  }
})

module.exports = router;