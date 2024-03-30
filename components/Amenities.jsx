// components/Amenities.js

const Amenities = () => {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-center mb-6">Property Amenities</h1>
  
        {/* Kitchen Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Kitchen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="list-disc pl-5">
              <li>Fridge & Freezer with LCD screen</li>
              <li>Gas Stove and Oven with Fume Hood</li>
              <li>Dish Washer</li>
              <li>Air Fryer</li>
              <li>Microwave</li>
            </ul>
            <ul className="list-disc pl-5">
              <li>Keurig Coffee Machine</li>
              <li>Kettle</li>
              <li>Pots & Pans</li>
              <li>Food Storage Containers</li>
              <li>Spice rack with spices</li>
            </ul>
          </div>
        </section>
  
        {/* Bathroom, Bedroom, Living Room, Laundry Room, Outside, and Other Sections... */}
  
        {/* Other Amenities Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Other</h2>
          <ul className="list-disc pl-5">
            <li>24/7 professionally monitored camera surveillance</li>
            <li>Hi-Speed Wifi Internet 400 mbps</li>
          </ul>
        </section>
      </div>
    );
  };
  
  export default Amenities;
  