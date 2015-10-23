/**
 * Created by Pebie on 06/08/15.
 */
module.exports = function (app) {
    var Datasheets = app.models.comics;
    var sampleComic = require('./sample-comics');

    app.dataSources.comics.autoupdate('comics', function (err) {
        if (err) throw err;

        var comics = sampleComic;

        var count = comics.length;

        comics.forEach(function (comic) {
            Datasheets.create(comic, function (err, instance) {
                if (err)
                    return console.log(err);

                console.log('Comic created:', instance);

                count--;

                if (count === 0)
                    console.log('Done');
            });
        });
    });
};
