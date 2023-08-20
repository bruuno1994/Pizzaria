import { RouteObject } from "react-router-dom";
import { Cardapio } from "./Cardapio";

export const cardapioRoute: RouteObject[] = [
    {
        path: '/cardapio',
        element: <Cardapio />,
        errorElement: <div>Erro</div>
    }
]