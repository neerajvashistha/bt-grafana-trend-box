'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Styler = exports.Styler = function () {
  function Styler(panel) {
    _classCallCheck(this, Styler);

    this.panel = panel;
  }

  _createClass(Styler, [{
    key: 'call',
    value: function call(box, container, title, header, menu) {
      container.css('background-color', box.color);
      title.css('font-size', this.panel.titleSize);
      header.css('max-height', '27px');
      menu.css('font-size', '13px');

      var percentAttributes = this._percentStyle(box.percent);
      box.percentStyle = percentAttributes.style;
      box.percent = percentAttributes.value;
      box.numberStyle = this._numberStyle();
    }
  }, {
    key: '_percentStyle',
    value: function _percentStyle(percent) {
      percent = parseInt(percent);
      this.panel.percentSize = '20px';
      if(percent >= 0){
        return {style: { 'font-weight': 'bold', 'font-size': this.panel.percentSize, 'color': 'green'}, value: percent + "\u25B2"};
      }else{
        return {style: { 'font-weight': 'bold', 'font-size': this.panel.percentSize, 'color': 'red'}, value: percent + "\u25BC"};
      }
    }
  }, {
    key: '_numberStyle',
    value: function _numberStyle() {
      return { 'font-size': this.panel.numberSize };
    }
  }]);

  return Styler;
}();
