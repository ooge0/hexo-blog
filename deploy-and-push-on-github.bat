@echo off
REM Clean, generate, and deploy the Hexo site
hexo clean && hexo generate && hexo deploy

REM Stage all changes, commit with a message, and push to GitHub
git add .
git commit -m "Updated content"
git push origin master
