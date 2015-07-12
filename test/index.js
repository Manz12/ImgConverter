var imguri = require('../');

/** Test Code --------------------------------------------------------------- */
if (require.main === module) {
    (function () {
        var options = {
            force: false
        };
        var paths = ['test.png', 'test/nofile','Lego.jpg','Myselfie.png'];

        imguri.encode(paths, options, console.log);
    })();
}
