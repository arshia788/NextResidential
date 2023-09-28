import styles from '@/components/layout/DashboardSidebar.module.css';
import {CgProfile} from 'react-icons/cg';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

async function DashboardSidebar({children}) {

    const session= await getServerSession(authOptions);
    console.log(session);

  return (

    // in tag koli hast 
    <div className={styles.container}>


        {/* in misheh side bar ma. */}
        <div className={styles.sidebar}>
            <CgProfile />
            <p>{session.user.email}</p>
            <span></span>
            <Link href={'/dashboard'}>حساب کاربری </Link>
            <Link href={'/dashboard/my-profiles'}> آگهی های من </Link>
            <Link href={'/dashboard/add'}> ثبت آگهی </Link>
        </div>


        {/* khoroji route ha inja neshon dadeh misheh. */}
        <div className={styles.main}>
            {children}
        </div>

    </div>
  )
}

export default DashboardSidebar