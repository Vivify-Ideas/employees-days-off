import m from 'mithril';

import logo from './../../assets/logo.svg';

export default {
  view(vnode) {
    const employee = vnode.attrs.employee || {};
    return (
      <div class="container">
        <div class="row v-logo--wrapper">
          <div class="column">
            {
              m('span', {
                class: 'v-logo--img'
              }, [
                m.trust(logo)
              ])
            }
            <span
              class="v-logo--text"
            >
            Vivify Ideas
            </span>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <h3 class="v-text--uppercase">
            { employee.name } ({ employee.days_off_remaining })
            </h3>
          </div>
          <div class="column">
            <h4>
            {
              m(`a[href="/"]`, {oncreate: m.route.link}, '< Back')
            }
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <ul>
            {
              (employee.dates || []).map((date) => {
                return (
                  <li>
                    { date }
                  </li>
                )
              })
            }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}