var APP_DATA = {
  "scenes": [
    {
      "id": "0-road-01",
      "name": "Road 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": -0.2844577430665183,
        "yaw": 1.5848905972081582,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 0.0889397672903165,
          "pitch": 0.09826709021842817,
          "rotation": 3.141592653589793,
          "target": "1-road-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-road-02",
      "name": "Road 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": -0.24851601450368221,
        "yaw": 1.6159573516275865,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 2.082301313462671,
          "pitch": 0.13145754477988625,
          "rotation": 3.141592653589793,
          "target": "0-road-01"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
