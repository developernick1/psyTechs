import React, { useEffect, useState } from 'react'
import '../../Styles/Home.css'
import LogoIcon from '../../assets/Images/Logo.png'
import Image from 'next/image'
import { makeStyles } from '@material-ui/core';

function Header() {
    const classes = useStyles();
    const [active, setActive] = useState(false);



    const data = [
        { name: "Home", Link: "/" },
        { name: "Problems", Link: "/problems" },
        {
            name: "Team",
            Link: "/team",
        },
        {
            name: "Events",
            Link: "/events",
        },
    ];

 

    // const openModal = () => {
    //      setActive(!active)
    //     document.body.classList.add('disable-scroll'); // Add disable-scroll class to body
    //   };
    
    //   const closeModal = () => {
    //     setIsModalOpen(false);
    //     document.body.classList.remove('disable-scroll'); // Remove disable-scroll class from body
    //   };
    


    
    return (
        <div className={ active === true ? classes.containerAfterActive :  classes.container}>
            <div className={classes.wrapper}>
                <Image
                    src={LogoIcon}
                    width={70}
                    height={70}
                    alt="Picture of the Logo" />
                <div className={classes.wrapperTap} onClick={() => setActive(!active)}>
                    <div onClick={() => setActive(!active)}
                        className={active === true ? classes.activeHamburger : classes.hamburber}
                    />
                </div>
            </div>
            <div className={active === true ? classes.activeSidenav : classes.sidenav}>

                {data.map((item, i) => (
                    <div className={classes.divText} >
                        <a href="#" className={classes.a}>
                            {item.name}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Header



const useStyles = makeStyles((theme) => ({

    
    container: {
        background: '#0A0A0A',
        
    },
    containerAfterActive: {
        background: '#0A0A0A',
        position: "fixed",
        width: "100vw",
        height: "100vh",
    },
    wrapper: {
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    img: {
        width: "40px",
    },
    wrapperTap: {
        // background: "pink",
        height: "30px",
        // position: 'absolute',
    },
    hamburber: {
        width: "30px",
        height: "3px",
        marginTop: '10px',
        // background: "#fff",
        background: "#3FFF95",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgb(255, 101, 47,.2)",
        transition: "all 0.5s ease-in-out",
        "&::before": {
            content: "''",
            position: "absolute",
            width: "30px",
            height: "3px",
            // background: "#fff",
            background: "#3FFF95",
            borderRadius: "5px",
            transition: "all 0.5s ease-in-out",
            transform: "translateY(-10px)",
        },
        "&::after": {
            content: "''",
            position: "absolute",
            width: "30px",
            height: "3px",
            // background: "#fff",
            background: "#3FFF95",
            borderRadius: "5px",
            transition: "all 0.5s ease-in-out",
            transform: "translateY(10px)",
        },
    },
    activeHamburger: {
        width: "30px",
        height: "3px",
        borderRadius: "5px",
        transform: "translateX(-50px)",
        background: "transparent",
        // background: "#3FFF95",
        transition: "all 0.5s ease-in-out",
        "&::before": {
            content: "''",
            position: "absolute",
            width: "30px",
            height: "3px",
            // background: "#fff",
            background: "#3FFF95",
            borderRadius: "5px",
            transition: "all 0.5s ease-in-out",
            transform: "rotate(45deg) translate(35px, -35px)",
        },
        "&::after": {
            content: "''",
            position: "absolute",
            width: "30px",
            height: "3px",
            // background: "#fff",
            background: "#3FFF95",

            borderRadius: "5px",
            transition: "all 0.5s ease-in-out",
            transform: "rotate(-45deg) translate(35px, 35px)",
        },
    },
    sidenav: {
        position: "fixed",
        width: "100vw",
        height: "100vh",
        background: '#0A0A0A',
        transform: "translateX(100%)",
        transition: "all 0.5s ease-in-out",
    },
    activeSidenav: {
        position: "fixed",
        width: "100vw",
        height: "100vh",
        background: '#0A0A0A',
        // background: 'red',
        transform: "translateX(0    %)",
        transition: "all 0.5s ease-in-out",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflowY: 'hidden',
    },

    divText: {
        // background: 'pink',
        margin: "5vh 0",
        color: "white",
    },
    a: {
        margin: "20px 0",
        color: "white",
    },

    
}));
