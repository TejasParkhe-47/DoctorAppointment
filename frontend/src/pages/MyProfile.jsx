import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'

const MyProfile = () => {

 const [userData,setUserData] = useState({
  name:"Tejas parkhe",
  image:assets.profile_pic,
  email:'tejasparkhe43@gmail.com',
  ph:'705665334',
  address:{
    line1:"57th cross , richnmond",
    line2:"pune",
  },
  gender:"male",
  dob:"2004-27-06"
 })

 const [isEdit,setisEdit] = useState(false);


  return (
    
    <div classname="max-w-lg flex flex-col  gap-2 text-sm  ">
      
      <img src={userData.image} alt=""  className='w-36 rounded '/>
      {
        isEdit? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" onChange={e=>setUserData(prev=>({...prev,name:e.target.value}))} value={userData.name} /> :
         <p className='font-medium text-3xl text-neutral-800 mt-4'> {userData.name}</p>
      }

      <hr  className='bg-zinc-400 h-[1px] border-none'/>
      <div>
        <p className='text-neutral-500 underline mt-3'>Contact information</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-500'>
          <p>
            email id : 
          </p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {
            isEdit? <input type="text" value={userData.ph} onChange={e=>setUserData(prev=>({...prev,ph:e.target.value}))}/>:<p>{userData.ph}</p>
          }
          <p>Address  : </p>
          {
            isEdit? <p><input onChange={(e)=>setUserData(prev=>({...prev,address:{...prev.address.line1,line1:e.target.value}}))} value={userData.address.line1} type="text" /><br /><input type="text" onChange={(e)=>setUserData(prev=>({...prev,address:{...prev.address.line2,line2:e.target.value}}))} value={userData.address.line2}/></p>
            :
            <p>{userData.address.line1}<br />{userData.address.line2}</p>
          }
        </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>info</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-600'>
          <p>Gender:</p>
          {
            isEdit?<select onChange={(e)=>setUserData(prev=>({...prev,gender:e.target.value}))} value={userData.gender}>
              
              <option value="male">male</option>
              <option value="female">female</option>

            </select>
            :<p>{userData.gender}</p>
          }
          <p>Birthday</p>
          {
            isEdit? 
            <input type='date' onChange={(e)=>setUserData(prev=>({...prev,dob:e.target.value}))} value={userData.dob}></input>
            : <p>{userData.dob}</p>
          }
        </div>



        <div className='  mt-10'>
          {
            isEdit? <button  className='border border-purple-700 px-8 py-2 rounded-full hover:text-white hover:bg-purple-600 transition-all duration-300' onClick={()=>setisEdit(false)}>save info</button > 
            : <button className='border border-purple-700 px-8 py-2 rounded-full hover:text-white hover:bg-purple-600 transition-all duration-300' onClick={()=>setisEdit(true)}>Edit</button>
          }
        </div>
      </div>

    </div>
    
  )
}

export default MyProfile
