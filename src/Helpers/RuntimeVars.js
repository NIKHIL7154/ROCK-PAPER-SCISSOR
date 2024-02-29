var PlayerSelected='not'
var CurrentRoom=''
var OppSelected = 'not'
var GamerId=''
var MainRoomId=''
function setPlayer(data){
    PlayerSelected=data
}
function setMainRoomId(data){
   MainRoomId=data
}

function setGamerId(data){
    GamerId=data
}
function setCurroom(data){
    CurrentRoom=data
}

function setOpp(data){
    OppSelected=data
}
function ResetRuntime(){
    PlayerSelected='not'
    CurrentRoom=''
    OppSelected = 'not'
    GamerId=''
    MainRoomId=''
}

export {PlayerSelected,OppSelected,setPlayer,setOpp,CurrentRoom,setCurroom,GamerId,setGamerId,MainRoomId,setMainRoomId,ResetRuntime}