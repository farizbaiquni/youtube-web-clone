import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import SidebarMinimal from '../components/SidebarSidebarMinimal'
import SidebarFull from '../components/SidebarFull'

function Dashboard() {

    //Sidebar option : normal, mini, full;
    const[isNormal, setIsNormal] = useState(true);
    const[isMini, setIsMini] = useState(false);
    const[isFull, setIsFull] = useState(false);
    const[sizeContent, setSizeContent] = useState(0);

    return (
        <div >
        <Header 
            isNormal={isNormal} setIsNormal={setIsNormal} 
            isMini={isMini} setIsMini={setIsMini}
            isFull={isFull} setIsFull={setIsFull}
            setSizeContent={setSizeContent}
        />            
            <Sidebar isNormal={isNormal} />
            <SidebarMinimal isMini={isMini}/>
            <SidebarFull isNormal={isNormal} setIsNormal={setIsNormal} isFUll={isFull} setIsFull={setIsFull}/>
            <div className={`absolute mt-16 bg-gray-100 
                ${isNormal ? `lg:left-56 lg-max:left-20 sm-max:left-0` : ``} ${isMini ? `sm:left-20` : ``} ${isFull ? `sm:left-20` : ``} `}
            >
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero omnis sint vel alias, sed nesciunt voluptate nulla animi, repudiandae cupiditate atque ab consequatur cum dolor error blanditiis iste at vero. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, esse dolores. Fugit praesentium earum recusandae aliquid ullam, quaerat, cumque labore unde iusto sunt veritatis atque eius minima dolorem, omnis aut! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sapiente quasi nisi nesciunt ut sunt repudiandae, at temporibus sequi molestiae neque, modi asperiores laboriosam repellendus saepe! Aut eius praesentium id.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero omnis sint vel alias, sed nesciunt voluptate nulla animi, repudiandae cupiditate atque ab consequatur cum dolor error blanditiis iste at vero. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, esse dolores. Fugit praesentium earum recusandae aliquid ullam, quaerat, cumque labore unde iusto sunt veritatis atque eius minima dolorem, omnis aut! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sapiente quasi nisi nesciunt ut sunt repudiandae, at temporibus sequi molestiae neque, modi asperiores laboriosam repellendus saepe! Aut eius praesentium id.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero omnis sint vel alias, sed nesciunt voluptate nulla animi, repudiandae cupiditate atque ab consequatur cum dolor error blanditiis iste at vero. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, esse dolores. Fugit praesentium earum recusandae aliquid ullam, quaerat, cumque labore unde iusto sunt veritatis atque eius minima dolorem, omnis aut! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sapiente quasi nisi nesciunt ut sunt repudiandae, at temporibus sequi molestiae neque, modi asperiores laboriosam repellendus saepe! Aut eius praesentium id.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero omnis sint vel alias, sed nesciunt voluptate nulla animi, repudiandae cupiditate atque ab consequatur cum dolor error blanditiis iste at vero. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, esse dolores. Fugit praesentium earum recusandae aliquid ullam, quaerat, cumque labore unde iusto sunt veritatis atque eius minima dolorem, omnis aut! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sapiente quasi nisi nesciunt ut sunt repudiandae, at temporibus sequi molestiae neque, modi asperiores laboriosam repellendus saepe! Aut eius praesentium id.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero omnis sint vel alias, sed nesciunt voluptate nulla animi, repudiandae cupiditate atque ab consequatur cum dolor error blanditiis iste at vero. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, esse dolores. Fugit praesentium earum recusandae aliquid ullam, quaerat, cumque labore unde iusto sunt veritatis atque eius minima dolorem, omnis aut! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sapiente quasi nisi nesciunt ut sunt repudiandae, at temporibus sequi molestiae neque, modi asperiores laboriosam repellendus saepe! Aut eius praesentium id.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero omnis sint vel alias, sed nesciunt voluptate nulla animi, repudiandae cupiditate atque ab consequatur cum dolor error blanditiis iste at vero. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, esse dolores. Fugit praesentium earum recusandae aliquid ullam, quaerat, cumque labore unde iusto sunt veritatis atque eius minima dolorem, omnis aut! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sapiente quasi nisi nesciunt ut sunt repudiandae, at temporibus sequi molestiae neque, modi asperiores laboriosam repellendus saepe! Aut eius praesentium id.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero omnis sint vel alias, sed nesciunt voluptate nulla animi, repudiandae cupiditate atque ab consequatur cum dolor error blanditiis iste at vero. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, esse dolores. Fugit praesentium earum recusandae aliquid ullam, quaerat, cumque labore unde iusto sunt veritatis atque eius minima dolorem, omnis aut! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sapiente quasi nisi nesciunt ut sunt repudiandae, at temporibus sequi molestiae neque, modi asperiores laboriosam repellendus saepe! Aut eius praesentium id.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero omnis sint vel alias, sed nesciunt voluptate nulla animi, repudiandae cupiditate atque ab consequatur cum dolor error blanditiis iste at vero. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, esse dolores. Fugit praesentium earum recusandae aliquid ullam, quaerat, cumque labore unde iusto sunt veritatis atque eius minima dolorem, omnis aut! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sapiente quasi nisi nesciunt ut sunt repudiandae, at temporibus sequi molestiae neque, modi asperiores laboriosam repellendus saepe! Aut eius praesentium id.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero omnis sint vel alias, sed nesciunt voluptate nulla animi, repudiandae cupiditate atque ab consequatur cum dolor error blanditiis iste at vero. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, esse dolores. Fugit praesentium earum recusandae aliquid ullam, quaerat, cumque labore unde iusto sunt veritatis atque eius minima dolorem, omnis aut! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sapiente quasi nisi nesciunt ut sunt repudiandae, at temporibus sequi molestiae neque, modi asperiores laboriosam repellendus saepe! Aut eius praesentium id.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero omnis sint vel alias, sed nesciunt voluptate nulla animi, repudiandae cupiditate atque ab consequatur cum dolor error blanditiis iste at vero. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, esse dolores. Fugit praesentium earum recusandae aliquid ullam, quaerat, cumque labore unde iusto sunt veritatis atque eius minima dolorem, omnis aut! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sapiente quasi nisi nesciunt ut sunt repudiandae, at temporibus sequi molestiae neque, modi asperiores laboriosam repellendus saepe! Aut eius praesentium id.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero omnis sint vel alias, sed nesciunt voluptate nulla animi, repudiandae cupiditate atque ab consequatur cum dolor error blanditiis iste at vero. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, esse dolores. Fugit praesentium earum recusandae aliquid ullam, quaerat, cumque labore unde iusto sunt veritatis atque eius minima dolorem, omnis aut! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sapiente quasi nisi nesciunt ut sunt repudiandae, at temporibus sequi molestiae neque, modi asperiores laboriosam repellendus saepe! Aut eius praesentium id.</p>
            </div>
        </div>
              
    )
}

export default Dashboard
