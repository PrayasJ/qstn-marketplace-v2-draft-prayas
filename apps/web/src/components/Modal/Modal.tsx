import { themeColors } from '@colors/themeColors';
import { useThemeMode } from '@hooks/useThemeMode';
import { CrossCircledIcon } from '@radix-ui/react-icons';
import { AlertDialog, Button, Flex } from '@sekmet/radix-ui-themes';
import type { Dispatch, SetStateAction } from 'react';
import React from 'react';

import ModalStyles from './modal.module.scss';

export const Modal: React.FC<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  icon: React.ReactNode;
  onOk: () => void;
  content: string;
}> = ({ open, setOpen, title, icon, onOk, content }) => {
  const { mode } = useThemeMode();
  return (
    <AlertDialog.Root
      open={open}
      onOpenChange={() => {
        open ? setOpen(false) : setOpen(true);
      }}
    >
      <AlertDialog.Content className={ModalStyles.modal}>
        <Flex
          justify={'between'}
          align={'center'}
          className={ModalStyles.modalHeader}
        >
          {icon}
          <CrossCircledIcon
            onClick={() => setOpen(false)}
            style={{ transform: 'scale(1.8)' }}
          />
        </Flex>
        <h3>{title}</h3>
        <p>{content}</p>

        <Flex gap={'2'}>
          <Button
            onClick={() => setOpen(false)}
            className="action"
            style={{
              background: themeColors[mode].input,
              color: mode === 'dark' ? '#ffffff' : '#09090B',
              fontSize: '16px',
              padding: '24px 16px',
              borderRadius: '12px'
            }}
          >
            Cancel
          </Button>
          <Button
            style={{
              fontSize: '16px',
              padding: '24px 16px',
              borderRadius: '12px'
            }}
            onClick={onOk}
          >
            Yes, I&apos;m sure.
          </Button>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};
