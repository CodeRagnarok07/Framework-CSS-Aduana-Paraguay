import {
    createBrowserRouter,
} from "react-router-dom";

import Layer from '../layout/index'

import Colapse from './collapse'
import Avatar from './avatar'
import Inputs from './inputs'
import Index from './index'
import Font from './font'
import Color from './color'
import Placeholder from './placeholder'
import Button from './elements/button'
import Components from './components'

import Dropdown from './dropdown'
import Card from './card'


const router = createBrowserRouter([


    {
        path: "/",
        element: <Layer><Index /> </Layer>,
    },
    {
        path: "/components",
        element: <Layer><Components /></Layer>,
    },
    {
        path: "/dropdown",
        element: <Layer><Dropdown /></Layer>,
    },
    {
        path: "/card",
        element: <Layer><Card /></Layer>,
    },
    {
        path: "/font",
        element: <Layer><Font /></Layer>,
    },
    {
        path: "/placeholder",
        element: <Layer><Placeholder /></Layer>,
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