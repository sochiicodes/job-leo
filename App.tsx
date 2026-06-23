import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/Jobs";
import { Footer, Header } from "./components";
import Layout from "./layout/layout";



export default function App() {

  return (
    <Routes>
      <Route path="" element={<Layout/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/jobs" element={<JobsPage/>}/>
      </Route>
    </Routes>
  );
}
