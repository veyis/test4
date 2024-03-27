import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import SocialMediaIcons from '@/components/SocialMediaIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 py-8 mt-24">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
    <div className="flex justify-center md:justify-start mb-4 md:mb-0">
      <Image src={logo} alt="Logo" className="h-8 w-auto" />
    </div>

    <div className="flex flex-col md:flex-row items-center">
      <nav className="flex flex-wrap justify-center mb-4 md:mb-0">
        <a href="/" className="text-sm text-gray-500 hover:text-gray-700 px-4 py-2" aria-label="Home">Home</a>
        <a href="/about" className="text-sm text-gray-500 hover:text-gray-700 px-4 py-2" aria-label="About Us">About</a>
        <a href="/contact" className="text-sm text-gray-500 hover:text-gray-700 px-4 py-2" aria-label="Contact Us">Contact</a>
        <a href='/faq' className='text-sm text-gray-500 hover:text-gray-700 px-4 py-2' aria-label='FAQ'>FAQ</a>
      </nav>
      <div className="flex justify-center md:justify-end space-x-4">
      
      <SocialMediaIcons />
      </div>
    </div>

    <div className="text-center md:text-right mt-4 md:mt-0">
      <p className="text-sm text-gray-500">
        &copy; {currentYear} Xperiencetheb. All rights reserved.
      </p>
    </div>
  </div>
</footer>



  );
};
export default Footer;
