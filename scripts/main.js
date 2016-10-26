//E10 Mobile Fix

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement("style");
    msViewportStyle.appendChild(
      document.createTextNode(
        "@-ms-viewport{width:auto!important}"
      )
    );
    document.getElementsByTagName("head")[0].
      appendChild(msViewportStyle);
}

//Javascript Aba
$(".tab-pane.ativo").show();

$(".nav-tabs li").click(function() {
	var target = $(this).find("a").attr("data-tab");

	$(".nav-tabs li").removeClass("ativo");
	$(this).addClass("ativo");

	$(".tab-pane").removeClass("ativo").hide();
	$(".tab-pane#"+target).removeClass("ativo").show();
});

//Abre a aba do menu clicado
$(".nav .tab-menu").click(function() {
  var target = $(this).attr("data-tab");

  $(".nav-tabs li").removeClass("ativo");
  $(".nav-tabs li a[data-tab="+target+"]").parent().addClass("ativo");

  $(".tab-pane").removeClass("ativo").hide();
  $(".tab-pane#"+target).removeClass("ativo").show();

  $(".nav").addClass("menu-fechado");

  $(".overflow-menu").fadeOut();

  $(".nav").animate({
    left: "-220px"
  }, 300);

  $(".toggle-menu").animate({
    left: "0px"
  }, 300);
});


//Acordeon
$(".divisao .txt").hide();
	$(".divisao .txt").first().show();
	$(".divisao").first().find("h3").addClass('aberto');

$(".divisao h3").click(function(){
	$(".divisao h3").removeClass('aberto');
	$(this).addClass('aberto');
	$(".divisao .txt").slideUp("fast");
	$(this).next(".divisao .txt").slideDown("fast");

});

//Slider
$(document).ready(function(){
  $(".carrossel").owlCarousel();
  $(".slider").owlCarousel();
});

$('.carrossel').owlCarousel({
    stagePadding: 220,
    loop:true,
    margin:40,
    nav:false,
    center: true,
    items:3,
    autoWidth: true,
    autoHeight: true,
    responsive:{
        0:{
            items:1
        },
        840:{
            items:1
        }
    }
});

$('.slider').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    items:1,
    nav:false,
    lazyLoad: true,
    dots: true
});

//Blocos de produtos da mesma altura
equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  equalheight('#equipe .profissional');
});


$(window).resize(function(){
  equalheight('#equipe .profissional');
});

$(window).load(function() {
  equalheight('.planos .plano');
});


$(window).resize(function(){
  equalheight('.planos .plano');
});

//Menu Responsivo
$(".nav").addClass("menu-fechado");
$("body").prepend("<div class='overflow-menu'></div>");

$(".toggle-menu").click(function(){
  if($(".nav").hasClass("menu-fechado")) { 
    $(".nav").removeClass("menu-fechado");

    $(".overflow-menu").fadeIn();

    $(".nav").animate({
        left: "0px"
    }, 300);

    $(".toggle-menu").animate({
        left: "180px"
    }, 300);
  } else {
    $(".nav").addClass("menu-fechado");

    $(".overflow-menu").fadeOut();

    $(".nav").animate({
        left: "-220px"
    }, 300);

    $(".toggle-menu").animate({
        left: "0px"
    }, 300);
  }
});

$(".overflow-menu").click(function(){
  if($(".nav").hasClass("menu-fechado")) { 
    $(".nav").removeClass("menu-fechado");

    $(".overflow-menu").fadeIn();

    $(".nav").animate({
        left: "0px"
    }, 300);

    $(".toggle-menu").animate({
        left: "180px"
    }, 300);
  } else {
    $(".nav").addClass("menu-fechado");

    $(".overflow-menu").fadeOut();

    $(".nav").animate({
        left: "-220px"
    }, 300);

    $(".toggle-menu").animate({
        left: "0px"
    }, 300);
  }
});





/**
 * Copyright (c) 2007-2014 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler 
 * @version 1.4.12
 */
;(function(a){if(typeof define==='function'&&define.amd){define(['jquery'],a)}else{a(jQuery)}}(function($){var j=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};j.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};j.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(f,g,h){if(typeof g=='object'){h=g;g=0}if(typeof h=='function')h={onAfter:h};if(f=='max')f=9e9;h=$.extend({},j.defaults,h);g=g||h.duration;h.queue=h.queue&&h.axis.length>1;if(h.queue)g/=2;h.offset=both(h.offset);h.over=both(h.over);return this._scrollable().each(function(){if(f==null)return;var d=this,$elem=$(d),targ=f,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=win?$(targ):$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}var e=$.isFunction(h.offset)&&h.offset(d,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=j.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=e[pos]||0;if(h.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*h.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&h.queue){if(old!=attr[key])animate(h.onAfterFirst);delete attr[key]}});animate(h.onAfter);function animate(a){$elem.animate(attr,g,h.easing,a&&function(){a.call(this,targ,h)})}}).end()};j.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||typeof a=='object'?a:{top:a,left:a}};return j}));

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
  def: 'easeInOutExpo',
  swing: function (x, t, b, c, d) {
    //alert(jQuery.easing.default);
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInOutExpo: function (x, t, b, c, d) {
    if (t==0) return b;
    if (t==d) return b+c;
    if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
    return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }
});

//ScrollTo
$('.nav li a.tab-menu').click(function(){
  var link = $( this ).attr( "title" );
   $('body').scrollTo(link, 1300, {easing:'easeInOutExpo'} );
});





