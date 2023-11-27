const spec1 = {
  "config": {"view": {"continuousWidth": 300, "continuousHeight": 300}},
  "layer": [
    {
      "mark": {"type": "line"},
      "encoding": {
        "x": {"field": "VIOLATION DATE", "type": "ordinal"},
        "y": {"field": "cameras count", "type": "quantitative"}
      }
    },
    {
      "mark": {"type": "rule", "color": "#aaa"},
      "encoding": {"x": {"field": "VIOLATION DATE", "type": "temporal"}},
      "transform": [{"filter": {"param": "param_57", "empty": false}}]
    },
    {
      "mark": {"type": "circle"},
      "encoding": {
        "opacity": {
          "condition": {"param": "param_57", "value": 1, "empty": false},
          "value": 0
        },
        "x": {"field": "VIOLATION DATE", "type": "ordinal"},
        "y": {"field": "cameras count", "type": "quantitative"}
      },
      "name": "view_52"
    },
    {
      "mark": {
        "type": "text",
        "align": "left",
        "dx": 5,
        "dy": -5,
        "stroke": "white",
        "strokeWidth": 2
      },
      "encoding": {
        "text": {"field": "cameras count", "type": "quantitative"},
        "x": {"field": "VIOLATION DATE", "type": "ordinal"},
        "y": {"field": "cameras count", "type": "quantitative"}
      },
      "transform": [{"filter": {"param": "param_57", "empty": false}}]
    },
    {
      "mark": {"type": "text", "align": "left", "dx": 5, "dy": -5},
      "encoding": {
        "text": {"field": "cameras count", "type": "quantitative"},
        "x": {"field": "VIOLATION DATE", "type": "ordinal"},
        "y": {"field": "cameras count", "type": "quantitative"}
      },
      "transform": [{"filter": {"param": "param_57", "empty": false}}]
    }
  ],
  "data": {"name": "data-ce5effecce8e156b3e2e83213084a6ad"},
  "height": 400,
  "params": [
    {
      "name": "param_57",
      "select": {
        "type": "point",
        "encodings": ["x"],
        "nearest": true,
        "on": "mouseover"
      },
      "views": ["view_52"]
    }
  ],
  "width": 700,
  "$schema": "https://vega.github.io/schema/vega-lite/v5.15.1.json",
  "datasets": {
    "data-ce5effecce8e156b3e2e83213084a6ad": [
      {
        "index": 8,
        "VIOLATION DATE": "2023-01-01T00:00:00",
        "cameras count": 73
      },
      {
        "index": 17,
        "VIOLATION DATE": "2023-01-02T00:00:00",
        "cameras count": 75
      },
      {
        "index": 26,
        "VIOLATION DATE": "2023-01-03T00:00:00",
        "cameras count": 77
      },
      {
        "index": 35,
        "VIOLATION DATE": "2023-01-04T00:00:00",
        "cameras count": 83
      },
      {
        "index": 44,
        "VIOLATION DATE": "2023-01-05T00:00:00",
        "cameras count": 83
      },
      {
        "index": 53,
        "VIOLATION DATE": "2023-01-06T00:00:00",
        "cameras count": 84
      },
      {
        "index": 62,
        "VIOLATION DATE": "2023-01-07T00:00:00",
        "cameras count": 74
      },
      {
        "index": 71,
        "VIOLATION DATE": "2023-01-08T00:00:00",
        "cameras count": 74
      },
      {
        "index": 80,
        "VIOLATION DATE": "2023-01-09T00:00:00",
        "cameras count": 140
      },
      {
        "index": 89,
        "VIOLATION DATE": "2023-01-10T00:00:00",
        "cameras count": 143
      },
      {
        "index": 98,
        "VIOLATION DATE": "2023-01-11T00:00:00",
        "cameras count": 141
      },
      {
        "index": 107,
        "VIOLATION DATE": "2023-01-12T00:00:00",
        "cameras count": 141
      },
      {
        "index": 116,
        "VIOLATION DATE": "2023-01-13T00:00:00",
        "cameras count": 135
      },
      {
        "index": 125,
        "VIOLATION DATE": "2023-01-14T00:00:00",
        "cameras count": 75
      },
      {
        "index": 134,
        "VIOLATION DATE": "2023-01-15T00:00:00",
        "cameras count": 75
      },
      {
        "index": 143,
        "VIOLATION DATE": "2023-01-16T00:00:00",
        "cameras count": 75
      },
      {
        "index": 152,
        "VIOLATION DATE": "2023-01-17T00:00:00",
        "cameras count": 137
      },
      {
        "index": 161,
        "VIOLATION DATE": "2023-01-18T00:00:00",
        "cameras count": 143
      },
      {
        "index": 170,
        "VIOLATION DATE": "2023-01-19T00:00:00",
        "cameras count": 142
      },
      {
        "index": 179,
        "VIOLATION DATE": "2023-01-20T00:00:00",
        "cameras count": 143
      },
      {
        "index": 188,
        "VIOLATION DATE": "2023-01-21T00:00:00",
        "cameras count": 74
      },
      {
        "index": 197,
        "VIOLATION DATE": "2023-01-22T00:00:00",
        "cameras count": 74
      },
      {
        "index": 206,
        "VIOLATION DATE": "2023-01-23T00:00:00",
        "cameras count": 142
      },
      {
        "index": 215,
        "VIOLATION DATE": "2023-01-24T00:00:00",
        "cameras count": 141
      },
      {
        "index": 224,
        "VIOLATION DATE": "2023-01-25T00:00:00",
        "cameras count": 137
      },
      {
        "index": 233,
        "VIOLATION DATE": "2023-01-26T00:00:00",
        "cameras count": 138
      },
      {
        "index": 242,
        "VIOLATION DATE": "2023-01-27T00:00:00",
        "cameras count": 132
      },
      {
        "index": 251,
        "VIOLATION DATE": "2023-01-28T00:00:00",
        "cameras count": 71
      },
      {
        "index": 260,
        "VIOLATION DATE": "2023-01-29T00:00:00",
        "cameras count": 71
      },
      {
        "index": 269,
        "VIOLATION DATE": "2023-01-30T00:00:00",
        "cameras count": 136
      },
      {
        "index": 278,
        "VIOLATION DATE": "2023-01-31T00:00:00",
        "cameras count": 138
      },
      {
        "index": 287,
        "VIOLATION DATE": "2023-02-01T00:00:00",
        "cameras count": 137
      },
      {
        "index": 296,
        "VIOLATION DATE": "2023-02-02T00:00:00",
        "cameras count": 137
      },
      {
        "index": 305,
        "VIOLATION DATE": "2023-02-03T00:00:00",
        "cameras count": 85
      },
      {
        "index": 314,
        "VIOLATION DATE": "2023-02-04T00:00:00",
        "cameras count": 71
      },
      {
        "index": 323,
        "VIOLATION DATE": "2023-02-05T00:00:00",
        "cameras count": 72
      },
      {
        "index": 332,
        "VIOLATION DATE": "2023-02-06T00:00:00",
        "cameras count": 138
      },
      {
        "index": 341,
        "VIOLATION DATE": "2023-02-07T00:00:00",
        "cameras count": 137
      },
      {
        "index": 350,
        "VIOLATION DATE": "2023-02-08T00:00:00",
        "cameras count": 136
      },
      {
        "index": 359,
        "VIOLATION DATE": "2023-02-09T00:00:00",
        "cameras count": 130
      },
      {
        "index": 368,
        "VIOLATION DATE": "2023-02-10T00:00:00",
        "cameras count": 135
      },
      {
        "index": 377,
        "VIOLATION DATE": "2023-02-11T00:00:00",
        "cameras count": 70
      },
      {
        "index": 386,
        "VIOLATION DATE": "2023-02-12T00:00:00",
        "cameras count": 69
      },
      {
        "index": 395,
        "VIOLATION DATE": "2023-02-13T00:00:00",
        "cameras count": 135
      },
      {
        "index": 404,
        "VIOLATION DATE": "2023-02-14T00:00:00",
        "cameras count": 136
      },
      {
        "index": 413,
        "VIOLATION DATE": "2023-02-15T00:00:00",
        "cameras count": 137
      },
      {
        "index": 422,
        "VIOLATION DATE": "2023-02-16T00:00:00",
        "cameras count": 131
      },
      {
        "index": 431,
        "VIOLATION DATE": "2023-02-17T00:00:00",
        "cameras count": 128
      },
      {
        "index": 440,
        "VIOLATION DATE": "2023-02-18T00:00:00",
        "cameras count": 72
      },
      {
        "index": 449,
        "VIOLATION DATE": "2023-02-19T00:00:00",
        "cameras count": 72
      },
      {
        "index": 458,
        "VIOLATION DATE": "2023-02-20T00:00:00",
        "cameras count": 72
      },
      {
        "index": 467,
        "VIOLATION DATE": "2023-02-21T00:00:00",
        "cameras count": 136
      },
      {
        "index": 476,
        "VIOLATION DATE": "2023-02-22T00:00:00",
        "cameras count": 134
      },
      {
        "index": 485,
        "VIOLATION DATE": "2023-02-23T00:00:00",
        "cameras count": 136
      },
      {
        "index": 494,
        "VIOLATION DATE": "2023-02-24T00:00:00",
        "cameras count": 134
      },
      {
        "index": 503,
        "VIOLATION DATE": "2023-02-25T00:00:00",
        "cameras count": 71
      },
      {
        "index": 512,
        "VIOLATION DATE": "2023-02-26T00:00:00",
        "cameras count": 71
      },
      {
        "index": 521,
        "VIOLATION DATE": "2023-02-27T00:00:00",
        "cameras count": 133
      },
      {
        "index": 530,
        "VIOLATION DATE": "2023-02-28T00:00:00",
        "cameras count": 134
      },
      {
        "index": 541,
        "VIOLATION DATE": "2023-03-01T00:00:00",
        "cameras count": 134
      },
      {
        "index": 550,
        "VIOLATION DATE": "2023-03-02T00:00:00",
        "cameras count": 133
      },
      {
        "index": 559,
        "VIOLATION DATE": "2023-03-03T00:00:00",
        "cameras count": 134
      },
      {
        "index": 568,
        "VIOLATION DATE": "2023-03-04T00:00:00",
        "cameras count": 71
      },
      {
        "index": 577,
        "VIOLATION DATE": "2023-03-05T00:00:00",
        "cameras count": 71
      },
      {
        "index": 586,
        "VIOLATION DATE": "2023-03-06T00:00:00",
        "cameras count": 136
      },
      {
        "index": 595,
        "VIOLATION DATE": "2023-03-07T00:00:00",
        "cameras count": 133
      },
      {
        "index": 604,
        "VIOLATION DATE": "2023-03-08T00:00:00",
        "cameras count": 137
      },
      {
        "index": 613,
        "VIOLATION DATE": "2023-03-09T00:00:00",
        "cameras count": 132
      },
      {
        "index": 622,
        "VIOLATION DATE": "2023-03-10T00:00:00",
        "cameras count": 132
      },
      {
        "index": 631,
        "VIOLATION DATE": "2023-03-11T00:00:00",
        "cameras count": 73
      },
      {
        "index": 640,
        "VIOLATION DATE": "2023-03-12T00:00:00",
        "cameras count": 74
      },
      {
        "index": 649,
        "VIOLATION DATE": "2023-03-13T00:00:00",
        "cameras count": 135
      },
      {
        "index": 658,
        "VIOLATION DATE": "2023-03-14T00:00:00",
        "cameras count": 137
      },
      {
        "index": 667,
        "VIOLATION DATE": "2023-03-15T00:00:00",
        "cameras count": 139
      },
      {
        "index": 676,
        "VIOLATION DATE": "2023-03-16T00:00:00",
        "cameras count": 138
      },
      {
        "index": 685,
        "VIOLATION DATE": "2023-03-17T00:00:00",
        "cameras count": 85
      },
      {
        "index": 694,
        "VIOLATION DATE": "2023-03-18T00:00:00",
        "cameras count": 75
      },
      {
        "index": 703,
        "VIOLATION DATE": "2023-03-19T00:00:00",
        "cameras count": 75
      },
      {
        "index": 712,
        "VIOLATION DATE": "2023-03-20T00:00:00",
        "cameras count": 142
      },
      {
        "index": 721,
        "VIOLATION DATE": "2023-03-21T00:00:00",
        "cameras count": 145
      },
      {
        "index": 730,
        "VIOLATION DATE": "2023-03-22T00:00:00",
        "cameras count": 143
      },
      {
        "index": 739,
        "VIOLATION DATE": "2023-03-23T00:00:00",
        "cameras count": 140
      },
      {
        "index": 748,
        "VIOLATION DATE": "2023-03-24T00:00:00",
        "cameras count": 139
      },
      {
        "index": 757,
        "VIOLATION DATE": "2023-03-25T00:00:00",
        "cameras count": 77
      },
      {
        "index": 766,
        "VIOLATION DATE": "2023-03-26T00:00:00",
        "cameras count": 77
      },
      {
        "index": 775,
        "VIOLATION DATE": "2023-03-27T00:00:00",
        "cameras count": 140
      },
      {
        "index": 784,
        "VIOLATION DATE": "2023-03-28T00:00:00",
        "cameras count": 143
      },
      {
        "index": 793,
        "VIOLATION DATE": "2023-03-29T00:00:00",
        "cameras count": 91
      },
      {
        "index": 802,
        "VIOLATION DATE": "2023-03-30T00:00:00",
        "cameras count": 146
      },
      {
        "index": 811,
        "VIOLATION DATE": "2023-03-31T00:00:00",
        "cameras count": 142
      },
      {
        "index": 820,
        "VIOLATION DATE": "2023-04-01T00:00:00",
        "cameras count": 77
      },
      {
        "index": 829,
        "VIOLATION DATE": "2023-04-02T00:00:00",
        "cameras count": 77
      },
      {
        "index": 838,
        "VIOLATION DATE": "2023-04-03T00:00:00",
        "cameras count": 86
      },
      {
        "index": 847,
        "VIOLATION DATE": "2023-04-04T00:00:00",
        "cameras count": 86
      },
      {
        "index": 856,
        "VIOLATION DATE": "2023-04-05T00:00:00",
        "cameras count": 84
      },
      {
        "index": 865,
        "VIOLATION DATE": "2023-04-06T00:00:00",
        "cameras count": 84
      },
      {
        "index": 874,
        "VIOLATION DATE": "2023-04-07T00:00:00",
        "cameras count": 79
      },
      {
        "index": 883,
        "VIOLATION DATE": "2023-04-08T00:00:00",
        "cameras count": 77
      },
      {
        "index": 892,
        "VIOLATION DATE": "2023-04-09T00:00:00",
        "cameras count": 77
      },
      {
        "index": 901,
        "VIOLATION DATE": "2023-04-10T00:00:00",
        "cameras count": 136
      },
      {
        "index": 910,
        "VIOLATION DATE": "2023-04-11T00:00:00",
        "cameras count": 138
      },
      {
        "index": 919,
        "VIOLATION DATE": "2023-04-12T00:00:00",
        "cameras count": 138
      },
      {
        "index": 928,
        "VIOLATION DATE": "2023-04-13T00:00:00",
        "cameras count": 139
      },
      {
        "index": 937,
        "VIOLATION DATE": "2023-04-14T00:00:00",
        "cameras count": 136
      },
      {
        "index": 946,
        "VIOLATION DATE": "2023-04-15T00:00:00",
        "cameras count": 74
      },
      {
        "index": 955,
        "VIOLATION DATE": "2023-04-16T00:00:00",
        "cameras count": 73
      },
      {
        "index": 964,
        "VIOLATION DATE": "2023-04-17T00:00:00",
        "cameras count": 139
      },
      {
        "index": 973,
        "VIOLATION DATE": "2023-04-18T00:00:00",
        "cameras count": 139
      },
      {
        "index": 982,
        "VIOLATION DATE": "2023-04-19T00:00:00",
        "cameras count": 145
      },
      {
        "index": 991,
        "VIOLATION DATE": "2023-04-20T00:00:00",
        "cameras count": 143
      },
      {
        "index": 1000,
        "VIOLATION DATE": "2023-04-21T00:00:00",
        "cameras count": 140
      },
      {
        "index": 1009,
        "VIOLATION DATE": "2023-04-22T00:00:00",
        "cameras count": 75
      },
      {
        "index": 1018,
        "VIOLATION DATE": "2023-04-23T00:00:00",
        "cameras count": 74
      },
      {
        "index": 1027,
        "VIOLATION DATE": "2023-04-24T00:00:00",
        "cameras count": 140
      },
      {
        "index": 1036,
        "VIOLATION DATE": "2023-04-25T00:00:00",
        "cameras count": 145
      },
      {
        "index": 1045,
        "VIOLATION DATE": "2023-04-26T00:00:00",
        "cameras count": 143
      },
      {
        "index": 1054,
        "VIOLATION DATE": "2023-04-27T00:00:00",
        "cameras count": 145
      },
      {
        "index": 1063,
        "VIOLATION DATE": "2023-04-28T00:00:00",
        "cameras count": 140
      },
      {
        "index": 1072,
        "VIOLATION DATE": "2023-04-29T00:00:00",
        "cameras count": 76
      },
      {
        "index": 1081,
        "VIOLATION DATE": "2023-04-30T00:00:00",
        "cameras count": 76
      },
      {
        "index": 1090,
        "VIOLATION DATE": "2023-05-01T00:00:00",
        "cameras count": 142
      },
      {
        "index": 1099,
        "VIOLATION DATE": "2023-05-02T00:00:00",
        "cameras count": 146
      },
      {
        "index": 1108,
        "VIOLATION DATE": "2023-05-03T00:00:00",
        "cameras count": 147
      },
      {
        "index": 1117,
        "VIOLATION DATE": "2023-05-04T00:00:00",
        "cameras count": 146
      },
      {
        "index": 1126,
        "VIOLATION DATE": "2023-05-05T00:00:00",
        "cameras count": 148
      },
      {
        "index": 1135,
        "VIOLATION DATE": "2023-05-06T00:00:00",
        "cameras count": 75
      },
      {
        "index": 1144,
        "VIOLATION DATE": "2023-05-07T00:00:00",
        "cameras count": 75
      },
      {
        "index": 1153,
        "VIOLATION DATE": "2023-05-08T00:00:00",
        "cameras count": 148
      },
      {
        "index": 1162,
        "VIOLATION DATE": "2023-05-09T00:00:00",
        "cameras count": 147
      },
      {
        "index": 1171,
        "VIOLATION DATE": "2023-05-10T00:00:00",
        "cameras count": 150
      },
      {
        "index": 1180,
        "VIOLATION DATE": "2023-05-11T00:00:00",
        "cameras count": 150
      },
      {
        "index": 1189,
        "VIOLATION DATE": "2023-05-12T00:00:00",
        "cameras count": 150
      },
      {
        "index": 1198,
        "VIOLATION DATE": "2023-05-13T00:00:00",
        "cameras count": 80
      },
      {
        "index": 1207,
        "VIOLATION DATE": "2023-05-14T00:00:00",
        "cameras count": 80
      },
      {
        "index": 1216,
        "VIOLATION DATE": "2023-05-15T00:00:00",
        "cameras count": 150
      },
      {
        "index": 1225,
        "VIOLATION DATE": "2023-05-16T00:00:00",
        "cameras count": 148
      },
      {
        "index": 1234,
        "VIOLATION DATE": "2023-05-17T00:00:00",
        "cameras count": 150
      },
      {
        "index": 1243,
        "VIOLATION DATE": "2023-05-18T00:00:00",
        "cameras count": 145
      },
      {
        "index": 1252,
        "VIOLATION DATE": "2023-05-19T00:00:00",
        "cameras count": 149
      },
      {
        "index": 1261,
        "VIOLATION DATE": "2023-05-20T00:00:00",
        "cameras count": 79
      },
      {
        "index": 1270,
        "VIOLATION DATE": "2023-05-21T00:00:00",
        "cameras count": 79
      },
      {
        "index": 1279,
        "VIOLATION DATE": "2023-05-22T00:00:00",
        "cameras count": 149
      },
      {
        "index": 1288,
        "VIOLATION DATE": "2023-05-23T00:00:00",
        "cameras count": 149
      },
      {
        "index": 1297,
        "VIOLATION DATE": "2023-05-24T00:00:00",
        "cameras count": 149
      },
      {
        "index": 1306,
        "VIOLATION DATE": "2023-05-25T00:00:00",
        "cameras count": 152
      },
      {
        "index": 1315,
        "VIOLATION DATE": "2023-05-26T00:00:00",
        "cameras count": 145
      },
      {
        "index": 1324,
        "VIOLATION DATE": "2023-05-27T00:00:00",
        "cameras count": 81
      },
      {
        "index": 1333,
        "VIOLATION DATE": "2023-05-28T00:00:00",
        "cameras count": 81
      },
      {
        "index": 1342,
        "VIOLATION DATE": "2023-05-29T00:00:00",
        "cameras count": 81
      },
      {
        "index": 1351,
        "VIOLATION DATE": "2023-05-30T00:00:00",
        "cameras count": 150
      },
      {
        "index": 1360,
        "VIOLATION DATE": "2023-05-31T00:00:00",
        "cameras count": 151
      },
      {
        "index": 1369,
        "VIOLATION DATE": "2023-06-01T00:00:00",
        "cameras count": 149
      },
      {
        "index": 1378,
        "VIOLATION DATE": "2023-06-02T00:00:00",
        "cameras count": 150
      },
      {
        "index": 1387,
        "VIOLATION DATE": "2023-06-03T00:00:00",
        "cameras count": 82
      },
      {
        "index": 1396,
        "VIOLATION DATE": "2023-06-04T00:00:00",
        "cameras count": 80
      },
      {
        "index": 1405,
        "VIOLATION DATE": "2023-06-05T00:00:00",
        "cameras count": 146
      },
      {
        "index": 1414,
        "VIOLATION DATE": "2023-06-06T00:00:00",
        "cameras count": 147
      },
      {
        "index": 1423,
        "VIOLATION DATE": "2023-06-07T00:00:00",
        "cameras count": 147
      },
      {
        "index": 1432,
        "VIOLATION DATE": "2023-06-08T00:00:00",
        "cameras count": 95
      },
      {
        "index": 1441,
        "VIOLATION DATE": "2023-06-09T00:00:00",
        "cameras count": 93
      },
      {
        "index": 1450,
        "VIOLATION DATE": "2023-06-10T00:00:00",
        "cameras count": 78
      },
      {
        "index": 1459,
        "VIOLATION DATE": "2023-06-11T00:00:00",
        "cameras count": 82
      },
      {
        "index": 1468,
        "VIOLATION DATE": "2023-06-12T00:00:00",
        "cameras count": 89
      },
      {
        "index": 1477,
        "VIOLATION DATE": "2023-06-13T00:00:00",
        "cameras count": 85
      },
      {
        "index": 1486,
        "VIOLATION DATE": "2023-06-14T00:00:00",
        "cameras count": 87
      },
      {
        "index": 1495,
        "VIOLATION DATE": "2023-06-15T00:00:00",
        "cameras count": 88
      },
      {
        "index": 1504,
        "VIOLATION DATE": "2023-06-16T00:00:00",
        "cameras count": 86
      },
      {
        "index": 1513,
        "VIOLATION DATE": "2023-06-17T00:00:00",
        "cameras count": 83
      },
      {
        "index": 1522,
        "VIOLATION DATE": "2023-06-18T00:00:00",
        "cameras count": 82
      },
      {
        "index": 1531,
        "VIOLATION DATE": "2023-06-19T00:00:00",
        "cameras count": 83
      },
      {
        "index": 1540,
        "VIOLATION DATE": "2023-06-20T00:00:00",
        "cameras count": 99
      },
      {
        "index": 1549,
        "VIOLATION DATE": "2023-06-21T00:00:00",
        "cameras count": 97
      },
      {
        "index": 1558,
        "VIOLATION DATE": "2023-06-22T00:00:00",
        "cameras count": 97
      },
      {
        "index": 1567,
        "VIOLATION DATE": "2023-06-23T00:00:00",
        "cameras count": 91
      },
      {
        "index": 1576,
        "VIOLATION DATE": "2023-06-24T00:00:00",
        "cameras count": 81
      },
      {
        "index": 1585,
        "VIOLATION DATE": "2023-06-25T00:00:00",
        "cameras count": 80
      },
      {
        "index": 1594,
        "VIOLATION DATE": "2023-06-26T00:00:00",
        "cameras count": 106
      },
      {
        "index": 1603,
        "VIOLATION DATE": "2023-06-27T00:00:00",
        "cameras count": 135
      },
      {
        "index": 1612,
        "VIOLATION DATE": "2023-06-28T00:00:00",
        "cameras count": 137
      },
      {
        "index": 1621,
        "VIOLATION DATE": "2023-06-29T00:00:00",
        "cameras count": 136
      },
      {
        "index": 1630,
        "VIOLATION DATE": "2023-06-30T00:00:00",
        "cameras count": 130
      },
      {
        "index": 1640,
        "VIOLATION DATE": "2023-07-01T00:00:00",
        "cameras count": 82
      },
      {
        "index": 1650,
        "VIOLATION DATE": "2023-07-02T00:00:00",
        "cameras count": 82
      },
      {
        "index": 1660,
        "VIOLATION DATE": "2023-07-03T00:00:00",
        "cameras count": 82
      },
      {
        "index": 1670,
        "VIOLATION DATE": "2023-07-04T00:00:00",
        "cameras count": 79
      },
      {
        "index": 1680,
        "VIOLATION DATE": "2023-07-05T00:00:00",
        "cameras count": 130
      },
      {
        "index": 1690,
        "VIOLATION DATE": "2023-07-06T00:00:00",
        "cameras count": 131
      },
      {
        "index": 1700,
        "VIOLATION DATE": "2023-07-07T00:00:00",
        "cameras count": 129
      },
      {
        "index": 1710,
        "VIOLATION DATE": "2023-07-08T00:00:00",
        "cameras count": 81
      },
      {
        "index": 1720,
        "VIOLATION DATE": "2023-07-09T00:00:00",
        "cameras count": 81
      },
      {
        "index": 1730,
        "VIOLATION DATE": "2023-07-10T00:00:00",
        "cameras count": 133
      },
      {
        "index": 1740,
        "VIOLATION DATE": "2023-07-11T00:00:00",
        "cameras count": 135
      },
      {
        "index": 1750,
        "VIOLATION DATE": "2023-07-12T00:00:00",
        "cameras count": 136
      },
      {
        "index": 1760,
        "VIOLATION DATE": "2023-07-13T00:00:00",
        "cameras count": 137
      },
      {
        "index": 1770,
        "VIOLATION DATE": "2023-07-14T00:00:00",
        "cameras count": 130
      },
      {
        "index": 1780,
        "VIOLATION DATE": "2023-07-15T00:00:00",
        "cameras count": 81
      },
      {
        "index": 1790,
        "VIOLATION DATE": "2023-07-16T00:00:00",
        "cameras count": 82
      },
      {
        "index": 1800,
        "VIOLATION DATE": "2023-07-17T00:00:00",
        "cameras count": 130
      },
      {
        "index": 1810,
        "VIOLATION DATE": "2023-07-18T00:00:00",
        "cameras count": 131
      },
      {
        "index": 1820,
        "VIOLATION DATE": "2023-07-19T00:00:00",
        "cameras count": 131
      },
      {
        "index": 1830,
        "VIOLATION DATE": "2023-07-20T00:00:00",
        "cameras count": 129
      },
      {
        "index": 1840,
        "VIOLATION DATE": "2023-07-21T00:00:00",
        "cameras count": 124
      },
      {
        "index": 1850,
        "VIOLATION DATE": "2023-07-22T00:00:00",
        "cameras count": 82
      },
      {
        "index": 1860,
        "VIOLATION DATE": "2023-07-23T00:00:00",
        "cameras count": 83
      },
      {
        "index": 1870,
        "VIOLATION DATE": "2023-07-24T00:00:00",
        "cameras count": 109
      },
      {
        "index": 1880,
        "VIOLATION DATE": "2023-07-25T00:00:00",
        "cameras count": 109
      },
      {
        "index": 1890,
        "VIOLATION DATE": "2023-07-26T00:00:00",
        "cameras count": 107
      },
      {
        "index": 1900,
        "VIOLATION DATE": "2023-07-27T00:00:00",
        "cameras count": 99
      },
      {
        "index": 1910,
        "VIOLATION DATE": "2023-07-28T00:00:00",
        "cameras count": 97
      },
      {
        "index": 1920,
        "VIOLATION DATE": "2023-07-29T00:00:00",
        "cameras count": 80
      },
      {
        "index": 1930,
        "VIOLATION DATE": "2023-07-30T00:00:00",
        "cameras count": 79
      },
      {
        "index": 1940,
        "VIOLATION DATE": "2023-07-31T00:00:00",
        "cameras count": 93
      },
      {
        "index": 1950,
        "VIOLATION DATE": "2023-08-01T00:00:00",
        "cameras count": 93
      },
      {
        "index": 1960,
        "VIOLATION DATE": "2023-08-02T00:00:00",
        "cameras count": 93
      },
      {
        "index": 1970,
        "VIOLATION DATE": "2023-08-03T00:00:00",
        "cameras count": 93
      },
      {
        "index": 1980,
        "VIOLATION DATE": "2023-08-04T00:00:00",
        "cameras count": 92
      },
      {
        "index": 1990,
        "VIOLATION DATE": "2023-08-05T00:00:00",
        "cameras count": 81
      },
      {
        "index": 2000,
        "VIOLATION DATE": "2023-08-06T00:00:00",
        "cameras count": 81
      },
      {
        "index": 2010,
        "VIOLATION DATE": "2023-08-07T00:00:00",
        "cameras count": 82
      },
      {
        "index": 2020,
        "VIOLATION DATE": "2023-08-08T00:00:00",
        "cameras count": 80
      },
      {
        "index": 2030,
        "VIOLATION DATE": "2023-08-09T00:00:00",
        "cameras count": 80
      },
      {
        "index": 2040,
        "VIOLATION DATE": "2023-08-10T00:00:00",
        "cameras count": 82
      },
      {
        "index": 2050,
        "VIOLATION DATE": "2023-08-11T00:00:00",
        "cameras count": 83
      },
      {
        "index": 2060,
        "VIOLATION DATE": "2023-08-12T00:00:00",
        "cameras count": 82
      },
      {
        "index": 2070,
        "VIOLATION DATE": "2023-08-13T00:00:00",
        "cameras count": 83
      },
      {
        "index": 2080,
        "VIOLATION DATE": "2023-08-14T00:00:00",
        "cameras count": 83
      },
      {
        "index": 2090,
        "VIOLATION DATE": "2023-08-15T00:00:00",
        "cameras count": 83
      },
      {
        "index": 2100,
        "VIOLATION DATE": "2023-08-16T00:00:00",
        "cameras count": 83
      },
      {
        "index": 2110,
        "VIOLATION DATE": "2023-08-17T00:00:00",
        "cameras count": 85
      },
      {
        "index": 2120,
        "VIOLATION DATE": "2023-08-18T00:00:00",
        "cameras count": 85
      },
      {
        "index": 2130,
        "VIOLATION DATE": "2023-08-19T00:00:00",
        "cameras count": 83
      },
      {
        "index": 2140,
        "VIOLATION DATE": "2023-08-20T00:00:00",
        "cameras count": 83
      },
      {
        "index": 2150,
        "VIOLATION DATE": "2023-08-21T00:00:00",
        "cameras count": 143
      },
      {
        "index": 2160,
        "VIOLATION DATE": "2023-08-22T00:00:00",
        "cameras count": 144
      },
      {
        "index": 2170,
        "VIOLATION DATE": "2023-08-23T00:00:00",
        "cameras count": 147
      },
      {
        "index": 2180,
        "VIOLATION DATE": "2023-08-24T00:00:00",
        "cameras count": 145
      },
      {
        "index": 2190,
        "VIOLATION DATE": "2023-08-25T00:00:00",
        "cameras count": 147
      },
      {
        "index": 2200,
        "VIOLATION DATE": "2023-08-26T00:00:00",
        "cameras count": 83
      },
      {
        "index": 2210,
        "VIOLATION DATE": "2023-08-27T00:00:00",
        "cameras count": 82
      },
      {
        "index": 2220,
        "VIOLATION DATE": "2023-08-28T00:00:00",
        "cameras count": 148
      },
      {
        "index": 2230,
        "VIOLATION DATE": "2023-08-29T00:00:00",
        "cameras count": 149
      },
      {
        "index": 2240,
        "VIOLATION DATE": "2023-08-30T00:00:00",
        "cameras count": 148
      },
      {
        "index": 2250,
        "VIOLATION DATE": "2023-08-31T00:00:00",
        "cameras count": 149
      },
      {
        "index": 2260,
        "VIOLATION DATE": "2023-09-01T00:00:00",
        "cameras count": 148
      },
      {
        "index": 2270,
        "VIOLATION DATE": "2023-09-02T00:00:00",
        "cameras count": 83
      },
      {
        "index": 2280,
        "VIOLATION DATE": "2023-09-03T00:00:00",
        "cameras count": 83
      },
      {
        "index": 2290,
        "VIOLATION DATE": "2023-09-04T00:00:00",
        "cameras count": 83
      },
      {
        "index": 2300,
        "VIOLATION DATE": "2023-09-05T00:00:00",
        "cameras count": 149
      },
      {
        "index": 2310,
        "VIOLATION DATE": "2023-09-06T00:00:00",
        "cameras count": 150
      },
      {
        "index": 2320,
        "VIOLATION DATE": "2023-09-07T00:00:00",
        "cameras count": 152
      },
      {
        "index": 2330,
        "VIOLATION DATE": "2023-09-08T00:00:00",
        "cameras count": 146
      },
      {
        "index": 2340,
        "VIOLATION DATE": "2023-09-09T00:00:00",
        "cameras count": 82
      },
      {
        "index": 2350,
        "VIOLATION DATE": "2023-09-10T00:00:00",
        "cameras count": 81
      },
      {
        "index": 2360,
        "VIOLATION DATE": "2023-09-11T00:00:00",
        "cameras count": 141
      },
      {
        "index": 2370,
        "VIOLATION DATE": "2023-09-12T00:00:00",
        "cameras count": 128
      },
      {
        "index": 2380,
        "VIOLATION DATE": "2023-09-13T00:00:00",
        "cameras count": 132
      },
      {
        "index": 2390,
        "VIOLATION DATE": "2023-09-14T00:00:00",
        "cameras count": 135
      },
      {
        "index": 2400,
        "VIOLATION DATE": "2023-09-15T00:00:00",
        "cameras count": 128
      },
      {
        "index": 2410,
        "VIOLATION DATE": "2023-09-16T00:00:00",
        "cameras count": 82
      },
      {
        "index": 2420,
        "VIOLATION DATE": "2023-09-17T00:00:00",
        "cameras count": 81
      },
      {
        "index": 2430,
        "VIOLATION DATE": "2023-09-18T00:00:00",
        "cameras count": 89
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