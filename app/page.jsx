import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import HomeProperties from '@/components/HomeProperties';
import FeaturedProperties from '@/components/FeaturedProperties';

const HomePage = () => {
  return (
    <>
<div className="bg-cover bg-center flex justify-center items-center text-white text-center p-5 bg-no-repeat h-1/2 w-full" style={{ backgroundImage: "url('/hero.png')" }}>

    <Hero />
</div>




      <InfoBoxes />
      <FeaturedProperties />
      <HomeProperties />
    </>
  );
};
export default HomePage;
