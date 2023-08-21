import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/component/Layout/components/Header';
import Sibar from './Sibar';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sibar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
