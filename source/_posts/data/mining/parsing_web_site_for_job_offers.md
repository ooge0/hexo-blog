---
title: Parsing web site for job offers
layout: post
categories:
  - Posts
tags:
  - data_mining
  - parsing
  - python
date: 2024-11-28 00:49:11
permalink: /data/mining/parsing_web_site_for_job_offers/
---

**Given** The website with posted offers.
**Goal:** to get information from the website using python, BeautifulSoup and save it in JSON and markdown files.


**Python scirpt**

Install and import required packages
```python
import json
from bs4 import BeautifulSoup
```

Execute request

```python
def execute_requests(base_url, amount_of_pages):
    """
    Executes GET requests for the specified number of pages and returns the responses.

    Args:
        base_url (str): The base URL for requests.
        amount_of_pages (int): The number of pages to fetch.

    Returns:
        list: A list of dictionaries containing the request number, page counter, and response content.
    """
    payload = {}
    headers = {
        'Cookie': '_jobboard_session=895b7b35b6493519c3ad686923d8cc1d; __cf_bm=BrUIPeJX6XqIr7jlW.4M-1732742386-1.0.1.1-1hk8BgPr6ZL6QswlF6K2dUhchp0reiDPOXzX6z.etyq.IUHZqPg'
    }

    responses_data = []  # Initialize an empty list to store response data

    for counter in range(1, amount_of_pages + 1):
        # Construct the URL with the current page counter
        url = f"{base_url}&page={counter}"
        print(f"Fetching data from: {url}")

        try:
            # Send GET request
            response = requests.get(url, headers=headers, data=payload)

            # Append the response data to the list
            responses_data.append({
                "request_key": f"request_{counter}",
                "counter": counter,
                "response_content": response.text
            })
            print(f"counter: {counter} | 'status_code:' {response.status_code}")
        except requests.RequestException as e:
            print(f"Error fetching data for page {counter}: {e}")

    return responses_data

```

Parse data from `json`

```python

def parse_job_data_from_json(response_data, output_json_file, output_markdown_file):
    """
    Parse job data from a list of responses and extract job listings using BeautifulSoup.
    Save results to both a JSON file and a Markdown file.

    Args:
        response_data (list): List of dictionaries containing the response data.
        output_json_file (str): Path to save the parsed job data in JSON format.
        output_markdown_file (str): Path to save the parsed job data in Markdown format.
    """
    try:
        job_data = []  # List to store extracted job data
        markdown_content = []  # List to store Markdown entries

        # Loop through each request in the list
        for request in response_data:
            counter = request.get("counter", "unknown")
            response_content = request.get("response_content", "")

            # Parse the HTML content using BeautifulSoup
            soup = BeautifulSoup(response_content, 'html.parser')

            # Find all job listings using the locator
            job_listings = soup.find_all('li', class_='job-listing')

            # Extract data from each job listing
            for job in job_listings:
                # Safely find required elements, fallback to 'N/A' if not present
                job_title = job.find('a', class_='jobList-title zip-backfill-link')
                job_description = job.find('div', class_='jobList-description')
                salary = job.find('div', class_='jobList-salary')

                job_info = {
                    'title': job_title.text.strip() if job_title else 'N/A',
                    'href': job_title['href'] if job_title else 'N/A',
                    'description': job_description.text.strip() if job_description else 'N/A',
                    'salary': salary.text.strip() if salary else 'N/A',
                    'page': counter
                }
                job_data.append(job_info)

                # Prepare entry for Markdown
                markdown_entry = f"""
### Job Title: {job_info['title']}
- **Link**: [{job_info['title']}]({job_info['href']})
- **Description**: {job_info['description']}
- **Salary**: {job_info['salary']}
- **Page**: {job_info['page']}
                """
                markdown_content.append(markdown_entry.strip())

        # Save extracted job data to a new JSON file
        with open(output_json_file, 'w', encoding='utf-8') as f:
            json.dump(job_data, f, ensure_ascii=False, indent=4)

        print(f"Job data successfully parsed and saved to {output_json_file}")

        # Save Markdown content to a file
        with open(output_markdown_file, 'w', encoding='utf-8') as f:
            f.write("\n\n".join(markdown_content))

        print(f"Job data successfully saved to {output_markdown_file}")

    except Exception as e:
        print(f"Error processing file: {e}")

```
**IMPORTANT !**
- Provide valid references for saving retrieved data.
- Make sure that you copied valid url from the browser and manage pagination properly.

```python
if __name__ == '__main__':
    base_url = "https://www.ziprecruiter.co.uk/jobs/search?l=Remote&q=qa+software+engineer&remote=full"
    amount_of_pages = 100  # Or any number that you wish to check
    responses_data = execute_requests(base_url, amount_of_pages)

    # Output files for parsed data
    output_json_file = 'parsed_job_data.json'
    output_markdown_file = 'parsed_job_data.md'

    # Parse and save the job data
    parse_job_data_from_json(responses_data, output_json_file, output_markdown_file)
```

Script works fine for several executions. After that cookies expired and new one should be regenerated.