import React from 'react';
import Link from 'next/link';
import styles from './Logo.module.scss';

const { logo } = styles;

export default function Logo(): JSX.Element {
    return (
        <div className={ logo }>
            <Link href="/">
                    Seattle Par 3
            </Link>
        </div>
    );
}
