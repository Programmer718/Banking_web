import React from 'react'
import styles from './style'

import { Clients,Billing,Buisness,CardDeal,CTA,Footer,Navbar,Testimonial,Welcome,Stats } from './Components'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className= {`${styles.paddingX} ${styles.flexCenter}` } >

        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexCenter}`}>

        <div className={`${styles.boxWidth}`}>
         <Welcome/>
        </div>
       </div>
    
       <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <Stats/>
              
              <Billing/> 
              <CardDeal/> 
              <Testimonial/> 
              <Clients/> 
              <Buisness/>
              <CTA/> 
              
             
             <Footer/>
             </div>
             </div>

    
    </div>
  )
}

export default App