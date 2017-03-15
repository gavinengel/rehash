// add the URL hash to the HTML-tag, so we can use CSS more effectively
function rehash() {
  var hashAttr = '';

  if(window.location.hash) {
    hashAttr = window.location.hash.split('?')[0].replace(/[^a-z0-9]/gi, '');
  } 

  document.getElementsByTagName('html')[0].setAttribute('hash', hashAttr);
}

rehash(); // initial execution, in case browser opens to page with hash already
window.addEventListener("hashchange", rehash, false); // execution on subsequent hash updates
