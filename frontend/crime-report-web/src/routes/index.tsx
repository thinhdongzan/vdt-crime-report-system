import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import CitizenSubmitReportPage from '../pages/CitizenSubmitReportPage';
import CitizenTrackReportPage from '../pages/CitizenTrackReportPage';
import CommanderDashboardPage from '../pages/CommanderDashboardPage';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "login", element: <LoginPage /> },
            { path: "register", element: <RegisterPage /> },
            { path: "reports/submit", element: <CitizenSubmitReportPage /> },
            { path: "reports/track", element: <CitizenTrackReportPage /> },
            { path: "dashboard", element: <CommanderDashboardPage /> },
        ]
    }
]);
