import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A2E] to-[#2A1B3D] text-[#E2E2E2] p-6">
      <header className="flex justify-between items-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300"
        >
          Vedana
        </motion.h1>
        <nav className="glass-effect rounded-full px-6 py-2">
          <ul className="flex space-x-6">
            <li><a href="#journey" className="hover-glow">Journey</a></li>
            <li><a href="#insights" className="hover-glow">Insights</a></li>
            <li><a href="#profile" className="hover-glow">Profile</a></li>
          </ul>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto">
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-effect rounded-2xl p-8 mb-8"
        >
          <h2 className="text-2xl font-semibold mb-6">Your Cosmic Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="cosmic-gradient rounded-xl p-6 hover-glow">
              <h3 className="text-xl mb-3">Self-Discovery</h3>
              <p className="text-gray-300">Begin your journey of inner exploration</p>
            </div>
            <div className="cosmic-gradient rounded-xl p-6 hover-glow">
              <h3 className="text-xl mb-3">Daily Insights</h3>
              <p className="text-gray-300">Personalized guidance for your growth</p>
            </div>
            <div className="cosmic-gradient rounded-xl p-6 hover-glow">
              <h3 className="text-xl mb-3">Progress Track</h3>
              <p className="text-gray-300">Visualize your transformation</p>
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="glass-effect rounded-2xl p-8"
        >
          <h2 className="text-2xl font-semibold mb-6">Today's Reflection</h2>
          <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-6">
            <p className="text-lg leading-relaxed">
              What patterns have you noticed in your emotional responses today? 
              Take a moment to reflect on your inner state and the cosmic energies 
              surrounding you.
            </p>
            <button className="mt-6 bg-[#44318D] hover:bg-[#8265A7] transition-colors px-6 py-2 rounded-full hover-glow">
              Start Reflection
            </button>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export default App;