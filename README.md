# [Leaflet.BootstrapZoom](https://github.com/MAD-GooZe/Leaflet.BootstrapZoom) [![Build Status](https://travis-ci.org/mad-gooze/Leaflet.BootstrapZoom.svg?branch=master)](https://travis-ci.org/mad-gooze/Leaflet.BootstrapZoom)
> Leaflet.js plugin which overrides default zoom control buttons with Twitter Bootstrap styled ones.

This plugin adds a drop-in Twitter Bootstrap 3 styling for [Leaflet.js](http://leafletjs.com/) zoom control buttons. 
Tested with Leaflet v1.0.0-beta.2 and v1.0.0-rc.3

[Demo](http://mad-gooze.github.io/Leaflet.BootstrapZoom/)
## Usage & Installation
1. Include [Leaflet.BootstrapZoom.min.js](https://github.com/MAD-GooZe/Leaflet.BootstrapZoom/blob/gh-pages/Leaflet.BootstrapZoom.min.js) 
after Leaflet and Bootstrap:
   
    ```html
    <!--Leafet 1.0.0-rc.3-->
    <link rel="stylesheet" href="http://unpkg.com/leaflet@1.0.0-rc.3/dist/leaflet.css"/>
    <script src="http://unpkg.com/leaflet@1.0.0-rc.3/dist/leaflet.js"></script>
    
    <!--Bootstrap-->
 
    <!--Leaflet.BootstrapZoom-->
    <script src='Leaflet.BootstrapZoom.min.js'></script>
    ```
2. Bootstrap-styled controls are added automatically.

### NPM
You can also install from npm
```bash
npm install leaflet-bootstrap-zoom --save
```