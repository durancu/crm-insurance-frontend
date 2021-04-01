import Auth from "../components/auth";
import Dashboard from "../components/dashboard";
import Sales from "../components/sales";
import SalesReport from "../components/reports/sales";
import Profitability from "../components/reports/profitability";
import Salaries from "../components/reports/salaries";
import Customers from "../components/manage/customers";
import Users from "../components/manage/users";
import Insurers from "../components/manage/insurers";
import Company from "../components/manage/company";
import Profile from "../components/account/profile";
import Training from "../components/training";
import Page403 from "../components/globals/Page403";
import Page404 from "../components/globals/Page404";

export const COMPONENT_LIST = [
  {
    title: "Login",
    url: "/auth",
    component: Auth,
    protected: false,
  },
  {
    title: "Page 403",
    url: "/403",
    component: Page403,
    protected: false,
  },
  {
    title: "Page 404",
    url: "/404",
    component: Page404,
    protected: false,
  },
  {
    title: "Dashboard",
    url: "/",
    component: Dashboard,
    protected: true,
  },
  {
    title: "Sales Management",
    url: "/manage/sales",
    component: Sales,
    protected: true,
  },
  {
    title: "Sales Report",
    url: "/reports/sales",
    component: SalesReport,
    protected: true,
  },
  {
    title: "Profits Report",
    url: "/reports/profits",
    component: Profitability,
    protected: true,
  },
  {
    title: "Payroll Report",
    url: "/reports/payroll",
    component: Salaries,
    protected: true,
  },
  {
    title: "Customers Management",
    url: "/manage/customers",
    component: Customers,
    protected: true,
  },
  {
    title: "Insurers Management",
    url: "/manage/insurers",
    component: Insurers,
    protected: true,
  },
  {
    title: "Companies Management",
    url: "/manage/companies",
    component: Company,
    protected: true,
  },
  {
    title: "Users Management",
    url: "/manage/users",
    component: Users,
    protected: true,
  },
  {
    title: "Profile",
    url: "/profile",
    component: Profile,
    protected: true,
  },
  {
    title: "Training",
    url: "/training",
    component: Training,
    protected: true,
  },
];
