import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/expanded-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LanguageToggle } from '@/components/LanguageToggle';
import { ChevronDown, ChevronUp, Github, Linkedin, Mail, ExternalLink, FileText } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export const Portfolio = () => {
  const { t, language } = useLanguage();
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});

  const toggleProject = (projectId: string) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const cvLinks: Record<string, string> = {
  en: '/portfolio/CV-en.pdf',
  fr: '/portfolio/CV-fr.pdf',
  de: '/portfolio/CV-de.pdf',
  es: '/portfolio/CV-es.pdf',
};

  const projects = [
    {
        id: 'delirium',
        title: t('deliriumTitle'),
        tech: t('deliriumTech'),
        shortDescription: t('deliriumShort'),
        longDescription: `This project was part of my internship at HUG and is ongoing. The main challenge: delirium is often not coded, leading to missed revenue for the hospital. A tool that predicts delirium at patient entry could enable earlier intervention and better planning.
        
        
I began by reviewing existing research. Many papers address this issue; one notable example is  
*"An interpretable deep learning model for time-series electronic health records: Case study of delirium prediction in critical care"* (Sheikhalishahi et al.), which uses deep learning on public ICU datasets (MIMIC, eICU).

Data Analysis & Preprocessing  
- Queried and filtered data for delirium patients using SQL  
- Handled missing data, outliers, and filled gaps  
- Excluded the last hours before delirium onset to avoid biasing the model with signals that only appear right before the event

Time Series Processing* 
- Binning: Aggregate measurements into hourly bins  
- Sequencing: Organize data into time sequences per patient  
- Window Selection: Create prediction windows for forecasting

Model Selection
Tested several models, each with unique strengths:
- Logistic Regression: Interpretable, fast, but limited for complex patterns
- XGBoost: Handles non-linearities, robust to missing data, but less effective for sequences
- BiRNN (LSTM): Captures long-term dependencies, but needs more data and is less interpretable
- DSA (Dual Self-Attention): Focuses on both time and features, powerful but complex

Model Training 
- Padding: Ensure all sequences are the same length  
- Tensor Conversion: Transform data for PyTorch  
- DataLoaders: Efficient batching for training

Handling Class Imbalance  
Delirium is rare, so we used:
- Class weights in the loss function  
- Weighted sampling  
- Specialized loss functions

Training Process  
- Forward pass → Loss calculation → Backpropagation → Parameter update

Model Evaluation  
Used cross-validation with stratified K-folds to ensure balanced splits. Key metrics:
- AUC (Area Under ROC Curve)
- Specificity at 90% Sensitivity
- PPV (Positive Predictive Value)
- MCC (Matthews Correlation Coefficient)

Visualization  
- ROC curves, learning curves, feature importance plots, confusion matrices

Hyperparameter Tuning  
- Grid search, random search, and Bayesian optimization (Optuna)

Interpretability  
Crucial for clinical trust:
- Guided Backpropagation, Integrated Gradients, Shapley Value Sampling
- SHAP summary plots and sorted feature importance help clinicians understand predictions
        `,
        links: [
          { text: t('confidentialNote'), url: '#', type: 'confidential' }
        ]
      },
    {
      id: 'costweight',
      title: t('costWeightTitle'),
      tech: t('costWeightTech'),
      shortDescription: t('costWeightShort'),
      longDescription: `This project was part of my internship at Swisscoding SA. The problem was that CW is a value that is not immediately available. It has to wait for the 'coders' to write the grouper so the CW can be deduced. This posed problem as the company wanted to have an immediate view of that state of their clients, instead of waiting sometimes month before having this data.

I was asked to find a way to accurately predict Cost Weight (which is a multiplicator used in healthcare to assess revenu for clinics and hospitals). I build a project from data gathering to the implementation in powerbi so from raw to production.

I first started by analysing what data could be used and if there was sufficient data of it via SQL queries. Then I started building a data class that was aimed at gathering data via SQL alchemy from the previously made queries, from an sql server, and preprocess it (duplicates, missing values, mean/median fill, encoding of categorical variables, log transformation to skewed numeric features, data engineering, ...) to have a usable dataset.

Then I build a memory efficient scikit-learn pipeline that produce a traditional ML pipeline, train/test/validation split, training, cross validation, metrics output. The pipeline was dynamic in the sense that it accepted different parameter like the size of the sample, different models (linear, linear lasso or ridge, ensemble trees like xgboost, catboost, random forest, lightgbm, svm), different variable sets, ...

Then metrics like MAE and RMSE where outputed and visualize into an efficient log file and visualization where available to interpret the different models with a comparison with two baseline models.

To put that into production, i build a short pipeline that used only the selected model and outputed a dataset of the value into the company's server. Docker was used for the production from image building to containerization and CRON automation was used so that the it automatically fetched the new data that was coming in each day to predict the CW if missing.

Finally, I updated the working powerbi dashboard so that those predicted value were loaded and blended seamlessly into the actual table and views via a simple 'on/off' toggle. Now the company was able to have a actual up-to-date view of the state of the CW if wanted or come back to the previous state were some CW were missing.`,
      links: [
        { text: t('confidentialNote'), url: '#', type: 'confidential' }
      ]
    },
    {
      id: 'crypto',
      title: t('cryptoTitle'),
      tech: t('cryptoTech'),
      shortDescription: t('cryptoShort'),
      longDescription: `This project is a Flask web application that integrates various APIs to analyze cryptocurrency news sentiment and its impact on market prices. The app fetches real-time data, performs sentiment analysis, and displays trends through an interactive dashboard.

It uses machine learning techniques such as Linear Regression, Random Forest, Gradient Boosting and Support Vector Machine as well as several resampling methods in order to analyse the impact of sentiment on price of different crypto currency.

The application provides insights into how market sentiment influences cryptocurrency prices, helping users make informed decisions about their investments.`,
      links: [
        { text: t('viewProject'), url: 'https://github.com/Ualh/crypto-sentiment-tracker', type: 'project' },
        { text: 'Programming Report', url: '/portfolio/AP_Hurni.pdf', type: 'report' },
        { text: 'Data Analysis Report', url: '/portfolio/ADA_Hurni.pdf', type: 'report' }
      ]
    },
    {
      id: 'binance',
      title: t('binanceTitle'),
      tech: t('binanceTech'),
      shortDescription: t('binanceShort'),
      longDescription: `This academic paper explores how the Chinese company Binance conducts business in China, detailing its development and the challenges it has faced. Presented as part of a lecture series for the "Doing Business in China" course by Tomas Casas Klett in April 2022.

The paper delves into various aspects of Binance's operations. It examines strategic decisions, such as setting up in Hong Kong, regulatory challenges, and the tightening grip of Chinese authorities on cryptocurrency activities.

The paper also discusses the broader implications of these regulations on Binance's future in China and globally, highlighting the company's strategic adaptability in the face of evolving international regulations.`,
      links: [
        { text: 'View Paper', url: '/portfolio/DBC_UrsAHurni.pdf', type: 'report' }
      ]
    },
    {
      id: 'realestate',
      title: t('realEstateTitle'),
      tech: t('realEstateTech'),
      shortDescription: t('realEstateShort'),
      longDescription: `This project uses machine learning to predict real estate prices in Switzerland, using data from ImmoScout24 and Swiss Federal Statistical Office. Techniques like Linear Regression and Random Forest are employed, with a focus on model accuracy and local market trends.

Key predictors like property size are identified, suggesting potential for broader applications in real estate decision-making. The project demonstrates the power of combining multiple data sources to create accurate predictive models.`,
      links: [
        { text: t('viewProject'), url: 'https://ualh.github.io/Machine_Learning/', type: 'project' }
      ]
    },
    {
      id: 'ev',
      title: t('evTitle'), 
      tech: t('evTech'),
      shortDescription: t('evShort'),
      longDescription: `This study explores electric vehicle (EV) adoption trends in Switzerland, investigating factors like regional differences, demographic influences, and comparisons with France. It uses diverse datasets, including vehicle registrations, oil prices, demographics, Google trends, and political affiliations.

Key findings include a rise in EV registrations, variations in adoption rates across regions and demographics, and the influence of charging station availability. The analysis also highlights the role of political dynamics in EV adoption.

Limitations include the lack of detailed pricing data and the unexplored impact of marketing and government subsidies. Future research could delve into these aspects for a more nuanced understanding.`,
      links: [
        { text: t('viewProject'), url: 'https://ualh.github.io/dsfba_project/', type: 'project' }
      ]
    },
    {
      id: 'tourism',
      title: t('tourismTitle'),
      tech: t('tourismTech'), 
      shortDescription: t('tourismShort'),
      longDescription: `This project aimed at forecasting tourism trends in Switzerland. Techniques such as Linear Regression, Random Forest, ETS, ARIMA, and TSLM models were employed to analyze and predict overnight stays of visitors in Vaud and Zurich.

The project showcased the impact of global events like the COVID-19 pandemic on tourism, emphasizing the importance of adaptive forecasting and strategic planning in the tourism sector.

Various forecasting methods were compared to identify the most accurate approach for different time periods and scenarios.`,
      links: [
        { text: t('viewProject'), url: 'https://ualh.github.io/swiss_tourism_forecast/', type: 'project' }
      ]
    },
    {
      id: 'lait',
      title: t('laitTitle'),
      tech: t('laitTech'),
      shortDescription: t('laitShort'),
      longDescription: `The following project was done with the collaboration of an association 'Lait Equitable' which provides fair trade milk in Switzerland. The goal of this project is to analyze the sales and identify trends and patterns in the data that can help us better understand the production of fair trade milk in Switzerland.

We use a variety of data analysis techniques, including exploratory data analysis, data visualization, and statistical modeling, to analyze the dataset and draw conclusions about the production of fair trade milk in Switzerland.

The analysis provides valuable insights for the association to optimize their operations and understand market dynamics.`,
      links: [
        { text: t('viewProject'), url: 'https://ualh.github.io/lait_equitable/', type: 'project' }
      ]
    }
  ];

  const skills = [
    { name: 'Python', icon: '🐍' },
    { name: 'R', icon: '📊' },
    { name: 'SQL', icon: '🗃️' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Oracle', icon: '🔺' },
    { name: 'Docker', icon: '🐳' },
    { name: 'PowerBI', icon: '📊' },
    { name: 'Tableau', icon: '📈' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'Scikit-learn', icon: '🤖' },
    { name: 'Pandas', icon: '🐼' },
    { name: 'NumPy', icon: '🔢' },
    { name: 'Matplotlib', icon: '📊' },
    { name: 'Seaborn', icon: '🌊' },
    { name: 'Transformers', icon: '🤗' },
    { name: 'Flask', icon: '🌶️' },
    { name: 'Git', icon: '📝' },
    { name: 'Jupyter', icon: '📓' },
    { name: 'CRON', icon: '⏰' }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-rust-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-rust-700">Urs A. Hurni</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-rust-600 hover:text-rust-700 transition-colors">{t('about')}</a>
              <a href="#projects" className="text-rust-600 hover:text-rust-700 transition-colors">{t('projects')}</a>
              <a href="#skills" className="text-rust-600 hover:text-rust-700 transition-colors">{t('skills')}</a>
              <a href="#interests" className="text-rust-600 hover:text-rust-700 transition-colors">{t('interests')}</a>
              <a
                href={cvLinks[language]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-rust-600 hover:text-rust-700 transition-colors"
              >
                {t('cv')}
              </a>
            </div>
            <LanguageToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/portfolio/profile.jpg" 
              alt="Urs A. Hurni"
              className="w-32 h-32 mx-auto rounded-lg mb-2 bg-gradient-rust shadow-rust object-cover"
            />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Urs A. <span className="text-rust-600">Hurni</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-2">{t('heroDescription')}</p>
            <a href="mailto:ualh@proton.me" className="text-rust-600 hover:text-rust-700 transition-colors">
              ualh@proton.me
            </a>
          </div>
          
          <div className="prose prose-lg max-w-3xl mx-auto text-left mb-8">
            {t('heroIntro').split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex justify-center space-x-4">
            <Button variant="rust" size="lg" asChild>
              <a href="https://bit.ly/3spfUYt" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="warm" size="lg" asChild>
              <a href="https://github.com/Ualh" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:ualh@proton.me">
                <Mail className="w-5 h-5 mr-2" />
                Contact
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-rust-700">{t('projectsTitle')}</h2>
          <div className="space-y-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden shadow-warm hover:shadow-rust transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 text-rust-700">{project.title}</CardTitle>
                      <p className="text-sm text-rust-500 mb-3 font-medium">{project.tech}</p>
                      <p className="text-muted-foreground">{project.shortDescription}</p>
                    </div>
                    <Button
                      variant="expand"
                      size="sm"
                      onClick={() => toggleProject(project.id)}
                      className="ml-4"
                    >
                      {expandedProjects[project.id] ? (
                        <>
                          <ChevronUp className="w-4 h-4 mr-1" />
                          {t('hideDetails')}
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4 mr-1" />
                          {t('expandDetails')}
                        </>
                      )}
                    </Button>
                  </div>
                </CardHeader>
                
                {expandedProjects[project.id] && (
                  <CardContent className="pt-0 animate-fade-in">
                    <div className="prose prose-sm max-w-none mb-6 text-foreground">
                  <ReactMarkdown>
                    {project.longDescription}
                  </ReactMarkdown>
                </div>
                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link, index) => (
                        link.type === 'confidential' ? (
                          <span key={index} className="text-rust-600 italic text-sm">
                            {link.text}
                          </span>
                        ) : (
                          <Button key={index} variant="outline" size="sm" asChild>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                              {link.type === 'project' ? (
                                <ExternalLink className="w-4 h-4 mr-1" />
                              ) : (
                                <FileText className="w-4 h-4 mr-1" />
                              )}
                              {link.text}
                            </a>
                          </Button>
                        )
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-rust-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-rust-700">{t('skillsTitle')}</h2>
          <h3 className="text-xl text-center mb-12 text-muted-foreground">{t('programmingTitle')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-warm transition-all duration-300">
                <div className="text-2xl mb-2">{skill.icon}</div>
                <div className="text-sm font-medium text-rust-700">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-rust-700">{t('interestsTitle')}</h2>
          <div className="prose prose-lg max-w-none">
            <p className="mb-6 text-foreground leading-relaxed">{t('interestsContent')}</p>
            <p className="text-foreground leading-relaxed">{t('interestsContent2')}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-rust-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://bit.ly/3spfUYt" target="_blank" rel="noopener noreferrer" className="hover:text-rust-200 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/Ualh" target="_blank" rel="noopener noreferrer" className="hover:text-rust-200 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:ualh@proton.me" className="hover:text-rust-200 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-rust-200">© 2024 Urs A. Hurni. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};