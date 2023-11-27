import Cover from "../shared/cover/Cover";
import img from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import Foodcard from "./Foodcard";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories=['salad','pizza','dessert','drinks','soup']
  const {category}=useParams()
  const initialIndex=categories.indexOf(category)
    const [tabIndex,setTabIndex]=useState(initialIndex)
    const [menu]=useMenu()
    const dessert = menu.filter((item) => item.category == "dessert");
    const drinks = menu.filter((item) => item.category == "drinks");
    const salad = menu.filter((item) => item.category == "salad");
    const pizza = menu.filter((item) => item.category == "pizza");
    const offered = menu.filter((item) => item.category == "offered");
    return (
        <div >
            <Cover  img={img} title='order food'></Cover>
            <Tabs className="mt-4" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>salad</Tab>
        <Tab>pizza</Tab>
        <Tab>dessert</Tab>
        <Tab>drinks</Tab>
        <Tab>soup</Tab>
      </TabList>
      <TabPanel>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
       {
          salad.map(item=><Foodcard key={item._id} items={item}></Foodcard>)
        }
       </div>
      </TabPanel>
      <TabPanel> <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
       {
          pizza.map(item=><Foodcard key={item._id} items={item}></Foodcard>)
        }
       </div></TabPanel>
      <TabPanel>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
       {
          dessert.map(item=><Foodcard key={item._id} items={item}></Foodcard>)
        }
       </div>
      </TabPanel>
      <TabPanel>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
       {
          drinks.map(item=><Foodcard key={item._id} items={item}></Foodcard>)
        }
       </div>
      </TabPanel>
      <TabPanel>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
       {
          offered.map(item=><Foodcard key={item._id} items={item}></Foodcard>)
        }
       </div>
      </TabPanel>
    </Tabs>
        </div>
    );
};

export default Order;