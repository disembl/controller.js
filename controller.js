function update(e, t, n) {
  $("[controller=" + e + "] > [model=" + t + "]")
  .each(function (e) {
    if ($(this).is("input")) {
      $(this).val(n);
    } else {
      $(this).html(n);
    }
  });
}

function bind() {
  $("[controller]").each(function () {
    var e = $(this);
    var t = e.attr("controller");
    if (window[t]) {
      var n = new window[t]();
    } else {
      var n = {};
    }$("[controller=" + t + "] > [model]")
    .each(function () {
      var e = $(this);
      var r = e.attr("model");
      if (e.is("input")) {
        e.val(n[r]);
      } else {
        e.html(n[r]);
      }(function (t, n) {
        e.keyup(function (e) {
          var r = $(this).val();
          update(t, n, r);
        });
      })(t, r);
    });
  });
}
