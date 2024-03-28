import ContactForm from '@/components/ContactForm'; // Adjust the import path based on your file structure


const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold text-center mb-8">Contact Us</h1>
      <ContactForm />
    </div>
  );
};

export default ContactPage;

