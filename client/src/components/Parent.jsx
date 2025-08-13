import React, { useState } from 'react'
import GlobalDialog from '../components/GlobalDialog'
import { Box ,Button} from "@mui/material";


const Parent = () => {
    const[open,setOpen]=useState(true);

    const dialogData={
        title:{
              "Lunch Marking Hours": "2PM to 12 AM",
      "Evening Food Marking Hours": "10AM to 3PM",
        },
        body:[
            {bodyTitle:"Lunch Tomorrow", checkBox:false},
            {bodyTitle:"Food For Evening", checkBox:true}
        ],
        close:true,

        
    };
  return (

    <Box>

    <GlobalDialog open={open} setOpen={setOpen} data={dialogData} />
  </Box>
  )

}

export default Parent
