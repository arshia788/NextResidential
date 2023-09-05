import Link from 'next/link';
import styles from '@/components/layout/Header.module.css';

import { FiLogIn } from 'react-icons/fi';

export default function Header() {
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
                <Link href={'/signin'}>
                    <FiLogIn />
                    <span>ورود</span>
                </Link>
            </div>


        </header>
    )
};
