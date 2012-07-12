/**
 * @fileoverview Appends the CSS content to the end of the <head> tag
 */
define([], function () {
  return function (runtime, params, callback) {
    params.content = runtime.headAppend(
      params.content,
      '<style type="text/css">' +
      (params.options.css || '') +
      '</style>');
    callback(null, params.content);
  };
});
