import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import AddServices from "../Pages/AddServices/AddServices";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import MyReview from "../Pages/MyReview/MyReview";
import Registration from "../Pages/Registration/Registration";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/service')
            },
            {
                path: '/add-services',
                element: <AddServices></AddServices>
            },
            {
                path: '/my-reviews',
                element: <MyReview></MyReview>
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            }
        ]
    }
]);
export default router;