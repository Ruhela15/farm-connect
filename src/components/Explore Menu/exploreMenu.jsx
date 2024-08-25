import React from 'react'
import './exploreMenu.css'
import { menu_list } from '../.../assets/assets'

const exploreMenu=()=>{
    return(
        <div classname='explore-menu' id='explore-menu'>
            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam saepe temporibus, perferendis suscipit molestiae explicabo in impedit iste ducimus? Quibusdam.</p>
            <div className="explore-menu-list">
                {menu_list.map((item,index)=>{
                    return(
                        <div key={index}
                        className=''>
                          <img src="item.menu_image" alt="" />
                          <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default exploreMenu