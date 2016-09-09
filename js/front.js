$(function () {

    lightbox();
    sticky();
    utils();
   // map();
    demo();
    

});
$(document).ready(function(){
    var waypoint1 = new Waypoint({
    element: document.getElementById('header-topic'),
    handler: function() {
        $("#header-topic").sticky({topSpacing:42});
    },  
    offset: 42
    });
    var waypoint2 = new Waypoint({
    element: document.getElementById('header-topic2'),
    handler: function(direction) {
        if (direction=='down'){
        $("#header-topic").unstick();
        $("#header-topic2").sticky({topSpacing:42});    
        }
        else{
        $("#header-topic2").unstick();
        $("#header-topic").sticky({topSpacing:42});        
        }
        
    },
    offset:$("#header-topic").height()+42
    });
    var waypoint3 = new Waypoint({
    element: document.getElementById('header-topic3'),
    handler: function(direction) {
        if (direction=='down'){
        $("#header-topic2").unstick();
        $("#header-topic3").sticky({topSpacing:42});    
        }
        else{
        $("#header-topic3").unstick();
        $("#header-topic2").sticky({topSpacing:42});        
        }
    },
    offset:$("#header-topic2").height()+42
    });
    var waypoint4 = new Waypoint({
    element: document.getElementById('header-topic4'),
    handler: function(direction) {
        if (direction=='down'){
        $("#header-topic3").unstick();
        $("#header-topic4").sticky({topSpacing:42});    
        }
        else{
        $("#header-topic4").unstick();
        $("#header-topic3").sticky({topSpacing:42});        
        }
    },
    offset:$("#header-topic2").height()+42
    });
    var waypoint5 = new Waypoint({
    element: document.getElementById('header-topic5'),
    handler: function(direction) {
        if (direction=='down'){
        $("#header-topic4").unstick();
        //$("#header-topic5").sticky({topSpacing:42});    
        }
        else{
        //$("#header-topic5").unstick();
        $("#header-topic4").sticky({topSpacing:42});        
        }
    },
    offset:$("#header-topic2").height()+42
    });
     
}

);
$("#intro").click(function() {
    $('html, body').animate({
        scrollTop: $("#analytics").offset().top+18
    }, 1000);
});
//$("li a").click(function() {
//    $(".navbar-header button").trigger("click");
//});
$(".navbar-btn").click(function(){
    if(parseInt($(".overlay-for-navbar").css("z-index"))==-1){
        $(".overlay-for-navbar").css("z-index",1000);
    } else {
        $(".overlay-for-navbar").css("z-index",-1);
    }
    $(this).toggleClass('collapsed');
    
});
$('#navigation').click(function(){
    $(".overlay-for-navbar").css("z-index",-1);
    $(this).toggleClass('in');
    $(".navbar-btn").toggleClass('collapsed');
});

//contact us ajax

//$("#contact-form").submit(function(e) {
//
//    var url = "demos.scientist-tech.com/reco/contact-us"; // the script where you handle the form input.
//
//    $.ajax({
//           type: "POST",
//           url: url,
//           name: document.contact-form.name.value,
//           email:document.contact-form.email.value,
//           message:document.contact-form.message.value,
//           domain:'website',// serializes the form's elements.
//           success: function()
//           {
//               alert('Thanks! we will get back to you shortly'); // show response from the php script.
//           }
//         });
//
//    e.preventDefault(); // avoid to execute the actual submit of the form.
//});




























//$(window).scroll(function(){
  //console.log($('#header-topic').offset().top);
  //console.log($(window).scrollTop());
  //current_element = $('section .is-sticky');
  //console.log(current_element);
  //var reg = new RegExp('[0-9]');
  //current_id_num = reg.exec(current_element.attr('id'))[0];
  //current_id_num = parseInt(current_id_num);
  //if(current_id_num>1&current_id_num<4){
  //  previous_element = $('#header-topic'+(parseInt(current_id_num)-1));
  //  next_element = $('#header-topic'+(parseInt(current_id_num)+1));
  //  console.log(previous_element.offset());
  //  console.log(current_element.offset());
  //  console.log(next_element.offset());
  //}
  //
//});
/* for demo purpose only - can be deleted */

function demo() {
    
    $("#page").change(function () {

        if ($(this).val() !== '') {

            window.location.href = $(this).val();

        }

        return false;
    });
}

/* =========================================
 *  lightbox
 *  =======================================*/

function lightbox() {

    $(document).delegate('*[data-toggle="lightbox"]', 'click', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
}

/* =========================================
 *  sticky header 
 *  =======================================*/

function sticky() {

    $(".header").sticky();

}


/* =========================================
 *  map 
 *  =======================================*/

function map() {

    var styles = [{"featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]}, {"featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]}, {"featureType": "road.highway", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "road.arterial", "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]}, {"featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]}, {"featureType": "transit", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]}];
    map = new GMaps({
        el: '#map',
        lat: -12.043333,
        lng: -77.028333,
        zoomControl: true,
        zoomControlOpt: {
            style: 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false,
        scrollwheel: false,
        draggable: false,
        styles: styles
    });

    var image = 'img/marker.png';

    map.addMarker({
        lat: 12.9716,
        lng: 77.5946 ,
        icon: image/* ,
         title: '',
         infoWindow: {
         content: '<p>HTML Content</p>'
         }*/
    });
}

function utils() {

    /* tooltips */

    $('[data-toggle="tooltip"]').tooltip();

    /* click on the box activates the radio */

    $('#checkout').on('click', '.box.shipping-method, .box.payment-method', function (e) {
        var radio = $(this).find(':radio');
        radio.prop('checked', true);
    });
    /* click on the box activates the link in it */

    $('.box.clickable').on('click', function (e) {

        window.location = $(this).find('a').attr('href');
    });
    /* external links in new window*/

    $('.external').on('click', function (e) {

        e.preventDefault();
        window.open($(this).attr("href"));
    });
    /* animated scrolling */

    /* animated scrolling */

    $('.scroll-to, #navigation a').click(function (event) {
        event.preventDefault();
        var full_url = this.href;
        var parts = full_url.split("#");
        var trgt = parts[1];

        $('body').scrollTo($('#' + trgt), 800, {offset: -40});

    });

}

$.fn.alignElementsSameHeight = function () {
    $('.same-height-row').each(function () {

        var maxHeight = 0;
        var children = $(this).find('.same-height');
        children.height('auto');
        if ($(window).width() > 768) {
            children.each(function () {
                if ($(this).innerHeight() > maxHeight) {
                    maxHeight = $(this).innerHeight();
                }
            });
            children.innerHeight(maxHeight);
        }

        maxHeight = 0;
        children = $(this).find('.same-height-always');
        children.height('auto');
        children.each(function () {
            if ($(this).innerHeight() > maxHeight) {
                maxHeight = $(this).innerHeight();
            }
        });
        children.innerHeight(maxHeight);
    });
}

$(window).load(function () {

    windowWidth = $(window).width();
    windowHeight = $(window).height();

    $(this).alignElementsSameHeight();

});
$(window).resize(function () {

    newWindowWidth = $(window).width();
    newWindowHeight = $(window).height();

    if (windowWidth !== newWindowWidth) {
        setTimeout(function () {
            $(this).alignElementsSameHeight();
        }, 100);
        windowWidth = newWindowWidth;
        windowHeight = newWindowHeight;
    }

});
