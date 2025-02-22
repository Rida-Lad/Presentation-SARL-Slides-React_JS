import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import './Slide4.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Slide4 = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Bar Chart Data: Time to Complete SARL Creation Steps
  const barChartData = {
    labels: ['Choix du nom', 'Rédaction des statuts', 'Dépôt du capital', 'Publication', 'Immatriculation'],
    datasets: [{
      label: 'Temps moyen (en jours)',
      data: [2, 5, 3, 7, 10],
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    }],
  };

  // Pie Chart Data: Success Rate of SARL Startups
  const pieChartData = {
    labels: ['Réussite', 'Échec'],
    datasets: [{
      label: 'Taux de réussite des SARL',
      data: [70, 30],
      backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
      borderWidth: 1,
    }],
  };

  return (
    <div className="slide-section slide4section">
      <div className="slide4container">
        <motion.h1 
          className="slide4main-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          CONCLUSION
        </motion.h1>

        <div className="slide4row">
          {/* Bar Chart: Time to Complete SARL Creation Steps */}
          <motion.div 
            className="slide4col"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="slide4chart-container">
              <motion.h2 
                className="slide4chart-title"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Temps moyen pour créer une SARL
              </motion.h2>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Bar
                  data={barChartData}
                  options={{
                    responsive: false,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                  }}
                />
              </motion.div>
              <motion.p 
                className="slide4chart-description"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Le processus de création d'une SARL prend en moyenne <strong>10 jours</strong>, avec des étapes comme l'immatriculation prenant le plus de temps.
              </motion.p>
            </div>
          </motion.div>

          {/* Pie Chart: Success Rate of SARL Startups */}
          <motion.div 
            className="slide4col"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="slide4chart-container">
              <motion.h2 
                className="slide4chart-title"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Taux de réussite des SARL
              </motion.h2>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Pie
                  data={pieChartData}
                  options={{
                    responsive: false,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'bottom',
                      },
                    },
                  }}
                />
              </motion.div>
              <motion.p 
                className="slide4chart-description"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <strong>70%</strong> des SARL réussissent à se développer, tandis que <strong>30%</strong> échouent dans les premières années.
              </motion.p>
            </div>
          </motion.div>

          {/* Key Takeaways */}
          <motion.div 
            className="slide4col"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="slide4key-takeaways">
              <motion.h2 
                className="slide4takeaway-title"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Conseils clés
              </motion.h2>
              <motion.ul 
                className="slide4takeaway-list"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ 
                  staggerChildren: 0.1,
                  delayChildren: 0.6
                }}
              >
                {[
                  { title: "Planifiez à l'avance", content: "Les SARL qui planifient leur création et leur gestion ont un taux de réussite plus élevé." },
                  { title: "Choisissez bien vos associés", content: "Une équipe solide est essentielle pour surmonter les défis initiaux." },
                  { title: "Investissez dans un expert-comptable", content: "Cela réduit les erreurs fiscales et améliore la gestion financière." },
                  { title: "Anticipez les coûts", content: "Les frais de création et de gestion peuvent être élevés, alors budgétisez correctement." }
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    variants={listItemVariants}
                  >
                    <strong>{item.title} :</strong> {item.content}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Slide4;