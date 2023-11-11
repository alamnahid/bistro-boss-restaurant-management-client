import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg"
import MenuCover from "../../Shared/MenuCover/MenuCover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../Order Tab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)

    const [menu] = useMenu();

    const desert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>

            <div>
                <MenuCover img={orderCover} title={'OUR SHOP'}
                    description={'Would you like to try a dish?'}>
                </MenuCover>
            </div>

           <div className="max-w-screen-2xl mx-auto">

           <Tabs className="text-black text-center mt-32 text-2xl font-medium uppercase" defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>deserts</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad} ></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={pizza} ></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={soup} ></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={desert} ></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={drinks} ></OrderTab>
                </TabPanel>
            </Tabs>


           </div>
        
        </div>
    );
};

export default Order;