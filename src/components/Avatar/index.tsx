import { ImgHTMLAttributes } from 'react';

import styles from './styles.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
    src: string;
}

export function Avatar({ hasBorder = false, ...props }:AvatarProps) {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props}
        />
    )
}