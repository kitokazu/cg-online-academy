import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/home/Content";
import Faq from "./components/home/Faq";

/* Navbar: Logo (Home) Register, Student Works, Free Teaching Materials, Installations, Login?
   Footer: Terms of Use (all the legal information), Refund/Return, Contact, Socials
*/


export default function Home() {
  return (
    <main className = "bg-neutral-900">
        {/*Home Contents/Freq Asked Question Component*/}
        <Content />
        <Faq />
    </main>
  );
}
