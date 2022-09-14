import React from 'react'
import { BsShopWindow } from 'react-icons/bs'
import {FaShoppingBag} from 'react-icons/fa'

const LittleSchop = () => {
  return (
    <div className='littleShop'>
        <div className="shopNav">
            <div className="shopTitle">            
                <BsShopWindow/>
                <p> Shoping room</p>                                 
                <FaShoppingBag />
            </div>
            <div className="shopBody">
                <p>Products in stoke for now</p>
            </div>
             
        </div>

    </div>
  )
}

export default LittleSchop