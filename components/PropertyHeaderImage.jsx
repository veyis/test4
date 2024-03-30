import Image from 'next/image';

const PropertyHeaderImage = ({ image }) => {
  // console.log('nmy imagessss:', `/images/properties/${image}`);

  return (
    <section>
      <div className='container-xl m-auto'>
        <div className='grid grid-cols-1'>
          <Image
            src={`/images/properties/${image}`}
            alt={image}
            className='h-[500px] w-full object-cover'
            width={0}
            height={0}
            sizes='100vw'
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};
export default PropertyHeaderImage;
