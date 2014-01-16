controller.js
=============

simple data-binding

Controller.js is an extremely simple data binding library, with an angularjs-like controller methodology.

### Installation
`<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>`
`<script src='path/to/controller.js'></script>`

### Use
```
<div controller='myCtrl'>
  <input model='name'><br>
  Hello <span model='name'></span>!<br>
</div>
<script>
  function myCtrl () {
    this.name = 'Bob';
  }
  bind();
</script>
```

### Dependencies
JQuery

### Goals
* Remove JQuery dependency.
* Support for more complicated model expressions

