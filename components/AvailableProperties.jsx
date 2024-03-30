
import properties from '@/constants/properties'; // Ensure this path is correct
import FeaturedPropertyCard from './FeaturedPropertyCard';

const AvailableProperties = () => {

  console.log("properties",properties)

  return (
    properties.length > 0 && (
      <section className='bg-blue-50 px-4 pt-6 pb-10'>
        <div className='container-xl lg:container m-auto'>
          <h2 className='text-3xl font-bold text-blue-500 mb-6 text-center'>
            Available Properties
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {properties.map((property) => (
              // Ensure the property identifier is correctly referenced, adjusted if needed
              <FeaturedPropertyCard key={property.id} property={property} />
            
            ))}
        
          </div>
        </div>
      </section>
    )
  );
};

export default AvailableProperties;
