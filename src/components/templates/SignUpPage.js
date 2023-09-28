'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '@/components/templates/SignUpPage.module.css';

import { Toaster, toast } from 'react-hot-toast';

import {ThreeDots} from 'react-loader-spinner'

export default function SignUpPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [isLoading, setIsLoading]= useState(false);

    const router= useRouter();

    const singUper= async(e)=>{

        // ? inja true mikoni ta halat loading true beshe ta vaghti data oma beri false bokoni.

        setIsLoading(true);
        e.preventDefault()

        if(password !== rePassword){
            toast.error("رمز و تکرار آن برابر نیست");
            return;        
        ;
    }

        const res= await fetch('/api/signup',{
            method:"POST",
            body:JSON.stringify({email, password}),
            headers:{"Content-Type":'application/json'}
        })

        const data= await res.json();

        console.log(data);

        if(res.status === 201){
            router.push('/signin')         
            setIsLoading(false)   
        }
        else{
            setIsLoading(false)
            toast.error(data.error)
        }

    }


    return (
        <div className={styles.form}>
            <h4>فرم ثبت نام</h4>
            <form>
                <label>ایمیل:</label>

                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type='text'
                />
                <label>رمز عبور:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>تکرار رمز عبور:</label>
                <input
                    type="password"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                />

                {
                    isLoading 
                    ?
                    <ThreeDots 
                    color='#304ffe'
                    height={45}
                    ariaLabel='three-dots-loading'
                    visible={true}
                    wrapperStyle={{margin:'auto'}}
                    />
                    :
                    <button 
                    onClick={singUper}
                    type='submit'>           
                    ثبت نام
                    </button>
                }


            </form>
            <p>
                حساب کاربری دارید؟
                <Link href="/signin">ورود</Link>
            </p>

            <Toaster />
        </div>
    )
}
