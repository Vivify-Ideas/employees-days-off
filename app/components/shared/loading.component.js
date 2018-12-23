import m from 'mithril';
import anime from 'animejs';

import logo from './../../assets/logo.svg';

export default {
  oncreate(vnode) {
    vnode.dom.innerHTML = logo;
    const svgElement = vnode.dom.querySelector('svg');
    svgElement.setAttribute('class', 'v-logo--loader')

    anime({
      targets: '.v-logo--loader path',
      rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine'
      },
      loop: true
    });
  },
  view() {
    return (
      <div class="v-logo--loader-wrapper"></div>
    );
  }
}