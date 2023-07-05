import React from 'react'
import styles from './Header.module.css'
import meal from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
const Header = (props) => {
  return (
   <React.Fragment>
    <header className={styles.header}>
        <h1>Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
    </header>
    <div className={styles['main-image']}>
        <img src={meal} alt="table full of food" />
    </div>
   </React.Fragment>
  )
}

export default Header
