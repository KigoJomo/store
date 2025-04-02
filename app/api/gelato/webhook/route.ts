// import dbConnect from "@/lib/config/dbConnect";
import { NextResponse } from "next/server";

// export const dynamic = 'force-dynamic';

export async function POST(){
  // await dbConnect();
  
  try{
    // parse the request body and extract the necessary data.
    // first define variant model and call it here to add, update or delete
  } catch(error){
    return NextResponse.json( {error: error}, { status: 400 } )
  }
}

