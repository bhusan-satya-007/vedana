import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [zodiacSign, setZodiacSign] = useState(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A2E] via-[#2A1B3D] to-[#44318D] text-[#E2E2E2] p-6 relative overflow-hidden">
      <div className="star-field" />
      <motion.div 
        className="constellation-trail"
        style={{
          background: `radial-gradient(6px 6px at ${springX}px ${springY}px, rgba(255,255,255,0.15), transparent 20px)`
        }}
      />
      
      <motion.header 
        className="flex justify-between items-center mb-12 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.1, 0.9] }}
      >
        <motion.h1 
          className="text-5xl font-playfair divine-text"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Vedana
        </motion.h1>
        <nav className="glass-effect rounded-full px-8 py-3">
          <ul className="flex space-x-8">
            <li><a href="#journey" className="divine-link text-lg">Journey</a></li>
            <li><a href="#insights" className="divine-link text-lg">Insights</a></li>
            <li><a href="#profile" className="divine-link text-lg">Profile</a></li>
          </ul>
        </nav>
      </motion.header>

      <main className="max-w-6xl mx-auto relative z-10">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="glass-effect rounded-3xl p-10 mb-12"
        >
          <h2 className="text-4xl font-playfair font-semibold mb-8 divine-text">
            Your Cosmic Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Self-Discovery', 'Daily Insights', 'Progress Track'].map((title, index) => (
              <motion.div 
                key={title}
                className="cosmic-gradient cosmic-card rounded-2xl p-8"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                custom={index}
              >
                <h3 className="text-2xl font-playfair divine-text mb-4">{title}</h3>
                <p className="text-gray-300 leading-relaxed zodiac-bullet">
                  {index === 0 && "Begin your journey of inner exploration and cosmic alignment"}
                  {index === 1 && "Receive personalized guidance aligned with celestial energies"}
                  {index === 2 && "Visualize your transformation through the cosmic lens"}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="glass-effect rounded-3xl p-10"
        >
          <h2 className="text-4xl font-playfair font-semibold mb-8 divine-text">
            Today's Reflection
          </h2>
          <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-2xl p-8">
            <p className="text-xl leading-relaxed text-gray-200 font-inter">
              As the celestial bodies align, what patterns have you noticed in your emotional responses today? 
              Take a moment to reflect on your inner state and the cosmic energies surrounding you.
            </p>
            <motion.button 
              className="mt-8 divine-button px-8 py-3 rounded-full text-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Begin Your Reflection
            </motion.button>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export default App;