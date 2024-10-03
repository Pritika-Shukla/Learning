import { NextRequest, NextResponse } from "next/server";

export  function GET(req:NextRequest){
    return NextResponse.json({
        name:"Pritika",
        email:"pritika@gmail.com",
    })
}


export async function POST(req:NextRequest){
    //body
    const body=await req.json();
    // console.log(body);
    
    // //headers
    // console.log(req.headers.get("authorization"));
    // //query params
    // console.log(req.nextUrl.searchParams.get("name"));
    
    return NextResponse.json({
       body
    })
    
}