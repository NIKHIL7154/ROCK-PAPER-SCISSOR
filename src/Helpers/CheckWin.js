function Winnerboy(mine,his){
    let you = mine.split('_')[1]
    let opp = his.split('_')[1]
    if(you==='Rock' && opp==='Scissor'){
        return 'you';
    }else if(you==='Paper' && opp==='Rock'){
        return 'you';
    }else if(you==='Scissor' && opp==='Paper'){
        return 'you';
    }else if(you===opp){
        return 'draw';
    }else{
        return 'opp'
    }
}

export default Winnerboy;