var cancellable = function(fn, args, t) {
  var timeoutId = setTimeout(function() {
    fn.apply(null, args);
  }, t);

  var cancelFn = function() {
    clearTimeout(timeoutId);
  };

  return cancelFn;
};
