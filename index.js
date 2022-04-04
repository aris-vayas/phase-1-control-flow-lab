function scuberGreetingForFeet(a){
  let feet = a
  if (feet < 400){
   return 'This one is on me!'
  }
  if (feet >= 400 && feet < 2000){
    return 'That will be twenty bucks.'
  }
  if (feet >= 2000 && feet < 2500){
    return 'I will gladly take your thirty bucks.'
  }
  if (feet >2500){
    return 'No can do.'

  }


  

}
function ternaryCheckCity(city){
  const isCity = city == "NYC" ? 'Ok, sounds good.': 'No go.';
  return isCity
}

function switchOnCharmFromTip(tip){
  const happiness = tip;
  let response;
  switch(happiness){
  case 'generous':
    response =  'Thank you so much.'
    break;
    
    
      case 'not as generous':
        response =  'Thank you.'
        break;
        
   default:
        response = "Bye."
        break;

  }
        return response
  }



