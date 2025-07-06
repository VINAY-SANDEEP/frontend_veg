import Navbar from './NavBar';
import Sidebar from './SideBar';

import { useState } from 'react';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1">
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="p-6 bg-green-50 min-h-screen overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}