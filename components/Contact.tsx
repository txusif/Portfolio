import ContactForm from "./ContactForm";
import GetInTouch from "./GetInTouch";

const Contact = () => {
  return (
    <section id="contact" className="grid md:grid-cols-2 items-center">
      <GetInTouch />
      <ContactForm />
    </section>
  );
};

export default Contact;
