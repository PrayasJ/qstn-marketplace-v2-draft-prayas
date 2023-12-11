import { themeColors } from '@colors/themeColors';
import {
  ChevronUpDoubleIcon,
  UserBadgeIcon,
  UserTreeIcon
} from '@components/Icons';
import { Modal } from '@components/Modal/Modal';
import { useThemeMode } from '@hooks/useThemeMode';
import { Checkbox } from '@qstn/ui';
import { Cross1Icon } from '@radix-ui/react-icons';
import { Avatar, Flex, IconButton, Separator } from '@sekmet/radix-ui-themes';
import React, { useState } from 'react';

import { AdminCardPopover } from './AdminCardPopover';
import adminCardStyles from './AdminCards.module.scss';

export const AdminCard: React.FC<{
  data: any;
}> = ({ data }) => {
  const { name, src, banned } = data;
  const [boostModal, setBoostModal] = useState(false);
  const { mode } = useThemeMode();

  return (
    <div
      className={adminCardStyles.adminCard}
      style={{ background: themeColors[mode].input }}
    >
      <Flex gap={'4'} align={'center'}>
        <Checkbox style={{ background: '#3F3F46', borderRadius: '4px' }} />
        <div className={adminCardStyles.adminCardImg}>
          <Avatar src={src} size={'5'} radius="full" fallback={'A'} />
          {banned && (
            <IconButton
              size={'1'}
              radius="full"
              className={adminCardStyles.adminCardImg_banned}
            >
              <Cross1Icon />
            </IconButton>
          )}
        </div>
        <p
          style={{
            textTransform: 'capitalize',
            color: banned ? '#EF5656' : ''
          }}
        >
          {data.surveyName}
          <br />
          <span className="text-sm font-normal text-zinc-500">{name}</span>
        </p>

        {!banned && (
          <Flex gap={'1'} className={adminCardStyles.adminCardIcons}>
            {data.check1 && (
              <IconButton
                radius="full"
                size={'2'}
                style={{ border: `2px solid ${themeColors[mode].icon}` }}
              >
                <UserBadgeIcon />
              </IconButton>
            )}
            {data.check2 && (
              <IconButton
                radius="full"
                size={'2'}
                style={{ background: themeColors[mode].icon }}
              >
                <UserTreeIcon />
              </IconButton>
            )}
          </Flex>
        )}
      </Flex>

      <Flex gap={'5'} align={'center'}>
        <div className="hidden min-w-[450px] grid-flow-col grid-rows-1 gap-2 sm:grid">
          <div className="p-6">
            <div className="text-sm font-normal text-zinc-600">Blockchain</div>
            <div className="text-sm font-semibold text-zinc-950">
              {data.blockchain}
            </div>
          </div>
          <div className="p-6">
            <div className="text-sm font-normal text-zinc-600">Reward</div>
            <div className="text-sm font-semibold text-zinc-950">
              {data.reward}
            </div>
          </div>
          <div className="p-6">
            <div className="text-sm font-normal text-zinc-600">
              Participants
            </div>
            <div className="text-sm font-semibold text-zinc-950">
              {data.participants}
            </div>
          </div>
        </div>

        <Separator orientation="vertical" style={{ height: '100%' }} />
        <AdminCardPopover
          openBoosted={boostModal}
          setOpenBoosted={setBoostModal}
        />
      </Flex>

      {/* Modals */}
      <Modal
        open={boostModal}
        setOpen={setBoostModal}
        title="Survey boosting alert"
        content="This Survey will be able to get more traffic and attention by adding them to the boosting section"
        onOk={() => setBoostModal(false)}
        icon={
          <IconButton
            radius="full"
            style={{ background: 'rgba(168, 85, 247, 0.12)' }}
          >
            <ChevronUpDoubleIcon />
          </IconButton>
        }
      />
    </div>
  );
};
