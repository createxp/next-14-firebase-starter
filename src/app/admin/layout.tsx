import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import PrivateRoute from "~/routes/privateRoute";

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrivateRoute>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>{children}</body>
      </html>
    </PrivateRoute>
  );
}
