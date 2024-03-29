import ContactForm from '@/components/ContactForm'; // Adjust the import path based on your file structure


const ContactPage = () => {
  return (
    <section className='bg-blue-50'>
      <div className='container m-auto max-w-2xl py-24'>

      <h1 className="text-3xl font-semibold text-center mb-8">Contact Us</h1>
      <ContactForm />
    </div>
    </section>
  
  );
};

export default ContactPage;

