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