import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();
export  function GET(req:NextRequest){
    return NextResponse.json({
        name:"Pritika",
        email:"pritika@gmail.com",
    })
}


export async function POST(req:NextRequest){
    //body
    const body=await req.json();
    try{
        await client.user.create({
            data:{
                name:body.name,
                
                password:body.password
            }
     
        })
        return NextResponse.json({
            body
         })
         }
         
         catch(e:any){
             return NextResponse.json({
                message:e.message,
             },{
                status:e.status
             })
    }

    // console.log(body);
    
    // //headers
    // console.log(req.headers.get("authorization"));
    // //query params
    // console.log(req.nextUrl.searchParams.get("name"));
}