 import {useState} from 'react';
 import TabProgram from '../tabs/TabProgram';
 import TabTeam from '../tabs/TabTeam';
 import TabPartners from '../tabs/TabPartners';
 import Tabs from '../tabs/Tabs';
 
 import './About.css'


export default function About() {

 const [activeTab, setActiveTab] = useState (0);

 
 

    return (
        <div className="aside-tab" >
        
    <Tabs setActiveTab = {setActiveTab} />
    {activeTab === 0 && <TabProgram/>}
    {activeTab === 1 && <TabTeam/>}
    {activeTab === 2 && <TabPartners/>}
    </div>
    

    );
}