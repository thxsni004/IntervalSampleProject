import React, { useState } from 'react'
import GlobalDialog from '../components/GlobalDialog'
import { Box ,Button} from "@mui/material";


const Parent = () => {
    const[open,setOpen]=useState(true);
    const[confirm,setconfirm]=useState(false)

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

    const confirmData={
      title:{"confirm Action":""},
      message:"Do you really want to delete this item?",
      close:true,
    };
  return (

    <Box>

    <GlobalDialog open={open} setOpen={setOpen} data={dialogData} />

    <Button variant='outlined' color='black' sx={{ml:4}} onClick={()=>setconfirm(true)}>Show confir Dialog</Button>
<GlobalDialog 
open={confirm}
setOpen={setconfirm}
data={confirmData}
type="confirm"
  confirmBtnText="Yes"    // default works too
  cancelBtnText="No" 
onConfirm={()=>console.log("Yes clicked")}
onCancel={()=>console.log("No clicked")}
/>

  </Box>

  )

}

export default Parent
