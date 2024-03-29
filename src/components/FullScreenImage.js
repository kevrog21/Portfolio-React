export default function FullScreenImage( {imgUrl, setActiveFullScreenImg, lightBackground} ) {

    return(
        <div className={`full_screen_img ${lightBackground ? 'full_screen_img_light' : ''}`} onClick={() => setActiveFullScreenImg(false)}>
            <img src={imgUrl} />
        </div>
    )
}