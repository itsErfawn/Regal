import CookieStore from "@/lib/cookies/CookieStore";
import EnsureGuest from "@/lib/validate/EnsureGuest";
import "./globals.css"
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie=await CookieStore.get('token')||await CookieStore.get('geust_token')
  return (
    <html lang="fa" dir="rtl">
      <body>
        {!cookie&&<EnsureGuest/>}
        {children}
      </body>
    </html>
  );
}
