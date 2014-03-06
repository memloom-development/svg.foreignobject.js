SVG.ForeignObject = function() {
  this.constructor.call(this, SVG.create('foreignObject'))
  
  /* store type */
  this.type = 'foreignObject';
}

SVG.ForeignObject.prototype = new SVG.Shape;

SVG.extend(SVG.ForeignObject, {
  appendChild: function (child, attrs) {
    var newChild = typeof(child)=='string' ? document.createElement(child) : child;
    if (typeof(attrs)=='object'){
      for(a in attrs) {
        var attrNode = document.createAttribute(a);
        attrNode.nodeValue = attrs[a];
        newChild.setAttributeNode(attrNode);
      }
    }
    this.node.appendChild(newChild);
    return this;
  },
  getChild: function (index) {
    return this.node.childNodes[index];
  }
});

SVG.extend(SVG.Container, {
  foreignObject: function(width, height) {
    return this.put(new SVG.ForeignObject).size(width == null ? 100 : width, height == null ? 100 : height);
  }
});
