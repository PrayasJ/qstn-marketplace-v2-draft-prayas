import { themeColors } from '@colors/themeColors';
import { useThemeMode } from '@hooks/useThemeMode';
import { DotsHorizontalIcon, TrashIcon } from '@radix-ui/react-icons';
import {
  Flex,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
  Separator,
  Switch
} from '@sekmet/radix-ui-themes';
import type { Dispatch, SetStateAction } from 'react';

export const AdminCardPopover: React.FC<{
  openBoosted: boolean;
  setOpenBoosted: Dispatch<SetStateAction<boolean>>;
  openBanned: boolean;
  setOpenBanned: Dispatch<SetStateAction<boolean>>;
  banned?: boolean;
}> = ({ openBoosted, setOpenBoosted, openBanned, setOpenBanned, banned }) => {
  const { mode } = useThemeMode();
  return (
    <PopoverRoot>
      <PopoverTrigger>
        <div style={{ padding: '8px' }}>
          <DotsHorizontalIcon />
        </div>
      </PopoverTrigger>
      <PopoverContent
        style={{
          width: 160,
          marginTop: '-0.3rem',
          background: themeColors[mode].icon,
          fontSize: '14px'
        }}
      >
        <Flex direction={'column'} gap={'3'}>
          <Flex align={'center'} justify={'between'}>
            <p>Boost</p>
            <Switch
              onCheckedChange={() =>
                openBoosted ? setOpenBoosted(false) : setOpenBoosted(true)
              }
            />
          </Flex>
          <Flex align={'center'} justify={'between'}>
            <p>Ban</p>
            <Switch
              onCheckedChange={() =>
                openBanned ? setOpenBanned(false) : setOpenBanned(true)
              }
              checked={banned}
            />
          </Flex>
          <Separator style={{ width: '100%' }} />
          <Flex
            gap={'2'}
            style={{ cursor: 'url(/assets/images/cursor.svg),auto' }}
            align={'center'}
          >
            <TrashIcon />
            <p>Delete</p>
          </Flex>
        </Flex>
      </PopoverContent>
    </PopoverRoot>
  );
};
