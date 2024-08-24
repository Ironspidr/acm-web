import { ComplexNavbar } from "../components/navbar";
import { Banner } from "../components/banner";
import backdrop from "../assets/img/backdrop_1.jpg";
import { ContactForm } from "../components/contact";
import { Footer } from "../components/footer";

export default function ContactPage() {
  return (
    <div className="App font-family:league-spartan dark:bg-back-dark flex flex-col">
      <div>
        <header className="App-header pt-5 justify-center">
          <ComplexNavbar />
          <div className="flex items-center justify-center w-full pt-10">
            <Banner
              title="Contact Us"
              caption="Feel free to reach out to us!"
              Banner={backdrop}
            />
          </div>
        </header>
      </div>
      <div className="flex justify-center py-5">
        <ContactForm />
      </div>
      <div className="flex justify-center py-5">
        <Footer />
      </div>
      
    </div>
  );
}
