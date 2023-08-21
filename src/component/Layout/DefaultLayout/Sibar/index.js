import classNames from 'classnames/bind';
import styles from './Sibar.module.scss';

const cx = classNames.bind(styles);

function Sibar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>sibar</h2>
        </aside>
    );
}
export default Sibar;
