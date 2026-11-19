---
title: Comparison of popular models and architectures
layout: post
categories:
  - Posts
tags:
  - AI
  - NN
date: 2024-12-10 19:30:33
permalink: /ai/nn/comparison_of_popular_models_and_architectures/
---
Related to:
* [List of neural network models, architectures, and basic components](../../../../post_ai_nn__list_of_neural_network_models_architectures_and_basic_components)

----


## Table  - Single models with options

# Detailed Breakdown of Popular Models and Architectures

## Autoencoders
| **Category**                         | **Details**                                  |
|--------------------------------------|----------------------------------------------|
| **Basic Components**                 | Encoder, Decoder, Latent Space              |
| **Open-Source/ Forbidden**           | Open-Source                                 |
| **Criteria of Measuring Productivity** | Reconstruction Loss                         |
| **Model's Parameters**               | Weights (Changeable), Latent Dimensions (Fixed) |
| **Criteria of Measuring Parameter's Productivity** | Reconstruction Accuracy                     |
| **Model's Hyperparameters**          | Learning Rate, Latent Dimension Size (Changeable) |
| **Criteria of Measuring Hyperparameter's Productivity** | Lower Reconstruction Error                 |
| **Basic Components of Hyperparameter's Productivity** | Effective Latent Space Size, Training Convergence Rate |

## CNN (Convolutional Neural Networks)
| **Category**                         | **Details**                                  |
|--------------------------------------|----------------------------------------------|
| **Basic Components**                 | Convolution Layers, Pooling, Fully Connected Layers |
| **Open-Source/ Forbidden**           | Open-Source                                 |
| **Criteria of Measuring Productivity** | Accuracy, Precision, Recall, F1-Score      |
| **Model's Parameters**               | Filter Weights (Changeable), Input Channels (Fixed) |
| **Criteria of Measuring Parameter's Productivity** | Detection Accuracy                         |
| **Model's Hyperparameters**          | Kernel Size, Stride, Number of Filters (Changeable) |
| **Criteria of Measuring Hyperparameter's Productivity** | Higher Feature Extraction Quality         |
| **Basic Components of Hyperparameter's Productivity** | Filter Efficiency, Computational Cost     |

## RNN (Recurrent Neural Networks)
| **Category**                         | **Details**                                  |
|--------------------------------------|----------------------------------------------|
| **Basic Components**                 | Recurrent Layers, Activation Functions      |
| **Open-Source/ Forbidden**           | Open-Source                                 |
| **Criteria of Measuring Productivity** | Perplexity, Accuracy, BLEU Score (NLP)     |
| **Model's Parameters**               | Hidden State (Changeable), Sequence Length (Fixed) |
| **Criteria of Measuring Parameter's Productivity** | Temporal Pattern Capture Efficiency        |
| **Model's Hyperparameters**          | Learning Rate, Hidden State Size (Changeable) |
| **Criteria of Measuring Hyperparameter's Productivity** | Sequence Learning Performance             |
| **Basic Components of Hyperparameter's Productivity** | Effective Sequence Memory Size            |

## LSTM (Long Short-Term Memory Networks)
| **Category**                         | **Details**                                  |
|--------------------------------------|----------------------------------------------|
| **Basic Components**                 | LSTM Cells (Input, Forget, Output Gates)    |
| **Open-Source/ Forbidden**           | Open-Source                                 |
| **Criteria of Measuring Productivity** | Perplexity, Accuracy (Time-Series, NLP)    |
| **Model's Parameters**               | Cell Weights (Changeable), Memory Cell (Fixed) |
| **Criteria of Measuring Parameter's Productivity** | Long-Term Dependency Capture Efficiency   |
| **Model's Hyperparameters**          | Learning Rate, Number of Layers (Changeable) |
| **Criteria of Measuring Hyperparameter's Productivity** | Retention of Long-Term Dependencies       |
| **Basic Components of Hyperparameter's Productivity** | Sequence Retention and Gradient Stability |

## GNN (Graph Neural Networks)
| **Category**                         | **Details**                                  |
|--------------------------------------|----------------------------------------------|
| **Basic Components**                 | Node Embeddings, Edge Features, Graph Convolutions |
| **Open-Source/ Forbidden**           | Open-Source                                 |
| **Criteria of Measuring Productivity** | Node Classification Accuracy, Link Prediction |
| **Model's Parameters**               | Edge Weights (Changeable), Node Attributes (Fixed) |
| **Criteria of Measuring Parameter's Productivity** | Graph Feature Capture Efficiency           |
| **Model's Hyperparameters**          | Number of Layers, Embedding Size (Changeable) |
| **Criteria of Measuring Hyperparameter's Productivity** | Graph-Level Feature Generalization         |
| **Basic Components of Hyperparameter's Productivity** | Graph Topology Learning                    |

## BERT (Bidirectional Encoder Representations from Transformers)
| **Category**                         | **Details**                                  |
|--------------------------------------|----------------------------------------------|
| **Basic Components**                 | Encoder, Multi-Head Attention, Feedforward Layers |
| **Open-Source/ Forbidden**           | Open-Source                                 |
| **Criteria of Measuring Productivity** | F1-Score, Exact Match (QA), Perplexity      |
| **Model's Parameters**               | Token Embeddings (Changeable), Vocabulary (Fixed) |
| **Criteria of Measuring Parameter's Productivity** | Contextual Understanding Quality           |
| **Model's Hyperparameters**          | Learning Rate, Batch Size, Sequence Length (Changeable) |
| **Criteria of Measuring Hyperparameter's Productivity** | Contextual Embedding Accuracy             |
| **Basic Components of Hyperparameter's Productivity** | Attention Mechanism, Positional Encoding  |

## BART (Bidirectional and Auto-Regressive Transformers)
| **Category**                         | **Details**                                  |
|--------------------------------------|----------------------------------------------|
| **Basic Components**                 | Encoder-Decoder, Multi-Head Attention, Feedforward |
| **Open-Source/ Forbidden**           | Open-Source                                 |
| **Criteria of Measuring Productivity** | Rouge Score, BLEU Score                     |
| **Model's Parameters**               | Attention Weights (Changeable), Vocabulary (Fixed) |
| **Criteria of Measuring Parameter's Productivity** | Summarization and Translation Accuracy     |
| **Model's Hyperparameters**          | Learning Rate, Number of Heads (Changeable) |
| **Criteria of Measuring Hyperparameter's Productivity** | Text Generation Quality                   |
| **Basic Components of Hyperparameter's Productivity** | Encoder-Decoder Consistency               |

## T5 (Text-to-Text Transfer Transformer)
| **Category**                         | **Details**                                  |
|--------------------------------------|----------------------------------------------|
| **Basic Components**                 | Encoder-Decoder, Attention Mechanisms, Feedforward |
| **Open-Source/ Forbidden**           | Open-Source                                 |
| **Criteria of Measuring Productivity** | Rouge Score, BLEU Score                     |
| **Model's Parameters**               | Token Embeddings (Changeable), Vocabulary (Fixed) |
| **Criteria of Measuring Parameter's Productivity** | Text-to-Text Conversion Accuracy           |
| **Model's Hyperparameters**          | Sequence Length, Beam Width (Changeable)    |
| **Criteria of Measuring Hyperparameter's Productivity** | Text Generation Coherence                 |
| **Basic Components of Hyperparameter's Productivity** | Attention Span, Latent Representation Quality |

## LLAMA
| **Category**                         | **Details**                                  |
|--------------------------------------|----------------------------------------------|
| **Basic Components**                 | Transformer Layers, Feedforward Layers, Attention |
| **Open-Source/ Forbidden**           | Restricted for Modifications                |
| **Criteria of Measuring Productivity** | F1-Score, Rouge Score                       |
| **Model's Parameters**               | Attention Weights (Changeable), Vocabulary (Fixed) |
| **Criteria of Measuring Parameter's Productivity** | Latent Representation Consistency          |
| **Model's Hyperparameters**          | Number of Layers, Head Size (Changeable)    |
| **Criteria of Measuring Hyperparameter's Productivity** | Layer-to-Layer Weight Propagation          |
| **Basic Components of Hyperparameter's Productivity** | Transformer Block Efficiency               |

## GPT (Generative Pre-trained Transformer)
| **Category**                         | **Details**                                  |
|--------------------------------------|----------------------------------------------|
| **Basic Components**                 | Transformer Decoder, Feedforward Layers, Attention |
| **Open-Source/ Forbidden**           | Open-Source                                 |
| **Criteria of Measuring Productivity** | Perplexity, BLEU Score                      |
| **Model's Parameters**               | Attention Weights (Changeable), Vocabulary (Fixed) |
| **Criteria of Measuring Parameter's Productivity** | Generative Text Coherence                  |
| **Model's Hyperparameters**          | Learning Rate, Model Depth, Token Limit (Changeable) |
| **Criteria of Measuring Hyperparameter's Productivity** | Generative Text Quality                   |
| **Basic Components of Hyperparameter's Productivity** | Token Context Understanding                |

## ViT (Vision Transformer)
| **Category**                         | **Details**                                  |
|--------------------------------------|----------------------------------------------|
| **Basic Components**                 | Patch Embedding, Transformer Layers, Attention |
| **Open-Source/ Forbidden**           | Open-Source                                 |
| **Criteria of Measuring Productivity** | Accuracy, Precision, Recall, F1-Score      |
| **Model's Parameters**               | Patch Embeddings (Changeable), Image Size (Fixed) |
| **Criteria of Measuring Parameter's Productivity** | Visual Feature Generalization              |
| **Model's Hyperparameters**          | Patch Size, Attention Heads (Changeable)    |
| **Criteria of Measuring Hyperparameter's Productivity** | Patch Extraction Accuracy, Attention Span |
| **Basic Components of Hyperparameter's Productivity** | Image Feature Learning Efficiency          |

<!-- ## Table - Models vs features

| **Model/Architecture** | **Basic Components**                                    | **Open-Source/ Forbidden for Modifications** | **Criteria of Measuring Model Productivity** | **Model's Parameters (Changeable/Non-Changeable)** | **Criteria of Measuring Parameter's Productivity** | **Model's Hyperparameters (Changeable/Non-Changeable)** | **Criteria of Measuring Hyperparameter's Productivity** | **Basic Components of Hyperparameter's Productivity** |
|-------------------------|--------------------------------------------------------|-----------------------------------------------|-----------------------------------------------|----------------------------------------------------|----------------------------------------------------|---------------------------------------------------------|---------------------------------------------------------|---------------------------------------------------------|
| **Autoencoders**        | Encoder, Decoder, Latent Space                         | Open-Source                                   | Reconstruction Loss                            | Weights (Changeable), Latent Dimensions (Fixed)    | Reconstruction Accuracy                              | Learning Rate, Latent Dimension Size (Changeable)       | Lower Reconstruction Error                             | Effective Latent Space Size, Training Convergence Rate |
| **CNN**                 | Convolution Layers, Pooling, Fully Connected Layers    | Open-Source                                   | Accuracy, Precision, Recall, F1-Score         | Filter Weights (Changeable), Input Channels (Fixed)| Detection Accuracy                                   | Kernel Size, Stride, Number of Filters (Changeable)     | Higher Feature Extraction Quality                      | Filter Efficiency, Computational Cost                 |
| **RNN**                 | Recurrent Layers, Activation Functions                | Open-Source                                   | Perplexity, Accuracy, BLEU Score (NLP)        | Hidden State (Changeable), Sequence Length (Fixed) | Temporal Pattern Capture Efficiency                 | Learning Rate, Hidden State Size (Changeable)           | Sequence Learning Performance                          | Effective Sequence Memory Size                        |
| **FNN**                 | Neurons, Dense Layers, Activation Functions           | Open-Source                                   | Accuracy, Loss Reduction                       | Weights (Changeable), Bias (Fixed)                | Accuracy and Loss Reduction                          | Learning Rate, Number of Layers (Changeable)            | Loss Convergence Rate                                  | Layer Depth, Weight Initialization Strategy           |
| **LSTM**                | LSTM Cells (Input, Forget, Output Gates)              | Open-Source                                   | Perplexity, Accuracy (Time-Series, NLP)        | Cell Weights (Changeable), Memory Cell (Fixed)    | Long-Term Dependency Capture Efficiency             | Learning Rate, Number of Layers (Changeable)            | Retention of Long-Term Dependencies                   | Sequence Retention and Gradient Stability             |
| **GNN**                 | Node Embeddings, Edge Features, Graph Convolutions    | Open-Source                                   | Node Classification Accuracy, Link Prediction | Edge Weights (Changeable), Node Attributes (Fixed)| Graph Feature Capture Efficiency                    | Number of Layers, Embedding Size (Changeable)           | Graph-Level Feature Generalization                    | Graph Topology Learning                                |
| **BERT**                | Encoder, Multi-Head Attention, Feedforward Layers     | Open-Source                                   | F1-Score, Exact Match (QA), Perplexity         | Token Embeddings (Changeable), Vocabulary (Fixed) | Contextual Understanding Quality                    | Learning Rate, Batch Size, Sequence Length (Changeable)| Contextual Embedding Accuracy                         | Attention Mechanism, Positional Encoding              |
| **BART**                | Encoder-Decoder, Multi-Head Attention, Feedforward    | Open-Source                                   | Rouge Score, BLEU Score                        | Attention Weights (Changeable), Vocabulary (Fixed)| Summarization and Translation Accuracy              | Learning Rate, Number of Heads (Changeable)             | Text Generation Quality                               | Encoder-Decoder Consistency                           |
| **T5**                  | Encoder-Decoder, Attention Mechanisms, Feedforward    | Open-Source                                   | Rouge Score, BLEU Score                        | Token Embeddings (Changeable), Vocabulary (Fixed) | Text-to-Text Conversion Accuracy                    | Sequence Length, Beam Width (Changeable)                | Text Generation Coherence                             | Attention Span, Latent Representation Quality         |
| **LLAMA**               | Transformer Layers, Feedforward Layers, Attention     | Restricted for Modifications                  | F1-Score, Rouge Score                          | Attention Weights (Changeable), Vocabulary (Fixed)| Generative Output Accuracy                          | Number of Layers, Head Size (Changeable)                | Latent Representation Consistency                     | Layer-to-Layer Weight Propagation                     |
| **GPT**                 | Transformer Decoder, Feedforward Layers, Attention    | Open-Source                                   | Perplexity, BLEU Score                         | Attention Weights (Changeable), Vocabulary (Fixed)| Generative Text Coherence                            | Learning Rate, Model Depth, Token Limit (Changeable)    | Generative Text Quality                               | Token Context Understanding                           |
| **ViT (Vision Transformer)** | Patch Embedding, Transformer Layers, Attention        | Open-Source                                   | Accuracy, Precision, Recall, F1-Score         | Patch Embeddings (Changeable), Image Size (Fixed) | Image Feature Generalization                         | Patch Size, Attention Heads (Changeable)                | Visual Feature Learning Efficiency                    | Patch Extraction Accuracy, Attention Span             |

---

### Notes:
1. **Open-Source vs. Forbidden for Modifications**: Models like LLAMA may have licensing restrictions preventing modification, while others are freely accessible for experimentation.
2. **Criteria of Productivity**: Metrics vary by task, e.g., classification accuracy for vision tasks, BLEU scores for translation, or F1-scores for question-answering.
3. **Parameters vs. Hyperparameters**: Parameters are learned during training (e.g., weights), whereas hyperparameters are manually set and adjusted (e.g., learning rate, number of layers).
4. **Measuring Hyperparameter Productivity**: Includes monitoring loss convergence, validation performance, and computational efficiency.


## Table - Features vs models
# Comparison of Popular Models and Architectures

| **Category**                               | **Autoencoders**                | **CNN**                            | **RNN**                             | **FNN**                             | **LSTM**                            | **GNN**                             | **BERT**                            | **BART**                            | **T5**                              | **LLAMA**                           | **GPT**                             | **ViT**                             |
|--------------------------------------------|----------------------------------|-------------------------------------|--------------------------------------|--------------------------------------|--------------------------------------|--------------------------------------|--------------------------------------|--------------------------------------|--------------------------------------|--------------------------------------|--------------------------------------|--------------------------------------|
| **Basic Components**                       | Encoder, Decoder, Latent Space  | Convolution Layers, Pooling, Fully Connected Layers | Recurrent Layers, Activation Functions | Neurons, Dense Layers, Activation Functions | LSTM Cells (Input, Forget, Output Gates) | Node Embeddings, Edge Features, Graph Convolutions | Encoder, Multi-Head Attention, Feedforward Layers | Encoder-Decoder, Multi-Head Attention, Feedforward | Encoder-Decoder, Attention Mechanisms, Feedforward | Transformer Layers, Feedforward Layers, Attention | Transformer Decoder, Feedforward Layers, Attention | Patch Embedding, Transformer Layers, Attention |
| **Open-Source/ Forbidden for Modifications** | Open-Source                     | Open-Source                        | Open-Source                          | Open-Source                          | Open-Source                          | Open-Source                          | Open-Source                          | Open-Source                          | Open-Source                          | Restricted for Modifications         | Open-Source                          | Open-Source                          |
| **Criteria of Measuring Model Productivity** | Reconstruction Loss             | Accuracy, Precision, Recall, F1-Score | Perplexity, Accuracy, BLEU Score (NLP) | Accuracy, Loss Reduction             | Perplexity, Accuracy (Time-Series, NLP) | Node Classification Accuracy, Link Prediction | F1-Score, Exact Match (QA), Perplexity | Rouge Score, BLEU Score             | Rouge Score, BLEU Score             | F1-Score, Rouge Score                | Perplexity, BLEU Score               | Accuracy, Precision, Recall, F1-Score |
| **Model's Parameters (Changeable/Non-Changeable)** | Weights (Changeable), Latent Dimensions (Fixed) | Filter Weights (Changeable), Input Channels (Fixed) | Hidden State (Changeable), Sequence Length (Fixed) | Weights (Changeable), Bias (Fixed)  | Cell Weights (Changeable), Memory Cell (Fixed) | Edge Weights (Changeable), Node Attributes (Fixed) | Token Embeddings (Changeable), Vocabulary (Fixed) | Attention Weights (Changeable), Vocabulary (Fixed) | Token Embeddings (Changeable), Vocabulary (Fixed) | Attention Weights (Changeable), Vocabulary (Fixed) | Attention Weights (Changeable), Vocabulary (Fixed) | Patch Embeddings (Changeable), Image Size (Fixed) |
| **Criteria of Measuring Parameter's Productivity** | Reconstruction Accuracy         | Detection Accuracy                 | Temporal Pattern Capture Efficiency  | Accuracy and Loss Reduction          | Long-Term Dependency Capture Efficiency | Graph Feature Capture Efficiency    | Contextual Understanding Quality     | Summarization and Translation Accuracy | Text-to-Text Conversion Accuracy    | Generative Output Accuracy           | Generative Text Coherence            | Image Feature Generalization         |
| **Model's Hyperparameters (Changeable/Non-Changeable)** | Learning Rate, Latent Dimension Size (Changeable) | Kernel Size, Stride, Number of Filters (Changeable) | Learning Rate, Hidden State Size (Changeable) | Learning Rate, Number of Layers (Changeable) | Learning Rate, Number of Layers (Changeable) | Number of Layers, Embedding Size (Changeable) | Learning Rate, Batch Size, Sequence Length (Changeable) | Learning Rate, Number of Heads (Changeable) | Sequence Length, Beam Width (Changeable) | Number of Layers, Head Size (Changeable) | Learning Rate, Model Depth, Token Limit (Changeable) | Patch Size, Attention Heads (Changeable) |
| **Criteria of Measuring Hyperparameter's Productivity** | Lower Reconstruction Error      | Higher Feature Extraction Quality  | Sequence Learning Performance        | Loss Convergence Rate                | Retention of Long-Term Dependencies  | Graph-Level Feature Generalization  | Contextual Embedding Accuracy        | Text Generation Quality              | Text Generation Coherence            | Latent Representation Consistency    | Generative Text Quality              | Visual Feature Learning Efficiency   |
| **Basic Components of Hyperparameter's Productivity** | Effective Latent Space Size, Training Convergence Rate | Filter Efficiency, Computational Cost | Effective Sequence Memory Size       | Layer Depth, Weight Initialization Strategy | Sequence Retention and Gradient Stability | Graph Topology Learning             | Attention Mechanism, Positional Encoding | Encoder-Decoder Consistency         | Attention Span, Latent Representation Quality | Layer-to-Layer Weight Propagation    | Token Context Understanding          | Patch Extraction Accuracy, Attention Span | -->