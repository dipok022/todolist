import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
