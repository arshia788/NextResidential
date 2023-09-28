'use client';

import Link from 'next/link';
import styles from '@/components/layout/Header.module.css';

import { FiLogIn } from 'react-icons/fi';
import { useSession } from 'next-auth/react';

export default function Header() {

    const { data } = useSession();

    return (
        <header className={styles.header}>

            <div>
                <ul>
                    <li>
                        <Link href={'/'}>
                            صفحه اصلی
                        </Link>
                    </li>

                    <li>
                        <Link href={'/but-residential'}>
                            آگهی ها
                        </Link>
                    </li>

                </ul>
            </div>

            <div className={styles.login}>
                {
                    data
                        ?
                        <p>Logged</p>
                    :
                        <Link href={'/signin'}>
                            <FiLogIn />
                            <span>ورود</span>
                        </Link>
                }
            </div>


        </header>
    )
};
