import React, { lazy, Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from '@/routes/ProtectedRoutes'; 
import PublicRoutes from '@/routes/PublicRoutes';

// import Layout from '@/components/Layout';
// import Login from '@/components/Auth/Login';
// import ForgotPassword from '@/components/Auth/ForgotPassword';
// import Dashboard from '@/components/DashBoard';
// import ResetPassword from '@/components/Auth/ResetPassword';
// import UserList from '@/components/Pages/User/All';
// import NotFound from '@/components/Static/PageNotFound';
// import People from '@/components/Payments/DemoPage';



// const Layout = lazy(() => import("@/components/Layout"))
const Login = lazy(() => import("@/components/Auth/Login"))
const ForgotPassword = lazy(() => import("@/components/Auth/ForgotPassword"))
const ResetPassword = lazy(() => import("@/components/Auth/ResetPassword"))

const NotFound = lazy(() => import("@/components/Static/PageNotFound"))
const Forbidden = lazy(() => import("@/components/Static/Forbidden"))

const Dashboard = lazy(() => import("@/components/Pages/DashBoard"))

const UserList = lazy(() => import("@/components/Pages/User/All"))
const AddUser = lazy(() => import("@/components/Pages/User/AddUser"))

const ShowUser = lazy(() => import("@/components/Pages/CurrentUser/ShowUser"))


const AppMain: React.FC = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(true);
    const isLoggedIn = true

    return (
        <div>
            <Suspense fallback={<ProtectedRoutes isLoggedIn={isLoggedIn} />}>
            <Routes>
                <Route  element={<ProtectedRoutes isLoggedIn={isLoggedIn} />}>
                    {/* <Route element={<Layout />}> */}

                        <Route path='/edit-profile' element={<ShowUser />} />

                        <Route path="/dashboard" element={<Dashboard />} />

                        <Route path='user'>
                            <Route path='list' element={<UserList />} />
                            <Route path='add' element={<AddUser />} />
                        </Route>
                    {/* </Route> */}
                </Route>

                <Route element={<PublicRoutes isLoggedIn={isLoggedIn} />}>
                    <Route path="login" element={<Login />} />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                    <Route path="reset-password" element={<ResetPassword />} />
                    <Route path="/" element={<Login />} />
                </Route>

                <Route path="*" element={<NotFound />} />
                <Route path="forbidden" element={<Forbidden />} />

            </Routes>
            </Suspense>
        </div>
    );
}

export default AppMain;
