import type { Project } from "@/types";

// ============================================================
//  DevelopersHub Corp — AI/ML Internship Projects
//  Portfolio Data — Rabiya Zaheer
//  Paste these into your portfolio's projects array
// ============================================================

export const projects: Project[] = [

  // ── TASK 1 ────────────────────────────────────────────────
  {
    slug: "iris-dataset-eda",
    title: "Iris Dataset — Exploratory Data Analysis",
    description: "Deep-dive EDA on the classic Iris dataset using pandas, seaborn, and matplotlib to uncover species patterns through scatter plots, histograms, and box plots.",
    overview: "This project focuses on the foundational skill of exploratory data analysis using the Iris dataset — 150 samples across 3 flower species. Using pandas for data loading and inspection, and matplotlib/seaborn for visualization, I built a complete EDA pipeline that reveals how petal measurements almost perfectly separate the three species, while sepal features overlap considerably. The project demonstrates how thorough data exploration before modeling leads to better feature selection and stronger results.",
    problemStatement: "Before training any ML model, we need to understand the data — its distributions, relationships between features, and potential outliers. The challenge was to extract meaningful insights from a multi-class dataset using only visualization techniques.",
    solution: "Built a 4-panel EDA pipeline: a 4×4 scatter plot matrix showing all pairwise feature relationships, histograms with KDE overlays per species, and box plots highlighting outliers per feature. Used color-coded species grouping throughout for clear visual separation.",
    technologies: ["Python", "pandas", "matplotlib", "seaborn", "scipy", "scikit-learn"],
    features: [
      "4×4 scatter plot matrix across all feature pairs",
      "Histograms with KDE smoothing per species",
      "Box plots for outlier detection per feature",
      "Descriptive statistics: .head(), .info(), .describe()",
      "Class distribution and balance analysis",
    ],
    challenges: [
      "Choosing the right plot type for each analytical question",
      "Designing a consistent color palette across all plots for clarity",
      "Interpreting overlapping distributions between Versicolor and Virginica",
    ],
    lessonsLearned: [
      "Petal Length and Petal Width are far more discriminative than sepal features",
      "Setosa is linearly separable — simpler models will work perfectly for it",
      "EDA reveals modeling strategy before any training begins",
      "Consistent visual themes make multi-plot figures far more readable",
    ],
    categories: ["Data Science", "Python", "Visualization", "EDA"],
    thumbnail: "/projects/iris_fig2_histograms.png",
    heroImage: "/projects/iris_fig3_boxplots.png",
    screenshots: [
      "/projects/iris_fig2_histograms.png",
      "/projects/iris_fig1_scatter-matrix.png",
      "/projects/iris_fig3_boxplots.png",
    ],
    githubUrl: "https://github.com/Rabiya-Zaheer/ML-internship/tree/main/Task1_Iris_EDA",
    featured: false,
    year: "2026",
  },

  // ── TASK 2 ────────────────────────────────────────────────
  {
    slug: "aapl-stock-price-prediction",
    title: "Apple Stock Price Prediction",
    description: "Short-term stock price forecasting using Linear Regression and Random Forest on 3 years of AAPL OHLCV data with 12 engineered time-series features.",
    overview: "This project builds a next-day closing price predictor for Apple Inc. (AAPL) stock using 3 years of historical data fetched via the yfinance API. The core challenge was preventing data leakage — a common mistake in time-series ML — by using only previous-day features as inputs and enforcing a strict 80/20 time-based split. I engineered 12 features including moving averages (MA5, MA10, MA20), momentum, and volatility, then compared Linear Regression against a 300-tree Random Forest. Interestingly, the simpler model won — because stock prices have strong linear autocorrelation.",
    problemStatement: "Predict tomorrow's AAPL closing price using only information available today, without accidentally leaking future data into the training set — a critical constraint in financial ML.",
    solution: "Fetched 782 trading days of OHLCV data via yfinance API, engineered 12 lag features from previous-day values, enforced a time-based 80/20 split (no shuffling), and compared Linear Regression vs Random Forest with RMSE, MAE, and R² evaluation. Visualized actual vs predicted prices and analyzed residuals.",
    technologies: ["Python", "pandas", "numpy", "scikit-learn", "matplotlib", "yfinance", "scipy"],
    features: [
      "Live data fetching via yfinance API",
      "12 engineered features: MA5/10/20, momentum, volatility, lag OHLCV",
      "Strict time-based 80/20 train-test split (no shuffling)",
      "Linear Regression vs Random Forest comparison",
      "Actual vs predicted price plots with residual analysis",
      "Feature importance from Random Forest",
    ],
    challenges: [
      "Preventing data leakage — same-day Open/High/Low would leak future info",
      "Choosing correct time-based split instead of random shuffling",
      "Explaining why simpler Linear Regression outperformed Random Forest",
    ],
    lessonsLearned: [
      "Data leakage is the #1 mistake in time-series ML — always use lag features",
      "Never shuffle time-series data — use chronological train/test splits",
      "Strong linear autocorrelation makes LR competitive against ensemble models",
      "Prev_Close alone explains ~42% of next-day price variance",
    ],
    categories: ["Machine Learning", "Finance", "Python", "Time Series"],
    thumbnail: "/projects/task2_fig1_actual_vs_predicted.png",
    heroImage: "/projects/task2_fig3_feature-residuals.png",
    screenshots: [
      "/projects/task2_fig1_actual_vs_predicted.png",
      "/projects/task2_fig2_full-history.png",
      "/projects/task2_fig3_feature-residuals.png",
    ],
    githubUrl: "https://github.com/Rabiya-Zaheer/ML-internship/tree/main/Task2_Stock_Prediction",
    featured: true,
    year: "2026",
  },

  // ── TASK 3 ────────────────────────────────────────────────
  {
    slug: "heart-disease-prediction",
    title: "Heart Disease Prediction",
    description: "Binary classification model on the UCI Heart Disease dataset achieving 96.7% accuracy and 0.993 ROC-AUC using Logistic Regression with clinical feature analysis.",
    overview: "This project applies binary classification to a high-stakes medical problem — predicting whether a patient is at risk of heart disease from 13 clinical features including ECG results, blood pressure, cholesterol, and thalassemia type. After cleaning the 303-patient UCI dataset (median/mode imputation for 6 missing values), I trained and compared Logistic Regression and Decision Tree classifiers, evaluating them with accuracy, ROC-AUC, 5-fold cross-validation, and confusion matrix analysis. The result: Logistic Regression achieved 96.7% accuracy with near-perfect AUC of 0.993, outperforming Decision Tree by a large margin.",
    problemStatement: "Build a reliable ML classifier on medical data that can identify heart disease risk from clinical measurements, with emphasis on minimizing false negatives (missing a sick patient is far more dangerous than a false alarm).",
    solution: "Cleaned the UCI Heart Disease dataset via SimpleImputer (median for ca, mode for thal), performed stratified 80/20 split, trained Logistic Regression and Decision Tree, evaluated with accuracy/AUC/CV/confusion matrix, and extracted feature importances to identify the strongest clinical risk factors.",
    technologies: ["Python", "pandas", "numpy", "scikit-learn", "matplotlib", "seaborn"],
    features: [
      "Missing value imputation (median + mode strategy)",
      "Stratified 80/20 train-test split",
      "Logistic Regression vs Decision Tree comparison",
      "ROC-AUC curve comparison for both models",
      "5-fold cross-validation for generalization check",
      "Per-class F1 scores and normalized confusion matrix",
      "Feature importance analysis from both models",
    ],
    challenges: [
      "Medical data requires minimizing false negatives over accuracy",
      "Imbalanced evaluation: accuracy alone is misleading — ROC-AUC is the right metric",
      "Interpreting clinical feature importances correctly (e.g., asymptomatic chest pain = higher risk)",
    ],
    lessonsLearned: [
      "ROC-AUC is more meaningful than accuracy for medical classification tasks",
      "Number of major vessels (ca) and thalassemia type (thal) are the strongest predictors",
      "Logistic Regression often outperforms tree models when the decision boundary is approximately linear",
      "Cholesterol alone is a weak predictor — consistent with modern medical literature",
    ],
    categories: ["Machine Learning", "Healthcare", "Python", "Classification"],
    thumbnail: "/projects/task3_fig3_roc_importance.png",
    heroImage: "/projects/task3_fig4_boxplots.png",
    screenshots: [
      "/projects/task3_fig1_eda.png",
      "/projects/task3_fig2_confusion.png",
      "/projects/task3_fig3_roc_importance.png",
      "/projects/task3_fig4_boxplots.png",
    ],
    githubUrl: "https://github.com/Rabiya-Zaheer/ML-internship/tree/main/Task3_Heart_Disease",
    featured: true,
    year: "2026",
  },

  // ── TASK 4 ────────────────────────────────────────────────
  {
    slug: "bert-news-classifier",
    title: "News Topic Classifier Using BERT",
    description: "Fine-tuned BERT transformer for 4-class news topic classification on AG News dataset with a live Gradio web interface for real-time inference.",
    overview: "This project fine-tunes the bert-base-uncased transformer model (110M parameters) on the AG News dataset to classify news headlines into World, Sports, Business, and Sci/Tech categories. Using Hugging Face Transformers and the Trainer API, I tokenized headlines using WordPiece tokenization, added a classification head on top of the [CLS] token, and fine-tuned end-to-end for 3 epochs. The project also includes a production-ready Gradio deployment with example headlines, emoji-labeled outputs, and a public shareable URL. Expected accuracy: ~94–95% with F1 Macro ~0.94.",
    problemStatement: "Automatically classify news headlines into topic categories using a pre-trained language model — demonstrating transfer learning for NLP where fine-tuning on a small dataset achieves near-human accuracy in minutes.",
    solution: "Loaded AG News via Hugging Face datasets library, tokenized with bert-base-uncased WordPiece tokenizer (max_length=128, attention masks, [CLS]/[SEP] tokens), fine-tuned with AdamW optimizer (lr=2e-5, weight_decay=0.01, warmup), evaluated with accuracy/F1/confusion matrix, and deployed as an interactive Gradio app.",
    technologies: ["Python", "PyTorch", "Hugging Face Transformers", "Gradio", "scikit-learn", "datasets"],
    features: [
      "bert-base-uncased fine-tuned for 4-class text classification",
      "WordPiece tokenization with attention masks and [CLS]/[SEP] tokens",
      "Hugging Face Trainer API with warmup and cosine decay",
      "Accuracy, F1 macro, per-class F1 evaluation",
      "Normalized confusion matrix visualization",
      "Gradio web interface with example headlines and live inference",
      "Public shareable URL via share=True",
    ],
    challenges: [
      "Understanding tokenization — [CLS] token aggregates sequence for classification",
      "Setting learning rate correctly — too high destroys pre-trained weights",
      "Gradio deployment requires the model to handle arbitrary input lengths safely",
    ],
    lessonsLearned: [
      "Transfer learning: 3 epochs on 8K samples achieves 94%+ — BERT already knows language",
      "Fine-tuning is about adapting [CLS] representation, not learning from scratch",
      "Sports headlines are easiest to classify; Business/World overlap most",
      "pipeline() API makes production inference 2 lines of code",
    ],
    categories: ["NLP", "Deep Learning", "Python", "Transformers", "Deployment"],
    thumbnail: "/projects/task4_fig2_confusion_matrix.png",
    heroImage: "/projects/task4_fig3_per_class_f1.png",
    screenshots: [
      "/projects/task4_fig1_training_curves.png",
      "/projects/task4_fig2_confusion_matrix.png",
      "/projects/task4_fig3_per_class_f1.png",
    ],
    githubUrl: "https://github.com/Rabiya-Zaheer/ML-internship/tree/main/Task4_News_Topic_Classifier",
    featured: true,
    year: "2026",
  },

  // ── TASK 5 ────────────────────────────────────────────────
  {
    slug: "customer-churn-pipeline",
    title: "Customer Churn Prediction Pipeline",
    description: "Production-ready end-to-end ML pipeline for Telco customer churn prediction using scikit-learn Pipeline API, GridSearchCV tuning, and joblib export.",
    overview: "This project builds a fully production-ready ML pipeline for predicting customer churn on the IBM Telco dataset (7,043 customers, 19 features). Using scikit-learn's Pipeline and ColumnTransformer APIs, all preprocessing — median imputation, standard scaling, binary and nominal one-hot encoding — is chained with the classifier into a single reusable object. Two models were tuned with GridSearchCV (5-fold StratifiedKFold): Logistic Regression across 16 parameter combinations and Random Forest across 12. Both pipelines are exported as .joblib files, enabling production inference on raw data with a single load() call — no separate preprocessing step needed.",
    problemStatement: "Build a churn prediction system that is not just accurate, but truly production-ready — meaning the entire preprocessing and modeling pipeline can be saved, loaded, and used on raw customer data without any manual preprocessing steps.",
    solution: "Designed a ColumnTransformer with separate sub-pipelines per feature type, chained with classifiers into sklearn Pipelines, ran GridSearchCV with StratifiedKFold for hyperparameter tuning, evaluated with ROC-AUC as primary metric (accuracy misleading on 81/19 imbalanced data), and exported both tuned pipelines via joblib.",
    technologies: ["Python", "scikit-learn", "pandas", "numpy", "matplotlib", "seaborn", "joblib"],
    features: [
      "ColumnTransformer with 3 sub-pipelines (numeric/binary/nominal)",
      "SimpleImputer → StandardScaler for numeric features",
      "OneHotEncoder with drop='if_binary' for binary features",
      "GridSearchCV over 16 LR + 12 RF hyperparameter combinations",
      "5-fold StratifiedKFold cross-validation",
      "ROC-AUC as primary metric (handles class imbalance correctly)",
      "joblib export — entire pipeline in one file",
      "Production inference demo on new raw customer data",
    ],
    challenges: [
      "81/19 class imbalance makes accuracy misleading — ROC-AUC is the right metric",
      "Pipeline parameter naming uses double underscore: classifier__C not just C",
      "Ensuring no data leakage — scaler fitted only on training data inside Pipeline",
    ],
    lessonsLearned: [
      "sklearn Pipeline prevents leakage by design — scaler only sees training data",
      "joblib.dump() saves the entire preprocessing + model as one portable object",
      "Contract type is the single strongest churn predictor (50% of RF importance)",
      "Month-to-month customers churn ~4× more than 2-year contract customers",
    ],
    categories: ["Machine Learning", "MLOps", "Python", "Production"],
    thumbnail: "/projects/task5_fig1_churn_eda.png",
    heroImage: "/projects/task5_fig3_churn_confusion_matrices.png",
    screenshots: [
      "/projects/task5_fig1_churn_eda.png",
      "/projects/task5_fig2_churn_roc_gridsearch.png",
      "/projects/task5_fig3_churn_confusion_matrices.png",
    ],
    githubUrl: "https://github.com/Rabiya-Zaheer/ML-internship/tree/main/Task5_Churn_Pipeline",
    featured: true,
    year: "2026",
  },

  // ── TASK 6 ────────────────────────────────────────────────
  {
    slug: "multimodal-housing-price-prediction",
    title: "Multimodal Housing Price Prediction",
    description: "Predicts house prices by fusing CNN-style image features with tabular data, achieving 88.3% MAE improvement over tabular-only using multimodal feature fusion.",
    overview: "This project tackles multimodal machine learning — combining two fundamentally different data types to improve predictions. House images are processed through a CNN-inspired feature extraction pipeline (color histograms, Sobel edge detection, texture variance, spatial pooling) producing a 50-dimensional visual feature vector. These are concatenated with 12 preprocessed tabular features (sqft, bedrooms, age, location, condition) to create a 62-dimensional fused representation, which feeds a Gradient Boosting Regressor. Three variants were trained and compared: Tabular Only, Image Only, and Multimodal Fused — demonstrating that visual features capture quality signals that structured data misses.",
    problemStatement: "House prices depend on both measurable attributes (size, location) and visual qualities (curb appeal, condition, neighborhood feel) that are hard to quantify. Can we improve price prediction by teaching a model to 'see' houses in addition to reading their specs?",
    solution: "Extracted 50 CNN-style features per image using Sobel operators, color channel statistics, spatial quadrant brightness, and texture variance — all computed without deep learning. Combined with 12-dim preprocessed tabular features, the fused 62-dim vector fed a GBM regressor. Compared all 3 input variants on identical model architecture for fair ablation.",
    technologies: ["Python", "scikit-learn", "numpy", "PIL", "scipy", "matplotlib", "pandas"],
    features: [
      "CNN-style feature extraction: color histograms, Sobel edges, texture, spatial pooling",
      "50-dimensional image feature vector per house",
      "ColumnTransformer preprocessing for tabular features",
      "Feature concatenation fusion strategy (image + tabular → 62-dim)",
      "Ablation study: Tabular Only vs Image Only vs Multimodal Fused",
      "MAE, RMSE, R², MAPE evaluation",
      "Feature importance showing image vs tabular contribution",
    ],
    challenges: [
      "Extracting meaningful CNN-like features without a GPU or deep learning framework",
      "Designing image features that actually correlate with house value",
      "Setting up a fair ablation — same model architecture for all 3 variants",
    ],
    lessonsLearned: [
      "Multimodal fusion reduced MAE by 88.3% vs tabular-only in this dataset",
      "Sobel edge detection and spatial brightness pooling are powerful visual quality signals",
      "Feature concatenation is a simple but highly effective fusion strategy",
      "In real-world data, tabular features (location, sqft) usually dominate — images are complementary",
    ],
    categories: ["Computer Vision", "Machine Learning", "Multimodal AI", "Python"],
    thumbnail: "/projects/task6_fig1_architecture_diagram.png",
    heroImage: "/projects/task6_fig3_actual_vs_predicted.png",
    screenshots: [
      "/projects/task6_fig1_architecture_diagram.png",
      "/projects/task6_fig2_model_comparison.png",
      "/projects/task6_fig3_actual_vs_predicted.png",
      "/projects/task6_fig4_feature_importance.png",
    ],
    githubUrl: "https://github.com/Rabiya-Zaheer/ML-internship/tree/main/Task6_House_Price_Prediction",
    featured: true,
    year: "2026",
  },

];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getAllCategories(): string[] {
  const categories = new Set<string>();
  projects.forEach((project) => project.categories.forEach((c) => categories.add(c)));
  return ["All", ...Array.from(categories)];
}