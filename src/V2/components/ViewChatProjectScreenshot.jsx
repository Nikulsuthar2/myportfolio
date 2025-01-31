import {Link} from 'react-router-dom';

import chat1 from '../../assets/project/index.png';
import chat2 from '../../assets/project/userlogin.png';
import chat3 from '../../assets/project/usersignup.png';
import chat4 from '../../assets/project/forgotpassword.png';
import chat5 from '../../assets/project/resetpassword.png';
import chat6 from '../../assets/project/user home.png';
import chat7 from '../../assets/project/usersearch.png';
import chat8 from '../../assets/project/user chat.png';
import chat9 from '../../assets/project/blockuser.png';
import chat10 from '../../assets/project/editProfile.png';
import chat11 from '../../assets/project/admin dashboard.png';
import chat12 from '../../assets/project/admin user list.png';
import chat13 from '../../assets/project/admin chat report.png';
import { useEffect } from 'react';

export const ViewChatProjectScreenshot = () => {
    useEffect(() => {
      window.scrollTo(0,0);
    }, [])
    
  return (
    <div className='p-10'>
        <div className='flex justify-between items-center'>
            <label className='font-bold text-[40px]'>Online Chatting System</label>
            <Link to={"/#Section-Projects"} className='px-5 py-2 rounded text-white bg-gray-800 hover:bg-gray-700'>Back</Link>
        </div>
        <div id='imagelist' className='mt-10 flex flex-wrap gap-5 justify-center items-center'>
            <img src={chat1} className='rounded-lg w-[45%]'/>
            <img src={chat2} className='rounded-lg w-[45%]'/>
            <img src={chat3} className='rounded-lg w-[45%]'/>
            <img src={chat4} className='rounded-lg w-[45%]'/>
            <img src={chat5} className='rounded-lg w-[45%]'/>
            <img src={chat6} className='rounded-lg w-[45%]'/>
            <img src={chat7} className='rounded-lg w-[45%]'/>
            <img src={chat8} className='rounded-lg w-[45%]'/>
            <img src={chat9} className='rounded-lg w-[45%]'/>
            <img src={chat10} className='rounded-lg w-[45%]'/>
            <img src={chat11} className='rounded-lg w-[45%]'/>
            <img src={chat12} className='rounded-lg w-[45%]'/>
            <img src={chat13} className='rounded-lg w-[45%]'/>
        </div>
    </div>
  )
}
