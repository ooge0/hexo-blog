---
title: Glossary of Machine Learning and AI Terms
layout: post
permalink: /ai/glossary-of-machine-learning-and-ai-terms
categories:
  - Posts
tags:
  - AI
  - ML
  - glossary
date: 2024-11-18
---
*Feel free to send me your thoughts, notes, other references. My contact details you can find on [LinkedIn](https://www.linkedin.com/in/romandenysenko/)*

*Total terms in document: **53***

### Index
[A](#A)  [B](#B)  [C](#C)  [D](#D)  [E](#E)  [F](#F)  [G](#G)  [H](#H)  [I](#I)  [J](#J)  [K](#K)  [L](#L)  [M](#M)  [N](#N)  [O](#O)  [P](#P)  [Q](#Q)  [R](#R)  [S](#S)  [T](#T)  [U](#U)  [V](#V)  [W](#W)  [X](#X)  [Y](#Y)  [Z](#Z)

## A
### Autoencoders

Autoencoders are neural network architectures used for [unsupervised learning](#Unsupervised-learning). They are designed to compress input data into a lower-dimensional latent space (encoding) and then reconstruct the original data from this compressed representation (decoding). The primary objective is to minimize the reconstruction error, typically measured as the difference between input and output. 

**Applications:**
1. **Dimensionality Reduction**: Acts as a non-linear alternative to Principal Component Analysis (PCA).
2. **Feature Learning**: Learns compact and meaningful representations of data.
3. **Denoising**: Removes noise from corrupted data by training on clean samples.
4. **Anomaly Detection**: Identifies unusual patterns by observing high reconstruction errors.

**Variants:**
- **Sparse Autoencoders**: Encourage sparsity in the hidden units to create compressed and interpretable features.
- **Denoising Autoencoders**: Add noise to inputs during training, forcing the network to learn robust features.
- **Convolutional Autoencoders**: Specialize in image data, leveraging convolutional layers for spatial feature learning.
  
**Key References:**
  - [Read paper on "Efficient Learning of Sparse Representations with an Energy-Based Model, 2006." on cs.nyu.edu](https://cs.nyu.edu/~sumit/publications/assets/nips06.pdf) | DOI: 10.7551/mitpress/7503.003.0147
  - [Read post "Stacked Denoising Autoencoders: Learning Useful Representations in a Deep Network with a Local Denoising Criterion, 2010." cse.fau.edu](https://www.cse.fau.edu/~xqzhu/courses/cap5615/reading/autoencoder.pdf)

---

### Artificial Neural Networks (ANNs)  
Artificial Neural Networks (ANNs) are computational processing systems inspired by biological nervous systems (e.g., the human brain).

---
## B

### Base model  
The original, foundational version of a large language model, which has not been fine-tuned.

---

### BERT

Bidirectional Encoder Representations from Transformers. Developed in 2018.
BERT is designed to pre-train deep bidirectional representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result, the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models for a wide range of tasks, such as question answering and language inference, without substantial task-specific architecture modifications.
BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).

**Key References:**

- [Read paper "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding. 2018" on arxiv.org](https://arxiv.org/pdf/1810.04805) | DOI: [10.18653/v1/N19-1423](https://doi.org/10.18653/v1%2FN19-1423)
- [Read post "Read post on BERT Transformers – How Do They Work?"](https://www.exxactcorp.com/blog/Deep-Learning/how-do-bert-transformers-work)
  
---

### BERTScore
- **Description**: Leverages contextual embeddings from BERT to evaluate semantic similarity between the generated and reference text.
- **Purpose**: Captures semantic similarity more effectively than traditional n-gram-based metrics.

| Metric               | Range | Interpretation                                                     | Example Values                     |
|----------------------|-------|---------------------------------------------------------------------|------------------------------------|
| **BERTScore (Precision)** | 0 to 1 | Measures how much of the generated text aligns with the reference. | 0.7 (moderate), 0.85 (good), 0.95 (excellent) |
| **BERTScore (Recall)**    | 0 to 1 | Measures how much of the reference text is captured in the generated output. | 0.6 (moderate), 0.8 (good), 0.9 (excellent)  |
| **BERTScore (F1)**        | 0 to 1 | Harmonic mean of precision and recall; overall measure of similarity. | 0.65 (moderate), 0.82 (good), 0.9 (excellent) |

---

### Bias  
The disproportionate favor or prejudice towards a specific item or group. AI algorithms may inherit biases from historical data or human trainers, risking perpetuation of these biases in predictions.

---

### BLEU
BLEU (Bilingual Evaluation Understudy) is an algorithm for evaluating the quality of text which has been machine-translated from one natural language to another. Quality is considered to be the correspondence between a machine’s output and that of a human: “the closer a machine translation is to a professional human translation, the better it is” – this is the central idea behind BLEU. 
BLEU was one of the first metrics to claim a high correlation with human judgements of quality, and remains one of the most popular automated and inexpensive metrics.
**Key References:**
  - [Read paper: "BLEU: a Method for Automatic Evaluation of Machine Translation". Proceedings of the 40th Annual Meeting of the Association for Computational Linguistics (ACL), Philadelphia, July 2002, pp. 311-318." on sci-hub.se](https://sci-hub.se/https://doi.org/10.3115/1073083.1073135) | DOI: 10.3115/1073083.1073135
  - [Read paper: "BLEU: a Method for Automatic Evaluation of Machine Translation". Proceedings of the 40th Annual Meeting of the Association for Computational Linguistics (ACL), Philadelphia, July 2002, pp. 311-318." on aclanthology.org](https://aclanthology.org/P02-1040.pdf) | DOI: 10.3115/1073083.1073135

---

### BLEU score
* BLEU scores are calculated for individual translated segments—generally sentences—by comparing them with a set of good quality reference translations. Those scores are then averaged over the whole corpus to reach an estimate of the translation’s overall quality. Neither intelligibility nor grammatical correctness are not taken into account.
* The BLEU algorithm compares consecutive phrases of the automatic translation with the consecutive phrases it finds in the reference translation, and counts the number of matches, in a weighted fashion. These matches are position independent. A higher match degree indicates a higher degree of similarity with the reference translation, and higher score. Intelligibility and grammatical correctness aren't taken into account.
[Read article "How to Compute BLEU Score" on geeksforgeeks.org](https://www.geeksforgeeks.org/nlp-bleu-score-for-evaluating-neural-machine-translation-python/#how-to-compute-bleu-score)
  
---

### Bokeh
Bokeh is an interactive visualization library for Python that enables the creation of dynamic and visually appealing plots, dashboards, and data applications. It provides high-performance tools to generate interactive charts, including scatter plots, bar charts, line graphs, and more, with support for handling large datasets. Bokeh seamlessly integrates with Pandas, NumPy, and other data manipulation libraries, making it a powerful choice for creating web-ready visualizations.
*[Example "Bokeh" for Movie explorer](https://shiny.posit.co/r/gallery/interactive-visualizations/movie-explorer/)

**Key References:**
[Bokeh Homepage](https://bokeh.org/)
[Bokeh Official Documentation](https://docs.bokeh.org/en/latest/)

## C

### Convolutional layer  
A core component of CNNs that processes input data using filters (kernels) to produce feature maps, identifying patterns or features.

---

### Convolutional Neural Network (CNN)  
1. CNN - a type of neural network specialized for analyzing visual data, learning features via filter optimization.
2. CNN - similar to ANNs but optimized for image data, with layers designed for feature extraction and classification.
  
**Key References:**
* [Read article "What are convolutional neural networks?" on ibm.com](https://www.ibm.com/topics/convolutional-neural-networks)

---
## D

### Dataset  
The training data used to teach an LLM patterns and relationships.

---
## F

### False positive  
An incorrect prediction where a model identifies a condition or class that is not present.

---

### F1 score  
A performance metric for classification models combining precision and recall into a single value ranging from 0 (poor) to 1 (excellent).

---

### Few-shot  
Using a small number of examples to guide the model in performing a new task.

---

### Fine-tuning  
Adapting a pre-trained model to a specific task or domain by training it on a smaller, specialized dataset.

---
## G

### Generative AI  
AI systems capable of creating new content, such as text, images, or audio.

---
## H

### Hallucination  
When an LLM generates plausible but factually incorrect or nonsensical information.

---

### HoloViz

HoloViz - high-level tools to simplify visualization in Python.

HoloViz provides:
* High-level tools that make it easier to apply Python plotting libraries to your data.
* A comprehensive tutorial showing how to use the available tools together to do a wide range of different tasks.
[HoloViz homepage](https://holoviz.org/)

---

## I

### Inference  
The process of using a trained model to make predictions or generate outputs.

---
## L

### LanguageTool
LanguageTool is an AI-based grammar checker. Paste your text or start typing below to check grammatical errors, and spelling mistakes across languages.
[LanguageTool home page](https://languagetool.org/)

### LCS
LCS = Longest Common Subsequence

--- 

### LoRA  
Low-Rank Adaptation, a fine-tuning method requiring less computational resources compared to full fine-tuning.

---
## M

### Matplotlib

Matplotlib is a comprehensive library for creating static, animated, and interactive visualizations in Python. It offers a versatile set of tools to plot data in various formats, ranging from simple line graphs to complex 3D plots. Widely used in scientific computing, data analysis, and engineering, Matplotlib provides extensive customization options for precise control over visual outputs.

**Key References:**
[Matplotlib Homepage](https://matplotlib.org/)
[Matplotlib Official user guide documentation](https://matplotlib.org/stable/users/index.html)

---

### Machine Learning Operations (MLOps)  
The process of deploying, monitoring, and updating machine learning models in production environments.

---
### METEOR
Metric. METEOR = **M**etric for **E**valuation of **T**ranslation with **E**xplicit **OR**dering
- **Description**: Evaluates semantic similarity by considering unigram overlaps, stemming, synonyms, and paraphrasing.
- **Score Parameter**: "METEOR Score", [ref. METEOR-Score](#METEOR-Score)
- **Purpose**: Provides a balanced metric for machine translation and summarization tasks.

### METEOR Score
- Metric: [METEOR](#meteor)
- Range: 0 to 1
- Interpretation: Combines precision and recall, with semantic similarity (e.g., synonyms, stems)
- Example Values: Higher scores indicate better matches.	0.3 (low), 0.6 (moderate), 0.85 (high)
---

### MLOps  
Short for Machine Learning Operations.

---

## N

### Named Entity Recognition

Named Entity Recognition = NER

- Named Entity Recognition seeks to extract substrings within a text that name real-world objects and to determine their type (for example, whether they refer to persons or organizations). 
Paper: A survey on recent advances in Named Entity Recognition, 2024. 
- Named Entity Recognition (NER) is a sub-task of information extraction in Natural Language Processing (NLP) that classifies named entities into predefined categories such as person names, organizations, locations, medical codes, time expressions, quantities, monetary values, and more.

**Key References:**

- [Read paper "A survey on recent advances in Named Entity Recognition. Imed Keraghel. 2024" on arxiv.org](https://arxiv.org/html/2401.10825v1)
- [Read post "Named Entity Recognition with LLMs — Extract Conversation Metadata" on Medium](https://medium.com/@grisanti.isidoro/named-entity-recognition-with-llms-extract-conversation-metadata-94d5536178f2)
  
---

## Neural Process Family

Neural Process Family = NPF

---

## P

### Pandas

Pandas is a powerful data manipulation and analysis library for Python. It provides data structures like DataFrame and Series for efficiently handling structured data, enabling operations such as filtering, transformation, and aggregation. Widely used in data science, machine learning, and statistical analysis, Pandas simplifies working with large datasets and offers seamless integration with other libraries.

**Key References:**
- [Pandas Homepage](https://pandas.pydata.org/)
- [Pandas Official Documentation](https://pandas.pydata.org/docs/)

---

### Perplexity  
A measure of how well a language model predicts a sample of text, with lower scores indicating better performance.

| Range  | Interpretation                                                          | Example Values                                      |
|--------|------------------------------------------------------------------------|-----------------------------------------------------|
| 1 to ∞ | Measures the uncertainty of the model's predictions. Lower perplexity indicates better performance. A perplexity of 1 means perfect predictions, while higher values indicate more uncertainty and worse performance. | 20 (good), 50 (average), 200 (poor)               |


---

### Plotly

Plotly is a versatile data visualization platform that allows users to create interactive, web-based charts, graphs, and dashboards. It supports various programming languages, including Python, R, and JavaScript, making it popular among developers, data analysts, and scientists. Plotly's library provides tools for producing high-quality visualizations ranging from basic plots to complex 3D and geographic maps, with seamless integration for sharing and embedding visual content.

---

### Pooling layers  
Layers in CNNs designed to reduce the dimensionality of feature maps, lowering computational complexity.

---

### Precision  
A metric measuring the ratio of true positives to all predicted positives in a classification model.

---

### Pre-trained model  
A model that has been trained on a dataset and may be further fine-tuned for specific tasks.

---

### Prompt engineering  
The art of crafting effective inputs to elicit desired output from an LLM.

---

### Prompt template  
Specially formatted instructions used by LLMs to define the input and output.

---
## Q

### Qlik
Qlik is a powerful data analytics and business intelligence platform that enables users to visualize data, generate insights, and make data-driven decisions. It offers tools for creating dynamic dashboards, performing real-time analytics, and integrating data from multiple sources. Qlik's associative engine and AI capabilities allow users to explore data interactively and uncover hidden relationships.

**Key References:**
- [Qlik Homepage](https://www.qlik.com/us)
- [Qlik Official Documentation](https://help.qlik.com/en-US/)

---
# R

### R.A.G. (Retrieval-Augmented Generation)  
A technique combining external information retrieval with the generative capabilities of an LLM for improved accuracy.

---

### ROUGE
ROUGE (Recall-Oriented Understudy for Gisting Evaluation)
- **Score parameters**:
  - `ROUGE-1`:	Range: 0 to 1, Measures the overlap of unigram (single word) between the generated and reference text.	0.2 (low overlap), 0.5 (moderate), 0.8 (high)
  - `ROUGE-2`:	Range: 0 to 1, Measures the overlap of bigrams (two consecutive words) between generated and reference text.	0.1 (low), 0.4 (moderate), 0.7 (high)
  - `ROUGE-L`:	Range: 0 to 1, Measures the longest common subsequence (LCS) between the generated and reference text.	0.3 (low), 0.6 (moderate), 0.9 (high)
  - `ROUGE-Lsum` is specifically designed for summarization tasks, particularly when evaluating summaries. It computes the ROUGE-L score for the summarization task based on how well the generated summary matches the reference summary.
- **Purpose**: Evaluates lexical similarity, fluency, and coherence across different levels (unigrams, bigrams, and sequences).

**Key References:**  
  - [Read paper "ROUGE: A Package for Automatic Evaluation of Summaries. 2004"on ACL Anthology](https://aclanthology.org/W04-1013.pdf) | DOI: 10.3115/1073083.1073135

---

### ROUGE-L

ROUGE-L = ROUGE (Recall-Oriented Understudy for Gisting Evaluation) + L (Longest Common Subsequence ([LCS](#LCS)) 
ROUGE-L captures the longest sequence of words that appear in both texts in the same order, providing insights into fluency and coherence.

**Key References:**
  - [Read paper "Automatic Evaluation of Machine Translation Quality Using Longest Common Subsequence and Skip-Bigram Statistics. Lin, Chin-Yew. 2004" on sci-hub.se](https://sci-hub.se/10.3115/1218955.1219032) | DOI: 10.3115/1218955.1219032

---

## S

### Seaborn

Seaborn is a Python data visualization library built on top of [Matplotlib](#Matplotlib). It provides a high-level interface for creating attractive and informative statistical graphics. Seaborn simplifies the process of exploring and visualizing data through built-in themes, color palettes, and functions for visualizing distributions, relationships, and categorical data.

**Key References:**
- [Seaborn Homepage](https://seaborn.pydata.org/)
- [Seaborn Official Documentation](https://seaborn.pydata.org/tutorial.html)

---

### Special Token  
Reserved tokens used in LLMs for specific functions, such as defining the start or end of a response.

---
### Softmax function


The Softmax function is a mathematical function often used in machine learning and artificial intelligence, particularly in classification tasks. It transforms a vector of raw scores (logits) into probabilities by exponentiating each score and normalizing them. The resulting values lie between 0 and 1 and sum to 1, making them interpretable as probabilities for each class in multi-class classification problems.
In the context of AI, the Softmax function is typically applied in the final layer of neural networks, especially in models like classifiers, to predict the most likely class. It ensures that the network outputs a probability distribution, which is useful for decision-making in tasks like image classification, language processing, and more.

**Key References:**
[Read post about "Softmax function" on notes.theomorales.com](https://notes.theomorales.com/Attention+is+all+you+need/The+Softmax+function)

---

### Supervised learning  
Learning through pre-labeled inputs, where the model aims to reduce classification error by predicting the correct outputs.
It works opposite on [unsupervised learning](#Unsupervised-learning)

---

### System prompts  
Instructions defining an LLM's behavior, role, or context in a conversation.

---
## T

### Tableau

Tableau is a leading data visualization and business intelligence tool that helps users analyze, visualize, and share insights from their data. It provides intuitive drag-and-drop features for creating interactive dashboards, reports, and charts. Tableau supports integration with various data sources and is widely used for turning complex data into actionable insights, enhancing decision-making across industries.

- [Tableau Homepage](https://www.tableau.com/)
- [Tableau Official Documentation](https://help.tableau.com/current/pro/desktop/en-us/help.htm)

--- 

### Token  
The smallest unit of text processed by an LLM, such as a word or subword.

---

### Tokenization  
Breaking text into tokens for model processing.

---

### Training  
Feeding a model with data to allow it to learn patterns and relationships.

---
## U

### Unsupervised learning  
Learning from data without labeled outputs, often for tasks like clustering or dimensionality reduction.
It works opposite on [supervised learning](#Supervised-learning)

---
## V

### Variational Autoencoders (VAEs)

Variational Autoencoders (VAEs) are a probabilistic extension of autoencoders that learn not only to compress data but also to generate new samples by modeling data distributions. VAEs use a latent space with a probabilistic structure, enabling meaningful interpolation between points in the latent space.
**Features:**
1. **Latent Space Regularization**: Ensures the latent space follows a predefined probability distribution, commonly Gaussian.
2. **Reconstruction and Generation**: Balances reconstruction accuracy with the regularization term using a loss function derived from the evidence lower bound (ELBO).
3. **Bayesian Interpretation**: The encoding process approximates posterior distributions via variational inference.

**Applications:**
- **Data Generation**: Generate novel and coherent samples (e.g., synthetic images, text).
- **Anomaly Detection**: Identifies data points that deviate from the learned distribution.
- **Latent Space Manipulation**: Enables interpolation and arithmetic operations in the latent space.

**Key References:**
- [Read paper "Auto-Encoding Variational Bayes" on arxiv.org](https://arxiv.org/pdf/1312.6114) | DOI: 10.48550/arXiv.1312.6114
- [Read paper "Variational Inference with Normalizing Flows" on arxiv.org](https://arxiv.org/pdf/1505.05770) | DOI: 10.48550/arXiv.1505.05770

--- 

## Vega-Altair

Vega-Altair is a declarative statistical visualization library for Python, built on the Vega-Altair and Vega-Lite visualization grammars. It enables users to create elegant and interactive visualizations with concise, human-readable code. Altair leverages Pandas data structures for seamless integration and supports a wide range of chart types, including scatter plots, bar charts, heatmaps, and more. Its declarative approach simplifies the creation of complex visualizations by focusing on data relationships rather than intricate plotting details.

**Key References:**
- [Vega-Altair Homepage](https://altair-viz.github.io/)
- [Vega-Altair `Getting Statrted` page](https://altair-viz.github.io/getting_started/overview.html)
- [Vega-Altair `User guide` page](https://altair-viz.github.io/user_guide/data.html)


---

## Z

### Zero-padding (CNN)  
A technique in CNNs that pads the borders of input data with zeros, controlling output dimensionality.

---

### Zero-shot  
A model's ability to perform tasks it was not explicitly trained for by leveraging general knowledge.

---
**Other AI glossaries**
1. [github.com/nomic-ai/gpt4all | Generative AI Terminology](https://github.com/nomic-ai/gpt4all/wiki/Generative-AI-Terminology)
1. [nhsx.github.io | AI Dictionary](https://nhsx.github.io/ai-dictionary)