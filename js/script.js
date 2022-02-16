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
  optTitleListSelector = '.titles',
  optArticleTagSelector = '.post-tags .list';
  
function generateTitleLinks(){

  const titleList = document.querySelector(optTitleListSelector);
    
  document.querySelector(optTitleListSelector).innerHTML = '';
    
  const articles = document.querySelectorAll(optArticleSelector);
  
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

      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      
      const linkHTML = '<li><a href="#tag-' + tag + '" ><span>' + articleTitle + '</span></a></li>';
      html = html + linkHTML;   
    }
    /* insert HTML of all the links into the tags wrapper */
    
    tagWrapper.innerHTML = html;
    
    const links = document.querySelectorAll('.post-tags .list');
    
    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }
  }
}
generateTags();
 
function tagClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  
  const tagSelector = clickedElement.getAttribute('href');
  console.log(tagSelector);


  /* prevent default action for this event */
  /* make new constant named "clickedElement" and give it the value of "this" */
  /* make a new constant "href" and read the attribute "href" of the clicked element */

  /* make a new constant "tag" and extract tag from the "href" constant */

  /* find all tag links with class active */

  /* START LOOP: for each active tag link */

    /* remove class active */

  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */

  /* START LOOP: for each found tag link */

    /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
}

function addClickListenersToTags(){
  /* find all links to tags */

  /* START LOOP: for each link */

    /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();