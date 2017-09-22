'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Presenter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Presenter = exports.Presenter = function () {
  function Presenter(options) {
    _classCallCheck(this, Presenter);

    this.options = options;
  }

  _createClass(Presenter, [{
    key: 'call',
    value: function call(box) {
      box.percentChange = this._percentChangeFor(box);
      box.color = this._colorFor(box.percentChange);
    }
  }, {
    key: '_colorFor',
    value: function _colorFor(percentChange) {
      var thresholds = this.options.thresholds.concat().sort(function (a, b) {
        return b.value - a.value;
      });
      var threshold = _lodash2.default.find(thresholds, function (threshold) {
        return percentChange >= threshold.value;
      });
      return threshold ? threshold.color : this.options.defaultColor;
    }
  }, {
    key: '_percentChangeFor',
    value: function _percentChangeFor(box) {
      var change = box.latestValue - box.oldestValue;
      return change / box.oldestValue * 100;
    }
  }]);

  return Presenter;
}();
