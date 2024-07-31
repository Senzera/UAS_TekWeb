import React from 'react';
import Navbar from '../navbar';
import {Link, usePage} from '@inertiajs/inertia-react';


function Layout({children}){
    const {auth} = usePage().props;
    return(
        <div>
            <Navbar auth={auth} />
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export default Layout