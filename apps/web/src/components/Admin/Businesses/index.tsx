import adminStyles from '@components/Common/admin.module.scss';
import { Input } from '@components/Input/Input';
import type { Metadata, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

import { AdminCards } from './AdminCards';
import { AdminDropdowns } from './AdminDropdowns';
import { AdminTabPanel } from './AdminTabPanel';

export const metadata: Metadata = {
  title: 'Admin Businesses'
};
const AdminBusinesses: NextPage = () => {
  return (
    <div className={adminStyles.admin}>
      <section>
        <AdminTabPanel />
        <Input
          placeholder="Search"
          prefixIcon={
            <Image
              height={20}
              width={20}
              alt="h"
              src={'/assets/images/search-sm.svg'}
            />
          }
          style={{ margin: '24px 0' }}
        />
        <AdminDropdowns />
        <AdminCards />
      </section>
    </div>
  );
};

export default AdminBusinesses;
