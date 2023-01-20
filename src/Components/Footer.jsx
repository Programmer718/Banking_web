import styles from '../style'
import {footerLinks, socialMedia } from '../constants'
import {logo } from '../assets'

const Footer = () => (

  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
  
  <div className={`${styles.flexStart} md:flex-row flex-xol mb-8 w-full`}>

    <div className='flex-row justify-start mr-10'>
      <img src={logo} alt="hoobank" className='w-[240px] h-[72px] object-contain' />
      <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
        A new way to make the payments easy, reliable and secure
      </p>
    </div>
    </div>

    <div className='flex[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
      
      {footerLinks.map((footerLink)=>(
        <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>

         <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
           {footerLink.title}
         </h4>

         <ul className='list-none mt-4'>
           {footerLink.links.map((link,index)=>(
             <li key={link.id} className={`font-normal font-poppins text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4`}>

               {link.name}


             </li>
           ))}
         </ul>
        </div>
      ))}
    </div>


<div className='border-t-[1px] border-t-[#3fer45] w-full flex justify-between flex-col md:flex-row pt-6 items-center'>
  <p className='font-poppins font-medium text-[18px] leading-[27px] text-white text-center'>
    2022 HooBank. All Rights reserved.
  </p>

  <div className='flex flex-row md:mt-0 mt-6'>
  {
    socialMedia.map((social,index)=>(
      <img key={social.id}
      src={social.icon}
      alt={social.id}
      className='m-5 cursor-pointer'/>
    ))
  }
  </div>
</div>
  

  </section>
  
    
  )

export default Footer