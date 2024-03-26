import { useNavigate } from 'react-router-dom'
import backArrow from '../media/back_arrow.svg'

export default function BackButton() {

    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div className="back_button">
            <img src={backArrow} onClick={handleGoBack} alt="back arrow"/>
        </div>
    )
}