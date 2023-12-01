import { Helmet } from 'react-helmet-async';
import MenuCover from '../../Shared/MenuCover/MenuCover';
import img from "../../../assets/menu/banner3.jpg"
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../Shared/SectionTitle';
import MenuCategorie from '../Menu Category/MenuCategorie';
import desertbg from "../../../assets/menu/dessert-bg.jpeg"
import pizzabg from "../../../assets/menu/pizza-bg.jpg"
import saladbg from "../../../assets/menu/salad-bg.jpg"
import soupbg from "../../../assets/menu/soup-bg.jpg"

import { useEffect } from 'react';

const Menu = () => {

    const [menu] = useMenu();
    const desert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);



    return (
        <div className='max-w-screen-2xl mx-auto px-4' >
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>



            <MenuCover img={img} title={'OUR MENU'}
                description={'Would you like to try a dish?'}>
            </MenuCover>
            <div className='mt-12 lg:mt-32'>
                <SectionTitle subHeading={'---Do not miss---'}
                    heading={'TODAYS OFFER'} ></SectionTitle>
            </div>

            <div className=''>
                {/* offered menu items  */}

                <MenuCategorie items={offered} title={'offered'}></MenuCategorie>
                

                {/* desert menu  */}

                <div className='mt-12'>
                <MenuCover img={desertbg} title={'DESSERTS'}
                description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCover>

                <MenuCategorie items={desert} title={'dessert'}></MenuCategorie>
                
                </div>



                {/* pizza menu  */}

                <div className='mt-12'>
                <MenuCover img={pizzabg} title={'PIZZA'}
                description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCover>

                <MenuCategorie items={pizza} title={'pizza'}></MenuCategorie>
                
                </div>


                {/* Salad menu  */}

                <div className='mt-12'>
                <MenuCover img={saladbg} title={'SALADS'}
                description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCover>

                <MenuCategorie items={salad} title={'salad'} ></MenuCategorie>
                
                </div>


                {/* soup menu  */}

                <div className='mt-12'>
                <MenuCover img={soupbg} title={'SOUPS'}
                description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCover>

                <MenuCategorie items={soup} title={'soup'}></MenuCategorie>
               
                </div>

                
            </div>

        </div>
    );
};

export default Menu;