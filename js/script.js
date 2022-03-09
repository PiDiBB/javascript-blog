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
  optArticleAuthorSelector = '.post-author',
  optTagsListSelector = '.tags.list';
  
    

function generateTitleLinks(customSelector = ''){
  
  const titleList = document.querySelector(optTitleListSelector);
    
  document.querySelector(optTitleListSelector).innerHTML = '';
    
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
      
  let html = '';
   
  for(let article of articles){
    const articleId = article.getAttribute('id');
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    const linkHTML = '<li><a href="#' + articleId + '" ><span>' + articleTitle + '</span></a></li>';
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
  /* [NEW] create a new variable allTags with an empty object */
  let allTags = {};
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for(let article of articles){
    /* find tags wrapper */
    const tagWrapper = article.querySelector(optArticleTagSelector);
    /* make html variable with empty string */
    let html = '';
    
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */
    for(let tag of articleTagsArray) {
      /* generate HTML of the link */
      const linkHTML = '<a href="#tag-' + tag + '" ><span>' + tag + '</span></a>';
      
      
      /* add generated code to html variable */
      html = html + linkHTML;
      
      
      /* [NEW] check if this link is NOT already in allTags */
      
      if(!allTags.hasOwnProperty(tag)){
        /* [NEW] add generated code to allTags array */
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }
      /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    tagWrapper.innerHTML = html;
    /* END LOOP: for every article: */
  }
  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector(optTagsListSelector);
  
  /*[NEW] create variable for all links HTML code */
  let allTagsHTML = '';
  
  /*[NEW] START LOOP: for each tag in allTags: */
  for(let tag in allTags){
    /*[NEW] generate code of a link and add it to allTags HTML */
    const linkHTML = '<a href="#' + tag + '" ><span>' + tag + ' (' + allTags[tag] + ') ' + '</span></a>';
   
    allTagsHTML = allTagsHTML + linkHTML;
 
  /*[NEW] END LOOP: for each tag in allTags: */
  }
  /*[NEW] add html from allTagsHTML to tagList */
  tagList.innerHTML = allTagsHTML;
  console.log(allTagsHTML);
  
}
generateTags();

function tagClickHandler(event){

  event.preventDefault();

  const clickedElement = this;

  const tagSelector = clickedElement.getAttribute('href');

  const tag = tagSelector.replace('#tag-', '');
  
  const allActiveTags = document.querySelectorAll('a.active[href^="#tag-"]');

  for(let tag of allActiveTags) {

    tag.classList.remove('active');

  }

  const allHrefTags = document.querySelectorAll('a[href="' + tagSelector + '"]');

  for(let tag of allHrefTags) {

    tag.classList.add('active');

  }  
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){

  const links = document.querySelectorAll('.list-horizontal a');

  for(let link of links){

    link.addEventListener('click', tagClickHandler);
  }
}  
addClickListenersToTags();


function generateAuthors(){
  
  const articles = document.querySelectorAll(optArticleSelector);

  for(let article of articles){

    const authorWrapper = article.querySelector(optArticleAuthorSelector);

    const articleAuthor = article.getAttribute('data-author');
   
    const linkHTML = '<a href="#author-' + articleAuthor + '" ><span>' + articleAuthor + '</span></a>';
    
    authorWrapper.innerHTML = linkHTML;
   
  }
  const links = document.querySelectorAll('.post-author a');
      
  for(let link of links){
    link.addEventListener('click', authorClickHandler);
  }
}
generateAuthors();


function authorClickHandler(event){

  event.preventDefault();

  const clickedElement = this;

  const authorSelector = clickedElement.getAttribute('href');
  
  const authorName = authorSelector.replace('#author-', '');
    
  const allActiveAuthors = document.querySelectorAll('a.active[href^="#author-"]');

  for(let link of allActiveAuthors) {

    link.classList.remove('active');
    
  }

  const allSelectAuthors = document.querySelectorAll('a[href="' + authorSelector + '"]');

  for(let link of allSelectAuthors) {

    link.classList.add('active');
  }  
  generateTitleLinks('[data-author="' + authorName + '"]');
}

function addClickListenersToAuthors(){

  const links = document.querySelectorAll('.post-author a');

  for(let link of links){

    link.addEventListener('click', authorClickHandler);
  }
}  
addClickListenersToAuthors();
