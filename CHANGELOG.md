# Changelog

## 0.3

* Highlight an annotation on load when a page is accessed with an anchor text corresponding to
   an annotation id.

## 0.2.3

* Improved editor window placement relative to marginalia item.

## 0.2.2

* Fix positioning and click bindings after re-rendering an updated annotation.

## 0.2.1

* Use existing `renderAnnotation` method when updating an existing annotation; fixes an
   issue with `renderExtensions` method only being run on initial display and not update.

## 0.2

* New `renderExtensions` option for customizing and extending
   marginalia item display

## 0.1.2

* Document bootstrap.dropdown as a separate include

## 0.1.1

* New option to make toggle button class configurable

## 0.1 - Initial Release

* View annotations in the margin
* Selecting highlight or annotation will highlight both and scroll the
  annotation to make it visible
* Optional support for footer with last modified timestamp using moment.js
* Optional support for displaying annotation author in a footer
