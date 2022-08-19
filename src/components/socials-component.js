import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function SocialsComponent(){
    return (
        <div className='socials animate__animated animate__fadeInUpBig'>
            <FaFacebook className='fa' />
            <FaTwitter className='tr' />
            <FaInstagram className='ig'/>
            <div>
                <p>© Copyright Ping. All rights reserved.</p>
            </div>
        </div>
    )
}


