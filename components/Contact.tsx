import ContactForm from "./ContactForm";
import GetInTouch from "./GetInTouch";

const Contact = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 gap-6 lg:gap-0 items-center"
    >
      <GetInTouch />
      <ContactForm />
    </section>
  );
};

export default Contact;
