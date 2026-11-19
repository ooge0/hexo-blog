---
title: Psychology. Confirmatory Factor Analysis (CFA) for Bifactor Model
layout: post
categories:
  - Posts
tags:
  - psy
date: 2025-01-01 01:01:01
permalink: /psy/confirmatory_factor_analysis_cfa_for_bifactor_model/
---
### Confirmatory Factor Analysis (CFA) for Bifactor Model

The following Python code demonstrates how to perform a confirmatory factor analysis (CFA) for a bifactor model with orthogonal factors using the `semopy` library. The model includes two specific latent factors: Optimism and Pessimism, along with a general latent factor, Dispositional. The dataset is expected to be in CSV format with 521 observations.

```python
# Import necessary libraries
import pandas as pd
from semopy import Model, ModelMeans, fit, calc_stats

# Load the data (replace 'data.csv' with the actual path to your dataset)
data = pd.read_csv("data.csv")

# Define the bifactor model with orthogonal factors
# Using lavaan-style syntax
descriptor = """
    # General latent factor
    Dispositional =~ Q1 + Q4 + Q10 + Q3 + Q7 + Q9 + Q11 + Q12

    # Specific latent factors
    Optimism =~ Q1 + Q4 + Q10 + Q11
    Pessimism =~ Q3 + Q7 + Q9 + Q12

    # Orthogonality constraints
    Optimism ~~ 0*Pessimism
    Optimism ~~ 0*Dispositional
    Pessimism ~~ 0*Dispositional
"""

# Create and fit the model
model = Model(descriptor)
res = model.fit(data)

# Calculate fit statistics
stats = calc_stats(model, data)

# Print results
print("Fit statistics:")
print(stats)

# Display factor loadings
print("\nFactor Loadings:")
print(model.inspect("mx"))

# Save results to CSV
results_df = pd.DataFrame(stats, index=[0])
results_df.to_csv("fit_statistics.csv", index=False)
```

### Explanation
1. **Library**: The `semopy` library is used for structural equation modeling in Python.
   1. [Read paper `semopy: A Python package for Structural
Equation Modeling.G. Meshcheryakov, A. Igolkina. 2019.` on arxiv.org](https://arxiv.org/pdf/1905.09376)
   2. [Read paper `semopy 2: A Structural Equation Modeling Package with Random Effects in Python. 2021.` on arxiv.org](https://arxiv.org/pdf/2106.01140)
1. **Data Input**: Replace `data.csv` with the path to your CSV file.
2. **Model Syntax**: The `descriptor` variable defines the bifactor model, including general and specific factors. Orthogonality constraints are included.
3. **Fit Statistics**: Fit indices such as χ², df, CFI, TLI, RMSEA, and SRMR are calculated and printed.

### Relevant Research Articles
- **Paper**: Confirmatory Factor Analysis for Applied Research by Timothy A. Brown
  - DOI: 10.1037/0033-2909.112.1.155
  - [Read paper `Confirmatory Factor Analysis for Applied Research by Timothy A. Brown` on psycnet.apa.org](https://psycnet.apa.org/doi/10.1037/0033-2909.112.1.155)
  - [Read paper `Confirmatory Factor Analysis for Applied Research by Timothy A. Brown` on sci-hub.se](https://sci-hub.se/https://psycnet.apa.org/doi/10.1037/0033-2909.112.1.155)

### Recommended Books for Mathematical Foundations
#### Russian
1. **Быстров В.П.** - "Математическая статистика: теория и применение"
2. **Морозов М.В.** - "Основы факторного анализа"

#### English
1. **Raykov & Marcoulides** - "Introduction to Psychometric Theory"
2. **Keith F. Widaman** - "Factor Analysis in Social Research"