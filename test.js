'use strict';
const jsonFile = "./data.final.json";
const MusicJsonPlayer = require("./src/index");
const player = new MusicJsonPlayer('title', 'artist', jsonFile);
player.start();
