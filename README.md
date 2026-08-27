# jsonresume-theme-onepage-plus

An updated version of the compact [onepage theme](https://github.com/ainsleyc/jsonresume-theme-onepage) for the [JSON Resume](https://jsonresume.org/) 1.0.0 schema.

The project structure is based on the [JSON Resume theme boilerplate](https://github.com/jsonresume/jsonresume-theme-boilerplate). This theme adds support for certificates and projects, and keeps the layout focused on a concise printable resume.

## Preview

See [resume.pdf](https://github.com/vkcelik/jsonresume-theme-onepage-plus/blob/master/resume.pdf) for an example output.

## Installing

From the directory that contains your `resume.json`, install the theme and serve it with `resume-cli`:

```
npm install -g resume-cli
npm install jsonresume-theme-onepage-plus
resume serve --theme onepage-plus
```

To export a PDF:

```
resume export resume.pdf --theme onepage-plus
```

## Supported Sections

The theme renders these JSON Resume sections when present:

```
basics
work
skills
certificates
projects
languages
education
publications
awards
volunteer
interests
references
```

## Theme-Specific Fields

In addition to standard JSON Resume fields, the theme recognizes these optional fields:

```
current
projects[].urlLabel
skills[].details[].text
skills[].details[].comment
```

Use `current: true` with dated work, education, project, or volunteer entries to display `Present` when `endDate` is omitted.

## Developing

```
npm install -g resume-cli
git clone https://github.com/vkcelik/jsonresume-theme-onepage-plus.git
cd jsonresume-theme-onepage-plus
npm install
resume serve --theme .
```

## Releasing

Update `package.json`, commit the change, create a version tag with a `v` prefix, and publish:

```
git tag vX.Y.Z
npm publish
```

See also the [boilerplate project](https://github.com/jsonresume/jsonresume-theme-boilerplate) and the [original project](https://github.com/ainsleyc/jsonresume-theme-onepage).

## License

Available under the [MIT license](LICENSE).
