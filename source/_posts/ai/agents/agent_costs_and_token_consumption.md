---
title: Agent costs and token consumption
permalink: /ai/agents/agent_costs_and_token_consumption
layout: post
categories:
  - Posts
tags:
  - AI
  - LLM
date: 2026-10-20
---

## Abstract

- (1) agentic tasks are uniquely expensive, consuming 1000× more tokens than code reasoning and code chat, with input tokens rather than output tokens driving the overall cost; 
- (2) token usage is highly variable and inherently stochastic: runs on the same task can differ by up to 30× in total tokens, and higher token usage does not translate into higher accuracy; instead, accuracy often peaks at intermediate cost and saturates at higher costs; 
- (3) models vary substantially in token efficiency: on the same tasks,Kimi-K2 and Claude-Sonnet-4.5, on average, consume over 1.5 million more tokens than GPT-5; 
- (4) task difficulty rated by human experts only weakly aligns with actual token costs, revealing a fundamental gap between human-perceived complexity and the computational effort agents actually expend; and 
- (5) frontier models fail to accurately predict their own token usage (with weak-to-moderate correlations, up to 0.39) and systematically underestimate real token costs. 

Our study offers new insights into the economics of AI agents and can inspire uture research in this direction. Code and data are available on the [project website](https://longjubai.github.io/agent_token_consumption/).

Rad the article on arxiv.org [here](https://arxiv.org/pdf/2604.22750)