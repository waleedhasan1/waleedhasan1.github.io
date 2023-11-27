const spec1 = {
  "config": {"view": {"continuousWidth": 400, "continuousHeight": 300}},
  "vconcat": [
    {
      "mark": "circle",
      "encoding": {
        "color": {
          "field": "temp",
          "legend": {"title": "Mean Temperature"},
          "scale": {"domainMid": 32, "scheme": "blueorange"},
          "type": "quantitative"
        },
        "size": {
          "field": "wind",
          "scale": {"domain": [1, 20], "range": [1, 500]},
          "type": "quantitative"
        },
        "tooltip": [
          {"field": "date", "type": "temporal"},
          {"field": "name", "type": "nominal"},
          {"field": "temp", "type": "quantitative"},
          {"field": "wind", "type": "quantitative"}
        ],
        "x": {
          "field": "date",
          "timeUnit": "yearmonthdate",
          "title": "Date",
          "type": "temporal"
        },
        "y": {
          "field": "temp",
          "title": "Mean Temperature in 2020 (F)",
          "type": "quantitative"
        }
      },
      "height": 300,
      "selection": {
        "selector001": {
          "type": "interval",
          "encodings": ["x"],
          "on": "[mousedown[event.altKey], mouseup] > mousemove",
          "translate": "[mousedown[event.altKey], mouseup] > mousemove!",
          "zoom": "wheel![event.altKey]"
        },
        "selector002": {
          "type": "interval",
          "bind": "scales",
          "on": "[mousedown[event.shiftKey], mouseup] > mousemove",
          "translate": "[mousedown[event.shiftKey], mouseup] > mousemove!",
          "zoom": "wheel![event.shiftKey]"
        }
      },
      "transform": [{"filter": "(datum.name === 'CENTRAL PARK')"}],
      "width": 550
    },
    {
      "mark": "bar",
      "encoding": {
        "color": {
          "aggregate": "mean",
          "field": "temp",
          "scale": {"domainMid": 32, "scheme": "blueorange"},
          "type": "quantitative"
        },
        "x": {
          "aggregate": "mean",
          "field": "temp",
          "title": "Mean Temperature (F)",
          "type": "quantitative"
        },
        "y": {
          "axis": {"labelLimit": 90},
          "field": "name",
          "sort": "-x",
          "title": "Station",
          "type": "nominal"
        }
      },
      "transform": [{"filter": {"selection": "selector001"}}],
      "width": 550
    }
  ],
  "data": {"name": "data-4bf92f20bca2380a554bd8a1bd1c7f21"},
  "title": "Mean Temperature Dashboard for NY",
  "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json",
  "datasets": {
    "data-4bf92f20bca2380a554bd8a1bd1c7f21": [
      {
        "date": "2020-08-18T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 65.5,
        "wind": 2.5
      },
      {
        "date": "2020-08-18T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 68.3,
        "wind": 2.7
      },
      {
        "date": "2020-08-18T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 64.6,
        "wind": 4.3
      },
      {
        "date": "2020-08-18T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 63.9,
        "wind": 4.9
      },
      {
        "date": "2020-08-17T00:00:00",
        "name": "ROCHESTER",
        "temp": 69.5,
        "wind": 6.9
      },
      {
        "date": "2020-08-17T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 72.7,
        "wind": 6.9
      },
      {
        "date": "2020-08-17T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 71.3,
        "wind": 5.4
      },
      {
        "date": "2020-08-17T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 64.7,
        "wind": 3
      },
      {
        "date": "2020-08-17T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 71.1,
        "wind": 3.1
      },
      {
        "date": "2020-08-16T00:00:00",
        "name": "ROCHESTER",
        "temp": 72.5,
        "wind": 5.7
      },
      {
        "date": "2020-08-16T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 73.5,
        "wind": 5.6
      },
      {
        "date": "2020-08-16T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 73.2,
        "wind": 5.2
      },
      {
        "date": "2020-08-16T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 65.7,
        "wind": 3.8
      },
      {
        "date": "2020-08-16T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 69.3,
        "wind": 7.5
      },
      {
        "date": "2020-08-15T00:00:00",
        "name": "ROCHESTER",
        "temp": 74.8,
        "wind": 10.2
      },
      {
        "date": "2020-08-15T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 70.9,
        "wind": 5.3
      },
      {
        "date": "2020-08-15T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 70.3,
        "wind": 5.3
      },
      {
        "date": "2020-08-15T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 76.2,
        "wind": 3.9
      },
      {
        "date": "2020-08-15T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 68.8,
        "wind": 7.3
      },
      {
        "date": "2020-08-14T00:00:00",
        "name": "ROCHESTER",
        "temp": 75.7,
        "wind": 5.5
      },
      {
        "date": "2020-08-14T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 75.3,
        "wind": 3.2
      },
      {
        "date": "2020-08-14T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 77.3,
        "wind": 8.5
      },
      {
        "date": "2020-08-14T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 78.1,
        "wind": 4.3
      },
      {
        "date": "2020-08-14T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 71.6,
        "wind": 3.6
      },
      {
        "date": "2020-08-13T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 73.3,
        "wind": 2.1
      },
      {
        "date": "2020-08-13T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 76.4,
        "wind": 1.6
      },
      {
        "date": "2020-08-13T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 77,
        "wind": 5.4
      },
      {
        "date": "2020-08-13T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 70.6,
        "wind": 1.5
      },
      {
        "date": "2020-08-12T00:00:00",
        "name": "ROCHESTER",
        "temp": 73.5,
        "wind": 7.6
      },
      {
        "date": "2020-08-12T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 73.8,
        "wind": 1.8
      },
      {
        "date": "2020-08-12T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 72.7,
        "wind": 5.8
      },
      {
        "date": "2020-08-12T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 74.5,
        "wind": 5.5
      },
      {
        "date": "2020-08-12T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 79.4,
        "wind": 3.7
      },
      {
        "date": "2020-08-11T00:00:00",
        "name": "ROCHESTER",
        "temp": 80.7,
        "wind": 8.8
      },
      {
        "date": "2020-08-11T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 79.6,
        "wind": 6.8
      },
      {
        "date": "2020-08-11T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 78.9,
        "wind": 11.5
      },
      {
        "date": "2020-08-11T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 81.6,
        "wind": 3
      },
      {
        "date": "2020-08-11T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 74.8,
        "wind": 6.5
      },
      {
        "date": "2020-08-10T00:00:00",
        "name": "ROCHESTER",
        "temp": 79.7,
        "wind": 7.2
      },
      {
        "date": "2020-08-10T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 75.5,
        "wind": 2.8
      },
      {
        "date": "2020-08-10T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 74.8,
        "wind": 6.8
      },
      {
        "date": "2020-08-10T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 78.9,
        "wind": 3.8
      },
      {
        "date": "2020-08-10T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 71.4,
        "wind": 1.9
      },
      {
        "date": "2020-08-09T00:00:00",
        "name": "ROCHESTER",
        "temp": 73.6,
        "wind": 8.7
      },
      {
        "date": "2020-08-09T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 71.5,
        "wind": 0.7
      },
      {
        "date": "2020-08-09T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 70,
        "wind": 5.5
      },
      {
        "date": "2020-08-09T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 69.5,
        "wind": 1.7
      },
      {
        "date": "2020-08-09T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 73.2,
        "wind": 1
      },
      {
        "date": "2020-08-08T00:00:00",
        "name": "ROCHESTER",
        "temp": 72.7,
        "wind": 5.2
      },
      {
        "date": "2020-08-08T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 69.9,
        "wind": 2.2
      },
      {
        "date": "2020-08-08T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 70.4,
        "wind": 2
      },
      {
        "date": "2020-08-08T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 67.3,
        "wind": 1.2
      },
      {
        "date": "2020-08-08T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 70.4,
        "wind": 2.8
      },
      {
        "date": "2020-08-07T00:00:00",
        "name": "ROCHESTER",
        "temp": 69.8,
        "wind": 5.7
      },
      {
        "date": "2020-08-07T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 68.2,
        "wind": 2.9
      },
      {
        "date": "2020-08-07T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 73.1,
        "wind": 3.2
      },
      {
        "date": "2020-08-07T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 71.2,
        "wind": 6.2
      },
      {
        "date": "2020-08-07T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 64.2,
        "wind": 2.5
      },
      {
        "date": "2020-08-06T00:00:00",
        "name": "ROCHESTER",
        "temp": 67.5,
        "wind": 6.2
      },
      {
        "date": "2020-08-06T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 65.1,
        "wind": 3.3
      },
      {
        "date": "2020-08-06T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 64.2,
        "wind": 3.6
      },
      {
        "date": "2020-08-06T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 60.7,
        "wind": 0.6
      },
      {
        "date": "2020-08-06T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 76.8,
        "wind": 1
      },
      {
        "date": "2020-08-05T00:00:00",
        "name": "ROCHESTER",
        "temp": 69,
        "wind": 9.9
      },
      {
        "date": "2020-08-05T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 71.8,
        "wind": 9
      },
      {
        "date": "2020-08-05T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 68.9,
        "wind": 10
      },
      {
        "date": "2020-08-05T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 78.9,
        "wind": 4.4
      },
      {
        "date": "2020-08-05T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 69.5,
        "wind": 8.1
      },
      {
        "date": "2020-08-04T00:00:00",
        "name": "ROCHESTER",
        "temp": 71.5,
        "wind": 4.5
      },
      {
        "date": "2020-08-04T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 71.8,
        "wind": 6.4
      },
      {
        "date": "2020-08-04T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 74.3,
        "wind": 5.1
      },
      {
        "date": "2020-08-04T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 71.1,
        "wind": 3.8
      },
      {
        "date": "2020-08-04T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 68.9,
        "wind": 5.1
      },
      {
        "date": "2020-08-03T00:00:00",
        "name": "ROCHESTER",
        "temp": 72.6,
        "wind": 12.2
      },
      {
        "date": "2020-08-03T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 77.1,
        "wind": 11.6
      },
      {
        "date": "2020-08-03T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 82.6,
        "wind": 4.3
      },
      {
        "date": "2020-08-03T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 73.2,
        "wind": 10.8
      },
      {
        "date": "2020-08-03T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 76,
        "wind": 8.7
      },
      {
        "date": "2020-08-02T00:00:00",
        "name": "ROCHESTER",
        "temp": 77.8,
        "wind": 11.6
      },
      {
        "date": "2020-08-02T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 78.5,
        "wind": 9
      },
      {
        "date": "2020-08-02T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 80.7,
        "wind": 3.9
      },
      {
        "date": "2020-08-02T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 76.8,
        "wind": 12
      },
      {
        "date": "2020-08-02T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 75.4,
        "wind": 7.2
      },
      {
        "date": "2020-08-01T00:00:00",
        "name": "ROCHESTER",
        "temp": 73,
        "wind": 5.9
      },
      {
        "date": "2020-08-01T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 74.8,
        "wind": 2.8
      },
      {
        "date": "2020-08-01T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 78.3,
        "wind": 1.1
      },
      {
        "date": "2020-08-01T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 75.2,
        "wind": 5.1
      },
      {
        "date": "2020-08-01T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 74.1,
        "wind": 2.9
      },
      {
        "date": "2020-07-31T00:00:00",
        "name": "ROCHESTER",
        "temp": 71.9,
        "wind": 4.9
      },
      {
        "date": "2020-07-31T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 70.7,
        "wind": 3
      },
      {
        "date": "2020-07-31T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 74.4,
        "wind": 1.9
      },
      {
        "date": "2020-07-31T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 73.4,
        "wind": 3.6
      },
      {
        "date": "2020-07-31T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 69.5,
        "wind": 4.4
      },
      {
        "date": "2020-07-30T00:00:00",
        "name": "ROCHESTER",
        "temp": 71.5,
        "wind": 7.9
      },
      {
        "date": "2020-07-30T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 67.6,
        "wind": 1.8
      },
      {
        "date": "2020-07-30T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 67.7,
        "wind": 3.6
      },
      {
        "date": "2020-07-30T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 81.1,
        "wind": 2
      },
      {
        "date": "2020-07-30T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 74.5,
        "wind": 5.4
      },
      {
        "date": "2020-07-29T00:00:00",
        "name": "ROCHESTER",
        "temp": 75.3,
        "wind": 8.9
      },
      {
        "date": "2020-07-29T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 72.6,
        "wind": 4.2
      },
      {
        "date": "2020-07-29T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 75.3,
        "wind": 9.6
      },
      {
        "date": "2020-07-29T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 71.2,
        "wind": 3.2
      },
      {
        "date": "2020-07-29T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 82.3,
        "wind": 1.1
      },
      {
        "date": "2020-07-28T00:00:00",
        "name": "ROCHESTER",
        "temp": 77.5,
        "wind": 9.8
      },
      {
        "date": "2020-07-28T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 78.8,
        "wind": 8
      },
      {
        "date": "2020-07-28T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 76,
        "wind": 5.6
      },
      {
        "date": "2020-07-28T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 77.6,
        "wind": 10
      },
      {
        "date": "2020-07-28T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 85.5,
        "wind": 5.4
      },
      {
        "date": "2020-07-27T00:00:00",
        "name": "ROCHESTER",
        "temp": 80.5,
        "wind": 12.1
      },
      {
        "date": "2020-07-27T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 82.4,
        "wind": 9.9
      },
      {
        "date": "2020-07-27T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 79.2,
        "wind": 5.3
      },
      {
        "date": "2020-07-27T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 80.4,
        "wind": 13.4
      },
      {
        "date": "2020-07-27T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 85.1,
        "wind": 4.4
      },
      {
        "date": "2020-07-26T00:00:00",
        "name": "ROCHESTER",
        "temp": 79.1,
        "wind": 9.3
      },
      {
        "date": "2020-07-26T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 71.9,
        "wind": 1.2
      },
      {
        "date": "2020-07-26T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 70.6,
        "wind": 5.3
      },
      {
        "date": "2020-07-26T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 73.2,
        "wind": 6.6
      },
      {
        "date": "2020-07-26T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 80.1,
        "wind": 4.2
      },
      {
        "date": "2020-07-25T00:00:00",
        "name": "ROCHESTER",
        "temp": 74,
        "wind": 3.1
      },
      {
        "date": "2020-07-25T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 75.7,
        "wind": 2.2
      },
      {
        "date": "2020-07-25T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 77.4,
        "wind": 3.7
      },
      {
        "date": "2020-07-25T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 73.4,
        "wind": 2.4
      },
      {
        "date": "2020-07-25T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 79.1,
        "wind": 2.5
      },
      {
        "date": "2020-07-24T00:00:00",
        "name": "ROCHESTER",
        "temp": 73.7,
        "wind": 5.4
      },
      {
        "date": "2020-07-24T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 75.5,
        "wind": 3.4
      },
      {
        "date": "2020-07-24T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 77,
        "wind": 3.1
      },
      {
        "date": "2020-07-24T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 76.1,
        "wind": 4.4
      },
      {
        "date": "2020-07-24T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 72.6,
        "wind": 3.8
      },
      {
        "date": "2020-07-23T00:00:00",
        "name": "ROCHESTER",
        "temp": 75.6,
        "wind": 6.8
      },
      {
        "date": "2020-07-23T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 73.9,
        "wind": 2.8
      },
      {
        "date": "2020-07-23T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 77.1,
        "wind": 8.3
      },
      {
        "date": "2020-07-23T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 68.5,
        "wind": 1.2
      },
      {
        "date": "2020-07-23T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 72.9,
        "wind": 3.5
      },
      {
        "date": "2020-07-22T00:00:00",
        "name": "ROCHESTER",
        "temp": 72.8,
        "wind": 5.4
      },
      {
        "date": "2020-07-22T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 69.8,
        "wind": 1.5
      },
      {
        "date": "2020-07-22T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 72.1,
        "wind": 5.1
      },
      {
        "date": "2020-07-22T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 68.3,
        "wind": 2.2
      },
      {
        "date": "2020-07-22T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 79.1,
        "wind": 1.6
      },
      {
        "date": "2020-07-21T00:00:00",
        "name": "ROCHESTER",
        "temp": 71.8,
        "wind": 7.5
      },
      {
        "date": "2020-07-21T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 72.7,
        "wind": 6
      },
      {
        "date": "2020-07-21T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 70.6,
        "wind": 2.6
      },
      {
        "date": "2020-07-21T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 73.3,
        "wind": 6.4
      },
      {
        "date": "2020-07-21T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 83,
        "wind": 1.6
      },
      {
        "date": "2020-07-20T00:00:00",
        "name": "ROCHESTER",
        "temp": 79.1,
        "wind": 10.4
      },
      {
        "date": "2020-07-20T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 78.9,
        "wind": 7.5
      },
      {
        "date": "2020-07-20T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 83,
        "wind": 3.7
      },
      {
        "date": "2020-07-20T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 77.5,
        "wind": 5.7
      },
      {
        "date": "2020-07-20T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 77.2,
        "wind": 11.9
      },
      {
        "date": "2020-07-19T00:00:00",
        "name": "ROCHESTER",
        "temp": 81.6,
        "wind": 9.8
      },
      {
        "date": "2020-07-19T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 80.5,
        "wind": 6.8
      },
      {
        "date": "2020-07-19T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 79.9,
        "wind": 10.2
      },
      {
        "date": "2020-07-19T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 83.8,
        "wind": 3.2
      },
      {
        "date": "2020-07-19T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 77.2,
        "wind": 5.3
      },
      {
        "date": "2020-07-18T00:00:00",
        "name": "ROCHESTER",
        "temp": 78,
        "wind": 7.3
      },
      {
        "date": "2020-07-18T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 76.4,
        "wind": 4.5
      },
      {
        "date": "2020-07-18T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 73.2,
        "wind": 2.5
      },
      {
        "date": "2020-07-18T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 76.8,
        "wind": 8.3
      },
      {
        "date": "2020-07-18T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 80.9,
        "wind": 1.5
      },
      {
        "date": "2020-07-17T00:00:00",
        "name": "ROCHESTER",
        "temp": 74.1,
        "wind": 12.6
      },
      {
        "date": "2020-07-17T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 71.7,
        "wind": 8.9
      },
      {
        "date": "2020-07-17T00:00:00",
        "name": "ALBANY INTERNATIONAL AIRPORT",
        "temp": 67.4,
        "wind": 11.6
      },
      {
        "date": "2020-07-17T00:00:00",
        "name": "BUFFALO NIAGARA INTERNATIONAL",
        "temp": 75.6,
        "wind": 7.6
      },
      {
        "date": "2020-07-17T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 69.6,
        "wind": 3.4
      },
      {
        "date": "2020-07-16T00:00:00",
        "name": "ROCHESTER",
        "temp": 76.1,
        "wind": 10.5
      },
      {
        "date": "2020-07-16T00:00:00",
        "name": "SYRACUSE HANCOCK INTERNATIONA",
        "temp": 74.8,
        "wind": 9.1
      },
      {
        "date": "2020-07-16T00:00:00",
        "name": "CENTRAL PARK",
        "temp": 72.6,
        "wind": 3.5
      }
    ]
  }
};
vegaEmbed("#vis1", spec1);
/*
const spec2 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: {
    values: [
      { category: "A", group: "x", value: 0.1 },
      { category: "A", group: "y", value: 0.6 },
      { category: "A", group: "z", value: 0.9 },
      { category: "B", group: "x", value: 0.7 },
      { category: "B", group: "y", value: 0.2 },
      { category: "B", group: "z", value: 1.1 },
      { category: "C", group: "x", value: 0.6 },
      { category: "C", group: "y", value: 0.1 },
      { category: "C", group: "z", value: 0.2 },
    ],
  },
  mark: "bar",
  encoding: {
    x: { field: "category" },
    y: { field: "value", type: "quantitative" },
    xOffset: { field: "group" },
    color: { field: "group" },
  },
};
vegaEmbed("#vis2", spec2);

const spec3 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: {
    url: "https://cdn.jsdelivr.net/npm/vega-datasets@latest/data/seattle-weather.csv",
  },
  mark: "bar",

  encoding: {
    x: {
      timeUnit: "month",
      field: "date",
      type: "ordinal",
      title: "Month of the year",
    },
    y: {
      aggregate: "count",
      type: "quantitative",
    },
    color: {
      field: "weather",
      type: "nominal",
      scale: {
        domain: ["sun", "fog", "drizzle", "rain", "snow"],
        range: ["#e7ba52", "#c7c7c7", "#aec7e8", "#1f77b4", "#9467bd"],
      },
      title: "Weather type",
    },
  },
};
vegaEmbed("#vis3", spec3);

const spec4 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: {
    url: "https://cdn.jsdelivr.net/npm/vega-datasets@latest/data/seattle-weather.csv",
  },
  mark: { type: "bar", cornerRadiusTopLeft: 3, cornerRadiusTopRight: 3 },
  encoding: {
    x: { timeUnit: "month", field: "date", type: "ordinal" },
    y: { aggregate: "count" },
    color: { field: "weather" },
  },
};
vegaEmbed("#vis4", spec4);

const spec5 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description: "Google's stock price over time.",
  data: {
    url: "https://cdn.jsdelivr.net/npm/vega-datasets@latest/data/stocks.csv",
  },
  transform: [{ filter: "datum.symbol==='GOOG'" }],
  mark: "line",
  encoding: {
    x: { field: "date", type: "temporal" },
    y: { field: "price", type: "quantitative" },
  },
};
vegaEmbed("#vis5", spec5);

const spec6 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description: "Stock prices of 5 Tech Companies over Time.",
  data: {
    url: "https://cdn.jsdelivr.net/npm/vega-datasets@latest/data/stocks.csv",
  },
  mark: {
    type: "line",
    point: true,
  },
  encoding: {
    x: { timeUnit: "year", field: "date" },
    y: { aggregate: "mean", field: "price", type: "quantitative" },
    color: { field: "symbol", type: "nominal" },
  },
};
vegaEmbed("#vis6", spec6);
*/