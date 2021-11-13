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
import ManageProducts from '../../singleComponents/ManageProducts/ManageProducts';
import BasicProfile from '../../sharedComponents/BasicProfile/BasicProfile';
import AdminRoute from '../../../routes/AdminRoute';

const UserDashboard = () => {
	const { path } = useRouteMatch();
	const { admin } = useAuth();

	return (
		<>
			<AppBar></AppBar>
			<div className='flex'>
				<div>
					{admin ? (
						<AdminDashboard></AdminDashboard>
					) : (
						<DashboardSidebar></DashboardSidebar>
					)}
				</div>
				<div className='w-full'>
					<Switch>
						<Route exact path={path}>
							<BasicProfile></BasicProfile>
						</Route>
						<Route exact path={`${path}/payment`}>
							<Payment></Payment>
						</Route>
						<Route exact path={`${path}/purchase-history`}>
							<PurchaseHistory></PurchaseHistory>
						</Route>
						<Route exact path={`${path}/review`}>
							<UserReview></UserReview>
						</Route>
						<AdminRoute exact path={`${path}/make-admin`}>
							<MakeAdmin></MakeAdmin>
						</AdminRoute>
						<AdminRoute exact path={`${path}/manage-products`}>
							<ManageProducts></ManageProducts>
						</AdminRoute>
						<AdminRoute exact path={`${path}/manage-orders`}>
							<ManageOrders></ManageOrders>
						</AdminRoute>
						<AdminRoute exact path={`${path}/add-products`}>
							<AddProducts></AddProducts>
						</AdminRoute>
					</Switch>
				</div>
			</div>
			<Footer></Footer>
		</>
	);
};

export default UserDashboard;
