---
title: Basic loguru configuration for python
permalink: /dev_side/loguru_loger_basic_configuration/
categories:
  - Posts
tags:
  - dev_side
  - loguru
  - logger
date: 2023-10-25 16:21:12
---

Below is a basic configuration for the `loguru` logging library. It includes logging to both the console and a file, with separate levels and formatting.

## Loguru details

* Loguru installation command via PIP
   ```python
   pip install loguru
   ```

* [Logugu PIP page](https://pypi.org/project/loguru/)
* [Loguru home page](https://github.com/Delgan/loguru)

---
## Loguru configuration

Below is an example of 'loguru' configuration and usage.
```python
from loguru import logger
import sys

# Configure Loguru
logger.remove()  # Remove the default logger

# Add a console logger
logger.add(
    sink=sys.stdout,
    level="INFO",  # Log level for console
    format="<green>{time:YYYY-MM-DD HH:mm:ss}</green> | <level>{level: <8}</level> | <cyan>{name}</cyan>:<cyan>{function}</cyan>:<cyan>{line}</cyan> - <level>{message}</level>",
    enqueue=True,  # Thread-safe
)

# Add a file logger
logger.add(
    sink="app.log",
    level="DEBUG",  # Log level for file
    format="{time:YYYY-MM-DD HH:mm:ss} | {level: <8} | {name}:{function}:{line} - {message}",
    rotation="10 MB",  # Rotate logs every 10 MB
    retention="7 days",  # Retain logs for 7 days
    compression="zip",  # Compress old log files
    enqueue=True,  # Thread-safe
)

# Example usage
if __name__ == "__main__":
    logger.debug("This is a debug message.")
    logger.info("This is an info message.")
    logger.warning("This is a warning message.")
    logger.error("This is an error message.")
    logger.critical("This is a critical message.")
```