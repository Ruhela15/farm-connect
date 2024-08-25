import React from 'react'
import './exploreMenu.css'
import { menu_list } from '../../assets/assets'

const Explore=({category,setCategory})=>{
    return(
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam saepe temporibus, perferendis suscipit molestiae explicabo in impedit iste ducimus? Quibusdam.</p>
            <div className="explore-menu-list">
                {menu_list.map((item,index)=>{
                    return(
                        <div
                        onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}
                        key={index}
                        className=''>
                          <img className={category===item.menu_name?"active":""} src = {item.menu.image} alt= {item.menu_name} />
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>

    )
}
export default Explore