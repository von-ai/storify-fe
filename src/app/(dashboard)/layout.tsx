import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/common/app-SideBar';
import { LayoutOpen } from '@/hooks/use-collapse';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <LayoutOpen children={children} />
    </SidebarProvider>
  );
};

export default DashboardLayout;
