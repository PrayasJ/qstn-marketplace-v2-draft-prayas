import adminStyles from '@components/Common/admin.module.scss';
import { Flex } from '@sekmet/radix-ui-themes';
import React from 'react';

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
          gap={'3'}
          wrap={'wrap'}
          className={adminStyles.adminDropdownsLeft}
        >
          <NumOfSurveys />
          <NumOfSurveys />
          <NumOfSurveys />
          <NumOfSurveys />
        </Flex>
      </Flex>
    </div>
  );
};
