import Header from '~/component/Layout/components/Header';
import Sibar from './Sibar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="sibar">
                <Sibar />
            </div>
            <div className="content">{children}</div>
        </div>
    );
}

export default DefaultLayout;
