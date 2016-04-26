# annotator-marginalia
Annotator.js plugin for creating and displaying annotations in the margin of a page.

Marginalia is developed for [Annotator 2.x](https://github.com/openannotation/annotator/releases)

[CHANGELOG](CHANGELOG.md)

##Demo
[View a simple demo of Marginalia here.](http://emory-lits-labs.github.io/annotator-marginalia/demo/)

## License
**annotator-marginalia** is distributed under the Apache 2.0 License.

##Dependencies
* jQuery 1.8+
* Annotator.js
* [Font Awesome](https://github.com/FortAwesome/Font-Awesome) icons for the
editing dropdown menu and the toggle button.
* [Bootstrap dropdown](http://getbootstrap.com/components/#btn-dropdowns) for dropdown edit menu

##Using Marginalia
To use this plugin in your Annotator project, include the required
javascript and css, and initialize it as an annotator module with a
optional configuration.

See [installation instructions](http://emory-lits-labs.github.io/annotator-marginalia/#install) for more details.

## Developer Notes

This project uses [git-flow](https://github.com/nvie/gitflow) branching conventions.

To view the jekyll site for development, you should do the following:
- make sure you are on the **develop** branch
- make sure you have [jekyll installed](http://jekyllrb.com/docs/installation/)
- run the site via jekyll: ```jekyll serve```

To install grunt utilities for building releases, run: ```npm install```

Released versions are published through GitHub site pages, which are served out from
the gh-pages branch.  Following git-flow conventions, this should be an exact
replica of the master branch.  As a convenience, to update the gh-pages branch
from master and push it to github, you may want to configure the following alias
in your ``.git/config`` for this project:

    [alias]
        publish-pages = "!rm -rf build && git checkout gh-pages && git merge master && grunt && git add 'build/*' && git commit 'build/*' -m 'Latest build' && git push origin gh-pages && git checkout -"

Whenever you tag a new release you want to be available as a version that
can be included from the github pages url, you should do the following (or use
the alias above):
- update the version number in package.json
- use gitflow to tag the release
- checkout gh-pages branch, update from master and run ```grunt```
- add the build version of annotator.meltdown.min.js and css to gh-pages branch

