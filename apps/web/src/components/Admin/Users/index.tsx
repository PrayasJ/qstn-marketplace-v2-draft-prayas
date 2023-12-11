import adminStyles from '@components/Common/admin.module.scss';
import type { Metadata, NextPage } from 'next';
import React from 'react';

import { AdminCards } from './AdminCards';
import { AdminDropdowns } from './AdminDropdowns';
import { AdminDropdownSearch } from './AdminDropdownSearch';
import { AdminTabPanel } from './AdminTabPanel';

export const metadata: Metadata = {
  title: 'Admin Users'
};
const AdminUsers: NextPage = () => {
  return (
    <div className={adminStyles.admin}>
      <section>
        <AdminTabPanel />
        <AdminDropdownSearch />
        <AdminDropdowns />
        <AdminCards />
      </section>
    </div>
  );
};

export default AdminUsers;
