function theBeatlesPlay (musicians,instruments) {
  var lineUp = [];
  for (var i = 0; i < musicians.length; i++) {
    lineUp.push(musicians[i]+ " plays " + instruments[i])
  }
  return lineUp
}

function johnLennonFacts (facts) {
  var newList = [];
  var i = 0;
  while (i < facts.length) {
    newList.push(facts[i]+ "!!!")
    i++;
  }
  return newList
}

function iLoveTheBeatles (i) {
  var loveList = [];
  do {
    loveList.push("I love the Beatles!")
    i++;
  } 
  while (15-i>0);
  return loveList
}