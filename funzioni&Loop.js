let text = "";
function f(symbol) {
  for (let i = 0; i < 4; i++) {
    text += symbol;
    console.log(text);
  }
  console.log(text);
}
f("x");

// sopra nel forLoop ho 4 iterazioni. se voglio rendere questo numero dinamico uso parametro
let test = "";
function f1(symbol, iteratore) {
  for (let i = 0; i < iteratore; i++) {
    test += symbol;
    console.log(test);
  }
  console.log(test);
}
f1("x", 6);
