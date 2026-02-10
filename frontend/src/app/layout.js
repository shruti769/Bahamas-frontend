import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}



// 'use client';

// import "./globals.css";
// import Header from "@/components/layouts/Header";
// import Footer from "@/components/layouts/Footer";
// import { usePathname } from 'next/navigation';

// export default function RootLayout({ children }) {
//   const pathname = usePathname();
  
//   // Pages without header/footer
//   const authPages = ['/signup', '/login', '/forgot-password'];
//   const showLayout = !authPages.includes(pathname);

//   return (
//     <html lang="en">
//       <body>
//         {showLayout && <Header />}
//         {children}
//         {showLayout && <Footer />}
//       </body>
//     </html>
//   );
// }