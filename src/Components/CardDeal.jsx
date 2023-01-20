import {card} from '../assets'

import styles, {layout} from '../style'
 
import Button from './Button'

const CardDeal = () => 
 (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal llin few easy steps <br className='sm:block hidden ' /> in a few easy steps. 
  </h2>
          <p className={`${styles.paragraph} max-w[470px] mt-5`}>
            fjdls ajkl asfjk
            fdsljfksla
             fjksdlaj flkskaf
              sfjdkldfjalksjfwefhuehuuhuhhfhfjsdhjdshfuihweuifuhfhuffhuwrejwjfa nvjhuifuwhewjhuwij fddjfewuj nhfuwrjisvndfdhgur nvshfu fuwejr nsfzhfu jf u4 fs
          </p>
          <Button styles='mt-10' />

      
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]'/>

      </div>
    </section>
  )

export default CardDeal