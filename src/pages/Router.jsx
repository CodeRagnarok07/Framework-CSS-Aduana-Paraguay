import {
    createBrowserRouter,
} from "react-router-dom";

import Layer from '../layout/index'

import Colapse from './collapse'
import Avatar from './avatar'
import Inputs from './inputs'
import Font from './font'
import Color from './color'
import Button from './elements/button'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layer></Layer>,
    },
    {
        path: "/font",
        element: <Layer><Font /></Layer>,
    },
    {
        path: "/color",
        element: <Layer><Color /></Layer>,
    },
    {
        path: "/button",
        element: <Layer><Button /></Layer>,
    },
    {
        path: "/inputs",
        element: <Layer><Inputs /></Layer>,
    },
    {
        path: "/avatar",
        element: <Layer><Avatar /></Layer>,
    },
    {
        path: "/collapse",
        element: <Layer><Colapse /></Layer>,
    },
]);

export default router