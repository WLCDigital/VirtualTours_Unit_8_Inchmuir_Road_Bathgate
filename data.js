var APP_DATA = {
  "scenes": [
    {
      "id": "0-workshop-area",
      "name": "Workshop Area",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.014024327209055443,
          "pitch": 0.11172375454720296,
          "rotation": 0,
          "target": "5-main-office---view-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.021425044241507,
          "pitch": 0.05920866457388563,
          "title": "Shutter Door",
          "text": "Some text..."
        },
        {
          "yaw": 0.33780396369525967,
          "pitch": -0.0008479120493980474,
          "title": "First Aid Station",
          "text": "Some text..."
        }
      ]
    },
    {
      "id": "1-small-office-2",
      "name": "Small Office 2",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2863777190968122,
          "pitch": 0.1905436369390543,
          "rotation": 0,
          "target": "5-main-office---view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-small-office-3",
      "name": "Small Office 3",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.842075420499298,
          "pitch": 0.38106623265944606,
          "rotation": 0,
          "target": "5-main-office---view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-front-door",
      "name": "Front Door",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9358472518313938,
          "pitch": 0.32202498433282756,
          "rotation": 5.497787143782138,
          "target": "5-main-office---view-1"
        },
        {
          "yaw": 1.8701309148329308,
          "pitch": 0.39226433398162364,
          "rotation": 0,
          "target": "4-small-office-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.23496063339906392,
          "pitch": 0.022587983075416318,
          "title": "Front Door",
          "text": "Fully Alarmed"
        }
      ]
    },
    {
      "id": "4-small-office-1",
      "name": "Small Office 1",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.099214691405333,
          "pitch": 0.31400640506374167,
          "rotation": 0,
          "target": "3-front-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-main-office---view-1",
      "name": "Main Office - View 1",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5638370452786834,
          "pitch": 0.26436964826842413,
          "rotation": 1.5707963267948966,
          "target": "3-front-door"
        },
        {
          "yaw": -0.6146038053946441,
          "pitch": 0.16161740087357757,
          "rotation": 0,
          "target": "6-main-office---view-2"
        },
        {
          "yaw": -1.3875594995184155,
          "pitch": 0.1388423698152721,
          "rotation": 0,
          "target": "0-workshop-area"
        },
        {
          "yaw": 0.8851177121801914,
          "pitch": 0.1570413374498827,
          "rotation": 5.497787143782138,
          "target": "1-small-office-2"
        },
        {
          "yaw": 1.1225700192966492,
          "pitch": 0.17096873443545135,
          "rotation": 0.7853981633974483,
          "target": "2-small-office-3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.2854130978186786,
          "pitch": 0.08359268371513018,
          "title": "Male Bathroom",
          "text": "Some text"
        },
        {
          "yaw": 1.8762742830689438,
          "pitch": 0.1210558322285582,
          "title": "Female Bathroom",
          "text": "Some text..."
        },
        {
          "yaw": 0.21349133273475474,
          "pitch": 0.04948074595245444,
          "title": "Fire Exit",
          "text": "Some text... https://www.firescotland.gov.uk/"
        }
      ]
    },
    {
      "id": "6-main-office---view-2",
      "name": "Main Office - View 2",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4139818654593324,
          "pitch": 0.1987529591355255,
          "rotation": 0,
          "target": "5-main-office---view-1"
        },
        {
          "yaw": -1.5443684500116923,
          "pitch": 0.1549465315781937,
          "rotation": 0.7853981633974483,
          "target": "0-workshop-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
