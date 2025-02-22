import React from 'react';
import './Slide3.css';
import { motion } from 'framer-motion';
import { GiProfit, GiReceiveMoney, GiPayMoney, GiStairs } from 'react-icons/gi';
import { FaFileSignature, FaChartLine, FaMoneyBillWave } from 'react-icons/fa';

const Slide3 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <div className="slide-section slide3section">
      <div className="slide3container">
        <motion.div 
          className="slide3header text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="slide3main-title">SARL - Société à Responsabilité Limitée</h1>
        </motion.div>

        <motion.div 
          className="slide3col"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="slide3card">
            <motion.div 
              className="slide3card-header"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="slide3card-title">Avantages et Inconvénients</h2>
            </motion.div>

            <div className="slide3card-body">
              <motion.h3 
                className="slide3subheading"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Avantages :
              </motion.h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { Icon: GiProfit, text: "Responsabilité limitée des associés" },
                  { Icon: GiReceiveMoney, text: "Flexibilité dans la gestion" },
                  { Icon: GiStairs, text: "Facilité de transmission des parts sociales" },
                  { Icon: GiPayMoney, text: "Fiscalité attractive (option pour l'IR ou l'IS)" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="slide3icon-card advantage"
                    variants={itemVariants}
                  >
                    <motion.div variants={iconVariants}>
                      <item.Icon className="slide3icon" />
                    </motion.div>
                    <p>{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="slide3divider"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              ></motion.div>

              <motion.h3 
                className="slide3subheading"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                Inconvénients :
              </motion.h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { Icon: FaFileSignature, text: "Formalités de création relativement lourdes" },
                  { Icon: FaChartLine, text: "Obligations comptables et fiscales strictes" },
                  { Icon: FaMoneyBillWave, text: "Coûts de gestion plus élevés que pour une entreprise individuelle" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="slide3icon-card disadvantage"
                    variants={itemVariants}
                  >
                    <motion.div variants={iconVariants}>
                      <item.Icon className="slide3icon" />
                    </motion.div>
                    <p>{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide3;