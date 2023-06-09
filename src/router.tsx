import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import { TargetList, TargetCreate, TargetShow, TargetEdit } from "./pages"
import { SpamPage } from "./pages/SpamPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <TargetList />,
      },
      {
        path: "/targets",
        element: <TargetList />,
      },
      {
        path: "/targets/:id",
        element: <TargetShow />,
      },
      {
        path: "/targets/:id/edit",
        element: <TargetEdit />,
      },
      {
        path: "/targets/create",
        element: <TargetCreate />,
      },
      {
        path: "/spam",
        element: <SpamPage />,
      },
    ],
  },
])
