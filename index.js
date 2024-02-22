function scuberGreetingForFeet(x){
  // Write your code here!
if(x <= 400){
  return 'This one is on me!';
}else if(  x > 400 && x <= 2000){
  return 'That will be twenty bucks.';

}else if( x > 2000 && x <= 2500){
  return 'I will gladly take your thirty bucks.';

}else{
  return 'No can do.';
}

}
console.log(scuberGreetingForFeet(1));
console.log(scuberGreetingForFeet(401));
console.log(scuberGreetingForFeet(2001));
console.log(scuberGreetingForFeet(3000));





function ternaryCheckCity(city){
  // Write your code here!
  return city ===  'NYC' ? "Ok, sounds good." : 'No go.'
}
console.log(ternaryCheckCity('NYC')); 
console.log(ternaryCheckCity('Pittsburgh')); 


function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'; 
      break;
    case 'not as generous':
      return 'Thank you.'; 
      break;

    default: return "Bye."
      break;
  }
}

console.log(switchOnCharmFromTip('generous'));
console.log(switchOnCharmFromTip('not as generous'));
console.log(switchOnCharmFromTip('thanks for everything'));