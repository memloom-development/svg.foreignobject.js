# svg.foreignobject.js

A plugin for the [svgjs.com](http://svgjs.com) library to create foreign object elements in svg.

See [SVG Documentation on the foreignObject element](http://www.w3.org/TR/SVG/extend.html#ForeignObjectElement) for more details.

Svg.foreignobject.js is licensed under the terms of the MIT License.

## Usage
Include this plugin after including the svg.js library in your html document.

To add a foreignobject

```javascript
var canvas = SVG('canvas').size(1024, 550)
var fobj = canvas.foreignObject(100,100).attr({id: 'fobj'})
```

To add a child note

```javascript
var txt = "some text that is quite long.  and it goes on and on.  and it's pointless really.  and the grammar is terrible.  blah. blah. blah"
fobj.appendChild("div", {id: 'mydiv', innerText: txt})
```

The first argument to appendChild is either a node or a string describing the type of element to create.  The second argument is a list of attributes to set on the element.

Note that the foreignObject element can be manipulated with the standard svg.js methods (move(), rotate(), scale() etc.), whereas the contained node can be manipulated separately.  For example if you embed a HTML element you can use jQuery (or whaever you choose) to manipulate the embedded object.

## Example
See the provided sample.html

## Dependencies
This plugin requires svg.js v0.12.