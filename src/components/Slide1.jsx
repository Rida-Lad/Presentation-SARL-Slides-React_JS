import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { motion } from 'framer-motion';
import './Slide1.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Slide1 = () => {
  // Bar Chart Data
  const barChartData = {
    labels: ['Commerce', 'Services', 'Industrie', 'Agriculture', 'Autres'],
    datasets: [{
      label: 'Nombre de SARL créées (2023)',
      data: [65, 20, 8, 5, 2],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    }],
  };

  // Pie Chart Data
  const pieChartData = {
    labels: ['Petites entreprises', 'Moyennes entreprises', 'Grandes entreprises'],
    datasets: [{
      label: 'Répartition des SARL',
      data: [70, 25, 5],
      backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
      borderWidth: 1,
    }],
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="slide-section slide1section">
      <div className="slide1container">
        {/* Section Title */}
        <motion.h1 
          className="slide1main-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6 }}
        >
          INTRODUCTION AU SARL
        </motion.h1>

        <div className="slide1row">
          {/* Definition and Importance of SARL */}
          <motion.div 
            className="slide1col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="slide1card">
              <div className="slide1card-body">
                <h3 className="slide1title">Qu'est-ce qu'une SARL ?</h3>
                <p className="slide1text">
                  Une Société à Responsabilité Limitée (SARL) est une forme juridique d'entreprise très prisée au Maroc. Elle limite la responsabilité des associés à leurs apports et offre une structure souple adaptée aux PME.
                </p>
                <h3 className="slide1title">Rôle et importance</h3>
                <ul className="slide1list">
                  <li>
                    <i className="fas fa-check-circle slide1icon"></i>
                    Responsabilité limitée des associés
                  </li>
                  <li>
                    <i className="fas fa-check-circle slide1icon"></i>
                    Structure adaptée aux PME
                  </li>
                  <li>
                    <i className="fas fa-check-circle slide1icon"></i>
                    Régime fiscal avantageux
                  </li>
                  <li>
                    <i className="fas fa-check-circle slide1icon"></i>
                    Crédibilité auprès des partenaires
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Bar Chart */}
          <motion.div 
            className="slide1col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="slide1card">
              <div className="slide1card-body">
                <h3 className="slide1title">Répartition des SARL par secteur (2023)</h3>
                <div className="slide1chart-container">
                  <Bar
                    data={barChartData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pie Chart */}
          <motion.div 
            className="slide1col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="slide1card">
              <div className="slide1card-body">
                <h3 className="slide1title">Répartition des SARL par taille</h3>
                <div className="slide1chart-container">
                  <Pie
                    data={pieChartData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'bottom',
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Statistics */}
        <div className="slide1row slide1stats">
          {['93%', '7-10 jours', '70%'].map((stat, index) => (
            <motion.div 
              key={index} 
              className="slide1col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.8 + (index * 0.2) }}
            >
              <div className="slide1card">
                <div className="slide1card-body text-center">
                  <i className={`fas fa-${index === 0 ? 'building' : index === 1 ? 'clock' : 'chart-line'} slide1stat-icon`}></i>
                  <p className="slide1stat-value">{stat}</p>
                  <p className="slide1stat-text">
                    {index === 0 && "Des entreprises créées en 2023 sont des SARL"}
                    {index === 1 && "Temps moyen de création d'une SARL"}
                    {index === 2 && "Des SARL sont dans le commerce et les services"}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide1;