import { Button, Card, Flex, Strong, Text } from '@sekmet/radix-ui-themes';
import type { Metadata, NextPage } from 'next';
import { useRouter } from 'next/navigation';
import Confetti from 'react-confetti';

export const metadata: Metadata = {
  title: 'Survey Draft'
};

const Page: NextPage = () => {
  const router = useRouter();
  //const { mode } = useThemeMode();
  const width = window.innerWidth;
  const height = window.innerHeight;
  return (
    <main className="flex h-[500px] flex-col gap-4 p-6">
      <span className="z-50">
        <Confetti width={width} height={height} gravity={0.025} />
      </span>

      <Button
        variant="ghost"
        size={'3'}
        onClick={() => router.back()}
        className="w-1/6"
      >
        <svg
          width={8}
          height={12}
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 11L1.5 6L6.5 1"
            stroke="#A1A1AA"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <Text>Back to dashboard</Text>
      </Button>
      <div className="m-auto mt-6 flex w-1/3 flex-grow flex-col justify-center">
        <Card size={'4'}>
          <Flex direction={'column'} justify={'center'} gap={'5'} className="">
            <Text size={'6'}>
              <Strong>Congratulations!</Strong>
            </Text>
            <Text>
              You drafted your survey. Proceed to the survey checklist to
              customize settings and eventually publish your campaign!
            </Text>

            <Button size={'3'} onClick={() => router.push('/survey/checklist')}>
              <Text>Go to survey checklist</Text>
              <svg
                width={6}
                height={10}
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9L5 5L1 1"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </Flex>
        </Card>
      </div>
    </main>
  );
};

export default Page;
