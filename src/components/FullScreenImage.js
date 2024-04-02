import { useEffect } from "react"
import { ReactComponent as SheepSvg } from './SheepSvg.svg'

export default function FullScreenImage( {imgUrl, setActiveFullScreenImg, lightBackground, fullScreenVideoActive, setFullScreenVideoActive} ) {

    useEffect(() => {
        const imageContainerEl = document.querySelector('.full_screen_img')
        setTimeout(() => {
            imageContainerEl.classList.add('active')
        }, 0)
    }, [])

    if (!fullScreenVideoActive && imgUrl !== 'svg') {
        return (
            <div className={`full_screen_img ${lightBackground ? 'full_screen_img_light' : ''}`} onClick={() => setActiveFullScreenImg(false)}>
                <img src={imgUrl} />
            </div>
        )
    } else if (imgUrl !== 'svg') {
        return (
            <div className={`full_screen_img ${lightBackground ? 'full_screen_img_light' : ''}`} 
            onClick={() => {
                setActiveFullScreenImg(false) 
                setFullScreenVideoActive(false)
            }}>
                <video autoPlay muted loop playsInline width="550px">
                    <source src={imgUrl} type="video/mp4"/>
			    </video>
            </div>
        )
    } else {
        return (
            <div className='full_screen_img full_screen_img_light'
            onClick={() => {
                setActiveFullScreenImg(false) 
            }}>
                <SheepSvg />
            </div>
        )
    }
}