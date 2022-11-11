import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import UpdateReview from "../components/MyReviews/UpdateReview/UpdateReview";
import AddServices from "../Pages/AddServices/AddServices";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import MyReview from "../Pages/MyReview/MyReview";
import NotFund404 from "../Pages/NotFound404/NotFount404";
import Registration from "../Pages/Registration/Registration";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://photographer-shohanur-server-dvsrshohan.vercel.app/service')
            },
            {
                path: '/add-services',
                element: <PrivetRoute><AddServices></AddServices></PrivetRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/my-reviews',
                element: <PrivetRoute><MyReview></MyReview></PrivetRoute>
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://photographer-shohanur-server-dvsrshohan.vercel.app/service/${params.id}`)
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/update-review/:id',
                element: <PrivetRoute><UpdateReview></UpdateReview></PrivetRoute>,
                loader: ({ params }) => fetch(`https://photographer-shohanur-server-dvsrshohan.vercel.app/reviews/${params.id}`)
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '*',
                element: <NotFund404></NotFund404>
            }
        ]
    }
]);
export default router;