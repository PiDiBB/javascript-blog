'use strict';

function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  
  const activeLinks = document.querySelectorAll('.active');

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
  optTagsListSelector = '.tags.list',
  optCloudClassCount = 5,
  optCloudClassPrefix = 'tag-size-',
  optAuthorsListSelector = '.authors.list';
  
    

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


function calculateTagsParams(tags){
  const params = {
    max: 0,
    min: 999999
  };
  
  for(let tag in tags){
    if (tags[tag] > params.max){
      params.max = tags[tag];
    }
    else {
      (tags[tag] > params.min);
      params.min = tags[tag];
    }
  }
  return params;
}
calculateTagsParams();


function calculateTagClass(count, params){
  params = {
    min: 1,
    max: 5
  };
  const normalizedCount = count - params.min;
  const normalizedMax = params.max - params.min;
  const percentage = normalizedCount / normalizedMax;
  const classNumber = Math.floor( percentage * (optCloudClassCount - 1) + 1 );
  return optCloudClassPrefix + classNumber; 
}
calculateTagClass();


function generateTags(){
 
  let allTags = {};
  
  const articles = document.querySelectorAll(optArticleSelector);
  
  for(let article of articles){
    
    const tagWrapper = article.querySelector(optArticleTagSelector);
    
    let html = '';
    
    const articleTags = article.getAttribute('data-tags');

    const articleTagsArray = articleTags.split(' ');
    
    for(let tag of articleTagsArray) {
      
      const linkHTML = '<a href="#tag-' + tag + '" ><span>' + tag + '</span></a>';     
      
      html = html + linkHTML;     
      
      if(!allTags.hasOwnProperty(tag)){ // eslint-disable-line
       
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }
     
    }
    
    tagWrapper.innerHTML = html;
    
  }
  
  const tagList = document.querySelector(optTagsListSelector);
  
  const tagsParams = calculateTagsParams(allTags);
  
  let allTagsHTML = '';
  
  for(let tag in allTags){

    const tagLinkHTML = '<li>' + '<a href="#tag-' + tag + '" class="' + calculateTagClass(allTags[tag], tagsParams) + '" ><span>' + tag + '</span></a>' + '</li>';  
 
    allTagsHTML += tagLinkHTML;
  }
  tagList.innerHTML = allTagsHTML; 
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

  const links = document.querySelectorAll('.list-horizontal a, .tags a');

  for(let link of links){

    link.addEventListener('click', tagClickHandler);
  }
}  
addClickListenersToTags();


function generateAuthors(){
  
  let allAuthors = [];
    
  const articles = document.querySelectorAll(optArticleSelector);

  for(let article of articles){

    const authorWrapper = article.querySelector(optArticleAuthorSelector);

    const articleAuthor = article.getAttribute('data-author');
   
    const linkHTML = '<li>' + '<a href="#author-' + articleAuthor + '" ><span>' + articleAuthor + '</span></a>' + '</li>';
    
    authorWrapper.innerHTML = linkHTML;

    if (allAuthors.indexOf(linkHTML) == -1){
      allAuthors.push(linkHTML);
    }
  }

  const authorList = document.querySelector(optAuthorsListSelector);
  
  authorList.innerHTML = allAuthors.join(' ');

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

  const links = document.querySelectorAll('.post-author a, .authors.list a');

  for(let link of links){

    link.addEventListener('click', authorClickHandler);
  }
}  
addClickListenersToAuthors();
