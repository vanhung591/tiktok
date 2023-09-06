import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './MenuItem/Header';
import { useState } from 'react';
const cx = classNames.bind(styles);

const defaultfn = () => {};

function Menu({ children, items = [], onChange = { defaultfn } }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <div>
            <Tippy
                delay={[0, 700]}
                interactive={true}
                placement="bottom-end"
                render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            {history.length > 1 && (
                                <Header
                                    title={'Language'}
                                    onBack={() => {
                                        setHistory((prev) => prev.slice(0, prev.length - 1));
                                    }}
                                />
                            )}
                            {renderItems()}
                        </PopperWrapper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default Menu;
