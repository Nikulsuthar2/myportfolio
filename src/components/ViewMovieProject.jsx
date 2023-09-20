import {Link} from 'react-router-dom';

import chat1 from '../assets/project/index.png';
import chat2 from '../assets/project/userlogin.png';
import chat3 from '../assets/project/usersignup.png';
import chat4 from '../assets/project/forgotpassword.png';
import chat5 from '../assets/project/resetpassword.png';
import chat6 from '../assets/project/user home.png';
import chat7 from '../assets/project/usersearch.png';
import chat8 from '../assets/project/user chat.png';
import chat9 from '../assets/project/blockuser.png';
import chat10 from '../assets/project/editProfile.png';
import chat11 from '../assets/project/admin dashboard.png';
import chat12 from '../assets/project/admin user list.png';
import chat13 from '../assets/project/admin chat report.png';
import { useEffect } from 'react';

export const ViewMovieProjectScreenshot = () => {
    useEffect(() => {
      window.scrollTo(0,0);
    }, [])
    
  return (
    <div className='p-10'>
        <div className='flex justify-between items-center'>
            <label className='font-bold text-[40px]'>Online Movie Streamin & Subsciption System</label>
            <Link to={"/#Section-Projects"} className='px-5 py-2 rounded text-white bg-gray-800 hover:bg-gray-700'>Back</Link>
        </div>
        <div id='imagelist' className='mt-10 flex flex-wrap gap-5 justify-center items-center'>
            <img src={"/src/assets/project/movieindex.png"} className='rounded-lg w-[45%]'/>
            <img src={"/src/assets/project/movielogin.png"} className='rounded-lg w-[45%]'/>
            <img src={"/src/assets/project/moviesignup.png"} className='rounded-lg w-[45%]'/>
            <img src={"/src/assets/project/movieforgotpswd.png"} className='rounded-lg w-[45%]'/>
            <img src={"/src/assets/project/movieresetpswd.png"} className='rounded-lg w-[45%]'/>
            <img src={"/src/assets/project/moviehome.png"} className='rounded-lg w-[45%]'/>
            <img src={"/src/assets/project/moviehome2.png"} className='rounded-lg w-[45%]'/>
            <img src={"/src/assets/project/moviesearch.png"} className='rounded-lg w-[45%]'/>
            <img src={"/src/assets/project/movieplayer.png"} className='rounded-lg w-[45%]'/>
            <img src={"/src/assets/project/moviedetails.png"} className='rounded-lg w-[45%]'/>
            <img src={"/src/assets/project/movieprofile.png"} className='rounded-lg w-[45%]'/>
            <img src={"/src/assets/project/subscription.png"} className='rounded-lg w-[45%]'/>
            <img src={"/src/assets/project/moviepayment.png"} className='rounded-lg w-[45%]'/>
            <img src={"/src/assets/project/moviepayrecipt.png"} className='rounded-lg w-[45%]'/>

            <img src={"/src/assets/project/movieadmindash.png"} className='rounded-lg w-[45%]'/>
            <img src={"/src/assets/project/movieuserlist.png"} className='rounded-lg w-[45%]'/>
            <img src={"/src/assets/project/moviemanage.png"} className='rounded-lg w-[45%]'/>
            <img src={"/src/assets/project/movieadd.png"} className='rounded-lg w-[45%]'/>
            <img src={"/src/assets/project/movieupdate.png"} className='rounded-lg w-[45%]'/>
            <img src={"/src/assets/project/movieupdate2.png"} className='rounded-lg w-[45%]'/>
            <img src={"/src/assets/project/movielistreport.png"} className='rounded-lg w-[45%]'/>
            <img src={"/src/assets/project/movieactor.png"} className='rounded-lg w-[45%]'/>
            <img src={"/src/assets/project/movieaddactor.png"} className='rounded-lg w-[45%]'/>
            <img src={"/src/assets/project/movieupdateactor.png"} className='rounded-lg w-[45%]'/>
            <img src={"/src/assets/project/moviesubplan.png"} className='rounded-lg w-[45%]'/>
            <img src={"/src/assets/project/movieaddsubplan.png"} className='rounded-lg w-[45%]'/>
            <img src={"/src/assets/project/movieupdatesubplan.png"} className='rounded-lg w-[45%]'/>
            <img src={"/src/assets/project/moviepaymentdetails.png"} className='rounded-lg w-[45%]'/>
        </div>
    </div>
  )
}
