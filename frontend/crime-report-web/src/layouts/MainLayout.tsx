import { Outlet, Link } from 'react-router-dom';

export default function MainLayout() {
    return (
        <div style={{ padding: '20px' }}>
            <nav style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
                <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
                <Link to="/reports/submit" style={{ marginRight: '10px' }}>Submit Report</Link>
                <Link to="/reports/track" style={{ marginRight: '10px' }}>Track Report</Link>
                <Link to="/dashboard" style={{ marginRight: '10px' }}>Dashboard</Link>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
