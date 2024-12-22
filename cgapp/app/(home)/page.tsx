import Content from "./_home/Content";
import Faq from "./_home/Faq";

/* Navbar: Logo (Home) Register, Student Works, Free Teaching Materials, Installations, Login?
   Footer: Terms of Use (all the legal information), Refund/Return, Contact, Socials
*/

/*
  ============================== 
   Home Page:
  ============================== 
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
