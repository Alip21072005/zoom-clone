import { ReactNode } from 'react';

import StreamVideoProvider from '@/providers/StreamClientProvider';

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      {/* Membungkus seluruh aplikasi dengan StreamVideoProvider untuk menyediakan konteks video */}
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
