// ==UserScript==
// @name         Apostrophe | Article | Politics
// @namespace    https://apostrophe.ua/article/politics/
// @noframes
// @version      0.1
// @description  Apostrophe | www.apostrophe.ua | Article | Politics
// @author       oleh.kyshlyan
// @match        http://apostrophe.ua/article/politics/*
// @match        https://apostrophe.ua/article/politics/*
// @match        http://apostrophe.ua/ua/article/politics/*
// @match        https://apostrophe.ua/ua/article/politics/*
// @require      https://code.jquery.com/jquery-3.4.0.min.js
// @grant        none
// ==/UserScript==

var ApostropheArticlePolitics = new function(){

  this.body = function(){
    var bodyInclosure = function(){
      var body = document.body;
      if(body != undefined){
        for(property of body.children){
          if(property.className.indexOf('adsbygoogle') != -1){
            property.style.display = 'none';
          }

          if(property.tagName == 'IFRAME'){
            property.style.display = 'none';
          }

          if(property.id == 'form-holder'){
            property.style.display = 'none';
          }
        }
      }
    }
    setTimeout(bodyInclosure,3000);
  }

  this.mainContentBlock = function(){
    var mainContentBlockInclosure = function(){
      jQuery(function(){
        var mainContentBlock = jQuery("BODY DIV[class*='main-content-block']");
        if(mainContentBlock.length == 1){
          mainContentBlock.children().each(function(index,element){
            if(element.id == 'fb-root'){
              element.style.display = 'none';
            }

            if(element.className.indexOf('bnr') != -1){
              element.style.display = 'none';
            }
          });
        }
      });
    }
    setTimeout(mainContentBlockInclosure,3000);
  }

  this.lCol2Inner = function(){
    var lCol2InnerInclosure = function(){
      jQuery(function(){
        var lCol2Inner = jQuery("BODY DIV[class*='main-content-block'] > DIV[class*='article-wrap'] > DIV[class*='content'] DIV[class*='l-col2inner']");
        if(lCol2Inner.length == 1){
          lCol2Inner.children().each(function(index,element){
            if(element.className.indexOf('fb-comments') != -1){
              element.style.display = 'none';
            }

            if(element.className.indexOf('bnr') != -1){
              element.style.display = 'none';
            }
          });
        }
      });
    }
    setTimeout(lCol2InnerInclosure,3000);
  }

  this.articleWrap = function(){
    var articleWrapInclosure = function(){
      jQuery(function(){
        var articleWrap = jQuery("BODY DIV[class*='main-content-block'] > DIV[class*='article-wrap']");
        if(articleWrap.length == 1){
          articleWrap.children().each(function(index,element){
            if(element.className == 'spec'){
              if(element.href.indexOf('t.me') != -1){
                element.style.display = 'none';
              }
            }
          });
        }
      });
    }
    setTimeout(articleWrapInclosure,3000);
  }

  this.articleBody = function(){
    var articleBodyInclosure = function(){
      jQuery(function(){
        var articleBody = jQuery("BODY DIV[class*='main-content-block'] > DIV[class*='article-wrap'] > DIV[class*='content'] ARTICLE[class*='article'] DIV[itemprop*='articleBody']");
        if(articleBody.length == 1){
          articleBody.children().each(function(index,element){
            if(element.className.indexOf('adsbygoogle') != -1){
              element.style.display = 'none';
            }

            if(element.tagName == 'DIV'){
              for(property of element.children){
                if(property.className.indexOf('adsbygoogle') != -1){
                  element.style.display = 'none';
                }
              }
            }
          });
        }
      });
    }
    setTimeout(articleBodyInclosure,3000);
  }

  this.lCol3 = function(){
    var lCol3Inclosure = function(){
      jQuery(function(){
        var lCol3 = jQuery("BODY DIV[class*='main-content-block'] > DIV[class*='article-wrap'] > DIV[class*='content'] DIV[class*='l-col3']");
        if(lCol3.length == 1){
          lCol3.children().each(function(index,element){
            if(element.className.indexOf('bnr') != -1){
              element.style.display = 'none';
            }

            if(element.tagName == 'DIV'){
              for(property of element.children){
                if(property.className.indexOf('adsbygoogle') != -1){
                  element.style.display = 'none';
                }
              }
            }
          });
        }
      });
    }
    setTimeout(lCol3Inclosure,3000);
  }

}

ApostropheArticlePolitics.body();
ApostropheArticlePolitics.mainContentBlock();
ApostropheArticlePolitics.lCol2Inner();
ApostropheArticlePolitics.articleWrap();
ApostropheArticlePolitics.articleBody();
ApostropheArticlePolitics.lCol3();
