'use client'
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import  '../../Styles/Home.css'
// import { useClient } from 'next/clients';
import Image from 'next/image'
import axios from 'axios';
import ServiceCard from '../../Component/ServiceCard';
import { ServiceData } from './Data';
import { rubik, bebas } from '../../assets/fonts/fonts';


function Content() {
    const [Data, setData] = useState({})


   

    return (
        <div className='contentWrapper' >
            <div className='CTASection' >
                <h1 className='headingStyle' >SERVICES</h1>
            </div>
            {ServiceData?.map((item, index) => {
                return(
                    <ServiceCard data={item} />

                )
            })}
        </div>
    )
}

export default Content;

