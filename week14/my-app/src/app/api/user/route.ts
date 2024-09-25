// export function GET(){
//     return Response.json({
//         name:"Pritika",
//         email:"pritika@gmail.com",
//     })
// }

import { NextRequest } from "next/server";

export async function POST( req:NextRequest){
    const body=await req.json();
    console.log(body);
    
    return Response.json({
        message:"YOu are logged in successfully"
    })
}