import React, { useContext, useEffect, useState } from 'react'

import Serverconnect from '../Helpers/Socketconfig';

import { useNavigate, useParams } from 'react-router-dom';
import { CurrentRoom, GamerId } from '../Helpers/RuntimeVars';
import { Account_img, Pokeball } from '../Helpers/AssetHelper';
const Score = () => {
    const io = useContext(Serverconnect);
    const navigate = useNavigate();
    const [Mywins, setMywins] = useState([]);
    const [Oppwins, setOppwins] = useState([]);
    let roomid = useParams().roomid
    useEffect(() => {
        io.on('UpdatedResult', (result) => {
            let oppid = 'pl2id'
            if(GamerId==='pl2id'){
                oppid='pl1id'
            }
            let mystars=result[GamerId]
            let oppstars= result[oppid]

            let myarray=[]
            let opparray=[]
            if(mystars>0){
                for (let i = 0; i < mystars; i++) {
                    myarray.push(<img key={i} className='h-[70%] mox:h-[30px]' src={Pokeball} alt="" />)
                }
            }
            if(oppstars>0){
                for (let i = 0; i < oppstars; i++) {
                    opparray.push(<img key={i+19} className='h-[70%] mox:h-[30px]' src={Pokeball} alt="" />)
                }
            }
            setMywins(myarray)
            setOppwins(opparray)
            if(mystars>=3){
                setTimeout(() => {
                    io.emit("GameEnd",CurrentRoom)
                    navigate("/result/win")
                }, 2000);
            }
        })
        io.on('ShowResult',()=>{
            navigate('/result/lost')
        })

    }, [io,roomid,navigate]);
    return (
        <div className='flex w-full h-full justify-between items-center mox:px-1 px-8 py-3'>
            <div className='bg-[#ffffff85] mox:gap-1 gap-8 rounded-3xl xl:max-w-[400px] w-[47%] mox:h-[60px] h-full flexed justify-start'>
                <img className='h-[90%] mox:h-[40px] mox:px-2 px-4' src={Account_img} alt="" />
                
                {Mywins}
            </div>
            <div className='bg-[#ffffff85] mox:gap-1 gap-8 rounded-3xl xl:max-w-[400px] w-[47%] mox:h-[60px] h-full flexed justify-start inverted'>
                <img className='h-[90%] mox:h-[40px] mox:px-2 px-4' src={Account_img} alt="" />
                {Oppwins}
                

            </div>
        </div>
    )
}
export default Score
