import Auth from "../components/auth";
import Employees from "../components/employees/Employees";
import Customers from "../components/customers";
import Users from "../components/users";
import Profile from "../components/profile";
import Reports from "../components/reports";
import Insurers from "../components/insurers";
import FormSale from "../components/sales/FormSale";

//examples
import Tablas from '../components/tablas'

export const COMPONENT_LIST = [
  {
    title: "Tablas",
    url: "/tablas",
    component: Tablas,
    protected: false,
  },
  {
    title: "Login",
    url: "/auth",
    component: Auth,
    protected: false,
  },
  {
    title: "Reports",
    url: "/",
    component: Reports,
    protected: true,
  },
  {
    title: "Create Sales",
    url: "/sales/create",
    component: FormSale,
    protected: true,
  },
  {
    title: "Employee",
    url: "/employee",
    component: Employees,
    protected: true,
  },
  {
    title: "Customers",
    url: "/customers",
    component: Customers,
    protected: true,
  },
  {
    title: "Customers",
    url: "/customers",
    component: Customers,
    protected: true,
  },
  {
    title: "Insurer",
    url: "/insurers",
    component: Insurers,
    protected: true,
  },
  {
    title: "Users",
    url: "/users",
    component: Users,
    protected: true,
  },
  {
    title: "Profile",
    url: "/profile",
    component: Profile,
    protected: true,
  },
];
