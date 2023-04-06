import SignUp from "../../pages/Auth/Signup";
import Reports from "../../pages/Admin/Reports.js";
import ControlCenter from "../../pages/Admin/ControlCenter.js";
import NewProduct from "../../pages/Control Center/NewProduct";
import ExistingProduct from "../../pages/Control Center/ExistingProduct";
import CreateAutomation from "../../pages/Automation/CreateAutomation.js";
import NewCreative from "../../pages/Creative Center/NewCreative.js";
import ExistingCreatives from "../../pages/Creative Center/ExistingCreatives.js";
import Dashboard from "../../pages/Dashboard/Dashboard.js";
import ExistingCampaign from "../../pages/Campaign Center/ExistingCampaign.js";
import NewCampaign from "../../pages/Campaign Center/NewCampaign";
import ProductDetail from "../../pages/Control Center/ProductDetail.js";
import ExistingAutomation from "../../pages/Automation/ExistingAutomation.js";
import PermissionConfirmation from "../../pages/PermissionConfirmation/PermissionConfirmation";
import Login from "../../pages/Auth/Login";
import Profile from "../../pages/Profile/Profile";

var routes = [
  {
    path: "/main-dashboard",
    component: Dashboard,
    role: "admin",
    protect: true,
  },
  // {
  //   path: "/",
  //   component: Login,
  //   role: "admin",
  //   protect: false,
  // },
  {
    path: "/sign-up",
    component: SignUp,
    role: "admin",
    protect: false,
  },
  {
    path: "/new-creative",
    component: NewCreative,
    role: "admin",
    protect: true,
  },
  {
    path: "/existing-creative",
    component: ExistingCreatives,
    role: "admin",
    protect: true,
  },
  {
    path: "/new-campaign",
    component: NewCampaign,
    role: "admin",
    protect: true,
  },
  {
    path: "/existing-campaign",
    component: ExistingCampaign,
    role: "admin",
    protect: true,
  },
  {
    path: "/create-automation",
    component: CreateAutomation,
    role: "admin",
    protect: true,
  },
  {
    path: "/existing-automation",
    component: ExistingAutomation,
    role: "admin",
    protect: true,
  },
  {
    path: "/reports",
    component: Reports,
    role: "admin",
    protect: true,
  },
  {
    path: "/confirmation",
    component: PermissionConfirmation,
    role: "admin",
    protect: true,
  },
  {
    path: "/new-product",
    name: "landing",
    component: NewProduct,
    role: "admin",
    protect: true,
  },
  {
    path: "/existing-products",
    component: ExistingProduct,
    role: "admin",
    protect: true,
  },
  {
    path: "/existing-product/product-detail",
    component: ProductDetail,
    role: "admin",
    protect: true,
  },
  {
    path: "/profile",
    component: Profile,
    role: "admin",
    protect: true,
  },
];

export default routes;
