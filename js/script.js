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

  for (let article of articleList) {
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
  /* NIE WIEM JAK ZASTOSOWAĆ clearMessages */

  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);

  for(let article of articles){} /* PĘTLA DLA WSZYSTKICH ARTYKUŁÓW - PO CO W TYM MOMENCIE??? */
    
  /* get the article id */

  const articleId = clickedElement.getAttribute('Id');
  /* script.js:55 Uncaught ReferenceError: clickedElement is not defined
    at generateTitleLinks (script.js:55:21)
    at script.js:76:1 - CZY clidkedElement zdefiniowany powyżej nie powinien odnosić się do tego miejsca również?? */ 

  /* find the title element */

  const articleTitle = article.querySelector(optTitleSelector).innerHTML;

  /* get the title from the title element */

  const title = clickedElement.getAttribute(articleTitle)

  /* create HTML of the link */

  const linkHTML = '<li><a href="# + articleId + "><span>' + articleId + '</span></a></li>';
  console.log(linkHTML)

  /* insert link into titleList */

  titleList.innerHTML = titleList.innerHTML + linkHTML;

}


generateTitleLinks();