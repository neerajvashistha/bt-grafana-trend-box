export class Formatter {
  constructor (panel, kbn) {
    this.panel = panel
    this.kbn = kbn
  }

  call (box) {
    box.number2 = this._format(box.number2, 'number2')
    box.number = this._format(box.number, this.panel.format)
  }

  _format (value, format) {
    var formatFunc = this.kbn.valueFormats[format]
    return formatFunc(value, this.panel.decimals, null)
  }
}
