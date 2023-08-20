import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import type { Router as RemixRouter } from '@remix-run/router';
import { homeRoute } from './pages/Home/routes';
import { cardapioRoute } from './pages/Cardapio/routes';

const router: RemixRouter = createBrowserRouter([...homeRoute, ...cardapioRoute]);

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App