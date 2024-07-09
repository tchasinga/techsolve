import { Inter } from "next/font/google";
import "../app/globals.css"; // Ensure this path is correct based on your project structure

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Techsol Software Kenya",
  description: "A tech developer service offers expert guidance and solutions in software development, encompassing areas like web and mobile app creation, cloud computing, and cyber-security. These services typically include custom software development, system integration, and IT consulting to optimize",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Techsol Software Kenya" />
        <meta property="og:url" content="https://techsolvering.netlify.app/" />
        <meta property="og:image" content="https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <meta property="og:description" content="A tech developer service offers expert guidance and solutions in software development, encompassing areas like web and mobile app creation, cloud computing, and cyber-security. These services typically include custom software development, system integration, and IT consulting to optimize" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
