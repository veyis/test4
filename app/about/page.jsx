import Image from 'next/image';
import ownerPhoto from '@/public/AlexRandy.jpg'; // Make sure to replace this path with the actual photo's path


const AboutUs = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Owners</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div className="w-64 h-64 relative mx-auto">
              <Image src={ownerPhoto} alt="Aleksandra and Randy" layout="fill" objectFit="cover" className="rounded-lg"/>
            </div>
          </div>
          <div className="flex-grow text-lg">
            <p>Hello there! We are Aleksandra and Randy.</p>
            <p>On our first trip to San Antonio, we fell in love with this city’s charm. We were captivated by the enchanting beauty of the Riverwalk, the rich history of the Alamodome, and the vibrant energy of Hemisphere Park's festivities.</p>
            <p>It is a privilege to open the doors of our charming property to you and other new guests, who have included families, couples, members of the military, and business travelers.</p>
            <p>We strive to provide you with a memorable and enjoyable stay as you seek a temporary home away from home.</p>
            <p>San Antonio is located about:</p>
            <ul className="list-disc pl-5">
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
