import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

player.on('play', setCurrentTimeFromLocalStorage);
function setCurrentTimeFromLocalStorage() {
  player.setCurrentTime(
    Number(localStorage.getItem('videoplayer-current-time'))
  );
}
player.on('timeupdate', throttle(getVideoCurrentTime, 1000));
function getVideoCurrentTime(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds.toString());
}
