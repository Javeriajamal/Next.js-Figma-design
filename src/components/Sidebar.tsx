'use client'

import { Contact, Heart, Home, Logs, LogsIcon, Notebook, ShoppingCart, User } from "lucide-react";
import { SidebarItems } from "@/Types";
import { SidebarMobile } from "./Sidebar-mobile";


const sidebarItems: SidebarItems = {

        links: [
          
          { label: 'Home', href: '/', icon: Home },
          { label: 'Contact', href: '/contact', icon: Contact },
          {href: '/item/profile', icon: User, label: 'Profile'},
          { label: 'About',icon: Notebook, href: '/about' },
          { label: 'Blog',icon: Logs, href: '/blog' },
          {href: '/item/cart', icon: ShoppingCart, label: 'Add to Cart'},
          {href: '/item/wishlist', icon: Heart , label: 'Wishlist'},

        ],
}

export function Sidebar() {
  
    return <SidebarMobile sidebarItems={sidebarItems} />;

}
    
