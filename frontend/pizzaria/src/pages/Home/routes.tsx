import { RouteObject } from "react-router-dom";
import { Home } from "./Home";

export const homeRoute: RouteObject[] = [
    {
        path: '/',
        element: <Home />,
        errorElement: <div>Erro</div>
    }
]