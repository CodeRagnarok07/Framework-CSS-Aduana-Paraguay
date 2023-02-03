import {
    createBrowserRouter,
} from "react-router-dom";

import Layer from '../layout/index'

import Index from './index'
import Inputs from './inputs'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layer/>,
        children: [
            {
              path: "",
              element: <Index />,
            },
            {
              path: "inputs",
              element: <Inputs />,
            },
          ],
    },
]);

export default router