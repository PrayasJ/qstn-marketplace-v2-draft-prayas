import { themeColors } from '@colors/themeColors';
import {
  AlertCircleIcon,
  AnouncementIcon,
  ChevronUpDoubleIcon,
  DiamondIcon
} from '@components/Icons';
import { Modal } from '@components/Modal/Modal';
import { useThemeMode } from '@hooks/useThemeMode';
import { CheckIcon, Cross1Icon } from '@radix-ui/react-icons';
import {
  Avatar,
  Checkbox,
  Flex,
  IconButton,
  Separator
} from '@sekmet/radix-ui-themes';
import React, { useState } from 'react';

import { AdminCardPopover } from './AdminCardPopover';
import adminCardStyles from './AdminCards.module.scss';

export const AdminCard: React.FC<{
  name: string;
  src: string;
  banned?: boolean;
}> = ({ name, src, banned }) => {
  const [boostModal, setBoostModal] = useState(false);
  const [banModal, setbanModal] = useState(false);
  const { mode } = useThemeMode();

  return (
    <div
      className={adminCardStyles.adminCard}
      style={{ background: themeColors[mode].input }}
    >
      <Flex gap={'4'} align={'center'}>
        <Checkbox style={{ background: '#3F3F46', borderRadius: '4px' }} />
        <div className={adminCardStyles.adminCardImg}>
          <Avatar src={src} radius="full" fallback={'A'} />
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
          {name}
        </p>
        {!banned && (
          <Flex gap={'1'} className={adminCardStyles.adminCardIcons}>
            <IconButton
              radius="full"
              size={'1'}
              style={{ border: `2px solid ${themeColors[mode].icon}` }}
            >
              <CheckIcon />
            </IconButton>
            <IconButton
              radius="full"
              size={'1'}
              style={{ background: themeColors[mode].icon }}
            >
              <AnouncementIcon />
            </IconButton>
            <IconButton
              radius="full"
              size={'1'}
              style={{ border: `2px solid ${themeColors[mode].icon}` }}
            >
              <DiamondIcon />
            </IconButton>
          </Flex>
        )}
      </Flex>

      <Flex gap={'5'} align={'center'}>
        <div>
          <p style={{ color: mode === 'dark' ? '#A1A1AA' : '#52525B' }}>
            Surveys
          </p>
          <p>647</p>
        </div>
        <Separator orientation="vertical" style={{ height: '100%' }} />
        <AdminCardPopover
          openBoosted={boostModal}
          setOpenBoosted={setBoostModal}
          openBanned={banModal}
          setOpenBanned={setbanModal}
          banned={banned}
        />
      </Flex>

      {/* Modals */}
      <Modal
        open={boostModal}
        setOpen={setBoostModal}
        title="Business boosting alert"
        content="Business will be able to get more traffic and attention by adding them to the boosting section"
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
      <Modal
        open={banModal}
        setOpen={setbanModal}
        title="You are about to ban this business"
        content="They will no longer able to access any of QSTN platform features"
        onOk={() => setbanModal(false)}
        icon={
          <IconButton
            radius="full"
            style={{ background: 'rgba(239, 86, 86, 0.12)' }}
          >
            <AlertCircleIcon />
          </IconButton>
        }
      />
    </div>
  );
};
