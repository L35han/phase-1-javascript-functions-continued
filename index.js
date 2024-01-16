// code your solution here
function saturdayFun(activity = 'roller-skate') {
        return `This Saturday, I want to ${activity}!`;
     }
function mondayWork(activity = 'go to the office') {
        return `This Monday, I will ${activity}.`;
    }
// wrapAdjective function definition
function wrapAdjective(string) {
    return function(adjective) {
      return `You are ${string}${adjective}${string}!`;
    };
  }


  const wrapAdjectiveWithAsterisk = wrapAdjective("*");
  console.log(wrapAdjectiveWithAsterisk("cool"));

