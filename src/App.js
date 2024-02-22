import { useContext, useEffect, useState } from 'react';
import Serverconnect from './Helpers/Socketconfig';


function App() {
  const [textval, settextval] = useState("initialState");
  const [roomId,setroomId]= useState('none')
  const [msggot,setmsggot]=useState([<p>hello</p>])
  const soc = useContext(Serverconnect)

  /* useEffect(() => {
    soc.on('yesyes',(dat)=>{
      setmsggot(before => [...before, <p>{dat}</p>])
    })
    soc.on('details',(data)=>{
      console.log(data);
    })
  }, [soc]); */


  const handleClick= ()=>{
    soc.emit("meramsg",[roomId,textval]);
    soc.emit('wantdetails','hello');
  }

  const handleRoomJoin =()=>{
    soc.emit('wantroom',roomId);
  }
  return (
    <div className="App">
      <input onChange={(event)=>{
        setroomId(event.target.value)
      }} type="number" name='room id' placeholder='enter room'/>
      <input onChange={(event)=>{
        settextval(event.target.value)}} type="text" name="name"/>
      <button onClick={handleClick}>Send</button>
      <button onClick={handleRoomJoin}>Join room</button>
      {msggot}
    </div>
  );
}

export default App;
