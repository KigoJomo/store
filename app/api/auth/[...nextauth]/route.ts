// import { auth } from "@/auth";
// import { NextRequest, NextResponse } from 'next/server';

// export async function GET(request: NextRequest) {
//   const session = await auth();
//   console.log(request)
  
//   // Check if user is authenticated
//   if (!session || !session.user) {
//     // Return unauthorized response if no valid session exists
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }
  
//   // Proceed with authenticated logic
//   // For example, fetch user-specific data
//   return NextResponse.json({ 
//     message: "Authenticated", 
//     user: session.user.name || session.user.email 
//   });
// }


import { handlers } from "@/auth"
export const { GET, POST } = handlers
