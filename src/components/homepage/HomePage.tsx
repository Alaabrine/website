import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import * as motion from "motion/react-client";
import * as mui from '@mui/material';

import "../ui/backgroundstyle.css";



/*
    This is the main page that loads when a user enters
    in the URL (In english!)
    
    params:
    l: string = Language (en/fr/ar)
*/
function HomePage(){ //(l: string = "en"){


    return (
        <>
        <div className='homepage-article'>
            Homepage
        </div>
        </>
    )

}

export default HomePage