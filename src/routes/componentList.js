import Auth from "../components/auth";
import Dashboard from "../components/dashboard";
import Sales from "../components/sales";
import SalesReport from "../components/reports/sales";
import Profitability from "../components/reports/profitability";
import Bonus from "../components/reports/bonus";
import Salaries from "../components/reports/salaries";
import Customers from "../components/manage/customers";
import Users from "../components/manage/users";
import Insurers from "../components/manage/insurers";
import Company from "../components/manage/company";
import Profile from "../components/account/profile";


export const COMPONENT_LIST = [
  {
    title: "Login",
    url: "/auth",
    component: Auth,
    protected: false,
  },

  {
    title: "Dashboard",
    url: "/",
    component: Dashboard,
    protected: true,
  },
  {
    title: "Sales",
    url: "/sales",
    component: Sales,
    protected: true,
  },
  {
    title: "Reports Sales",
    url: "/reports-sales",
    component: SalesReport,
    protected: true,
  },
  {
    title: "Profitability",
    url: "/profitability",
    component: Profitability,
    protected: true,
  },
  {
    title: "Bonus",
    url: "/bonus",
    component: Bonus,
    protected: true,
  },
  {
    title: "Salaries",
    url: "/salaries",
    component: Salaries,
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
    title: "Company",
    url: "/company",
    component: Company,
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
