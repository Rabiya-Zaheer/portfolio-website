"use client";

import * as NextAuthReact from "next-auth/react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const SessionProvider = NextAuthReact.SessionProvider;

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      >
        {children}
      </GoogleReCaptchaProvider>
    </SessionProvider>
  );
}