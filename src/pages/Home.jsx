import React from 'react';
import './Home.css';

const Home = () => {


  return (
    <div className="home-page">
      {/* Tagline Section */}
      <div className="tagline">
        <h1>Explore the Animal Kingdom 🦁</h1>
      </div>

      {/* About Section */}
      <div className="about-section">
        {/* Left side: Paragraph */}
        <div className="about-text">
          <h2>About Our Site</h2>
          <p>
            Welcome to our site where we showcase a wide variety of animals, both wild and domestic.
            Discover fun facts and beautiful images of nature's most fascinating creatures. 
            Dive deep into the world of animals! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio deserunt necessitatibus rerum fugiat quibusdam ipsa sequi. Est maiores accusantium rem labore laudantium odit. Quis non maiores officia repudiandae molestias veritatis cumque fugit aspernatur praesentium voluptatum. Error repudiandae quisquam similique praesentium perspiciatis eaque, maiores necessitatibus molestiae tempora id, beatae doloremque eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, earum optio. At maxime dolorum dignissimos iste numquam, sint obcaecati animi odio nulla placeat ipsa repellat dolores corrupti inventore velit ipsum consequatur praesentium porro eos alias est sunt recusandae. Praesentium ea recusandae voluptatum itaque, dolor quas quibusdam eligendi doloremque excepturi ut? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quod magni corporis ipsa quidem distinctio illum cupiditate, rem dicta amet odit nulla ea alias repellat perferendis provident! At inventore blanditiis quasi nostrum earum, ducimus eius, nobis, totam ullam error voluptatum ipsam excepturi quos dolores minima! Est eveniet molestias maiores beatae!
          </p>
        </div>

        {/* Right side: 2x2 Image Grid */}
        <div className="image-grid-wrapper">
          <div className="tight-image-grid">
            <img src="/src/images/mammls.png" alt="Mammals" />
            <img src="/src/images/bird.png" alt="Birds" />
            <img src="/src/images/reptile.png" alt="Reptiles" />
            <img src="/src/images/aqatic.png" alt="Aquatic Animals" />
          </div>
        </div>
      </div>

      {/* 3x3 Grid Section for Animal Cards */}
      <div className="animal-grid-section">
        <h2>Animal Gallery</h2>
        <div className="animal-grid">
          {['lion', 'lepord', 'tiger', 'elephant', 'raino', 'crocodiles', 'cheeta', 'wolf', 'bear'].map((animal, index) => (
            <div className="animal-card" key={index}>
              <img src={`/src/images/${animal}.jpg`} alt={animal} />
              <div className="animal-info">
                <h3>{animal.charAt(0).toUpperCase() + animal.slice(1)}</h3>
                <p>
                  {animal === 'lion' && 'Lions live in groups called prides. They are known as kings of the jungle and are native to Africa. Male lions have majestic manes. They rest for up to 20 hours a day.'}
                  {animal === 'elephant' && 'Elephants are the largest land mammals. They use their trunks for breathing, drinking, and grabbing things. They have an excellent memory. Baby elephants are called calves.'}
                  {animal === 'tiger' && 'Tigers are solitary hunters known for their strength and agility. They have stripes unique to each individual. Tigers can swim well and often hunt in water.'}
                  {animal === 'lepord' && 'Leopards are solitary and elusive big cats known for their powerful build and beautiful spotted coats.They can adapt to various environments like forests, mountains, and grasslands.'}
                  {animal === 'raino' && 'Rhinos are large, thick-skinned herbivores known for their iconic horns.They have poor eyesight but strong senses of smell and hearing.Mostly peaceful, they can be aggressive when threatened'}
                  {animal === 'crocodiles' && 'Crocodiles are ancient reptiles known for their powerful jaws and tough, scaly skin.They are excellent swimmers and can hold their breath for long periods underwater.Crocodiles are opportunistic predators, often ambushing prey near water.crocodiles know for there powers.'}
                  {animal === 'cheeta' && 'Cheetahs are the fastest land animals, capable of reaching speeds up to 60 mph in short bursts.Their slender build and large nasal passages help them take in oxygen quickly while sprinting.'}
                  {animal === 'wolf' && 'Wolves are highly social animals, often living in packs led by an alpha.They are skilled hunters, known for their ability to work together to catch large prey like deer and moose.Wolves communicate with a variety of vocalizations, including howls, growls, and whines.'}
                  {animal === 'bear' && 'Bears are large mammals known for their strength and thick fur, which helps them survive in cold climates.They are omnivores, eating both plants and animals, and are often found in forests, mountains, and tundras.Bears are skilled swimmers and climbers, and they hibernate during the winter months.'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
