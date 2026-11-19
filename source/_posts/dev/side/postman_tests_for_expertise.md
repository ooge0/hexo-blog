---
title: Postman tests tests for expertise
layout: post
permalink: /dev_side/postman_tests_for_expertise
categories:
  - Posts
tags:
  - dev_side
  - postman
  - api_testing
  - qa
  - API
date: 2025-01-25 17:32:05

---
*Below are examples of Postman tests with implemented logic where data is passed through variables, scripts and in a loop to repeat scripts by passing data (values) in some range.*

*Prerequisites* 

1. `{{base_url}}` = https://jsonplaceholder.typicode.com
2. Given GET API request for retrieving posts : `{{base_url}}/posts`
3. Given GET API request for retrieving post by its ID : `{{base_url}}/posts/{{id}}`
4. Goal:
	1. To make Postman script for executing API request (GET, `{{base_url}}/posts/{{post_id}}`) for getting data about posts by their IDs that were saved from the original request (GET,  `{{base_url}}/posts`

**Actions:**
1. Create new *Environment* 
2. For **GET**,  `{{base_url}}/posts` request, to add for *post-request* script:
```js
// Save the response to an environment variable
const responseData = pm.response.json();
// Extract all IDs from the response
const ids = responseData.map(item => item.id);

// Save the list of IDs and initialize the index
pm.environment.set("ids", JSON.stringify(ids));
pm.environment.set("currentIndex", 0);

// Set the next request to process the first ID
pm.execution.setNextRequest("Process Post by ID");
```
  
<img src="/hexo-blog/images/postman_tests_for_expertise_pic_1.png">


2. For **GET**,  `{{base_url}}/posts/{{post_id}}` request, to add for *pre-request* script:
```js
// Retrieve the list of IDs and the current index
const ids = JSON.parse(pm.environment.get("ids"));
let currentIndex = pm.environment.get("currentIndex");

// Ensure currentIndex is a valid number
currentIndex = parseInt(currentIndex, 10);
if (currentIndex < ids.length) {
    // Set the current post_id for the request
    pm.environment.set("post_id", ids[currentIndex]);
} else {
    console.log("All IDs have been processed.");
    pm.execution.setNextRequest(null); // Stop execution when done
}
```
<img src="/hexo-blog/images/postman_tests_for_expertise_pic_2.png">


3. For **GET**,  `{{base_url}}/posts/{{post_id}}` request, to add for *post-request* script:
```js
// Increment the index after processing the current request
let currentIndex = pm.environment.get("currentIndex");
currentIndex = parseInt(currentIndex, 10) + 1;

// Save the updated index
pm.environment.set("currentIndex", currentIndex);

// Check if there are more IDs to process
const ids = JSON.parse(pm.environment.get("ids"));
if (currentIndex < ids.length) {
    pm.execution.setNextRequest("Process Post by ID"); // Repeat for the next ID
} else {
    console.log("Finished processing all IDs.");
    pm.execution.setNextRequest(null); // Stop execution
}
```

<img src="/hexo-blog/images/postman_tests_for_expertise_pic_3.png">

4. Execute GET,  `{{base_url}}/posts/{{post_id}}` request as many times as needed. Added scripts help to iterate over all `post_id's` that retrieved from the first **GET**,  `{{base_url}}/posts/{{post_id}}` request. Control process of execution by checking Postman console output
   
<img src="/hexo-blog/images/postman_tests_for_expertise_pic_4.png">
   