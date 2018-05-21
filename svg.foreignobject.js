SVG.ForeignObject = SVG.invent({
  // Initialize node
  create: 'foreignObject'

  // Inherit from
, inherit: SVG.Shape
    
  // Add parent method
, construct: {
    // Create a rect element
    foreignObject: function(width, height) {
      return this.put(new SVG.ForeignObject()).size(width, height)
    }
  }
, extend: {
  appendChild: function (child, attrs) {
    var newChild = typeof(child)=='string' ? document.createElement(child) : child
    if (typeof(attrs)=='object'){
      for(a in attrs) newChild[a] = attrs[a]
    }
    this.node.appendChild(newChild)
    return this  
  },
  getChild: function (index) {
    return this.node.childNodes[index]
  }
}
});