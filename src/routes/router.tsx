import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Guides from "../pages/guides";
import { ErrorPage } from "../pages/error";
import { MarkdownStyle } from "../components/markdownStyle";
import KenGuide from "../pages/kenGuide.mdx";
import { Contato } from "../pages/contato";
import { Home } from "../pages/home";

const router = createBrowserRouter([
  {
    path: "/thirdStrike",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/thirdStrike",
        element: <Home />,
      },
      {
        path: "/thirdStrike/guides",
        element: <Guides />,
      },
      {
        path: "/thirdStrike/contato",
        element: <Contato />,
      },
      {
        path: "/thirdStrike/guides/ken",
        element: (
          <MarkdownStyle>
            <KenGuide />
          </MarkdownStyle>
        ),
      },
    ],
  },
]);

export default router;
