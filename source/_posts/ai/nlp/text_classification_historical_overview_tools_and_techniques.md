---
title: Text Classification. Historical overview, tools, and techniques.
layout: post
permalink: /ai/nlp/text-classification-historical-overview-tools-and-techniques/
categories:
  - Posts
tags:
  - AI
  - NLP
  - ML
  - text_classification
date: 2024-11-19 12:05:30
---
Text classification is a fundamental task in Natural Language Processing (NLP) that involves categorizing text into predefined categories. Its applications range from sentiment analysis to spam detection, and news categorization to intent recognition in conversational AI. This document provides a historical overview, a comparative analysis of tools, and details about modern approaches like Word2Vec, FastText, GloVe, and deep learning.

1. Historical Overview of Text Classification
   1. **Traditional Methods (1950s - 2000s)**
      1. *Bag of Words (BoW):*
           - Represents text as a frequency vector of words.
           - Pros: Simple and interpretable.
           - Cons: Ignores word order and semantics.
      2. *TF-IDF (Term Frequency-Inverse Document Frequency):*
          - Improves BoW by weighting rare words higher.
          - Pros: Better at distinguishing important terms.
          - Cons: Still ignores context and word relationships.
      3. *Naive Bayes:*
          - Commonly used with BoW or TF-IDF for classification.
          - Pros: Fast and robust for small datasets.
          - Cons: Assumes word independence, which rarely holds.

2. **Emergence of Distributed Representations (2010s)**
The advent of distributed word representations marked a significant leap, addressing the limitations of sparse representations.
   1. *Word2Vec (2013, Mikolov et al.):*
      - Generates dense vector embeddings using Skip-gram or CBOW.
      - Paper: Efficient Estimation of Word Representations in Vector Space
        - DOI: [10.48550/arXiv.1301.3781](https://doi.org/10.48550/arXiv.1301.3781)
      - Pros: Captures semantic relationships and is computationally efficient.
      - Cons: Fixed-size embeddings and lacks out-of-vocabulary word handling.
   2. *GloVe (2014, Pennington et al.):*
    Combines global word co-occurrence statistics with local context to produce embeddings.
      - Paper: GloVe: Global Vectors for Word Representation
        - DOI: [10.3115/v1/D14-1162](https://aclanthology.org/D14-1162.pdf)
      - Pros: Effective at capturing statistical information.
      - Cons: Pre-trained on fixed corpora; inflexible for dynamic contexts.
    3. *FastText (2016, Bojanowski et al.):*
      Extends Word2Vec by representing words as n-grams of characters.
      - Paper:Enriching Word Vectors with Subword Information, 2016
        - DOI: [10.48550/arXiv.1607.04606](https://arxiv.org/pdf/1607.04606)
      - Pros: Handles rare and out-of-vocabulary words better.
      - Cons: Increased computational cost compared to Word2Vec.

1. **Deep Learning Era (Late 2010s - Present)**
The rise of neural networks transformed text classification. Key innovations include:
   1. *Recurrent Neural Networks (RNNs):*
      Captures sequential dependencies but suffers from vanishing gradients.
   2. *Convolutional Neural Networks (CNNs):*
      Effective for capturing local patterns in text.
      - Paper: An Introduction to Convolutional Neural Networks
        - DOI: [10.48550/arXiv.1511.08458](https://arxiv.org/pdf/1511.08458)
      - Papper: A review of convolutional neural networks in computer
        - Read the doc >>> [A review of convolutional neural networks in computer](../../../../../docs/other/a_review_of_convolutional_neural_networks_in_computer_vision.pdf)
   3. *Transformers and Pre-trained Models (2018 - Present):*
      Models like:
        - BERT
          - Paper: BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding, 2018 
            - DOI:[10.48550/arXiv.1810.04805](https://doi.org/10.48550/arXiv.1810.04805)         
        - GPT
          - GPT-2
              - Paper: Release Strategies and the Social Impacts of Language Models, 2019 
              - DOI:[10.48550/arXiv.1908.09203](https://arxiv.org/pdf/1908.09203)
          - GPT-3.5
              - Paper: Language Models are Few-Shot Learners, 2020 
              - DOI:[10.48550/arXiv.2005.14165](https://arxiv.org/pdf/2005.14165)
          - GPT-4
              - Paper: GPT-4 Technical Report, 2023 
              - DOI:[10.48550/arXiv.2303.08774](https://doi.org/10.48550/arXiv.2303.08774)
        - and T5 revolutionized NLP by leveraging attention mechanisms and transfer learning.
          - Paper: T5: Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer, 2019
          - DOI:[10.48550/arXiv.1910.10683](https://arxiv.org/pdf/1910.10683)
       


## Footnotes
[^1]: GLUE - The General Language Understanding Evaluation (GLUE) benchmark is a collection of resources for training, evaluating, and analyzing natural language understanding systems.  
[^2]: IMDB Dataset - Large Movie Review Dataset for Sentiment Analysis by Stanford.  
[^3]: CoNLL-2003 - Dataset for Named Entity Recognition and other sequence modeling tasks.  
[^4]: OntoNotes - Annotated dataset covering various linguistic phenomena.  
[^5]: WMT - Workshop on Machine Translation datasets for translation tasks.  
[^6]: OpenSubtitles - Large corpus of subtitles for multilingual tasks.  
[^7]: CNN/DailyMail - Dataset for abstractive summarization tasks.  
[^8]: XSum - Dataset for extreme summarization of news articles.  
[^9]: AG News - News topic classification dataset.  
[^10]: Reuters-21578 - Text categorization benchmark dataset.  
[^11]: SQuAD - Stanford Question Answering Dataset for reading comprehension tasks.  
[^12]: TriviaQA - Dataset containing trivia questions and evidence passages.  
[^13]: WikiText - Dataset for language modeling based on Wikipedia articles.  
[^14]: Penn Treebank - Corpus for linguistic annotation and modeling.  
[^15]: Universal Dependencies - Framework for consistent grammatical annotation across languages.  
[^16]: WSJ Corpus - Dataset from Wall Street Journal articles for POS tagging.  
[^17]: Coreference resolution (CR) is the task of finding all linguistic expressions (called mentions) in a given text that refer to the same real-world entity. 
[^18]: CoNLL-2012 - Shared task on coreference resolution and other NLP challenges.  
[^19]: Annotated dataset created to evaluate RoBERTa’s performance on coreference tasks, with a focus on contextual embeddings.
