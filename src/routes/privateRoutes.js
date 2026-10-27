import UserDashboardPage from "../pages/UserDashboardPage";
import UserProfilePage from "../pages/UserProfilePage";
import CoreData from "../pages/CoreData.jsx";
import SettingPage from "../pages/SettingPage.jsx";
import ProductPage from "../core_data/product/ProductPage.jsx";

export const PRIVATE_ROUTES = {
    DASHBOARD: {
        path: '/dashboard',
        label: 'Dashboard',
        icon: 'bi-grid-1x2',
        component: UserDashboardPage,
        title: 'Dashboard | TeaTracer',
        end: true
    },
    CORE_DATA: {
        path: '/core-data',
        label: 'Core Data',
        icon: 'bi-clipboard-data-fill',
        component: CoreData,
        title: 'Core Data | TeaTracer',
        end: false
    },
    PRODUCT: {
        path: '/core-data/product',
        label: 'product',
        icon: 'bi-clipboard-data-fill',
        component: ProductPage,
        title: 'product | TeaTracer',
        end: false
    },
    PROFILE: {
        path: '/profile',
        label: 'Profile',
        icon: 'bi-person-vcard-fill',
        component: UserProfilePage,
        title: 'Profile | TeaTracer',
        end: false
    },
    SETTINGS: {
        path: '/settings',
        label: 'Settings',
        icon: 'bi-sliders',
        component: SettingPage,
        title: 'Settings | TeaTracer',
        end: false
    }
};

export const getPrivateRoutesArray = () => Object.values(PRIVATE_ROUTES);
export const getNavigationItems = () => getPrivateRoutesArray();
export const getRoutePaths = () => getPrivateRoutesArray().map(route => route.path);
export const getRouteByPath = (path) => getPrivateRoutesArray().find(route => route.path === path);