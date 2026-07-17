"use client";

import * as NextAuthReact from "next-auth/react";

const SessionProvider = NextAuthReact.SessionProvider;

export function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}