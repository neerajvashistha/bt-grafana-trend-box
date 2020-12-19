export class Styler {
  constructor (panel) {
    this.panel = panel
  }

  call (box, container, title, header, menu) {
    container.css('background-color', box.color)
    title.css('font-size', this.panel.titleSize)
    header.css('max-height', '27px')
    menu.css('font-size', '13px')

    box.percentStyle = this._percentStyle()
    box.numberStyle = this._numberStyle()
  }

  _percentStyle () {
    percent = parseInt(percent);
      this.panel.percentSize = '20px';
      if(percent >= 0){
        return {style: { 'font-weight': 'bold', 'font-size': this.panel.percentSize, 'color': 'green'}, value: percent + "\u25B2"};
      }else{
        return {style: { 'font-weight': 'bold', 'font-size': this.panel.percentSize, 'color': 'red'}, value: percent + "\u25BC"};
      }
  }

  _numberStyle () {
    return { 'font-size': this.panel.numberSize }
  }
}
