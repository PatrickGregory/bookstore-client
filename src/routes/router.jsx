import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../components/SingleBook";
import ErrorPage from "../error-page";
import Singlebook from "../shop/Singlebook";
import Dashboard from "../Dashboard/Dashboard"
import Uploadbook from "../Dashboard/Uploadbook"
import Managebook from "../Dashboard/Managebook"
import Editbook from "../Dashboard/Editbook"
import DashboardLayout from "../Dashboard/DashboardLayout";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Logout from "../components/Logout";
import PrivateRoute from "../protectedRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            // Add more routes here for other pages...
            {
                path: "/shop",
                element: <Shop/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/blog",
                element: <Blog/>,
            },
            {
                path: "/singleBook",
                element: <SingleBook/>,
            },
            {
                path:"/book/:id",
                element: <Singlebook/>,
                loader:({params})=>fetch(`http://localhost:5001/book/${params.id}`)
            }
        ]
    },
    {
        path:'/admin/dashboard',
        element:<DashboardLayout/>,
        children:[
            {
                path:'/admin/dashboard',
                element:<PrivateRoute><Dashboard/></PrivateRoute>
            },
            {
                path:'/admin/dashboard/upload',
                element:<Uploadbook/>
            },
            {
                path:'/admin/dashboard/manage',
                element:<Managebook/>
            },
            {
                path:'/admin/dashboard/edit/:id',
                element:<Editbook/>,
                loader:({params})=>fetch(`http://localhost:5001/book/${params.id}`)
            },
        ]
    },
    {
        path: '/signup',
        element: <Signup/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/logout',
        element: <Logout/>
    }
]);

export default router;