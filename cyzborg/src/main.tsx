import React from 'react';
import {createRoot} from 'react-dom/client';
import Home from '../app/page';
import Admin from './admin';
import '../app/globals.css';
import './admin.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode>{location.pathname.replace(/\/$/,'')==='/admin'?<Admin/>:<Home/>}</React.StrictMode>);
