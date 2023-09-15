import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Images.module.scss';

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.noImages);
    };
    return (
        <img
            className={classNames(styles.wrapper, classNames)}
            ref={ref}
            {...props}
            src={fallback || src}
            alt={alt}
            onError={handleError}
        />
    );
});
export default Image;
