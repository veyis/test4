import React from 'react'

const TeslaMap1 = () => {
  return (
<>
<div class="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Where you'll be</h2>
    <p class="text-gray-600">San Antonio, Texas, United States</p>

    <div class="h-90 bg-gray-200 mt-4 mb-4">
      
    <iframe
        className="w-full h-96 mb-4"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen
        aria-hidden="false"
        tabIndex="0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.7889208627765!2d-98.5101882!3d29.4267268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cf5e2bb01afc1%3A0xb3ab21f0b97f9612!2sDignowity+Hill%2C+San+Antonio%2C+TX!5e0!3m2!1sen!2sus!4v1595674000000!5m2!1sen!2sus"
      ></iframe>

    </div>


    <h3 class="font-semibold text-gray-700 mb-2">Points of Interest</h3>
    <ul class="list-disc list-inside text-gray-600">
        <li>The Alamo</li>
        <li>Hemisfair Park</li>
        <li>Traders Village San Antonio</li>
        <li>San Antonio Aquarium</li>
        <li>Woodlawn Lake Park</li>
        <li>San Fernando Cathedral</li>
        <li>Pearsall Park</li>
        <li>San Pedro Springs Park</li>
        <li>Mission Concepcion</li>
        <li>Elmendorf Lake Park</li>
        <li>San Antonio Zoo</li>
        <li>Brackenridge Park</li>
        <li>Tower of the Americas</li>
        <li>San Antonio Botanical Garden</li>
        <li>Witte Museum</li>
        <li>AT&T Center</li>
        <li>San Antonio Museum of Art</li>
        <li>McNay Art Museum</li>
        <li>Mission San Jose</li>
        <li>Splashtown</li>
    </ul>

  
</div> 
<div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Neighborhood Highlights</h2>
    <p class="text-gray-600">
        Welcome to the historic neighborhood of Dignowity Hill, located on the east side of downtown San Antonio!
        This community boasts a mix of architectural styles including Folk Victorian, early 20th century craftsmen, and some new builds. This up-and-coming area has experienced a surge of renovation in recent years and has a lot of potential for future growth & development.
    </p>
    <p class="text-gray-600 mt-4">
        Despite its rough and unpolished appearance, Dignowity Hill is quickly becoming a sought-after destination for travelers, home buyers, and foodies alike, thanks to its unique residential architecture, convenient location near downtown, major attractions, and a plethora of delicious restaurants a short drive away.
    </p>
    <p class="text-gray-600 mt-4">
        Our top priority is ensuring our guests have a comfortable and enjoyable stay, so please don't hesitate to reach out to us with any concerns or questions.
    </p>

    {/* <!-- Transportation --> */}
    <h3 class="font-semibold text-gray-700 mt-6 mb-2">Getting Around</h3>
    <p class="text-gray-600">
        The private, gated driveway is suitable for up to (3) cars parked in a single line.
        There is plenty of curb-side parking available in front of the property.
        Uber/Lyft are plentiful so you can easily get a ride anywhere.
    </p>
{/* 
    <!-- Nearby Attractions --> */}
    <h3 class="font-semibold text-gray-700 mt-6 mb-2">Nearby Attractions</h3>
    <ul class="list-disc list-inside text-gray-600">
        <li>The Alamo - 1.6 miles</li>
        <li>River Walk - 1.5 miles</li>
        <li>Tower of the Americas - 1.8 miles</li>
        <li>Pearl Brewery District - 2.1 miles</li>
        <li>San Antonio Zoo - 4.6 miles</li>
        <li>Legoland - 2.0 miles</li>
        <li>Airport - 9 miles</li>
        <li>Alamodome - 1.8 miles</li>
        <li>AT&T Center - 1.8 miles</li>
        <li>Lackland AFB - 14.8 miles</li>
        <li>Fort Sam Houston - 3.1 miles</li>
    </ul>

</div>

</>
  )
}

export default TeslaMap1