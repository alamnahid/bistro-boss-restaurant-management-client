import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import MenuCover from "../Shared/MenuCover/MenuCover";
import contact from "../../assets/contact/banner.jpg"
import SectionTitle from "../Shared/SectionTitle";
import ContactCard from "./ContactCard";
import telephone from "../../assets/contact/telephone.svg"
import location from "../../assets/contact/location.svg"
import time from "../../assets/contact/time.svg"
import ContactForm from "./ContactForm";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div  className="max-w-screen-2xl mx-auto ">
             <Helmet>
                <title>Bistro Boss | Contact</title>
            </Helmet>

            <div>
                <MenuCover img={contact} title={'CONTACT US'}
                    description={'Would you like to try a dish?'}>
                </MenuCover>
            </div>

            <div className="mt-28">
                <SectionTitle subHeading={'---Visit Us---'} heading={'OUR LOCATION'}></SectionTitle>
            </div>

             <div className="flex flex-col mt-12 xl:flex-row justify-between items-center gap-8">
                <ContactCard image={telephone} title={'PHONE'} subtitle={'+38 (012) 34 56 789'}></ContactCard>
                <ContactCard image={location} title={'ADDRESS'} subtitle={'+38 (012) 34 56 789'}></ContactCard>
                <ContactCard image={time} title={'WORKING HOURS'} subtitle={'Mon - Fri: 08:00 - 22:00'}></ContactCard>

             </div>

             <div className="mt-16">
             <SectionTitle subHeading={'---Send Us a Message---'} heading={'CONTACT FORM'}></SectionTitle>
             <ContactForm></ContactForm>
             </div>
            
        </div> 
    );
};

export default Contact;