import { Fragment } from 'react'
import Header from './Header.jsx'
import Balance from './Balance.jsx'
import Table from './Table.jsx'
import ModalPopover from './ModalPopover.jsx'
import Pie from './Pie.jsx'
import { GlobalProvider } from '../context/GlobalState.js';
export default function Landing_page(){
    return(
        <GlobalProvider>
        <Header></Header>
        <br/>
        <div className='container'>
        <Balance></Balance>
        <br/>
        <ModalPopover></ModalPopover>
        <br/>
        <div className='row'>
            <div className='col-md-6 col-sm-12 col-xs-12'>
        <Table></Table>
        </div>
        <div className='col-md-6 col-sm-12 col-xs-12'>
        <Pie></Pie>
        </div>
        </div>
        </div>
        </GlobalProvider>
    )
}