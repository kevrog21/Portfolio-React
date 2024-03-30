import { useEffect } from "react"

export default function FullScreenImage( {imgUrl, setActiveFullScreenImg, lightBackground} ) {

    useEffect(() => {
        const imageContainerEl = document.querySelector('.full_screen_img')
        setTimeout(() => {
            imageContainerEl.classList.add('active')
        }, 0)
    }, [])

    return(
        <div className={`full_screen_img ${lightBackground ? 'full_screen_img_light' : ''}`} onClick={() => setActiveFullScreenImg(false)}>
            <img src={imgUrl} />
        </div>
    )
}