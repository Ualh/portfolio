import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr' | 'de' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    about: "About",
    projects: "Projects",
    skills: "IT-Tools",
    interests: "Interests",
    cv: "CV",
    
    // Hero Section
    heroDescription: "Geneva, Switzerland",
    heroIntro: "Hi!\nI'm Urs, a Swiss native and data enthusiast who loves turning complex problems into elegant and meaningful solutions.\nI enjoy solving complex problems, exploring innovative solutions, and constantly learning.\nMy work experience as an Analyst and my background in Business Analytics, Economics, and Management, have taught me the art of turning data into impactful decisions.\nI've worked on projects that range from predictive modeling to strategic analysis. I enjoy bringing ideas to life with data and helping teams achieve their goals.\n\nFeel free to dive into my projects or connect. Let's create something impactful together!",
    
    // Projects
    projectsTitle: "Projects",
    expandDetails: "Expand Details",
    hideDetails: "Hide Details",
    viewProject: "View Project",
    viewReport: "View Report",
    confidentialNote: "Sadly confidential, but at least you see that I respect confidentiality :)",
    
    // Project Titles and Descriptions
    deliriumTitle: "Delirium Prediction in Hospitalized Patients",
    deliriumTech: "SQL (Oracle), Python (PyTorch, NumPy, Pandas, Matplotlib, Seaborn)",
    deliriumShort: "Deep learning model to predict delirium in hospitalized patients using time-series electronic health records. Implemented various ML approaches including BiRNN and Dual Self-Attention networks.",
    
    costWeightTitle: "Cost Weight Prediction in Healthcare",
    costWeightTech: "SQL (PostgreSQL), Python (Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn), Docker, Cron",
    costWeightShort: "End-to-end ML pipeline to predict Cost Weight values in healthcare, from data gathering to production deployment with PowerBI integration.",
    
    cryptoTitle: "Crypto Sentiment Analysis",
    cryptoTech: "Python, HTML, CSS, Flask",
    cryptoShort: "Flask web application that integrates various APIs to analyze cryptocurrency news sentiment and its impact on market prices using machine learning techniques.",
    
    binanceTitle: "Binance: Doing Business in China",
    binanceTech: "Academic Paper",
    binanceShort: "Academic paper exploring how Binance conducts business in China, examining strategic decisions, regulatory challenges, and the company's adaptability.",
    
    realEstateTitle: "Predictive Peaks: Swiss Property Insights",
    realEstateTech: "R, Machine Learning",
    realEstateShort: "Machine learning project to predict real estate prices in Switzerland using data from ImmoScout24 and Swiss Federal Statistical Office.",
    
    evTitle: "Energizing Change: Electric Vehicle Rise in Switzerland",
    evTech: "R, Data Analysis",
    evShort: "Study exploring electric vehicle adoption trends in Switzerland, investigating regional differences, demographic influences, and political dynamics.",
    
    tourismTitle: "Zurich and Vaud Tourism Dynamics",
    tourismTech: "R, Time Series Analysis",
    tourismShort: "Forecasting tourism trends in Switzerland using Linear Regression, Random Forest, ETS, ARIMA, and TSLM models to predict overnight stays.",
    
    laitTitle: "Lait Equitable: Fair Trade Milk Analysis",
    laitTech: "R, Data Visualization",
    laitShort: "Data-driven analysis of fair trade milk sales in Switzerland, identifying trends and patterns to understand production dynamics.",
    
    // Skills
    skillsTitle: "IT-Tools",
    programmingTitle: "Programming Languages & Tools",
    
    // Interests
    interestsTitle: "Interests",
    interestsContent: "Outside of my professional pursuits, I am passionate about staying active and continually learning.\nDuring the winter, I enjoy outdoor activities like backcountry Freeriding, which has taught me how to manage risk, resilience, and adaptability.\nIn the warmer months, I take on challenges such as hiking and cycling, pushing myself to explore new heights and build endurance.",
    interestsContent2: "Indoors, I enjoy creative and detail-oriented activities such as crafting and design, which foster focus and innovation.\nI am also deeply motivated by the potential of using data to address real-world challenges and support impactful causes, particularly in humanitarian and development contexts."
  },
  
  fr: {
    // Navigation
    about: "À propos",
    projects: "Projets",
    skills: "Outils IT",
    interests: "Intérêts",
    cv: "CV",
    
    // Hero Section
    heroDescription: "Genève, Suisse",
    heroIntro: "Salut !\nJe suis Urs, un Suisse passionné de données qui aime transformer des problèmes complexes en solutions élégantes et significatives.\nJ'aime résoudre des problèmes complexes, explorer des solutions innovantes et apprendre constamment.\nMon expérience professionnelle en tant qu'Analyste et ma formation en Business Analytics, Économie et Management m'ont appris l'art de transformer les données en décisions percutantes.\nJ'ai travaillé sur des projets allant de la modélisation prédictive à l'analyse stratégique. J'aime donner vie aux idées avec les données et aider les équipes à atteindre leurs objectifs.\n\nN'hésitez pas à explorer mes projets ou à me contacter. Créons quelque chose d'impactant ensemble !",
    
    // Projects
    projectsTitle: "Projets",
    expandDetails: "Développer les détails",
    hideDetails: "Masquer les détails",
    viewProject: "Voir le projet",
    viewReport: "Voir le rapport",
    confidentialNote: "Malheureusement confidentiel, mais au moins vous voyez que je respecte la confidentialité :)",
    
    // Project Titles and Descriptions
    deliriumTitle: "Prédiction du Délirium chez les Patients Hospitalisés",
    deliriumTech: "SQL (Oracle), Python (PyTorch, NumPy, Pandas, Matplotlib, Seaborn)",
    deliriumShort: "Modèle d'apprentissage profond pour prédire le délirium chez les patients hospitalisés en utilisant des dossiers de santé électroniques de séries temporelles.",
    
    costWeightTitle: "Prédiction du Poids des Coûts en Santé",
    costWeightTech: "SQL (PostgreSQL), Python (Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn), Docker, Cron",
    costWeightShort: "Pipeline ML de bout en bout pour prédire les valeurs de Poids des Coûts en santé, de la collecte de données au déploiement en production avec intégration PowerBI.",
    
    cryptoTitle: "Analyse de Sentiment Crypto",
    cryptoTech: "Python, HTML, CSS, Flask",
    cryptoShort: "Application web Flask intégrant diverses API pour analyser le sentiment des actualités crypto et son impact sur les prix du marché.",
    
    binanceTitle: "Binance : Faire des Affaires en Chine",
    binanceTech: "Article Académique",
    binanceShort: "Article académique explorant comment Binance fait des affaires en Chine, examinant les décisions stratégiques et les défis réglementaires.",
    
    realEstateTitle: "Pics Prédictifs : Insights Immobiliers Suisses",
    realEstateTech: "R, Machine Learning",
    realEstateShort: "Projet d'apprentissage automatique pour prédire les prix immobiliers en Suisse en utilisant des données d'ImmoScout24.",
    
    evTitle: "Changement Énergisant : L'Essor des Véhicules Électriques",
    evTech: "R, Analyse de Données",
    evShort: "Étude explorant les tendances d'adoption des véhicules électriques en Suisse, étudiant les différences régionales.",
    
    tourismTitle: "Dynamiques Touristiques de Zurich et Vaud",
    tourismTech: "R, Analyse de Séries Temporelles",
    tourismShort: "Prévision des tendances touristiques en Suisse en utilisant des modèles de régression linéaire, Random Forest, ETS, ARIMA.",
    
    laitTitle: "Lait Équitable : Analyse du Lait Commerce Équitable",
    laitTech: "R, Visualisation de Données",
    laitShort: "Analyse basée sur les données des ventes de lait commerce équitable en Suisse, identifiant les tendances et les modèles.",
    
    // Skills
    skillsTitle: "Outils IT",
    programmingTitle: "Langages de Programmation et Outils",
    
    // Interests
    interestsTitle: "Intérêts",
    interestsContent: "En dehors de mes activités professionnelles, je suis passionné par le maintien de l'activité et l'apprentissage continu.\nPendant l'hiver, j'aime les activités de plein air comme le Freeriding en hors-piste, qui m'a appris à gérer les risques, la résilience et l'adaptabilité.\nPendant les mois plus chauds, je relève des défis comme la randonnée et le cyclisme.",
    interestsContent2: "À l'intérieur, j'aime les activités créatives et orientées vers les détails comme l'artisanat et le design.\nJe suis également profondément motivé par le potentiel d'utiliser les données pour relever des défis du monde réel."
  },
  
  de: {
    // Navigation
    about: "Über mich",
    projects: "Projekte",
    skills: "IT-Tools",
    interests: "Interessen",
    cv: "Lebenslauf",
    
    // Hero Section
    heroDescription: "Genf, Schweiz",
    heroIntro: "Hallo!\nIch bin Urs, ein gebürtiger Schweizer und Datenbegeisterter, der gerne komplexe Probleme in elegante und bedeutungsvolle Lösungen verwandelt.\nIch löse gerne komplexe Probleme, erkunde innovative Lösungen und lerne ständig dazu.\nMeine Berufserfahrung als Analyst und mein Hintergrund in Business Analytics, Wirtschaft und Management haben mir die Kunst beigebracht, Daten in wirkungsvolle Entscheidungen zu verwandeln.\nIch habe an Projekten gearbeitet, die von Vorhersagemodellierung bis hin zu strategischer Analyse reichen.\n\nZögern Sie nicht, meine Projekte zu erkunden oder sich zu verbinden. Lassen Sie uns gemeinsam etwas Wirkungsvolles schaffen!",
    
    // Projects
    projectsTitle: "Projekte",
    expandDetails: "Details erweitern",
    hideDetails: "Details ausblenden",
    viewProject: "Projekt ansehen",
    viewReport: "Bericht ansehen",
    confidentialNote: "Leider vertraulich, aber wenigstens sehen Sie, dass ich die Vertraulichkeit respektiere :)",
    
    // Project Titles and Descriptions
    deliriumTitle: "Delirium-Vorhersage bei hospitalisierten Patienten",
    deliriumTech: "SQL (Oracle), Python (PyTorch, NumPy, Pandas, Matplotlib, Seaborn)",
    deliriumShort: "Deep Learning-Modell zur Vorhersage von Delirium bei hospitalisierten Patienten unter Verwendung von Zeitreihen-Patientenakten.",
    
    costWeightTitle: "Kostengewichtung-Vorhersage im Gesundheitswesen",
    costWeightTech: "SQL (PostgreSQL), Python (Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn), Docker, Cron",
    costWeightShort: "End-to-End ML-Pipeline zur Vorhersage von Kostengewichtungswerten im Gesundheitswesen mit PowerBI-Integration.",
    
    cryptoTitle: "Krypto-Sentiment-Analyse",
    cryptoTech: "Python, HTML, CSS, Flask",
    cryptoShort: "Flask-Webanwendung, die verschiedene APIs integriert, um Kryptowährungs-News-Sentiment und dessen Auswirkungen auf Marktpreise zu analysieren.",
    
    binanceTitle: "Binance: Geschäfte in China machen",
    binanceTech: "Akademische Arbeit",
    binanceShort: "Akademische Arbeit über Binances Geschäftstätigkeit in China, mit Untersuchung strategischer Entscheidungen und regulatorischer Herausforderungen.",
    
    realEstateTitle: "Vorhersage-Gipfel: Schweizer Immobilien-Einblicke",
    realEstateTech: "R, Machine Learning",
    realEstateShort: "Machine Learning-Projekt zur Vorhersage von Immobilienpreisen in der Schweiz mit Daten von ImmoScout24.",
    
    evTitle: "Energetisierender Wandel: Elektrofahrzeug-Aufstieg",
    evTech: "R, Datenanalyse",
    evShort: "Studie über Elektrofahrzeug-Adoptionstrends in der Schweiz, mit Untersuchung regionaler Unterschiede.",
    
    tourismTitle: "Tourismus-Dynamik in Zürich und Waadt",
    tourismTech: "R, Zeitreihenanalyse",
    tourismShort: "Vorhersage von Tourismustrends in der Schweiz mit Linearer Regression, Random Forest, ETS, ARIMA-Modellen.",
    
    laitTitle: "Lait Équitable: Fair Trade Milch-Analyse",
    laitTech: "R, Datenvisualisierung",
    laitShort: "Datengestützte Analyse von Fair Trade Milchverkäufen in der Schweiz zur Identifizierung von Trends und Mustern.",
    
    // Skills
    skillsTitle: "IT-Tools",
    programmingTitle: "Programmiersprachen & Tools",
    
    // Interests
    interestsTitle: "Interessen",
    interestsContent: "Außerhalb meiner beruflichen Tätigkeiten bin ich leidenschaftlich daran interessiert, aktiv zu bleiben und kontinuierlich zu lernen.\nIm Winter genieße ich Outdoor-Aktivitäten wie Backcountry-Freeriding, was mir Risikomanagement, Widerstandsfähigkeit und Anpassungsfähigkeit gelehrt hat.\nIn den wärmeren Monaten nehme ich Herausforderungen wie Wandern und Radfahren an.",
    interestsContent2: "Drinnen genieße ich kreative und detailorientierte Aktivitäten wie Handwerk und Design.\nIch bin auch tief motiviert vom Potenzial, Daten zu nutzen, um reale Herausforderungen anzugehen."
  },
  
  es: {
    // Navigation
    about: "Acerca de",
    projects: "Proyectos",
    skills: "Herramientas IT",
    interests: "Intereses",
    cv: "CV",
    
    // Hero Section
    heroDescription: "Ginebra, Suiza",
    heroIntro: "¡Hola!\nSoy Urs, un suizo nativo y entusiasta de los datos que ama convertir problemas complejos en soluciones elegantes y significativas.\nDisfruto resolviendo problemas complejos, explorando soluciones innovadoras y aprendiendo constantemente.\nMi experiencia laboral como Analista y mi formación en Business Analytics, Economía y Gestión me han enseñado el arte de convertir datos en decisiones impactantes.\nHe trabajado en proyectos que van desde modelado predictivo hasta análisis estratégico.\n\nSiéntete libre de explorar mis proyectos o conectar. ¡Creemos algo impactante juntos!",
    
    // Projects
    projectsTitle: "Proyectos",
    expandDetails: "Expandir Detalles",
    hideDetails: "Ocultar Detalles",
    viewProject: "Ver Proyecto",
    viewReport: "Ver Informe",
    confidentialNote: "Lamentablemente confidencial, pero al menos ves que respeto la confidencialidad :)",
    
    // Project Titles and Descriptions
    deliriumTitle: "Predicción de Delirium en Pacientes Hospitalizados",
    deliriumTech: "SQL (Oracle), Python (PyTorch, NumPy, Pandas, Matplotlib, Seaborn)",
    deliriumShort: "Modelo de aprendizaje profundo para predecir delirium en pacientes hospitalizados usando registros médicos electrónicos de series temporales.",
    
    costWeightTitle: "Predicción de Peso de Costos en Salud",
    costWeightTech: "SQL (PostgreSQL), Python (Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn), Docker, Cron",
    costWeightShort: "Pipeline ML de extremo a extremo para predecir valores de Peso de Costos en salud con integración PowerBI.",
    
    cryptoTitle: "Análisis de Sentimiento Cripto",
    cryptoTech: "Python, HTML, CSS, Flask",
    cryptoShort: "Aplicación web Flask que integra varias APIs para analizar el sentimiento de noticias de criptomonedas y su impacto en los precios.",
    
    binanceTitle: "Binance: Haciendo Negocios en China",
    binanceTech: "Artículo Académico",
    binanceShort: "Artículo académico explorando cómo Binance hace negocios en China, examinando decisiones estratégicas y desafíos regulatorios.",
    
    realEstateTitle: "Picos Predictivos: Insights Inmobiliarios Suizos",
    realEstateTech: "R, Machine Learning",
    realEstateShort: "Proyecto de machine learning para predecir precios inmobiliarios en Suiza usando datos de ImmoScout24.",
    
    evTitle: "Cambio Energizante: Auge de Vehículos Eléctricos",
    evTech: "R, Análisis de Datos",
    evShort: "Estudio explorando tendencias de adopción de vehículos eléctricos en Suiza, investigando diferencias regionales.",
    
    tourismTitle: "Dinámicas Turísticas de Zurich y Vaud",
    tourismTech: "R, Análisis de Series Temporales",
    tourismShort: "Pronóstico de tendencias turísticas en Suiza usando modelos de regresión lineal, Random Forest, ETS, ARIMA.",
    
    laitTitle: "Lait Équitable: Análisis de Leche de Comercio Justo",
    laitTech: "R, Visualización de Datos",
    laitShort: "Análisis basado en datos de ventas de leche de comercio justo en Suiza, identificando tendencias y patrones.",
    
    // Skills
    skillsTitle: "Herramientas IT",
    programmingTitle: "Lenguajes de Programación y Herramientas",
    
    // Interests
    interestsTitle: "Intereses",
    interestsContent: "Fuera de mis actividades profesionales, soy apasionado por mantenerme activo y aprender continuamente.\nDurante el invierno, disfruto actividades al aire libre como Freeriding fuera de pista, que me ha enseñado a manejar riesgos, resistencia y adaptabilidad.\nEn los meses más cálidos, acepto desafíos como senderismo y ciclismo.",
    interestsContent2: "En interiores, disfruto actividades creativas y orientadas al detalle como artesanía y diseño.\nTambién estoy profundamente motivado por el potencial de usar datos para abordar desafíos del mundo real."
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};