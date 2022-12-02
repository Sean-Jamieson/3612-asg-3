const express = require('express');
const app = express();
const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'public'))); 

const router = require('./scripts/router.js');
router.handlePaintings(app);
router.handleArtists(app);
router.handleGalleries(app);

router.handlePaintingById(app);
router.handleArtistById(app);
router.handleGalleryById(app);

router.handlePaintingByGalleryId(app);
router.handlePaintingByArtistId(app);
router.handlePaintingByYearRange(app);
router.handlePaintingByTitle(app);
router.handlePaintingByColor(app);

router.handleArtistsByCountry(app);
router.handleGalleriesByCountry(app);

let port = 8080;
app.listen(port, () => {
    console.log("server running at port= " + port);
});