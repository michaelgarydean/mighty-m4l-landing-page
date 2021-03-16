/* 
 * Get scroll position as a property 
 *
 * @see 	https://css-tricks.com/books/greatest-css-tricks/scroll-animation/
 */
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);