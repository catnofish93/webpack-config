import _ from 'lodash';
import './style.css'
import icon from './icon.jpeg'
import printMe from "./print";
function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], '');
  const btn = document.createElement('button');
  btn.innerHTML = 'click me and check the console'
  btn.onclick = printMe
  const newIcon = new Image();
  newIcon.src = icon;
  element.appendChild(newIcon)
  return element
}
document.body.appendChild(component())
