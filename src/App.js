import React from 'react';
import { motion} from 'framer-motion';

function App() {

  const images = [
    { id: 1, src: 'https://images.pexels.com/photos/10962931/pexels-photo-10962931.jpeg?auto=compress&cs=tinysrgb&w=800', text: 'Discover the Manatee Fit Zone, where your wellness journey begins amidst serene surroundings. Our gym, adorned with subtle manatee-themed touches, offers state-of-the-art equipment and panoramic nature views for an inspiring workout experience.' },
    { id: 2, src: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=800', text: 'Escape to the Manatee Serenity Spa, a haven of relaxation where modern stresses fade away. With gentle manatee-themed touches throughout, our skilled therapists offer personalized treatments to restore your mind, body, and spirit to harmony.' },
    { id: 3, src: 'https://images.pexels.com/photos/136040/pexels-photo-136040.jpeg?auto=compress&cs=tinysrgb&w=800', text: 'Indulge in coastal delights at Tranquil Tides Eatery, where every dish celebrates fresh flavors and mindful dining. Immerse yourself in our serene restaurant ambiance, subtly accented with manatee-inspired decor, for a culinary journey like no other.' },
    // Add more images as needed
  ];

  return (
    <>
      <div className="flex flex-col mx-auto justify-center items-center text-center min-h-[600px] max-w-4xl">
        <h1 className="text-[64px] font-bold uppercase font-heading mb-4">Welcome to Serenity</h1>
        <p className="font-body text-[22px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis erat, aliquet ut felis quis, vehicula eleifend ante. Nulla in placerat velit. Vestibulum sodales tincidunt fermentum.</p>
      </div>
      {images.map(image => (
        <motion.div
          key={image.id}
          className="grid gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: Math.random() * 1 }} // Random delay for stagger effect
        >
          <div className="relative">
            <img src={image.src} alt={`Image ${image.id}`} className="object-cover" />
            <p className="absolute bottom-0 left-0 w-full text-white hidden">{image.text}</p>
          </div>
        </motion.div>
      ))}
    </>
  )
}

export default App
