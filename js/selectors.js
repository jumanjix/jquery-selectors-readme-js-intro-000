// declare your functions here...
function paragraphSelector(){
  var arrayOfP = $('p');
  return arrayOfP;
}

function lastImageSelector() {
  return $('img:last');
}

function ninjaBabySelector() {
  return $('img#baby-ninja');
}

function divSelector() {
  return $('div.pics');
}

function firstListItem() {
  return $('ul#pic-list li:first-child');
}
