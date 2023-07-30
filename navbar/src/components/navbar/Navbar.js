import React, {useState} from 'react'
import styles from './navbar.module.css'
import { FaBars } from 'react-icons/fa6'

const Navbar = () => {

    const [hidden, setHidden] = useState(true)

    const burgerClick = () =>{
        setHidden(prev => !prev)
    }

  return (
    
        <nav>   
            <div className={styles.nav_container}>

                <div className={styles.logo_home}>
                    {/* logo */}
                    <div className={styles.logo}>
                        <img src='/car-512.png' alt='logo' className={styles.logo_image} />
                        <h4>Logo</h4>
                    </div>

                    {/* Home Nav */}
                    <div >
                        <button>Home</button>
                    </div>
                </div>

                <div className={styles.tabs}>
                    {/* Tabs */}
                    <div>
                        <button>Tab 1</button>
                    </div>
                    <div>
                        <button>Tab 2</button>
                    </div>
                    <div>
                        <button>Tab 3</button>
                    </div>
                    <div>
                        <button>Tab 4</button>
                    </div>
                </div>

                <div>
                    <button 
                        onClick={burgerClick} 
                        className={styles.tabs_bars} >
                            <FaBars/>
                    </button>
                </div>

            </div>
       
         {/* Mobile Nav */}
        <div className={`${styles.tabs_mobile_view} ${hidden ? 'hidden':''}`}>
                {/* Tabs mobile view */}
            <div>
                <button>Tab 1</button>
            </div>
            <div>
                <button>Tab 2</button>
            </div>
            <div>
                <button>Tab 3</button>
            </div>
            <div>
                <button>Tab 4</button>
            </div>
        </div>

        </nav>
  )
}

export default Navbar