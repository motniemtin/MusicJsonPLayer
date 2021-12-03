// musicjsonplayer.js
'use strict';
class MusicJsonPlayer {    
    constructor(title, artist, jsonData, jsonLyric = null) {
        this.json = jsonData;
        if(jsonLyric == null){
            this.jsonLyric = null;
        }else{
            this.jsonLyric = jsonLyric;
        }        
        this.title = title;
        this.artist = artist;
        this.interval = null;
        this.ticks = -1;
    }
    start() {
        this.interval = window.setInterval(() => this.runTimer(), 100);
    }
    restart() {
        this.stop();
        this.start();
    }
    stop() {
        window.clearInterval(this.interval);
        this.ticks = 0;
    }
    runTimer() {
        this.ticks += 1;
        if(typeof this.json[this.ticks]!="undefined"){
            this.json[this.ticks].map((id) => {
                const event = this.json[this.ticks][id];                
                var type = event['type'];
                switch(type) {
                    case 'notes':
                        this.NoteOnHander(event['data']);
                        break;
                    case 'lyrics':
                        
                        break;
                    case 'harmonys':
                        
                        break;
                }
            })
            
        }
        if(this.jsonLyric!=null){
            if(typeof this.jsonLyric[this.ticks]!="undefined"){
                this.NoteOnHander(event['data']);
            }
        }
    }
    addNoteOnListener(NoteOnHander) {
        this.NoteOnHander = NoteOnHander;
    };

    addNoteOffListener(NoteOffHander) {
        this.NoteOffHander = NoteOffHander;
    };
    addHarmonyListener(HarmonyHander) {
        this.HarmonyHander = HarmonyHander;
    };
}
module.exports = MusicJsonPlayer;