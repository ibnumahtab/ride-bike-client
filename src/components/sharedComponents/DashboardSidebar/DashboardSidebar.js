import React, { useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import {FaMoneyBill} from "react-icons/fa"
import {  MdOutlineRateReview } from "react-icons/md";
import Icon from "awesome-react-icons";
import useAuth from '../../../hooks/useAuth';
import { Navigation } from 'react-minimal-side-navigation/lib';
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

const DashboardSidebar = () => {
    const history = useHistory();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { user } = useAuth();
    console.log(user);
    const { url} = useRouteMatch()
    return (
        <>
            {/* Sidebar Overlay */}
            <div
                onClick={() => setIsSidebarOpen(false)}
                className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
                    isSidebarOpen ? "block" : "hidden"
                }`}
            />

            <div>
                <button
                    className='btn-menu'
                    onClick={() => setIsSidebarOpen(true)}
                    type='button'
                >
                    <Icon name='burger' className='w-6 h-6' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
                    isSidebarOpen
                        ? "ease-out translate-x-0"
                        : "ease-in -translate-x-full"
                }`}
            >
                <div className='flex items-center justify-center mt-10 text-center py-6'>
                    <span className='mx-2 text-2xl font-semibold text-black'>
                        Login as {user?.displayName}
                    </span>
                </div>

                {/* https://github.com/abhijithvijayan/react-minimal-side-navigation */}
                <Navigation
                    activeItemId={location.pathname}
                    onSelect={({ itemId }) => {
                        history.push(itemId);
                    }}
                    items={[
                        {
                            title: "Payment",
                            itemId: `${url}/payment`,
                            // Optional
                            elemBefore: () => <FaMoneyBill></FaMoneyBill>,
                        },
                        {
                            title: "Purchase History",
                            itemId: `${url}/purchase-history`,
                            elemBefore: () => <Icon name='user' />,
                        },
                        {
                            title: "Review",
                            itemId: `${url}/review`,
                            // Optional
                            elemBefore: () => (
                                <MdOutlineRateReview></MdOutlineRateReview>
                            ),
                        }
                    ]}
                />
            </div>
        </>
    );
};

export default DashboardSidebar;