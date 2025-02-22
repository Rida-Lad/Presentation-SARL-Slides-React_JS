import React from 'react';
import { motion } from 'framer-motion';
import './Slide2.css';

const Slide2 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const stepVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="slide-section slide2section">
      <div className="slide2container">
        <motion.h2 
          className="slide2main-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Étapes de création d'une SARL
        </motion.h2>
        
        <motion.div 
          className="slide2steps-row"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stepsData.map((step, index) => (
            <motion.div 
              key={index} 
              className="slide2step-card"
              variants={stepVariants}
            >
              <motion.div 
                className="slide2step-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.2 + (index * 0.1),
                  duration: 0.4,
                  type: "spring",
                  stiffness: 200
                }}
              >
                {index + 1}
              </motion.div>
              <h3 className="slide2step-title">{step.title}</h3>
              <ul className="slide2step-details">
                {step.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Data for the steps
const stepsData = [
  {
    title: "Choix du nom et de l'objet social",
    details: [
      "Choisissez un nom unique et disponible pour votre société.",
      "Définissez l'objet social de votre société, c'est-à-dire son activité principale.",
    ],
  },
  {
    title: "Rédaction des statuts",
    details: [
      "Les statuts définissent les règles de fonctionnement de la société.",
      "Ils incluent : nom, siège social, objet social, capital social, durée, et règles de gestion.",
    ],
  },
  {
    title: "Détermination du capital social",
    details: [
      "Le capital social est la somme des apports des associés.",
      "Il doit être d'au moins 1000 dirham.",
    ],
  },
  {
    title: "Souscription et libération du capital social",
    details: [
      "Les associés souscrivent aux parts sociales.",
      "La libération peut se faire en une ou plusieurs fois.",
    ],
  },
  {
    title: "Dépôt des statuts et du capital social",
    details: [
      "Déposez les statuts et le capital social au greffe du tribunal de commerce.",
      "Un récépissé de dépôt est délivré.",
    ],
  },
  {
    title: "Immatriculation de la société",
    details: [
      "La société est immatriculée au registre du commerce et des sociétés (RCS).",
      "Un numéro d'immatriculation est attribué.",
    ],
  },
  {
    title: "Publication de l'immatriculation",
    details: [
      "L'immatriculation doit être publiée dans un journal d'annonces légales.",
      "Cela rend publique l'existence de la société.",
    ],
  },
  {
    title: "Ouverture d'un compte bancaire",
    details: [
      "Ouvrez un compte bancaire au nom de la société.",
      "Ce compte servira à gérer les finances de la société.",
    ],
  },
  {
    title: "Déclaration de création de la société",
    details: [
      "Déclarez la création de la société à l'administration fiscale.",
      "Cela détermine les obligations fiscales de la société.",
    ],
  },
];

export default Slide2;