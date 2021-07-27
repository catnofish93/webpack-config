import _ from 'lodash'
export default function printMe() {
  console.log(_.join(['hello', 'word'], ''))
  console.log('I get callled from print.js');
}
