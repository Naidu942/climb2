import React, { useState } from 'react';
import './Startups.css';

const Startups = () => {
  const [selectedStartup, setSelectedStartup] = useState(null);

  const startups = [
    {
      id: 1,
      name: 'Hydrotribe',
      summary: 'Innovating Agriculture with Technology...',
      details: `The Journey of HydroTribe: Innovating Agriculture with Technology
      This is not just a story of an individual; it is the story of every farmer. As agriculture advances alongside technology, it is reaching new heights of innovation. However, there is still a significant lack of awareness among farmers about these technological advancements. Many remain unaware of modern techniques such as vertical farming and precision farming.
      
      The founder of HydroTribe Pvt. Ltd., Karanam Bala Siva Tarun Kumar, identified this problem through his real-life experiences. Witnessing the relentless efforts of farmers and the challenges they face firsthand, he realized the gap in knowledge and technology transfer to farmers. This personal connection to the problem, influenced by his uncle who was farmer, ignited his journey into agriculture.
      
      Coming from a mechanical engineering background, Tarun Kumar began learning about agriculture and focused on emerging farming techniques, including precision farming and vertical farming. After years of dedicated learning and research, HydroTribe was established to work on advanced agricultural technologies. The company, incorporated on October 13, 2020, has since become a leading name in the hydroponics and aeroponics manufacturing industry.
      
      HydroTribe has developed and patented its unique models and systems, which are designed to be affordable and sustainable. These systems utilize soilless farming techniques, allowing the growth of plants like vegetables and oxygen-boosting plants with 80-90% less water than traditional methods. This approach not only promotes faster plant growth but also offers solutions for those aspiring to have their own gardens in limited spaces like corridors. Additionally, HydroTribe's systems offer more production in less space compared to traditional farming techniques.
      
      One of HydroTribe's significant contributions is the development of systems that allow the cultivation of oxygen-boosting plants, which purify the surrounding air. These advanced systems are integrated with automated technology, enabling users to control and monitor plant growth from anywhere. This automation reduces the effort required in maintenance, as 90% of the work is handled by the devices and systems themselves, saving time and making the process more user-friendly.
      
      HydroTribe's systems and techniques ensure that the produce is safe and healthy by avoiding the use of harmful chemicals and instead relying on minerals and nutrients in liquid form. Many satisfied clients have embraced HydroTribe's solutions, realizing their farming aspirations and experiencing the benefits of advanced agricultural technology.
      
      In summary, HydroTribe is at the forefront of integrating technology with agriculture, providing innovative solutions that are sustainable, efficient, and accessible. The company's journey from identifying a problem to becoming a leader in agritech showcases the potential of modern farming techniques to transform agriculture and support farmers worldwide.`,
      image: '/public/static/images/hy.png', // Replace with your image URL
    },
    {
      id: 2,
      name: 'SpeedCopy',
      summary: 'cloud based printing of Rapid prototyping involves quickly...',
      details: `Speedcopy is a cloud based printing of Rapid prototyping involves quickly creating a physical model of a product to test and refine its design. This process allows for iterative development and immediate feedback. When combined with Zerox, a company known for its advanced printing technologies, and a focus on fast delivery, it ensures that prototypes are produced efficiently and quickly. This approach accelerates the development cycle, enabling businesses to swiftly move from concept to tangible product, facilitating faster decision-making and market entry.`,
      image: 'https://example.com/eco-solutions.jpg', // Replace with your image URL
    },
    {
      id: 3,
      name: 'Biocrafts',
      summary: 'Bio products are goods derived from renewable biological resources...',
      details: `Biocrafts is  Bio products are goods derived from renewable biological resources, including plants, animals, and microorganisms. They are designed to be more sustainable and environmentally friendly compared to conventional products. These products can range from bio-based materials and chemicals to biofuels and biodegradable packaging. By leveraging natural processes and materials, bio products aim to reduce reliance on fossil fuels, minimize waste, and lower overall environmental impact, contributing to a more sustainable and circular economy.`,
      image: 'https://example.com/healthgen.jpg', // Replace with your image URL
    },
    {
        id: 4,
        name: 'Inno3dtech',
        summary: 'Rapid prototyping combined with 3D print customization...',
        details: `Inno3dtech is Rapid prototyping combined with 3D print customization offers a streamlined approach to developing and refining products. This process involves quickly creating prototypes using 3D printing technology, which allows for intricate customization and adjustments based on iterative feedback. Various prototyping methods, such as additive manufacturing and material experimentation, enable designers to test different concepts and refine product designs rapidly. This approach reduces development time, cuts costs, and provides tailored solutions to meet specific needs and preferences, enhancing the overall product development lifecycle.`,
        image: 'https://example.com/healthgen.jpg', // Replace with your image URL
    },
    {
        id: 5,
        name: 'Reelux',
        summary: 'digital marketing agency specializing in cinematic video...',
        details: `Reelux is digital marketing agency specializing in cinematic video edits offers a blend of strategic marketing and high-quality video production. This type of agency focuses on creating visually stunning video content that captures audience attention and enhances brand storytelling. Their services typically include crafting cinematic-style videos with polished visuals, engaging narratives, and dynamic editing techniques. By integrating advanced video production with targeted digital marketing strategies, the agency aims to boost brand visibility, drive engagement, and achieve measurable results for their clients.`,
        image: 'https://example.com/healthgen.jpg', // Replace with your image URL
    },
    
  ];

  return (
    <div className="startup-page">
      <h2>Startups</h2>
      {selectedStartup ? (
        <div className="full-startup">
          <img src={selectedStartup.image} alt={selectedStartup.name} className="full-startup-image" />
          <h3>{selectedStartup.name}</h3>
          <p>{selectedStartup.details}</p>
          <button onClick={() => setSelectedStartup(null)}>Back to Startups</button>
        </div>
      ) : (
        <div className="startup-list">
          {startups.map(startup => (
            <div key={startup.id} className="startup-summary" onClick={() => setSelectedStartup(startup)}>
              <img src={startup.image} alt={startup.name} className="startup-image" />
              <h3>{startup.name}</h3>
              <p>{startup.summary}</p>
              <button>Read More</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Startups;
