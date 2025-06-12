import { createHashRouter } from "react-router-dom";
import { MainPage } from "../../pages/MainPage/MainPage";
import { Method } from "../../pages/Methods/Method";
import { SuperMethod } from "../../pages/SuperMethod/Super";

export const router = createHashRouter ([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: 'method',
    element: <Method />
  },
  {
    path: 'super',
    element: <SuperMethod/>
  },
])