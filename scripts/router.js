/**
 * 
 */
const data = require('./dataProvider.js');
const handlePaintings = app => {
    app.get('/paintings', (req,resp) => {resp.json(data.paintings)});
};
const handleArtists = app => {
    app.get('/artists', (req,resp) => {resp.json(data.artists)});
};
const handleGalleries = app => {
    app.get('/galleries', (req,resp) => {resp.json(data.galleries)});
};
const handlePaintingById = app => {
    app.get('/painting/:id', (req,resp) => {
        const matches = data.paintings.filter( p => p.paintingID == req.params.id);
        if (matches.length > 0)
            resp.json(matches);
        else    
            resp.json({"message": "no painting for provided id"});
    });
};
const handleArtistById = app => {
    app.get('/artist/:id', (req,resp) => {
        const matches = data.artists.filter( a => a.ArtistID == req.params.id);
        if (matches.length > 0)
            resp.json(matches);
        else    
            resp.json({"message": "no artist for provided id"});
    });
};
const handleGalleryById = app => {
    app.get('/gallery/:id', (req,resp) => {
        const matches = data.galleries.filter( g => g.GalleryID == req.params.id);
        if (matches.length > 0)
            resp.json(matches);
        else    
            resp.json({"message": "no gallery for provided id"});
    });
};
const handlePaintingByGalleryId = app => {
    app.get('/painting/gallery/:id', (req,resp) => {
        const matches = data.paintings.filter( p => p.gallery.galleryID == req.params.id);
        if (matches.length > 0)
            resp.json(matches);
        else    
            resp.json({"message": "no paintings for provided gallery id"});
    });
};
const handlePaintingByArtistId = app => {
    app.get('/painting/artist/:id', (req,resp) => {
        const matches = data.paintings.filter( p => p.artist.artistID == req.params.id);
        if (matches.length > 0)
            resp.json(matches);
        else    
            resp.json({"message": "no paintings for provided artist id"});
    });
};
const handlePaintingByYearRange = app => {
    app.get('/painting/year/:min/:max', (req,resp) => {
        const matches = data.paintings.filter( p => {
            if(p.yearOfWork > req.params.min && p.yearOfWork < req.params.max ){
                return true;
            } else {
                return false
            }        
        });
        if (matches.length > 0)
            resp.json(matches);
        else    
            resp.json({"message": "no paintings for provided year range"});
    });
};
const handlePaintingByTitle= app => {
    app.get('/painting/title/:text', (req,resp) => {
        const matches = data.paintings.filter( p => p.title == decodeURI(req.params.text));
        if (matches.length > 0)
            resp.json(matches);
        else    
            resp.json({"message": "no paintings for provided title"});
    });
};
const handlePaintingByColor = app => {
    app.get('/painting/color/:name', (req,resp) => {
        const matches = data.paintings.filter( p => {
            for(let color of p.details.annotation.dominantColors){
                if (color.name.toUpperCase() == decodeURI(req.params.name).toUpperCase()){
                    return true;
                } else {
                    return false;
                }
            }
        });
        if (matches.length > 0)
            resp.json(matches);
        else    
            resp.json({"message": "no paintings for provided color"});
    });
};
const handleArtistsByCountry = app => {
    app.get('/artists/:country', (req,resp) => {
        const matches = data.artists.filter( a => a.Nationality.toUpperCase() == decodeURI(req.params.country).toUpperCase());
        if (matches.length > 0)
            resp.json(matches);
        else    
            resp.json({"message": "no artists for provided country"});
    });
};
const handleGalleriesByCountry = app => {
    app.get('/galleries/:country', (req,resp) => {
        const matches = data.galleries.filter( a => a.GalleryCountry.toUpperCase() == decodeURI(req.params.country).toUpperCase());
        if (matches.length > 0)
            resp.json(matches);
        else    
            resp.json({"message": "no galleries for provided country"});
    });
};
module.exports = {
    handlePaintings, handleArtists, handleGalleries, 
    handlePaintingById, handleArtistById, handleGalleryById, 
    handlePaintingByGalleryId, handlePaintingByArtistId, handlePaintingByYearRange, 
    handlePaintingByTitle, handlePaintingByColor, handleArtistsByCountry,
    handleGalleriesByCountry
};