var fs = require("fs");
var path = require('path');
var Handlebars = require("handlebars");

// Handlebars.registerHelper('formatDate', dateString =>
//     new Date(dateString).toLocaleDateString('en', {
//         month: 'short',
//         year: 'numeric',
//     }),
// );

Handlebars.registerHelper('formatDate', function(dateString) {
    let dateStrArr = dateString.split('-');

    if (dateStrArr[0] && dateStrArr[1] && dateStrArr[2])
        return new Date(dateString).toLocaleDateString('en', {
            month: 'short',
            year: 'numeric',
            day: 'numeric',
        });

    if (dateStrArr[0] && dateStrArr[1])
        return new Date(dateString).toLocaleDateString('en', {
            month: 'short',
            year: 'numeric',
        });

    return dateStrArr;
})

function render(resume) {
    var css = fs.readFileSync(__dirname + "/style.css", "utf-8");
    var tpl = fs.readFileSync(__dirname + "/resume.hbs", "utf-8");
    var partialsDir = path.join(__dirname, 'partials');
    var filenames = fs.readdirSync(partialsDir);

    filenames.forEach(function(filename) {
        var matches = /^([^.]+).hbs$/.exec(filename);
        if (!matches) {
            return;
        }
        var name = matches[1];
        var filepath = path.join(partialsDir, filename)
        var template = fs.readFileSync(filepath, 'utf8');

        Handlebars.registerPartial(name, template);
    });
    return Handlebars.compile(tpl)({
        css: css,
        resume: resume
    });
}

module.exports = {
    render: render
};