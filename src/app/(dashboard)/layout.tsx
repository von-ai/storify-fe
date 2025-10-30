import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/common/app-SideBar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <SidebarProvider>
        <AppSidebar />
        <main>{children}</main>
      </SidebarProvider>
    </main>
  );
};

export default DashboardLayout;
