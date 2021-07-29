import _ from 'lodash';
import './style.css'
import icon from './icon.jpeg'
import printMe from "./print";
import { cube } from "./math";

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], '');
  const btn = document.createElement('button');
  btn.innerHTML = 'hello webpack, 6 cubed is equal to ' + cube(6)
  btn.onclick = printMe
  element.appendChild(btn)
  const newIcon = new Image();
  newIcon.src = icon;
  element.appendChild(newIcon)
  return element
}
document.body.appendChild(component())
