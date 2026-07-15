module.exports = {
    server: true,
    https: true,
    files: ['public/css/*.css', 'public/js/*.js', '*.html'],
    notify: false,
    //snippet: false,
    snippetOptions: {
        rule: {
            match: /<head[^>]*>/i,
            fn: function(snippet, match) {
                return match + snippet;
            }
        }
    }
};
