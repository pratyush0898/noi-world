import React from "react"
import './background.css'
import Video from '../../assets/video1.mp4'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'

function background({playStates, heroCount}) {
    if (playStates) {
        return (
            <div className="background">
                <video src={Video} autoPlay loop muted></video>
            </div>
        )
    }
    else if (heroCount===0) 
    {
        return <img src={image1} alt="" />
    }

    else if (heroCount===1) 
    {
        return <img src={image2} alt="" />
    }

    else if (heroCount===2)
    {
        return <img src={image3} alt="" />
    }
}
export default background
