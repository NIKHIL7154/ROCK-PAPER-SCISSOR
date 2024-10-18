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


const serverHost=process.env.REACT_APP_META_SERVER_URI

export {serverHost,PlayerSelected,OppSelected,setPlayer,setOpp,CurrentRoom,setCurroom,GamerId,setGamerId,MainRoomId,setMainRoomId,ResetRuntime}