import React from 'react';
import { motion } from 'framer-motion';
import './Slide5.css';

// Import PNG icons for technologies
import ReactIcon from '../icons/ReactIcon.png';
import ViteIcon from '../icons/ViteIcon.png';
import VSCodeIcon from '../icons/VscodeIcon.png';

const Slide5 = () => {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  // Animation for bouncing tech icons
  const techIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="slide-section slide5section">
      <motion.div 
        className="slide5container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Thank You Message */}
        <motion.h1 
          className="slide5thank-you-message"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.4
          }}
        >
          Merci pour votre attention !
        </motion.h1>

        {/* Question and Closing Message */}
        <motion.div 
          className="slide5closing-message"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.h2 
            className="slide5question"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Avez-vous des questions ?
          </motion.h2>
          <motion.p 
            className="slide5closing-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Nous espérons que cette présentation vous a été utile et que nous avons répondu à vos attentes. 
          </motion.p>
        </motion.div>

        {/* Powered By Section */}
        <motion.div 
          className="slide5powered-by-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.h2 
            className="slide5powered-by-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Powered By
          </motion.h2>
          <div className="slide5technologies-list">
            {[
              { src: ReactIcon, alt: "React.js" },
              { src: ViteIcon, alt: "Vite" },
              { src: VSCodeIcon, alt: "VS Code" }
            ].map((tech, index) => (
              <motion.img
                key={index}
                src={tech.src}
                alt={tech.alt}
                className="slide5tech-icon"
                variants={techIconVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ delay: 1.4 + (index * 0.2) }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slide5;