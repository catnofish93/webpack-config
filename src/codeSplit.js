function createElement() {
  return import('lodash').then(({default: _}) => {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    return element
  }).catch((error) => 'An error occurred while loading the component')
}
createElement().then(res => {
  document.body.appendChild(res)
})
