"use client";

import { Button } from "flowbite-react";
import Link from "next/link";
import { useContext, useEffect } from "react";

import { AuthContext } from "@/context/AuthContext";
import { RoutePageData } from "@/staticData/staticData";
import { useRouter } from "next/navigation";

export default function Home() {
    const { handleSignOut, userInfo } = useContext(AuthContext);
    const router = useRouter()

    useEffect(() => {
        const authToken = localStorage.getItem("auth-token");
        if (!authToken) {
            window.location.href = "/";
        }
    }, [userInfo]);

    return (
        <div className="flex justify-center items-center bg-black h-screen">
            <div className="flex flex-col justify-center items-center">

            {RoutePageData.map((item,index)=>(
                <Button key={index} color="dark" className="mb-4 w-full" onClick={()=>router.push(`/dashboard/${item.uri}`)}>
                    {item.route}
                </Button>))}
                <Button color="failure" className="w-full mb-4 h-10" onClick={()=>{handleSignOut();router.push('/')}}>logout</Button>
               
               
                
            </div>
        </div>
    );
}
