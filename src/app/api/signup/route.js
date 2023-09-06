import { NextResponse } from "next/server";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import { hashPassword, hashPassword } from "@/utils/auth";


export async function POST(req){

    try {
        await connectDB();

        const {email, password}= await req.json();

        if (!email || !password) {
            return NextResponse.json(
              { error: "لطفا اطلاعات معتبر وارد کنید" },
              { status: 422 }
            );
        }

        const existingUser= await User.findOne({email});

        if (existingUser) {
            return NextResponse.json(
              { error: "این حساب کاربری وجود دارد" },
              { status: 422 }
            );
        }

        const hashedPassword= await hashPassword(password);

        const newUser= await User.create({email:email, password:hashedPassword})

        return NextResponse.json(
            { message: "حساب کاربری ایجاد شد" },
            { status: 201 }
        );


    } 
    
    catch (error) {
        console.log(error);
        return NextResponse.json({error:"Failed to connect to DB"},
        {status:500}
        )
    }
}




