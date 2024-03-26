import PropertySearchForm from './PropertySearchForm';

const Hero = () => {
  return (
    <section className='bg-black/50 py-20 mb-4'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
          Xperience the Beauty
          </h1>
          <h4 className='my-4 text-3xl text-gray-100'>
          of This Remarkable City
          </h4>
        </div>
        {/* <PropertySearchForm /> */}
        <button className='bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mt-4'>
          Book Your Stay
        </button>
      </div>
    </section>
  );
};
export default Hero;
