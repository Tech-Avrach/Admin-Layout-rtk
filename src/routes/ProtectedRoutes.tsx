import React, { useEffect, Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Loader from '@/components/ui/loader';
import Layout from '@/components/Layout';

interface ProtectedRoutesProps {
    isLoggedIn: boolean;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ isLoggedIn }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);

    return isLoggedIn ? (
        <Suspense fallback={
            <Layout>
                <Loader />
            </Layout>
        }>
            <Layout>
                <Outlet />
            </Layout>
        </Suspense>
    ) : null;
}

export default ProtectedRoutes;
