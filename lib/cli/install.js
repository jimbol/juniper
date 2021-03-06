var applyEach, nginx, repos, series, _ref, _ref1;

_ref = require('../tasks'), nginx = _ref.nginx, repos = _ref.repos;

_ref1 = require('async'), applyEach = _ref1.applyEach, series = _ref1.series;

module.exports = function(siteName, done) {
  if (siteName != null) {
    return applyEach([nginx.installOne, repos.installOne], siteName, function() {
      return typeof done === "function" ? done() : void 0;
    });
  } else {
    return series([nginx.install, repos.install], function() {
      return typeof done === "function" ? done() : void 0;
    });
  }
};
