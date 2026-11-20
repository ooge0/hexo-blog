---
title: BART configuration parameters overview
permalink: /ai/llm/bart_configuration_parameters_overview/
layout: post
categories:
  - Posts
tags:
  - AI
  - LLM
  - BART
  - llm_parameters
date: 2024-12-4 22:08:12
---

*This post is related to:*
1. [Techniques for handling context in LLM models](/hexo-blog/ai/post_ai_llm__techniques_for_handling_context_in_ai_models)

---


## Parameters list and descriptions

| **Parameter**           | **Description**                                                                                      | **Data Type/Options**                                                  |
|--------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| `max_position_embeddings`| Maximum number of positions for input tokens.                                                       | Integer, e.g., `1024`.                                                 |
| `d_model`               | Dimensionality of the model's embeddings and hidden states.                                         | Integer, e.g., `768`, `1024`.                                          |
| `encoder_layers`        | Number of layers in the encoder.                                                                    | Integer, e.g., `6`, `12`.                                              |
| `decoder_layers`        | Number of layers in the decoder.                                                                    | Integer, e.g., `6`, `12`.                                              |
| `encoder_attention_heads`| Number of attention heads in the encoder.                                                          | Integer, e.g., `12`.                                                   |
| `decoder_attention_heads`| Number of attention heads in the decoder.                                                          | Integer, e.g., `12`.                                                   |
| `vocab_size`            | Vocabulary size of the tokenizer. Represents the range of token IDs.                                | Integer, e.g., `50265`.                                                |
| `activation_function`   | Activation function used in feedforward layers.                                                    | String: `relu`, `gelu`, `tanh`, etc.                                   |
| `dropout`               | Dropout probability applied to various layers.                                                     | Float between `0.0` and `1.0`, typically `0.1`.                        |
| `attention_dropout`     | Dropout probability in the attention mechanism.                                                    | Float between `0.0` and `1.0`, typically `0.1`.                        |
| `init_std`              | Standard deviation for weight initialization.                                                      | Float, e.g., `0.02`.                                                   |
| `encoder_ffn_dim`       | Dimensionality of the encoder feedforward layers.                                                  | Integer, e.g., `3072`.                                                 |
| `decoder_ffn_dim`       | Dimensionality of the decoder feedforward layers.                                                  | Integer, e.g., `3072`.                                                 |
| `scale_embedding`       | Whether to scale the embeddings by `sqrt(d_model)`.                                                | Boolean, `true` or `false`.                                            |
| `use_cache`             | Whether to use cached key/values for faster decoding.                                              | Boolean, `true` or `false`.                                            |
| `pad_token_id`          | Token ID used for padding.                                                                          | Integer, typically `0`.                                                |
| `bos_token_id`          | Token ID for the beginning-of-sequence token.                                                      | Integer, typically `0`.                                                |
| `eos_token_id`          | Token ID for the end-of-sequence token.                                                            | Integer, typically `2`.                                                |

## Summary of parameter impact

### How Changes Reflect on Model Behavior:
1. **Model Complexity:**
   - Increasing `encoder_layers`, `decoder_layers`, `d_model`, or attention heads enhances model capacity but increases computational requirements.

2. **Regularization:**
   - Dropout parameters (`dropout`, `attention_dropout`) control overfitting risks but may reduce performance if too high.

3. **Encoder-Decoder interactions:**
   - `encoder_ffn_dim` and `decoder_ffn_dim` directly influence the learning ability of the model for complex patterns.

4. **Efficiency:**
   - Enabling `use_cache` improves inference time for autoregressive tasks.

## References
- Paper: BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension
  - [Read paper: `BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension` on arxiv.org](https://arxiv.org/pdf/1910.13461)
  - DOI:10.48550/arXiv.1910.13461
- Paper: Improving Sharpness-Aware Minimization with Fisher Mask for Better Generalization on Language Models
  - DOI:10.48550/arXiv.2210.05497
  - [Read paper: `Improving Sharpness-Aware Minimization with Fisher Mask for Better Generalization on Language Models` on arxiv.org](https://arxiv.org/pdf/2210.05497)
- [Hugging Face BART Documentation](https://huggingface.co/docs/transformers/model_doc/bart)
- Web article: 
  - [Read Web article `BART Model Architecture ` on Medium](https://medium.com/@nadirapovey/bart-model-architecture-8ac1cea0e877)
  - [Read Web article `Transformers BART Model Explained for Text Summarization ` on projectpro.io](https://www.projectpro.io/article/transformers-bart-model-explained/553)
- Google colab notebook: [BART Learns to Rap - Medium.ipynb](https://colab.research.google.com/drive/1Cy27V-7qqYatqMA7fEqG2kgMySZXw9I4?usp=sharing&pli=1)

## Challenges and reports on configuration
- **Report:** 
  - Paper: Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer. Raffel et al., 2020.
    - DOI: 10.48550/arXiv.1910.10683
    - [Read paper: `Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer. Raffel et al., 2020.` on arxiv.org](https://arxiv.org/pdf/1910.10683)
  
- **Challenges:** Balancing fine-tuning for generative and discriminative tasks in sequence-to-sequence models.
  - Paper: Unified Generative and Discriminative Training for Multi-modal Large Language Models
    - [Read paper: `Unified Generative and Discriminative Training for Multi-modal Large Language Models` on arxiv.org](https://arxiv.org/html/2411.00304v1)

## Playgrounds to experiment
- **Hugging Face Spaces:** [https://huggingface.co/spaces](https://huggingface.co/spaces)
- **Google Colab with Transformers:** [https://colab.research.google.com/](https://colab.research.google.com/)
- **OpenAI Playground for Generative Tasks:** [https://platform.openai.com/playground](https://platform.openai.com/playground)
