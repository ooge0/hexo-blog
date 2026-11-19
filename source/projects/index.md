---
title: Projects
layout: page
permalink: /projects/
---

<style>
.proj-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 8px 0 32px;
}
.proj-card {
  border: 1px solid var(--card-border-color, rgba(0,0,0,.125));
  border-radius: 8px;
  padding: 18px 20px 16px;
  background: var(--board-color, #fff);
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.proj-card h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.3;
}
.proj-card p {
  font-size: .875rem;
  color: var(--sec-font-color, #718096);
  margin: 0;
  flex: 1;
  line-height: 1.55;
}
.proj-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.proj-stack span {
  font-size: .72rem;
  padding: 2px 7px;
  border-radius: 4px;
  background: var(--tag-bg, rgba(43,108,176,.1));
  color: var(--link-color, #2b6cb0);
  font-family: 'Consolas', monospace;
}
.proj-links {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.proj-links a {
  font-size: .8rem;
  padding: 4px 10px;
  border-radius: 4px;
  border: 1px solid var(--link-color, #2b6cb0);
  color: var(--link-color, #2b6cb0);
  text-decoration: none;
  white-space: nowrap;
}
.proj-links a:hover {
  background: var(--link-color, #2b6cb0);
  color: #fff;
}
.proj-section-label {
  font-size: .75rem;
  text-transform: uppercase;
  letter-spacing: .08em;
  color: var(--sec-font-color, #718096);
  margin: 24px 0 8px;
  font-weight: 600;
}
</style>

<p class="proj-section-label">QA &amp; Test Automation</p>
<div class="proj-grid">

<div class="proj-card">
  <h3>Python TA Web &amp; API Framework</h3>
  <p>Hybrid test automation framework for UI and API testing. Uses Pytest, Playwright, Pydantic schemas, contract testing, and Allure reporting. Published on ReadTheDocs.</p>
  <div class="proj-stack">
    <span>Python</span><span>Pytest</span><span>Playwright</span><span>Pydantic</span><span>Allure</span>
  </div>
  <div class="proj-links">
    <a href="https://github.com/ooge0/python_TA_web_api_framework" target="_blank">GitHub</a>
    <a href="https://python-ta-web-api-framework.readthedocs.io/en/latest/index.html" target="_blank">Docs</a>
  </div>
</div>

<div class="proj-card">
  <h3>API Tests — petstore.swagger.io</h3>
  <p>Backend API test framework targeting petstore.swagger.io. BDD-style scenarios with Gherkin/Behave and Python.</p>
  <div class="proj-stack">
    <span>Python</span><span>Gherkin</span><span>REST API</span>
  </div>
  <div class="proj-links">
    <a href="https://github.com/ooge0/demo_pet" target="_blank">GitHub</a>
  </div>
</div>

<div class="proj-card">
  <h3>RestAssured Framework</h3>
  <p>API test framework based on RestAssured for Java. Used as a foundation for exploring Java-based API testing patterns.</p>
  <div class="proj-stack">
    <span>Java</span><span>RestAssured</span><span>API testing</span>
  </div>
  <div class="proj-links">
    <a href="https://github.com/ooge0/restAssured" target="_blank">GitHub</a>
  </div>
</div>

<div class="proj-card">
  <h3>ssLv Gherkin JAVA</h3>
  <p>BDD test scenarios for web site functionality using Gherkin / Java. Follows Page Object Model with separated step-definition files.</p>
  <div class="proj-stack">
    <span>Java</span><span>Gherkin</span><span>BDD</span><span>Page Object</span>
  </div>
  <div class="proj-links">
    <a href="https://github.com/ooge0/ssLv_Gherkin_JAVA" target="_blank">GitHub</a>
  </div>
</div>

<div class="proj-card">
  <h3>Appium Framework Extended</h3>
  <p>More complete Appium mobile test framework in Java. Detailed README, valid configuration for multiple test types, Allure report generation.</p>
  <div class="proj-stack">
    <span>Java</span><span>Appium</span><span>Android</span><span>Allure</span>
  </div>
  <div class="proj-links">
    <a href="https://github.com/ooge0/AppiumFrameworkExtended" target="_blank">GitHub</a>
  </div>
</div>

<div class="proj-card">
  <h3>Appium QA (pet project)</h3>
  <p>Minimal Appium framework for exploring the basic Android test flow. Starting point for mobile testing with Appium.</p>
  <div class="proj-stack">
    <span>Java</span><span>Appium</span><span>Android</span>
  </div>
  <div class="proj-links">
    <a href="https://github.com/ooge0/appiumQA" target="_blank">GitHub</a>
  </div>
</div>

</div>

<p class="proj-section-label">AI &amp; Data</p>
<div class="proj-grid">

<div class="proj-card">
  <h3>LLM Data Lab</h3>
  <p>Experimental platform for systematic LLM evaluation: RAG pipeline assessment, hallucination detection, and failure analysis workflows.</p>
  <div class="proj-stack">
    <span>Python</span><span>LLM</span><span>RAG</span><span>Evaluation</span>
  </div>
  <div class="proj-links">
    <a href="https://github.com/ooge0/LLM-Data-Lab" target="_blank">GitHub</a>
    <a href="https://llm-data-lab.readthedocs.io/en/latest/index.html" target="_blank">Docs</a>
  </div>
</div>

<div class="proj-card">
  <h3>kafka-app-demo</h3>
  <p>Pet project for exploring Kafka: simple app for managing consumer/producer behavior and understanding distributed messaging patterns.</p>
  <div class="proj-stack">
    <span>Python</span><span>Kafka</span><span>Messaging</span>
  </div>
  <div class="proj-links">
    <a href="https://github.com/ooge0/kafka-app-demo" target="_blank">GitHub</a>
  </div>
</div>

</div>

<p class="proj-section-label">Documentation &amp; Knowledge Bases</p>
<div class="proj-grid">

<div class="proj-card">
  <h3>ETRM &amp; Energy Trading Glossary</h3>
  <p>Comprehensive QA-oriented domain glossary with 480+ terms for Energy Trading &amp; Risk Management. Built with Sphinx and Python, merged from multiple sources.</p>
  <div class="proj-stack">
    <span>Python</span><span>Sphinx</span><span>ETRM</span><span>Documentation</span>
  </div>
  <div class="proj-links">
    <a href="https://etrm-glossary.readthedocs.io" target="_blank">ReadTheDocs</a>
  </div>
</div>

<div class="proj-card">
  <h3>This Blog</h3>
  <p>Personal blog built on Hexo with Fluid theme. Posts on QA, AI/NLP, Python, DevOps, and software engineering. Hosted on GitHub Pages.</p>
  <div class="proj-stack">
    <span>Hexo</span><span>JavaScript</span><span>CSS</span><span>Markdown</span>
  </div>
  <div class="proj-links">
    <a href="https://ooge0.github.io/hexo-blog/" target="_blank">Live</a>
    <a href="https://github.com/ooge0/hexo-blog" target="_blank">GitHub</a>
  </div>
</div>

</div>
