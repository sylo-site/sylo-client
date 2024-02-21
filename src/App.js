import { RouterProvider } from "react-router-dom";
import { router } from "./route";
function App() {
  return <section className="App">
    <RouterProvider router={router} />
    </section>;
}

export default App;
