// function Autoplay () {

// }
// Autoplay.prototype.run = function(player) {
//     player.mute()
//     player.play()
// }

import  { MediaPlayer } from '../MediaPlayer';
class AutoPlay {
    
    run(player: MediaPlayer) {
        player.mute();
        // if(!player.muted) {
        //     player.muted = true;
        // }
        player.play();
    }
}
export { AutoPlay }