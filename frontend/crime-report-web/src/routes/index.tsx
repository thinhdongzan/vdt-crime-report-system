import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import CitizenLayout from '../layouts/CitizenLayout';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import CitizenSubmitReportPage from '../pages/CitizenSubmitReportPage';
import CitizenTrackReportPage from '../pages/CitizenTrackReportPage';
import CommanderDashboardPage from '../pages/CommanderDashboardPage';
import CitizenDashboardPage from '../pages/CitizenDashboardPage';
import LandingPage from '../pages/LandingPage';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <LandingPage /> },
            { path: "login", element: <LoginPage /> },
            { path: "register", element: <RegisterPage /> },
            { path: "commander/dashboard", element: <CommanderDashboardPage /> },
        ]
    },
    {
        path: "/citizen",
        element: <CitizenLayout />,
        children: [
            { path: "dashboard", element: <CitizenDashboardPage /> },
            { path: "reports/submit", element: <CitizenSubmitReportPage /> },
            { path: "reports/track", element: <CitizenTrackReportPage /> },
        ]
    }
]);
