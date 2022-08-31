import printMe from './print';
import './style.css';
import Img from './profile.png';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = "hello webpack";

  const myProfile = new Image();
  myProfile.src = Img;

  element.appendChild(myProfile);


  const btn = document.createElement('button');
  btn.innerHTML = 'click me and check consolessssss';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());