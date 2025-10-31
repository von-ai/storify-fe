'use client';
import { SidebarProvider, useSidebar } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/common/app-SideBar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  // const { open } = useSidebar();
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="min-w-[83.2vw] pr-8">{children}</main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
