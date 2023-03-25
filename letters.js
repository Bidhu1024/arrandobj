const letters = ()=>{
    const phrase = "Hey, you are beautiful!"

    for(le in phrase){
       //typeCast
     console.log(Number(le) + 1)
    }
}

letters()