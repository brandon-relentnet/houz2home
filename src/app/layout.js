import '@/css/globals.css';
import dynamic from 'next/dynamic';
import { ThemeProvider } from 'next-themes';

const Footer = dynamic(() => import('@/components/Footer'));
const Navbar = dynamic(() => import('@/components/navbar/Navbar'));

/* Set the title and description for the website */
export const metadata = {
  title: "Responsive Template",
  description: "Created by Doni",
};

export default function RootLayout({ children }) {
  return (
    /* suppressHydrationWarning is used to prevent a warning in the console from next-themes*/
    <html lang="en" suppressHydrationWarning>
      <body className="h-full">
        {/* ThemeProvider is used to manage the theme */}
        <ThemeProvider attribute="class" defaultTheme="dark">
          {/* Render the Navbar, main content, and Footer */}
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
