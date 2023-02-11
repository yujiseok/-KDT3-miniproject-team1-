import GlobalStyles from "global/globalStyles";
import { RouterProvider } from "react-router-dom";
import Router from "router/Router";

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={Router} />
      <GlobalStyles />
    </div>
  );
};
export default App;
