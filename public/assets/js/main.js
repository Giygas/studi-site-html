import '../glightbox/js/glightbox.min.js'
// Glightbox options
const lightbox = GLightbox({
  'href': 'https://www.youtube.com/watch?v=qL-Qe7bJopY',
  'type': 'video',
  'source': 'youtube', //vimeo, youtube or local
  'width': 900,
  'autoplayVideos': true,
  'touchNavigation': true
})

// WAIT FOR CSS TO LOAD
var stylesheet = document.getElementById("stylesheet")

stylesheet.onload = function() {
  document.getElementById("page").style.display = "block"
}
