module.exports = {
    loaders: {
        'css': 'vue-style-loader!css-loader!',
        'scss': 'vue-style-loader!css-loader!sass-loader',
        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
    },
    extractCSS: true
};
