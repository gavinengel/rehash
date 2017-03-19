// add the URL hash to the HTML-tag, so we can use CSS more effectively
function rehash() {
  var hashAttr = '';

  if(window.location.hash) {
    // accept only the string before '?' symbol
    var cleanHash = window.location.hash.split('?')[0].replace(/[^a-z0-9/]/gi, '');

    // split on '/' symbol, to remove excess dividers
    var pieces = cleanHash.split('/');

    // put the filtered params into clean array
    var params = [];
    for (var i in pieces) {
      if (pieces[i].length) params.push( pieces[i] );
    }

    // stitch pieces together for the final hashAttr
    hashAttr = params.join('/');
  }

  document.getElementsByTagName('html')[0].setAttribute('hash', hashAttr);
}

rehash(); // initial execution, in case browser opens to page with hash already
window.addEventListener("hashchange", rehash, false); // execution on subsequent hash updates
