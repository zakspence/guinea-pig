"use strict";

// let articleSections = document.getElementsByClassName("article-section");

// for (var i = 0; i < articleSections.length; i++)
// {
// 	articleSections[i].addEventListener('click', event => {
// 		var outputTarget = document.getElementById('output-target');
// 		outputTarget.innerHTML = event.target.innerHTML;
// 	});
// }
//
let target = $('#output-target');

$('.article-section').each( function() {
	 $(this).click( event => target.html( $(event.target).html()));
});

$('h1').hover( event => target.html( `<h3>You hovered on a guinea!!!!!!</h3>`));

$('h1').mouseout( event => target.html( `<h2>WHY HAVE YOU FORSAKEN ME??????</h2>`));

$('#keypress-input').keyup( event => target.html(event.target.value));

$('#add-color').click( () => $('#guinea-pig').css('color', 'lightblue') );

$('#make-large').click( () => $('#guinea-pig').css('fontSize', '4em') );

$('#add-border').click( () => $('#guinea-pig').css('border', '3px solid tomato') );

$('#add-rounding').click( () => $('#guinea-pig').css('borderRadius', '5px') );

$('.article-section').eq(0).css('fontWeight', 'bold');

$('.article-section').eq(5).css({fontWeight: 'bold', fontStyle: 'italic'});

$('button').wrap( () => `<li class="button" style="list-style:none;"></li>`);
$('li.button').wrapAll('<ul></ul>');