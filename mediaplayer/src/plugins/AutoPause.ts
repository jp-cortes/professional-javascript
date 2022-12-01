import { MediaPlayer } from '../MediaPlayer'

class AutoPause {
  private  threshold: number;
  player: MediaPlayer;
constructor() {
    this.threshold = 0.25;
    this.handlerIntersection = this.handlerIntersection.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
}
run(player) {
    this.player = player;
    // const observer = new IntersectionObserver(handler, config);
    const observer = new IntersectionObserver(this.handlerIntersection, {
        // threshold: the percent of the element that has to have Intersection
        threshold: this.threshold
    });

    observer.observe(this.player.media);
    document.addEventListener('visibilitychange', this.handleVisibilityChange)
}
//when IntersectiionObserver calls handleIntersection is going to give a list of entries
//entries are the elements we are "observing"
 private handlerIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    console.log(entry);

    const isVisible = entry.intersectionRatio >= this.threshold;

    if(isVisible) {
        this.player.play();
    } else {
        this.player.pause()
        }
   }

   private handleVisibilityChange(){
    const isVisible = document.visibilityState === 'visible';
    if(isVisible) {
        this.player.play();
    } else {
        this.player.pause();

    }
   }
};

export { AutoPause };