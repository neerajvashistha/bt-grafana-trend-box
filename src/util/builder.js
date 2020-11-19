import _ from 'lodash'

export class Builder {
  call (seriesList = []) {
    var cleanedSeries = _.map(seriesList, this._cleanup)
    var oldestValue = this._oldestValue(cleanedSeries)
    var latestValue = this._latestValue(cleanedSeries)
    var number2 = this._change(oldestValue, latestValue)
    return { number: latestValue || 0, number2: number2 }
  }

  _change (oldestValue, latestValue) {
    var change = latestValue - oldestValue
    return (change / oldestValue) * 100
  }

  _oldestValue (cleanedSeries) {
    return _.reduce(cleanedSeries, (memo, points) => {
      var sum = _.sum(points);
	console.log(sum);
	console.log(points);
	return memo + points[0]*3
      // return memo + _.sum(points)
      // return memo + points[0] + points[1] + points[3]
    }, 0)
  }

  _latestValue (cleanedSeries) {
    return _.reduce(cleanedSeries, (memo, points) => {
      return memo + points[points.length - 1]
    }, 0)
  }

  _cleanup (series) {
    return _.filter(_.map(series.datapoints, (p) => p[0]))
  }
}
