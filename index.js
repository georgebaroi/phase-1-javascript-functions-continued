//implement a function called saturdayFun. It should return a String like "This Saturday, I want to ....!" Fill in the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "roller-skate"
 function saturdayFun(activity= 'roller-skate'){
 return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*"){
    return function(param="special"){
        return `You are ${flair}${param}${flair}!`
    }
}
