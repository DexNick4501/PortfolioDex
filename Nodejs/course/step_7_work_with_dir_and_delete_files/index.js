let fs = require('fs');

fs.mkdir('step_7_create_folder', function() {});
try {
    fs.rmdir('new_dir', function() {});
} catch (e) {}
