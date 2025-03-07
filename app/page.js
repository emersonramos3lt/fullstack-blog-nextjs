'use client';
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
   <main>
      <header>
        <ToastContainer theme="dark" />
        <Header />
      </header>

      <section>
        <BlogList />
      </section>

      <footer>
        <Footer />
      </footer>
   </main>
  );
}
