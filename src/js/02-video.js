import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.setCurrentTime(0);

const currentview = function (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
}
const saveTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
if (saveTime) {
    player.setCurrentTime(saveTime);
}

player.on('timeupdate', throttle(currentview, 1000));