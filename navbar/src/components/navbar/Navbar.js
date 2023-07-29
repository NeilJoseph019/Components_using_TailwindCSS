import React from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
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
                    <div className={styles.home}>
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

            </div>
       
         {/* Mobile Nav */}
        </nav>
  )
}

export default Navbar