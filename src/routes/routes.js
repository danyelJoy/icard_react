import routesAdmin from "./routes.admin";
import routesClient from "./routes.client";
import {Error404} from "../pages";
import {BasisLayout} from "../layouts";

const routes = [
    ...routesAdmin,
    ...routesClient, 

     //Se agrega la línea del error 404 desde la vista Basic   
    {
        layout: BasisLayout,
        component: Error404,
    }
];

export default routes;