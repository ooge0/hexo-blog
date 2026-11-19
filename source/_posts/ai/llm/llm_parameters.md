---
title: Common LLM parameters
permalink: /ai/post_ai_llm__llm_parameters
layout: post
categories:
  - Posts
tags:
  - AI
  - LLM
  - llm_parameters
date: 2024-12-04 22:08:12
---

*This post is related to:*
1. [BART configuration parameters overview](/hexo-blog/ai/post_ai_llm__bart_configuration_parameters_overview/)
2. [BERT configuration parameters overview](/hexo-blog/ai/post_ai_llm__bert_configuration_parameters_overview/)
3. [Exploring OpenAI models locally without APIs (DRAFT-GUIDE)](/hexo-blog/ai/post_ai_prompt_engineeringing__task_llm_locally/)

---

| Parameter            | Description                                                                                              | Location in Documentation                                             |
|----------------------|----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| **pad_token_id**     | The token ID used for padding sequences. This value indicates to the model where padding occurs.        | Check the tokenizer documentation: [Hugging Face Tokenizers](https://huggingface.co/docs/tokenizers/main/en/api/tokenizer#tokenizers.Tokenizer) |
| **eos_token_id**     | The token ID that signifies the end of a sequence (End Of Sequence).                                   | Check model documentation for specifics: [Hugging Face Models](https://huggingface.co/docs/transformers.js/main/en/api/generation/stopping_criteria#new-eostokencriteriaeostokenid) |
| **attention_mask**    | A mask that indicates which tokens should be attended to by the model (1 for actual tokens, 0 for padding). | Refer to model-specific usage in the Hugging Face library: [Transformers Usage](https://huggingface.co/docs/transformers.js/main/en/api/models#modelscumsummaskedfillattentionmask--code-object-code) |
| **input_ids**        | The token IDs representing the input sequence of text.                                                  | General model input specifications: [Hugging Face Model Input](https://huggingface.co/docs/transformers.js/main/en/api/utils/generation#forcetokenslogitsprocessorcallinputids-logits--code-tensor-code) |
| **output_attention**  | A boolean flag indicating if the model should return attention weights in addition to outputs.          | Detailed in specific model API docs: [Transformers API](https://huggingface.co/docs) |
| **max_length**       | The maximum length of sequences for generation tasks, limiting how long the output can be.              | Check generation section in model docs: [Text Generation](https://huggingface.co/docs/transformers.js/main/en/api/utils/generation#new-forcedeostokenlogitsprocessormaxlength-forcedeostokenid) |
| **num_return_sequences** | The number of sequences to return from the model output, useful for generating multiple responses. The number of independently computed returned sequences for each element in the batch.| Refer to the text generation configuration: [Text Generation](https://huggingface.co/docs/transformers.js/main/en/api/utils/generation#new-forcedeostokenlogitsprocessormaxlength-forcedeostokenid) |
| **temperature**       | Strictly positive float value used to modulate the logits distribution. A value smaller than 1 decreases randomness (and vice versa), with 0 being equivalent to shifting all probability mass to the most likely token.        | Discussed in generation options: [Generation Parameters](https://huggingface.co/docs/transformers.js/main/en/api/generation/logits_process#temperaturelogitswarpercallinputids-logits--code-tensor-code) |
| **top_k**            | The number of highest probability vocabulary tokens to keep for sampling.                               | Detailed in sampling strategies: [Sampling Methods](https://huggingface.co/docs) |
| **top_p**            | Controls the cumulative probability distribution for nucleus sampling.                                    | Explained in sampling calculations: [Nucleus Sampling](https://huggingface.co/docs) |
