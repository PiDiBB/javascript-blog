'use strict';

function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  
  const activeLinks = document.querySelectorAll('.author-name');

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
  optTitleListSelector = '.titles',
  optArticleTagSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author';
  
function generateTitleLinks(customSelector = ''){

  const titleList = document.querySelector(optTitleListSelector);
    
  document.querySelector(optTitleListSelector).innerHTML = '';
    
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
   
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


function generateTags(){

  const articles = document.querySelectorAll(optArticleSelector);
  
  
  for(let article of articles){
    
    const tagWrapper = article.querySelector(optArticleTagSelector);
    
    let html = '';
    
    const articleTags = article.getAttribute('data-tags');
   
    const articleTagsArray = articleTags.split(' ');
    
    for(let tag of articleTagsArray) {
    
      const linkHTML = '<li><a href="#tag-' + tag + '" ><span>' + tag + '</span></a></li>';
           
      html = html + linkHTML;
        
    }
        
    tagWrapper.innerHTML = html;
     
    const links = document.querySelectorAll('.post-tags .list a');
    
    for(let link of links){
      link.addEventListener('click', tagClickHandler);
      
    }
  }
}
generateTags();

 
function tagClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  
  const tagSelector = clickedElement.getAttribute('href');
  
  const clearTag = tagSelector.replace('#tag-', '');
  
  const allActiveTags = document.querySelectorAll('a.active[href^="#tag-"]');
  
  for(let tag of allActiveTags) {
    tag.classList.remove('active');
  }

  const allHrefTags = document.querySelectorAll('a[href="' + tagSelector + '"]');
  
  for(let tag of allHrefTags) {
    tag.classList.add('active');
  }
}

function addClickListenersToTags(){

  const findAllLinks = document.querySelectorAll('tag')
  console.log(findAllLinks)
}
addClickListenersToTags();


function generateAuthors(customSelector = '') {

  const articles = document.querySelectorAll(optArticleSelector + customSelector);

  for(let article of articles) {
    const articleAuhor = article.getAttribute('data-author')
  }  

}
generateAuthors();


function addClickListenersToAuthors(){

  const findAllLinks = document.querySelectorAll('data-author');
  
}
addClickListenersToAuthors();










