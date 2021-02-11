import Auth from '../components/auth'
import Employees from '../components/employees/Employees'
import Customers from '../components/customers'
import Users from '../components/users'
import Profile from '../components/profile'
import Reports from '../components/reports'

export const COMPONENT_LIST = [
  {
    title: 'Login',
    url: '/auth',
    component: Auth,
    protected: false
  },
  {
    title: 'Reports',
    url: '/home',
    component: Reports,
    protected: true
  },
  {
    title: 'Employee',
    url: '/employee',
    component: Employees,
    protected: true
  },
  {
    title: 'Customers',
    url: '/customers',
    component: Customers,
    protected: true
  },
  {
    title: 'Profile',
    url: '/profile',
    component: Profile,
    protected: true
  },
  {
    title: 'Users',
    url: '/users',
    component: Users,
    protected: true
  },
]

