import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "../pages/HomePage";
import JobsPage from "../pages/JobPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "jobs",
                element: <JobsPage/>,
            },
            {
                path: "",
                element: ""
            }
        ]
    }
])

{/* <Routes>
      <Route path="" element={<RootLayout/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/jobs" element={<JobsPage/>}/>
      </Route>
    </Routes> */}

    export const routerr = createBrowserRouter([
        {
          path: "/",
          element: <RootLayout />,
          children: [
            {
              index: true,
              element: <HomePage />,
            },
            {
              path: "jobs",
              element: <JobsPage />,
            },
          ],
        },
      ]);