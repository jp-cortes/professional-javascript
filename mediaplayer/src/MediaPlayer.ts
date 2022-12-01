// function MediaPlayer(config) {
//     this.media = config.element;
//     this.plugins = config.plugins || [];

//     this._initPlugins();
// }
// MediaPlayer.prototype._initPlugins = function() {
//     this.plugins.forEach(plugins => {
//     plugins.run(this)        
//     });
// }
// MediaPlayer.prototype.play = function() {
//     this.media.play();
// }
// MediaPlayer.prototype.pause = function() {
//     this.media.pause()
// }
// MediaPlayer.prototype.togglePlay = function() {
//     if(this.media.paused) {
//         this.media.play()
//     } else {
//         this.media.pause()
//     }
// }
// MediaPlayer.prototype.mute = function () {
//     this.media.muted = true
// }
// MediaPlayer.prototype.unMute = function () {
//     this.media.muted = false;
// }
// MediaPlayer.prototype.toggleMute = function() {
   
//     this.media.muted = !this.media.muted  
// }
class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array <any>;
    container: HTMLElement;

    constructor(config) {
        this.media = config.element;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();

    }

    initPlayer() {
        this.container = document.createElement('div');
        this.container.classList.add('container--video');
        // this.container.style.position = 'relative';
        this.media.parentNode?.insertBefore(this.container, this.media);
        this.container.append(this.media)
    }
    private initPlugins() {
        // const player= {
        //     play: () => this.play(),
        //     pause: () => this.pause(),
        //     media: this.media,
        //     get muted() {
        //         return this.media.muted
        //     },
        //     set muted(value) {
        //         this.media.muted = value;
        //     }
        // };
        this.plugins.forEach(plugins => {
                plugins.run(this)        
                });
    }
    play() {
        this.media.play();
    }

    pause() {
        this.media.pause();
    }

    togglePlay() {
        if(this.media.paused) {
            this.media.play();
        } else {
            this.media.pause();
        }
    }

    mute() {
        this.media.muted = true;
    }

    unMute() {
        this.media.muted = false;
    }
    
    toggleMute() {
        this.media.muted = !this.media.muted;
    }
}

export { MediaPlayer };
