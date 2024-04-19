import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import { GlobalProvider } from '@/context/GlobalContext';
import '@/assets/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'photoswipe/dist/photoswipe.css';

export const metadata = {
  title: 'Stay at Tesla House | Unique Accommodations & Local Favorites - ExperienceTheB.com',
  description: 'Discover the Tesla House on ExperienceTheB.com. A place where comfort meets delight.  . Get in touch for bookings, local recommendations, and a unique stay experience. Your adventure starts here!',
  keywords: 'rental, find rentals, find properties, Tesla House, Unique Stays, Accommodations, Local Favorites, Book Your Stay, ExperienceTheB, Innovative Living, Contact Us',
};

const MainLayout = ({ children }) => {
  return (
    <GlobalProvider>
      {/* <AuthProvider> */}
        <html lang='en'>
          <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      {/* </AuthProvider> */}
    </GlobalProvider>
  );
};
export default MainLayout;
