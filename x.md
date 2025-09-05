This project was part of my internship at HUG and is ongoing. The main challenge: delirium is often not coded, leading to missed revenue for the hospital. A tool that predicts delirium at patient entry could enable earlier intervention and better planning.
        
        
I began by reviewing existing research. Many papers address this issue; one notable example is  
*"An interpretable deep learning model for time-series electronic health records: Case study of delirium prediction in critical care"* (Sheikhalishahi et al.), which uses deep learning on public ICU datasets (MIMIC, eICU).

**Data Analysis & Preprocessing**  

- Queried and filtered data for delirium patients using SQL  
- Handled missing data, outliers, and filled gaps  
- Excluded the last hours before delirium onset to avoid biasing the model with signals that only appear right before the event

**Time Series Processing**  
- **Binning:** Aggregate measurements into hourly bins  
- **Sequencing:** Organize data into time sequences per patient  
- **Window Selection:** Create prediction windows for forecasting

**Model Selection**  
Tested several models, each with unique strengths:
- **Logistic Regression:** Interpretable, fast, but limited for complex patterns
- **XGBoost:** Handles non-linearities, robust to missing data, but less effective for sequences
- **BiRNN (LSTM):** Captures long-term dependencies, but needs more data and is less interpretable
- **DSA (Dual Self-Attention):** Focuses on both time and features, powerful but complex

**Model Training**  
- **Padding:** Ensure all sequences are the same length  
- **Tensor Conversion:** Transform data for PyTorch  
- **DataLoaders:** Efficient batching for training

**Handling Class Imbalance**  
Delirium is rare, so we used:
- Class weights in the loss function  
- Weighted sampling  
- Specialized loss functions

**Training Process**  
- Forward pass → Loss calculation → Backpropagation → Parameter update

**Model Evaluation**  
Used cross-validation with stratified K-folds to ensure balanced splits. Key metrics:
- **AUC (Area Under ROC Curve)**
- **Specificity at 90% Sensitivity**
- **PPV (Positive Predictive Value)**
- **MCC (Matthews Correlation Coefficient)**

**Visualization**  
- ROC curves, learning curves, feature importance plots, confusion matrices

**Hyperparameter Tuning**  
- Grid search, random search, and Bayesian optimization (Optuna)

**Interpretability**  
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

Finally, I updated the working powerbi dashboard so that those predicted value were loaded and blended seamlessly into the actual table and views via a simple 'on/off' toggle. Now the company was able to have a actual up-to-date view of the state of the CW if wanted or come back to the previous state were some CW were missing.