'use strict';

function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  clickedElement.classList.add('active');

  const articleList = document.querySelectorAll('.posts .post');

  for(let article of articleList) {
    article.classList.remove('active');
  }

  const articleSelector = clickedElement.getAttribute('href');

  const activeArticle = document.querySelector(articleSelector);

  activeArticle.classList.add('active');
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  console.log (titleList);
  
  document.querySelector(optTitleListSelector).innerHTML = '';
    
  /* for each article */

  const articles = document.querySelectorAll(optArticleSelector)
    
  /* get the article id */

  const articleId = document.getElementById('id') /* pewnie źle... */

  for(let article of articles){
    articleId
  }
   
  /* find the title element */

  for(let article of articles){
    optTitleSelector
  }
    
  /* get the title from the title element */

  const article = document.querySelector(optArticleSelector)

  const articleTitle = article.querySelector(optTitleSelector).innerHTML;
   
  /* create HTML of the link */

  /* insert link into titleList */

  
  
}


generateTitleLinks();