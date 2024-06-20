 import {useState} from 'react';
 import TabProgram from '../tabs/TabProgram';
 import TabTeam from '../tabs/TabTeam';
 import TabThree from '../tabs/TabThree';
 import Tabs from '../tabs/Tabs';
 import '../styles/About.css'


export default function About() {

 const [activeTab, setActiveTab] = useState (0);
 

    return (
        <div className="aside-tab" >
        <div >
    <Tabs setActiveTab = {setActiveTab} />
    {activeTab === 0 && <TabProgram/>}
    {activeTab === 1 && <TabTeam/>}
    {activeTab === 2 && <TabThree/>}
    </div>

     
      </div>
    

    );
}