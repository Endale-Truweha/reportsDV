import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { Button } from './ui/button'

function Navbar() {
  return (

    <div className=' grid grid-cols-2 place-items-center gap-4 mx-4 '>

     <div >
     <Button variant="outline" className=' border-0'>last hour</Button>
     </div>

        <div className=' '>

       

        <NavigationMenu >
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>weekly</NavigationMenuTrigger>

      <NavigationMenuContent>
        <NavigationMenuLink className='w-fit'>week_1</NavigationMenuLink>
        <NavigationMenuLink  className='w-fit'>week_2</NavigationMenuLink>
        <NavigationMenuLink  className='w-fit'>week_2</NavigationMenuLink>
        
     
      </NavigationMenuContent>



    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

        </div>

       

        
        </div>
  )
}

export default Navbar