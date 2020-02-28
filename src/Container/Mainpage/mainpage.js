import React from 'react'
import Section1 from '../../Components/Sections/Section1/section1';
import Section2 from '../../Components/Sections/Section2/section2';
import Section3 from '../../Components/Sections/Section3/section3';
import Section4 from '../../Components/Sections/Section4/section4';
import Footer from '../../Components/Sections/footer/footer'
export default function mainpage() {
    return (
        <div>
           

           <Section1/>
           <Section2/>
           <Section3/>
           <Section4/>
           <Footer/>
        </div>
    )
}
