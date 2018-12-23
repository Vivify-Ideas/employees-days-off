import m from 'mithril';

import logo from './../../assets/logo.svg';

const filterEmployees = (employees, nameValue) => {
  return employees.filter((employee) => {
    return (employee.name || '').toLowerCase()
      .includes(
        (nameValue || '').toLowerCase()
      );
  })
}

export default {
  view(vnode) {
    vnode.state.filteredEmployees =
      (vnode.state.nameValue
        ? vnode.state.filteredEmployees
        : vnode.attrs.employees
      ) ||
      vnode.attrs.employees ||
      [];

    return (
      <div class="container v-employees">

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

      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th class="float-right">Remaining Days Off</th>
        </tr>
        <tr>
          <th>
            {
              m('input', {
                type: 'text',
                oninput: m.withAttr('value', (v) => {
                  vnode.state.nameValue = v;
                  vnode.state.filteredEmployees = filterEmployees(
                    vnode.attrs.employees,
                    vnode.state.nameValue
                  )
                })
              })
            }
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          (vnode.state.filteredEmployees || [])
            .map((employee) => {
              return (
                <tr>
                <td class="v-text--uppercase">
                {
                  m(`a[href="/${employee.name}"]`, {oncreate: m.route.link}, employee.name)
                }
                </td>
                <td class="float-right">{ employee.days_off_remaining }</td>
                </tr>
              )
            })
        }
      </tbody>
      </table>
      </div>
    )
  }
}
