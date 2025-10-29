'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { sidebarItems } from '@/lib/sidebar-items';
import { Button } from '../ui/Button';
import { PersonStanding } from 'lucide-react';

export function AppSidebar() {
  const { toggleSidebar, open } = useSidebar();
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center">Storify</SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        {sidebarItems.map((item) => (
          <SidebarMenuItem key={item.title} className="mx-2 ">
            <SidebarMenuButton
              asChild
              className="hover:bg-black hover:text-white hover:font-medium transition ease-in-out duration-300"
            >
              <a href={item.url}>
                <item.icon />
                <span className="">{item.title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem className="flex justify-center m-2">
            <Button className="w-full hover:bg-white hover:border-2 hover:border-black hover:text-black p-2">
              <PersonStanding />
              {!open ? null : <span>Username</span>}
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
