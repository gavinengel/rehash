// add the URL hash to the HTML-tag, so we can use CSS more effectively
function rehash() {
  var hashAttr = '';

  if(window.location.hash) {
    hashAttr = window.location.hash.replace(/[^a-z0-9]/gi, '');
  } 

  document.getElementsByTagName('html')[0].setAttribute('hash', hashAttr);
}

rehash();
window.onhashchange = rehash;
