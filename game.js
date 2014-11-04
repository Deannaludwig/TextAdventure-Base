var inputBox = document.querySelector('#action');

console.log( inputBox.tagName );
console.log( inputBox.parentNode.tagName );

var whatDoWeDoNext = document.querySelector('body > main > output > label')
console.log( whatDoWeDoNext.tagname );
console.log( whatDoWeDoNext.parentNode.tagName );

var iMightFail = document.querySelector('#help');
console.log( iMightFail.tagName );
console.log( whatDoWeDoNext.parentNode.tagName );

console.log (document.getElementsByTagName('aside'));

console.log (document.getElementById('inventory')); 