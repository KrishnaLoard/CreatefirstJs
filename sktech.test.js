const sum = require('./Helloworld');

//test('Adds 1 + 2 to equal 3', () => {
  //  expect(sum(1, 2)).toBe(3);
//});


test('Adds 1 + 2 to equal 3',sumTest);
test('Adds 1 + 2 to equal 3',checkthesum);



//Checking for the 1 + 3 is 4
function sumTest() {
    expect(sum(1,3)).toBe(4);
}


//Checking for the 2 + 4 equals 6
function checkthesum(){
    expect(sum(2,4)).toBe(6);
}