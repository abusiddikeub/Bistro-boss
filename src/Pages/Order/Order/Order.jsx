import React, { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Home/Home/shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
               const categories =['salad','pizza', 'soup','dessert','drinks']
                // title name dawar jonno 
                const {category} = useParams();
                console.log(category);
                const initialIndex = categories.indexOf(category);
               //  initialIndex ta k state ar modda dite hba 
               //  ===========================

               // ay state nawa hosche tab k index hisaba dekano
               const [tabIndex,setTabIndex] = useState(initialIndex)

               // use Hook theka data asche ---
               const [menu] = useMenu();
               // pottak ta category k filter kore tar modda theka salad,pizz arokm 
               // item gulo k nia asche 

               const desserts = menu.filter(item => item.category === 'dessert')
               const salad = menu.filter(item => item.category === 'salad')
               const pizza = menu.filter(item => item.category === 'pizza')
               const soup = menu.filter(item => item.category === 'soup')
               const drinks = menu.filter(item => item.category === 'drinks')
  return (
    <div>
      <Cover img={orderCover} title="Order Food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList className="text-center mt-4 mb-7 ">
    <Tab >Salad</Tab>
    <Tab >Pizza</Tab>
    <Tab >Soup</Tab>
    <Tab >Dessert</Tab>
    <Tab >Drinks</Tab>
  </TabList>

  <TabPanel>

<OrderTab items={salad} title="salad"></OrderTab>
  </TabPanel>

  <TabPanel>
  <OrderTab items={pizza}></OrderTab>  
  </TabPanel>
  <TabPanel>
  <OrderTab items={soup}></OrderTab>            
  </TabPanel>
  <TabPanel>
  <OrderTab items={desserts}></OrderTab>  
  </TabPanel>
  <TabPanel>
  <OrderTab items={drinks}></OrderTab>  
  </TabPanel>
</Tabs>
    </div>
  );
};

export default Order;
