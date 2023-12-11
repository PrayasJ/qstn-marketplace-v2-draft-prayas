import adminStyles from '@components/Common/admin.module.scss';
import { Input } from '@components/Input/Input';
import { Flex } from '@sekmet/radix-ui-themes';
import Image from 'next/image';
import React from 'react';

import { AdminDropdown } from './AdminDropdown';

export const AdminDropdownSearch = () => {
  return (
    <div className="mt-6">
      <Flex
        justify={'between'}
        wrap={'wrap'}
        className={adminStyles.adminDropdownSearch}
        gap={'4'}
      >
        <Flex
          gap={'3'}
          wrap={'wrap'}
          className={adminStyles.adminDropdownsLeft}
        >
          <AdminDropdown label="sort by" />
          <AdminDropdown label="badges" />
        </Flex>

        <Input
          placeholder="Search"
          width={'399px'}
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
      </Flex>
    </div>
  );
};
