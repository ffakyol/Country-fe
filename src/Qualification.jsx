import React from 'react';
import  {useState} from "react";
import "./App.css";
import  GridView  from './GridView';
import  ListView  from './ListView';
import GridViewIcon from '@mui/icons-material/GridView';
import { IconButton } from "@mui/material";
import ReorderIcon from '@mui/icons-material/Reorder';



const Qualification = () => {
    

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (

    <section>                

        <div className="qualification_container container">
            <div >
                <div onClick= {() => toggleTab(1)}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
          
                      sx={{
                         borderRadius: 5,
                        
                        "&:hover": {
                     backgroundColor: "transparent",
                           cursor: "default", }}} >
                    
                    < GridViewIcon sx={{ fontSize: 50 }}
                         color="success">
            
                    </GridViewIcon>
                </IconButton> 
                 </div>
                 <div onClick= {() => toggleTab(2)}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
          
                      sx={{
                         borderRadius: 5,
                         
                        "&:hover": {
                     backgroundColor: "transparent",
                           cursor: "default", }}} >
                    
                    < ReorderIcon sx={{ fontSize: 50 }}
                         color="success">
            
                    </ReorderIcon>
                </IconButton> 
                 </div>
                
            </div>

            <div>
            </div>   
                <div className={toggleState === 1? 
                "qualification_content qualification_content-active" : "qualification_content"}>
                     <GridView/> 

                </div>

                <div className={toggleState === 2? 
                "qualification_content qualification_content-active" : "qualification_content"}>
               <ListView/> 

                </div>
            </div>
       
        
    </section>
  )
}

export default Qualification