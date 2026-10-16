import { createBrowserRouter } from "react-router";
import PageLayout from "./components/PageLayout";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PageLayout />,
        children: [
            {index: true, element: <Dashboard /> },
            {path: 'projects', element: <Projects /> },
            {path: 'tasks', element: <Tasks /> }
        ],
    }
])