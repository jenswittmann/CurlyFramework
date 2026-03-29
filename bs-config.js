module.exports = {
    server: true,
    https: true,
    files: ['styleguide/css/*.css', 'styleguide/js/*.js', '*.html'],
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
