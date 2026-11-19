---
title: List of neural network models, architectures, and basic components
layout: post
categories:
  - Posts
tags:
  - AI
  - NN
date: 2024-12-10 19:30:33
permalink: /ai/nn/list_of_neural_network_models_architectures_and_basic_components/
---

Related to 
1. [Comparison of Popular Models and Architectures](../../../../post_ai_nn__comparison_of_popular_models_and_architectures)

---

This document provides a categorized list of common neural network (NN) models and architectures. It also outlines their basic components and how they fit into larger systems.

---

## **Neural network models and architectures**

| **Architecture** | **Model Examples**            | **Purpose**                                                 |
|-------------------|-------------------------------|-------------------------------------------------------------|
| **Feedforward Neural Network (FNN)** | Basic MLP (Multi-Layer Perceptron)  | General-purpose model for regression and classification tasks. |
| **Convolutional Neural Networks (CNN)** | VGG, ResNet, AlexNet, EfficientNet | Designed for image processing tasks like classification, object detection, and segmentation. |
| **Recurrent Neural Networks (RNNs)** | Vanilla RNN, LSTM, GRU             | Sequential data processing for tasks like language modeling and time-series prediction. |
| **Transformers**  | BERT, GPT, T5, Vision Transformer (ViT) | State-of-the-art architecture for text, sequential, and image tasks. |
| **Autoencoders**  | Variational Autoencoder (VAE), Denoising Autoencoder | Dimensionality reduction, feature extraction, and generative tasks. |
| **Generative Adversarial Networks (GANs)** | DCGAN, StyleGAN, CycleGAN         | Generative tasks such as image synthesis and domain transfer. |
| **Graph Neural Networks (GNNs)** | GCN, GraphSAGE, GAT                 | Structured data learning tasks, e.g., on graphs or social networks. |

---

## **Basic Components of Neural Networks**

| **Component**      | **Description**                                                                                           | **Applications**                                                                                   |
|---------------------|----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **Neuron**          | Basic computation unit applying a weighted sum followed by an activation function.                      | Foundational unit in all neural networks.                                                         |
| **Layer**           | A collection of neurons; can be input, hidden, or output.                                               | Used in all neural architectures.                                                                 |
| **Activation Function** | Non-linear function applied to neurons, e.g., ReLU, Sigmoid, Tanh.                                    | Enables learning of complex patterns.                                                             |
| **Dropout**         | Regularization technique randomly dropping neurons during training.                                      | Reduces overfitting in models.                                                                    |
| **Encoder**         | Part of the model that converts input data into a latent representation.                                | Used in Transformers, Autoencoders, BERT, and more.                                               |
| **Decoder**         | Converts latent representations back to an output format.                                               | Used in Transformers, Autoencoders, and Seq2Seq models.                                           |
| **Attention Mechanism** | Focuses on important parts of the input data, e.g., Self-Attention.                                    | Essential in Transformers and attention-based architectures.                                      |
| **Residual Block**  | A module that adds shortcut connections to mitigate vanishing gradients.                                 | Found in ResNet, Transformer architectures.                                                       |
| **Convolution Layer** | Applies convolutional operations to extract spatial features.                                           | Used in CNNs for tasks like image and video analysis.                                             |
| **Pooling Layer**   | Reduces spatial dimensions using techniques like max-pooling or average pooling.                        | Used in CNNs to downsample feature maps.                                                          |
| **Recurrent Cell**  | Core unit of RNNs, capable of maintaining temporal dependencies.                                         | Used in RNNs, LSTMs, and GRUs for time-series and sequential data.                                |
| **Self-Attention Layer** | Computes relationships between all input tokens to capture global dependencies.                      | Core of Transformers.                                                                             |
| **Feedforward Layer** | Dense layer applied after attention mechanisms in Transformers.                                         | Processes token-wise transformations.                                                             |
| **Embedding Layer** | Converts categorical data or tokens into dense vectors.                                                 | Used in NLP, graph embeddings, and more.                                                          |
| **Latent Space**    | Compressed representation of data, typically learned by encoders.                                       | Found in Autoencoders, VAEs, and GANs.                                                            |

---

## **How components relate to models**

| **Architecture**        | **Key Components**                                                                                      |
|--------------------------|--------------------------------------------------------------------------------------------------------|
| **FNN**                 | Neurons, Layers, Activation Functions, Dropout.                                                        |
| **CNN**                 | Convolution Layers, Pooling Layers, Fully Connected Layers, Activation Functions.                       |
| **RNN (Vanilla)**       | Recurrent Cells, Layers, Activation Functions.                                                         |
| **LSTM**                | LSTM Cells (with Forget, Input, Output gates), Layers.                                                 |
| **Transformers**        | Encoder, Decoder, Self-Attention, Multi-Head Attention, Feedforward Layers, Positional Embeddings.      |
| **Autoencoders**        | Encoder, Decoder, Latent Space, Reconstruction Loss.                                                   |
| **GANs**                | Generator, Discriminator, Adversarial Loss.                                                            |
| **GNNs**                | Node Embeddings, Edge Features, Graph Convolutions.                                                    |

---

This table serves as a foundation for understanding how modern deep learning architectures are structured and utilized across a wide range of applications.
