import React, { useEffect, useState } from 'react'
import { Left_Paper, Left_Rock, Left_Scissor, LoadingGif, Right_Paper, Right_Rock, Right_Scissor, GameWin, GameLose, Youwin, Versus, GameDraw, Account_img, Pokeball } from '../Helpers/AssetHelper'
import { useNavigate } from 'react-router-dom';

const LoadData = () => {
    const imglist = [Left_Paper, Left_Rock, Left_Scissor, Right_Paper, Right_Rock, Right_Scissor, GameWin, GameLose, Youwin, Versus, GameDraw, Account_img, Pokeball];
    const [Complete, setComplete] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/')
        let loadedImagesCount = 0;
        
        let imagesArray = [];
        for (var i = 0; i < imglist.length; i++) {
            let image = new Image();
            image.src = imglist[i];
            
            image.onload = () => {
                loadedImagesCount++;
                if (loadedImagesCount >= imglist.length) {
                    setComplete(false)
                }
            }
            imagesArray.push(image);
        }
    }, [navigate]);
    const handleClick = () => {
        navigate('/home')
    }
    return (
        <div className='sized flexed bg-[#ff4646]'>
            <div className='w-[500px] h-[50%] flexed flex-col bg-[] rounded-[60px]'>

                <img className='h-[70%]' src={LoadingGif} alt="" />
                {Complete ? <p className='pr-4 frisky text-3xl md:text-4xl'>Loading Assets please wait..</p> :
                    <button onClick={handleClick} className='uibtn frisky text-3xl'>Start Game</button>}
            </div>
            {imglist.map((ele, i) => {
                return <img key={i + 9} className='w-0 h-1' src={ele} alt='allimage' />
            })}

        </div>
    )
}

export default LoadData
