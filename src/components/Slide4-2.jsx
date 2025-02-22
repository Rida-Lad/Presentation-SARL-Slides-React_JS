import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Slide4-2.css';

const Slide4_2 = () => {
  const companies = [
    { name: "OCP", value: 91.2 },
    { name: "Groupe Renault Maroc", value: 56.1 },
    { name: "ONEE", value: 47.7 },
    { name: "Maroc Telecom", value: 36.7 },
    { name: "Afriquia SMDC", value: 35.2 },
    { name: "Attijariwafa bank", value: 29.9 },
    { name: "Banque Centrale Populaire (BCP)", value: 22.7 },
    { name: "Royal Air Maroc (RAM)", value: 19.8 },
    { name: "Vivo Energy Maroc", value: 18.3 },
    { name: "BMCE Bank", value: 17.0 },
  ];

  const maxValue = Math.max(...companies.map((company) => company.value));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px -100px 0px" });

  return (
    <div ref={ref} className="slide-section slide4-2section">
      <motion.div
        className="slide4-2content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Statistiques et Experts
        </motion.h1>

        <motion.p
          className="introduction-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Voici des informations sur les principales entreprises marocaines et des experts spécialisés dans la création d'entreprises de type SARL.
        </motion.p>

        <div className="statistiques-section">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Top 10 des entreprises marocaines par chiffre d'affaires en 2024
          </motion.h2>

          <div className="bar-chart">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="bar-container"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <motion.div
                  className="bar"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${(company.value / maxValue) * 70}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                />
                <span className="bar-label">{company.name}</span>
                <span className="bar-value">{company.value} Md MAD</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="experts-section">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            Experts
          </motion.h2>

          <div className="experts-list">
            {[
              {
                name: "ES Maroc",
                description: "Accompagne les entrepreneurs dans la création et le développement d'entreprises sociales.",
                link: "https://www.instagram.com/es.maroc?igsh=MW8wcHV0d2hzcThwYw=="
              },
              {
                name: "Seomaniak Maroc",
                description: "Agence spécialisée dans le marketing digital, création de sites web et gestion des réseaux sociaux.",
                link: "https://www.instagram.com/seomaniak.ma?igsh=MW8zeDJmNTE1aXpvNg=="
              }
            ].map((expert, index) => (
              <motion.div
                key={index}
                className="expert-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 2.2 + index * 0.2 }}
              >
                <h3>{expert.name}</h3>
                <p>{expert.description}</p>
                <a
                  href={expert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="insta-link"
                  style={{ position: 'relative', zIndex: 2 }}
                >
                  Visitez leur page Instagram
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Slide4_2;