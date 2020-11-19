import {Formatter} from '../../src/util/formatter'

describe('Formatter', () => {
  let subject
  let format
  let box

  beforeEach(() => {
    let panel = { format: 'custom', decimals: 2 }
    format = jasmine.createSpy().and.returnValue('custom')

    let kbn = { valueFormats: {
      custom: format, number2: () => { return '5%' }
    } }

    subject = new Formatter(panel, kbn)
    box = { number: 5, number2: 10 }
  })

  describe('call', () => {
    it('formats the number2 as a number2', () => {
      subject.call(box)
      expect(box.number2).toEqual('5%')
    })

    it('formats the number with a given format', () => {
      subject.call(box)
      expect(box.number).toEqual('custom')
      expect(format).toHaveBeenCalledWith(5, 2, null)
    })
  })
})
