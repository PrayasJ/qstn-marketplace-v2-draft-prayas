import { Card, Checkbox, Text } from '@sekmet/radix-ui-themes';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

export default function CryptoCard({
  imgSource,
  blockchain
}: {
  imgSource: StaticImageData;
  blockchain: string;
}) {
  return (
    <Card size={'2'}>
      <div className="flex w-full items-center justify-between">
        <span className="flex items-center gap-4">
          <Image width={'40'} src={imgSource} alt="" />
          <Text>{blockchain}</Text>
        </span>
        <Checkbox />
      </div>
    </Card>
  );
}
