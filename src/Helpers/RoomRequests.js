const host='http://localhost:8000'

async function checkforroom(roomid){
    const status = await fetch(host+'/roomvialink',{
        headers:{"Content-Type":"application/json"},
        method:'POST',
        body:JSON.stringify({room:roomid})
    })
    const data = await status.json()
    return data.status
}

async function initroom(){
    const response=await fetch(host+"/checkrooms");
    const status=await response.json();
    console.log(status);
    return status
}

async function createPrivateRoom(){
    const response = await fetch(host+"/createprivate")
    const res=await response.json();
    return res
}

export  {checkforroom,initroom,createPrivateRoom}