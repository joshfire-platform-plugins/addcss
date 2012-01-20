module.exports = {
  "startfile":function(runtime, params, callback) {
    callback(null, params["content"].replace("</head>","<style type='text/css'>"+(params.options.css||"")+"</style></head>"));
  }
};