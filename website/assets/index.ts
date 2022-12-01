import { MediaPlayer } from "../../mediaplayer/src/MediaPlayer";
import { AutoPlay } from '../../mediaplayer/src/plugins/AutoPlay';
import { AutoPause } from "../../mediaplayer/src/plugins/AutoPause";
// import  Ads from './plugins/Ads/Ads'
import { AdsPlugin } from "../../mediaplayer/src/plugins/Ads/index";
const video = document.querySelector('video');
const player = new MediaPlayer({element: video, plugins:
     [new AutoPlay(), new AutoPause(), new AdsPlugin()]});


const button: HTMLElement = document.querySelector('.play-pause') as HTMLElement;
button.onclick = () => player.togglePlay();

const buttonUnmute: HTMLElement = document.querySelector('.unmute') as HTMLElement;
buttonUnmute.onclick = () => player.toggleMute();

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js').catch(error => {
        console.log(error.message)
    })
}