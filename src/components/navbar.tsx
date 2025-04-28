import React from 'react'

import { DatePickerWithRange } from './dateRenge'
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

function Navbar() {
  return (

    <div className=' grid grid-cols-2 place-items-center gap-4 mx-4 pt-2'>

     <div >
    <DatePickerWithRange/>
     </div>

        <div className='flex flex-col  space-y-4 justify-center  items-start '>

       
       <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Recently Viewed Documents</Label>
    </div>

    <div>
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Recently Viewed Pages</Label>
    
    </div>
       </div>

        </div>

       

        
        </div>
  )
}

export default Navbar