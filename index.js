function theBeatlesPlay (musicians,instruments) {
  lineUp = [];
  for (var i = 0; i <musicians.length; i++) {
    lineUp.push(musicians[i]+"plays " + instruments[i])
  }
  return lineUp
}