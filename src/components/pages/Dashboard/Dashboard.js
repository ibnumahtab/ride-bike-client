import React, { useEffect, useState } from 'react';
import Footer from '../../sharedComponents/Footer/Footer';
import AppBar from '../../sharedComponents/AppBar/AppBar';
import DashboardSidebar from '../../sharedComponents/DashboardSidebar/DashboardSidebar';
import Payment from '../../singleComponents/Payment/Payment';
import { Route, Switch, useRouteMatch } from 'react-router';
import UserReview from '../UserReview/UserReview';
import PurchaseHistory from '../PurchaseHistory/PurchaseHistory';
import MakeAdmin from '../../singleComponents/MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import AdminDashboard from '../../sharedComponents/AdminDashboard/AdminDashboard';
import ManageOrders from '../../singleComponents/ManageOrders/ManageOrders';
import AddProducts from '../../singleComponents/AddProducts/AddProducts';

const UserDashboard = () => {
    const { path } = useRouteMatch()
    const user = useAuth()
    const [usersInfo, setUsersInfo] = useState([]);
    useEffect(() => {
        fetch("https://morning-ridge-85275.herokuapp.com/users/")
        .then(res => res.json())
        .then(data => setUsersInfo(data))
    }, [])
    console.log(usersInfo, user.user.email);
    const adminInfo = usersInfo?.find((userInfo) => userInfo?.email === user?.user.email);
    console.log(adminInfo);

    return (
        <>
            <AppBar></AppBar>
            <div className='flex'>
                <div>
                    {adminInfo?.role ? (
                        <AdminDashboard></AdminDashboard>
                    ) : (
                        <DashboardSidebar></DashboardSidebar>
                    )}
                </div>
                <div>
                    <Switch>
                        <Route exact path={path}></Route>
                        <Route exact path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <Route exact path={`${path}/purchase-history`}>
                            <PurchaseHistory></PurchaseHistory>
                        </Route>
                        <Route exact path={`${path}/review`}>
                            <UserReview></UserReview>
                        </Route>
                        <Route exact path={`${path}/make-admin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route exact path={`${path}/manage-orders`}>
                            <ManageOrders></ManageOrders>
                        </Route>
                        <Route exact path={`${path}/add-products`}>
                            <AddProducts></AddProducts>
                        </Route>
                    </Switch>
                </div>
            </div>
            <Footer></Footer>
        </>
    );};

export default UserDashboard;