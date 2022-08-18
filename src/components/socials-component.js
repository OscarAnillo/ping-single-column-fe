import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function SocialsComponent(){
    return (
        <div className='socials'>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <div>
                <p>© Copyright Ping. All rights reserved.</p>
            </div>
        </div>
    )
}