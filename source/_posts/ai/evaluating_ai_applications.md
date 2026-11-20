---
title: Evaluating AI applications. Checklist 
permalink: /ai/evaluating_ai_applications/
layout: post
categories:
  - Posts
tags:
  - AI
  - ML
  - prompt_engineering
date: 2024-10-28 16:08:12
---

## 1. Evaluation of AI Prompts
### 1.1 **Prompt Clarity**
- Ensure the prompt is clear and unambiguous.
- Verify that the prompt avoids overly complex or technical language unless required by the application.
- Assess whether the intent of the prompt is evident to the AI.

### 1.2 **Prompt Relevance**
- Confirm that the prompt aligns with the expected use case or domain of the application.
- Check if the prompt sufficiently narrows down the expected response scope.
- Use semantic similarity tools like [SentenceTransformers](https://sbert.net/) to verify relevance between the prompt and its context.
  - Example:
    ```python
    from sentence_transformers import SentenceTransformer, util

    model = SentenceTransformer('all-MiniLM-L6-v2')
    prompt = "Explain the concept of gravity."
    context = "A physics tutoring chatbot."
    similarity = util.pytorch_cos_sim(model.encode(prompt), model.encode(context))
    print(f"Semantic Similarity Score: {similarity}")

    ```

### 1.3 **Prompt Variability**
- Evaluate how the AI performs across diverse phrasing of the same question or task.
- Test prompts with varied structures, synonyms, or tone adjustments.
- Test AI with variations of prompts using paraphrasing libraries like transformers.
  - Example:
    ```python
    from transformers import pipeline

    paraphraser = pipeline("text2text-generation", model="t5-small")
    prompt = "Describe the process of photosynthesis."
    variations = paraphraser(prompt, max_length=50, num_return_sequences=3)
    for v in variations:
        print(v['generated_text'])

    ```
    Reference: [HuggingFace Transformers](https://huggingface.co/docs/transformers/en/index)


### 1.4 **Performance Across Scenarios**

- Use edge-case prompts, including ambiguous, contradictory, or incomplete inputs.
- Analyze how the AI handles multilingual or culturally specific prompts.
**Approach:**
- Develop a test suite with diverse prompts, including edge cases.
- Example edge case list:
  - Ambiguous: "What is it?"
  - Contradictory: "Why is a circle square?"
  - Multilingual: "¿Cómo estás?"
- Automate testing with a loop:
  - Example:
  
    ```python
    prompts = ["What is it?", "Why is a circle square?", "¿Cómo estás?"]
    for prompt in prompts:
        response = ai_model.generate_response(prompt)  # Replace with actual AI call
        print(f"Prompt: {prompt} | Response: {response}")

    ```
---

## 2. Linguistic AI Prompt QA
### 2.1 **Response Accuracy**
- Assess if the AI’s responses are factually correct.
- Verify that responses align with the context and requirements of the prompt.
- Compare responses against a reference dataset using BLEU, ROUGE, or exact match metrics.
- Example:
    ```python
    from nltk.translate.bleu_score import sentence_bleu

    reference = ["Paris is the capital of France."]
    response = "Paris is the capital of France."
    score = sentence_bleu([reference], response.split())
    print(f"BLEU Score: {score}")
    ```
- Reference: [NLTK Documentation](https://www.nltk.org/)

### 2.2 **Response Completeness**
- Ensure responses fully address all aspects of the prompt.
- Check for missing details or incomplete information in multi-part prompts.
- Use keyword extraction (spaCy, nltk) to verify if key elements are addressed in the response.
    - Example:
    ```python
        import spacy
        nlp = spacy.load("en_core_web_sm")
        response = nlp("Photosynthesis converts sunlight into energy.")
        keywords = [token.text for token in response if token.pos_ in ["NOUN", "VERB"]]
        print(f"Keywords: {keywords}")
    ```

### 2.3 **Language Quality**
- Verify that responses use proper grammar, spelling, and punctuation.
- Evaluate readability, ensuring the output is concise and coherent.
- Use libraries like [LanguageTool](https://languagetool.org/) for grammar and style checks.
  - Example:
    ```python
    import language_tool_python

    tool = language_tool_python.LanguageTool('en-US')
    response = "Photosyntesis is a natural proess."
    matches = tool.check(response)
    print(f"Grammar Issues: {[match.message for match in matches]}")
    ```
Reference: [LanguageTool](https://languagetool.org/)


### 2.4 **Tone and Style Appropriateness**
- Confirm that the tone matches the intended audience or use case.
- Check for professional, formal, or casual responses based on expectations.
- Use sentiment analysis and tone classification (VADER, transformers).
    - Example:
        ````python
        from transformers import pipeline
        tone_analyzer = pipeline("sentiment-analysis")
        response = "Thank you for your query. Let me help you."
        tone = tone_analyzer(response)
        print(f"Tone Analysis: {tone}")
        ````

### 2.5 **Bias and Ethical Considerations**
- Evaluate responses for unintended biases, stereotypes, or offensive language.
- Confirm adherence to ethical guidelines and appropriate handling of sensitive topics.

---

## 3. General QA Considerations
### 3.1 **Response Consistency**
- Test the AI’s ability to provide consistent answers to repeated prompts.
- Verify consistency across similar but differently worded prompts.
- Automate repeated prompt tests and compare responses using hashes for quick consistency checks.
  - Example:
    ```python
    import hashlib
    prompt = "Explain gravity."
    response1 = ai_model.generate_response(prompt)
    response2 = ai_model.generate_response(prompt)
    hash1 = hashlib.md5(response1.encode()).hexdigest()
    hash2 = hashlib.md5(response2.encode()).hexdigest()
    print(f"Consistent: {hash1 == hash2}")
    ```

### 3.2 **Error Handling**
- Evaluate how the AI handles invalid or nonsensical inputs.
- Assess whether the AI provides useful clarifications or fallback responses.
- Test with invalid inputs and evaluate fallback mechanisms.
- Example invalid inputs:
  - Empty: ""
  - Nonsensical: "asdfghjkl"
    ```python
    invalid_prompts = ["", "asdfghjkl"]
    for prompt in invalid_prompts:
        response = ai_model.generate_response(prompt)
        print(f"Prompt: {prompt} | Response: {response}")
    ```

### 3.3 **Adaptability**
- Test the AI's ability to refine responses based on follow-up questions or clarifications.
- Check adaptability to user feedback or corrections during interactions.
- Use sequential prompts to test follow-up handling.
- Example:
    ```python
    responses = []
    prompts = ["What is gravity?", "Can you elaborate?"]
    for prompt in prompts:
        response = ai_model.generate_response(prompt)
        responses.append(response)
        print(f"Prompt: {prompt} | Response: {response}")
    ```    

---

## 4. Documentation and Reporting
- Maintain detailed records of tests performed, including prompt variations and observed outcomes.
- Highlight areas for improvement, including specific examples of weak or incorrect responses.
- Provide suggestions for refining prompts or fine-tuning the AI model where needed.
- Store all test results in structured formats (e.g., CSV, JSON).
- Example:
    ```python
    import csv
    results = [{"prompt": "What is gravity?", "response": "A force of attraction.", "accuracy": 1.0}]
    with open('test_results.csv', 'w', newline='') as csvfile:
        fieldnames = results[0].keys()
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(results)
    ```    

---
**Note**: This checklist should be adapted to the specific requirements of the AI application under evaluation.
