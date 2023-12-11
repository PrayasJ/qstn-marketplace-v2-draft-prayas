import adminStyles from '@components/Common/admin.module.scss';
import { Flex } from '@sekmet/radix-ui-themes';
import React from 'react';

import { AdminDropdown } from './AdminDropdown';
import { NumOfSurveys } from './NumOfSurveys';

export const AdminDropdowns = () => {
  return (
    <div>
      <Flex
        justify={'between'}
        wrap={'wrap'}
        className={adminStyles.adminDropdowns}
        gap={'4'}
      >
        <Flex
          gap={'5'}
          wrap={'wrap'}
          className={adminStyles.adminDropdownsLeft}
        >
          <AdminDropdown label="category" />
          <AdminDropdown label="membership" />
          <AdminDropdown label="verification" />
          <NumOfSurveys />
        </Flex>
        <AdminDropdown label="sort by" />
      </Flex>
    </div>
  );
};
