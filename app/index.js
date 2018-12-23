import m from 'mithril';

import EmployeesComponent from './components/pages/employees.component';
import SingleEmployeeComponent from './components/pages/single-employee.component';
import LoadingComponent from './components/shared/loading.component';
import LoginComponent from './components/pages/login.component';

import EmployeesService from './services/employees.service';

require('./styles/app');

const state = {
  singleEmployee: null,
  employees: [],
  auth: {
    username: sessionStorage.getItem('username'),
    password: sessionStorage.getItem('password')
  }
}

m.route.prefix("");
m.route(document.getElementById('app'), '/', {
  '/login': {
    render() {
      return <LoginComponent submit={
        (username, password) => {
          sessionStorage.setItem('username', username);
          sessionStorage.setItem('password', password);
          Object.assign(state.auth, {
            username,
            password
          });
          m.route.set('/');
        }
      } />
    }
  },
  '/': {
    onmatch() {
      if (!state.auth.username || !state.auth.password) {
        m.route.set('/login');
      }
    },
    render() {
      if (state.employees.length) {
        return <EmployeesComponent employees={state.employees} />
      }


      EmployeesService.getEmployees({
        auth: state.auth
      }).then((employees) => {
        state.employees = employees;
        m.redraw();
      });

      return <LoadingComponent />
    }
  },
  '/:name': {
    onmatch: (args) => {
      return EmployeesService.getSingleEmployee(args.name, {
        auth: state.auth
      }).then((employee) => {
        state.singleEmployee = employee;
      })
    },
    render(vnode) {
      return (
        <SingleEmployeeComponent employee={state.singleEmployee} />
      )
    }
  }
});
