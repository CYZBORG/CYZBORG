import React from 'react';
import {createRoot} from 'react-dom/client';
import Home from '../app/page';
import Admin from './admin';
import {Privacy,Terms,Confirmed} from '../components/legal';
import CalculatorPage from '../components/calculator';
import '../app/globals.css';
import './admin.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><Route/></React.StrictMode>);
function Route(){const path=location.pathname.replace(/\/$/,'');if(path==='/admin')return <Admin/>;if(path==='/privacy'){document.title='Privacy Policy | CYZBORG';return <Privacy/>;}if(path==='/confirmed'){document.title='You’re in | CYZBORG';return <Confirmed/>;}if(path==='/calculator'){document.title='Calorie & Macro Calculator | CYZBORG';return <CalculatorPage/>;}if(path==='/terms'){document.title='Terms of Use | CYZBORG';return <Terms/>;}return <Home/>;}
