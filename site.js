console.log('LOAD')
const contentFrame = document.querySelector( 'iframe' );
const contentHeader = document.querySelector( 'h1' );
const checkbox = document.querySelector( 'input[type="checkbox"]' );

// checkbox.setAttribute( 'disabled', 'disabled' );
checkbox.checked = false;

let chapterCounter = 0;
let currentChapter = 0;

const menuitems = document.querySelectorAll( '.menu a' );
menuitems.forEach( ( menuitem, index ) => {
	
	if ( index > 0 ) menuitem.classList.add( 'disabled' );

	menuitem.addEventListener( 'click', event => {
		event.preventDefault( );

		menuitems.forEach( item => {
			if ( event.target == item ) {
				item.classList.add( 'active' );
			} else {
				item.classList.remove( 'active' );
			}
		} );

		contentHeader.innerHTML = menuitem.innerHTML;
		contentFrame.src = event.target.href;

		// checkbox.setAttribute( 'disabled', 'disabled' );
		checkbox.checked = false;
		var button = document.body.getElementsByClassName('button')[0];
  	button.disabled = true;

	} );
} );
const nextChapter = ( ) => {
	currentChapter++;

	const activeChapterButton = document.querySelector( '.active' );
	const nextButton = activeChapterButton.parentNode.nextElementSibling.firstChild;
	nextButton.classList.remove( 'disabled' );
	nextButton.click( );
}

const chapterButton = document.querySelector( '.btn-next' );
chapterButton.addEventListener( 'click', nextChapter );

// function myFunction() {
//   var checkBoxLinks = document.getElementById("myCheckLinks");
//   var checkBoxImages = document.getElementById("myCheckImages");
//   var links = document.getElementById("links");
//   var images = document.getElementById("images");
  
//   if (checkBoxLinks.checked == true){
//     links.style.display = "none";
//   } else {
//     links.style.display = "block";
//   }
//   if (checkBoxImages.checked == true){
//     // images.style.display = "none";
//     document.getElementById("images").style.display = 'none';
//   } else {
//     images.style.display = "block";
//   }
// 


scales.onchange = function(){

  var button = document.body.getElementsByClassName('button')[0];
  //console.log('chng' + button.disabled)
  button.disabled = false;
  //else button.disabled = true;
}
 

//function myFunction() {
 // var iframe = document.getElementById("frame1");
  //var elmnt = iframe.contentWindow.document.getElementsByTagName("img")[0];
  //elmnt.style.display = "none";
//}