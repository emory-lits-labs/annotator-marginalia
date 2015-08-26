# annotator-marginalia
Annotator.js plugin for creating and displaying annotations in the margin of a page.

Marginalia is developed for [Annotator 2.x](https://github.com/openannotation/annotator/releases)

##Dependancies
* jQuery 1.8+
* Annotator.js
* [Font Awesome](https://github.com/FortAwesome/Font-Awesome) icons for the
editing dropdown menu and the toggle button.

##Using Marginalia
To use marginalia with your Annotator project, add it to the app initiation as
any other plugin:
`app.include(annotatorMarginalia);`

Marginalia assumes some structural requirements for the annotation margins to
appear correctly. The class names  for the outer and inner elements can be
configured in the option parameters.

    <div class="in-page-controls"></div> <!--control container-->

    <article class="content"> <!--outer_element-->
      <section class="inner"> <!--inner_element-->
      </section>
    </article>

##Configuration options

* outer_element: default `'.content'`
* inner_element: default `'.inner'`
* margin_class: default `'margin-container'`

##Editor Extension
Marginalia has an optional annotator editorExtension included.
This extension is based on annotator.ui.tags.editorExtension and is used to
create comma separated list of tags when editing. Add the extension to the
`editorExtensions` options on the `annotator.ui.main`
    
    var _marginalia = annotatorMarginalia();
    editorExtensions: [
        _marginalia.editorExtension
    ]
