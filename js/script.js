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

  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  const titleList = document.querySelector(optTitleListSelector);
  console.log (titleList);
  
  document.querySelector(optTitleListSelector).innerHTML = '';
    
  const articles = document.querySelectorAll(optArticleSelector)
  
  let html = '';
 
  for(let article of articles){
  const articleId = article.getAttribute('id');
  const articleTitle = article.querySelector(optTitleSelector).innerHTML;
  const linkHTML = '<li><a href="#'+ articleId + '" ><span>' + articleTitle + '</span></a></li>';
  html = html + linkHTML;
  }

  titleList.innerHTML = html;
  
  const links = document.querySelectorAll('.titles a');

  for(let link of links){
  link.addEventListener('click', titleClickHandler);
  }
 
}

generateTitleLinks();