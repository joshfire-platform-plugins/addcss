// DEPRECATED (2012-07-12): to be removed once new add-ons system is up
module.exports = {
  "startfile":function(runtime, params, callback) {
    callback(null, params["content"].replace("</head>","<style type='text/css'>"+(params.options.css||"")+"</style></head>"));
  }
};