import { createBrowserRouter } from "react-router-dom";
import { ProductList } from "./manage/product/productList";
import { SvProductList } from "./manage/svProduct/superVproductList ";
import { Request } from "./manage/svProduct/request";
import { Login } from "./pages/auth/login";
import { AddWarehouse } from "./manage/warehouses/addwarehou";
import { UpdateWarehous } from "./manage/warehouses/updatewarehou";
import { SvHome } from "./pages/home/svhome";
import { AdminHome } from "./pages/home/adminhome";
import { App } from "./App";
import { AddProduct } from "./manage/product/addProduct";
import { UpdateProduct } from "./manage/product/updateProduct";
import { AddSuberv } from "./manage/supervisors/addSv";
import { AssignbSuberv } from "./manage/supervisors/assignWare";
import { UpdateSuber } from "./manage/supervisors/updateSv";
import { WhList } from "./manage/warehouses/whList";
import { SvList } from "./manage/supervisors/svList";
import { SvHistorList } from "./manage/historyRequests/svReq";
import { AdminHistorList } from "./manage/historyRequests/adminReq";
// List of Routes (Pages)
// Route is (url displayed in browser + which component to display)

// Here we have 1 Route (that contains nested routes)
export const routes = createBrowserRouter([
  
  {

    path: "/",
    element: <App />,
    // App component children routes
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/adminhome",
        element: <AdminHome />,
      },
      {
        path: "/svhome",
        element: <SvHome />,
      },
      {
        path: "/addsv",
        element: <AddSuberv />,
      },
      {
        path: "/assign/:id",
        element: <AssignbSuberv />,
      },
      {
        path: "/svList",
        element: <SvList />,
      },
      {
        path: "/updatesv/:id",
        element: <UpdateSuber />,
      },
      {
        path: "/addProduct/:id",
        element: <AddProduct />,
      },
      {
        path: "/updateproduct/:id",
        element: <UpdateProduct />,
      },
      {
        path: "/productList/:id",
        element: <ProductList />,
      },
      {
        path: "/addwh",
        element: <AddWarehouse />,
      },
      {
        path: "/whList/",
        element: <WhList />,
      },
      {
        path: "/updatewh/:id",
        element: <UpdateWarehous />,
      },
      
      {
        path: "/SvProductList/:id",
        element: <SvProductList />,
      },
      {
        path: "/request/:product_id/:supervisor_id",
        element: <Request />,
      },
      {
        path: "/supervisorHistory/:id",
        element: <SvHistorList />,
      },
      {
        path: "/adminhistory",
        element: <AdminHistorList />,
      },
    
      
    ],
  },
]);


