import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import './assets/Scrollbar.css';
import V2 from './V2/V2';
import ProjectsShowCase from "./V2/components/ProjectsShowCase";
import V3 from "./V3/V3";
import ProjectDetails from "./V3/components/ProjectDetails";
import Certifications from "./V3/components/Certifications";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/">
          <Route index element={<V3 />}></Route>
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/certificate" element={<Certifications />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
        <Route path="/v2">
          <Route index element={<V2 />}></Route>
          <Route path="/v2/projects" element={<ProjectsShowCase />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;