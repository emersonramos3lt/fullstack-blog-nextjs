import { Lato } from "next/font/google";
import "./globals.css";


const lato = Lato({ subsets: ['latin'], weight:["100", "300", "400", "700", "900"] });

export const metadata = {
  title: "Posts",
  description: "Welcome to my blog – a space where creativity meets technology! Here, you’ll find insightful content on web development, UI/UX design, and the latest trends in the digital world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        {children}
      </body>
    </html>
  );
}
