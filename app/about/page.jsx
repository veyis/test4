import Image from 'next/image';
import ownerPhoto from '@/public/AlexRandy.jpg'; // Make sure to replace this path with the actual photo's path


const AboutUs = () => {
    return (
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About The Owners</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <div className="w-full h-96 relative">
                <Image src={ownerPhoto} alt="Aleksandra and Randy" className="object-cover w-full h-full rounded-xl shadow-lg"/>
              </div>
            </div>
            <div className="md:col-span-7 text-lg font-light text-gray-700 space-y-4">
              <p> <strong> Hello there! We are Aleksandra and Randy. </strong> </p>
              <p>On our first trip to San Antonio, we fell in love with this city’s charm. We were captivated by the enchanting beauty of the Riverwalk, the rich history of the Alamodome, and the vibrant energy of Hemisphere Park's festivities.</p>
              <p>It is our privilege to open the doors of our charming property to you and other new guests, who have included families, couples, members of the military, and business travelers.</p>
              <p>We strive to provide you with a memorable and enjoyable stay as you seek a temporary home away from home.</p>
              <p>San Antonio is located about:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>1.5 hours drive from Austin,</li>
                <li>2 hours drive from Corpus Christi,</li>
                <li>3 hours drive from Houston,</li>
                <li>4 hours drive from Dallas / Fort Worth.</li>
              </ul>
              <p>As you get settled in and explore San Antonio, we hope to provide you with a wonderful and fulfilling experience. Please do not hesitate to contact us if you have any questions or need any assistance. Your comfort, enjoyment, and lasting memories are our top priorities.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
export default AboutUs;
