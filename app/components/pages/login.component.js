import m from 'mithril';

import logo from './../../assets/logo.svg';

export default {
  view(vnode) {
    return (
      <div class="container">
        <div class="row">
          <div class="column column-50 column-offset-25 v-text--center">
          {
            m('span', {
              class: 'v-logo--img'
            }, [
              m.trust(logo)
            ])
          }
          </div>
        </div>
        <div class="row">
          <div class="column column-50 column-offset-25">
          {
            m('form', {
                onsubmit: (e) => {
                    e.preventDefault();
                    let username = e.target.querySelector('#username').value;
                    let password = e.target.querySelector('#password').value;
                    vnode.attrs.submit(username, password);
                }
            }, [
                m.trust(`
                <fieldset>
                    <label for="username">Username</label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        id="username"
                    />
                    <label for="password">Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        id="password"
                    />
                    <input class="button-primary" type="submit" value="Sign in" />
                </fieldset>
                `)
            ])
          }
          </div>
        </div>
      </div>
    );
  }
}
