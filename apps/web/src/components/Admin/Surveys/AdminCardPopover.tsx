import { themeColors } from '@colors/themeColors';
import { useThemeMode } from '@hooks/useThemeMode';
import { DotsHorizontalIcon, TrashIcon } from '@radix-ui/react-icons';
import {
  Checkbox,
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
}> = ({ openBoosted, setOpenBoosted }) => {
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
          width: 180,
          marginTop: '-0.3rem',
          background: themeColors[mode].icon,
          fontSize: '14px'
        }}
      >
        <Flex direction={'column'} gap={'3'}>
          <p>Status</p>
          <Flex align={'center'} justify={'between'}>
            <p className="font-bold">Active</p>
            <Checkbox
              style={{ backgroundColor: '#A855F7', borderRadius: '12px' }}
              size={'3'}
              variant="soft"
            />
          </Flex>
          <Flex align={'center'} justify={'between'}>
            <p className="font-bold">Paused</p>
            <Checkbox
              style={{ backgroundColor: '#A855F7', borderRadius: '12px' }}
              size={'3'}
              variant="soft"
            />
          </Flex>
          <Flex align={'center'} justify={'between'}>
            <p className="font-bold">Inactive</p>
            <Checkbox
              style={{ backgroundColor: '#A855F7', borderRadius: '12px' }}
              size={'3'}
              variant="soft"
            />
          </Flex>
          <Separator style={{ width: '100%' }} />
          <Flex align={'center'} justify={'between'}>
            <p className="font-bold">Boost</p>
            <Switch
              onCheckedChange={() =>
                openBoosted ? setOpenBoosted(false) : setOpenBoosted(true)
              }
            />
          </Flex>
          <Separator style={{ width: '100%' }} />
          <Flex
            gap={'2'}
            style={{ cursor: 'url(/assets/images/cursor.svg),auto' }}
            align={'center'}
          >
            <TrashIcon />
            <p className="font-bold">Delete</p>
          </Flex>
        </Flex>
      </PopoverContent>
    </PopoverRoot>
  );
};
