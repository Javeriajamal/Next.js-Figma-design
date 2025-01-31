import { Button, ButtonProps } from "@mui/material";
import {LucideIcon} from 'lucide-react'; 
import { SheetClose } from "./ui/sheet";


interface SidebarButtonsProps extends ButtonProps {
    icon?: LucideIcon
}


export function SidebarButtons ({ icon: Icon, children, ...props }: SidebarButtonsProps) {

    return (

        <Button variant='Ghost' className="gap-2" {...props}>

            {Icon && <Icon size={20}/>}

            <span>{children}</span>

        </Button>
    );
}

export function SidebarButtonsSheet(props: SidebarButtonsProps){
    return(
        <SheetClose asChild>
            <SidebarButtons {...props} />
        </SheetClose>
    )
}