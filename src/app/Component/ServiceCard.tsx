import '../Styles/Home.css'
import Image from 'next/image'
import UserOne from '../assets/Images/Insta.png'
import { rubik, bebas } from '../assets/fonts/fonts';

const ServiceCard = ({ data }) => {

    return (
        <div className='ServiceCard' >

            <div className='ImageWrap'  >
                <Image src={data?.Icon} width={120} height={130} style={{ borderRadius: 10 }} alt="Picture of the camera" />
            </div>
            <div className='ServiceCardTextWrap'  >
                <div className={rubik.className} >
                    <h1 className='NameStyling' >{data?.Tittle}</h1>
                </div>
                <div className={bebas.className} >
                    <p className='NameStylingSub' >{data?.Description}</p>
                </div>
            </div>
        </div>
    )
}


export default ServiceCard

