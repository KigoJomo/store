// Ideally define auth check here for auth-sensitive actions/paths

import { auth } from "@/auth";
import { cache } from "react";

export const getCurrentUser = cache(async () =>{
  const session = await auth()

  return {
    isAuthenticated: session?.user ? true : false,
    user: session?.user ? session.user : null
  }
})