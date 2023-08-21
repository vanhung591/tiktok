// Layout
import { HeaderOnly } from '~/component/Layout';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Porfile from '~/pages/Profile/index.js';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

const pulicRoute = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Porfile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoute = [];

export { pulicRoute, privateRoute };
