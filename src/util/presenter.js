import _ from 'lodash'

export class Presenter {
  constructor (panel) {
    this.panel = panel
  }

  call (box) {
    box.color = this._color(box.number2)
  }

  _color (number2) {
    var ts = _.sortBy(this.panel.thresholds, t => this._value(t))
    var threshold = _.find(_.reverse(ts), t => number2 >= this._value(t))
    return threshold ? threshold.color : this.panel.defaultColor
  }

  _value (threshold) {
    return parseFloat(threshold.value)
  }
}
