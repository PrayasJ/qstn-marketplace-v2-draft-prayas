import {
  Button,
  Card,
  Checkbox,
  Flex,
  Strong,
  Text,
  TextFieldInput
} from '@sekmet/radix-ui-themes';
import type { Metadata, NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const metadata: Metadata = {
  title: 'Survey Checklist'
};

const SurveyChecklist: NextPage = () => {
  const router = useRouter();
  const [taskCount, setTaskCount] = useState(3);

  const surveyNum = 169; // dummy data

  const checkConnector = () => {
    return <div className="selected-color h-full w-[1px]" />;
  };

  return (
    <main className="mb-12 flex h-full w-full flex-col gap-4">
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

        <Text>All Campaigns</Text>
      </Button>

      <span className="flex-grow">
        <div className="px-8 py-6">
          <Text size={'7'}>
            <Strong>Update your survey #{surveyNum}</Strong>
          </Text>
          <p className="mb-6 mt-6">
            <Text>
              <Strong>
                {taskCount} {taskCount !== 1 ? 'tasks' : 'task'} left.
              </Strong>
            </Text>
            <Text> Let's get rolling!</Text>
          </p>

          <div />
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-1 flex h-full w-full flex-col items-center justify-around">
            <Checkbox disabled />
            {checkConnector()}
            <Checkbox disabled />
            {checkConnector()}
            <Checkbox disabled />
            {checkConnector()}
            <Checkbox disabled />
            {checkConnector()}
            <Checkbox disabled />
            {checkConnector()}
            <Checkbox disabled />
            {checkConnector()}
            <Checkbox disabled />
          </div>
          <div className="col-span-11 flex h-full w-full flex-col gap-4 pr-8">
            <Card>
              <Flex
                direction={'column'}
                justify={'start'}
                gap={'4'}
                className="p-6"
              >
                <p>
                  <Text color="purple">02 </Text>
                  <Text>
                    <Strong>Survey Plan</Strong>
                  </Text>
                </p>
                <Text>
                  You are currently on <Strong>Free Plan &#9432;</Strong>
                </Text>
                <div className="flex items-center gap-4">
                  <Button size={'3'} className=" w-48">
                    <Text className="">
                      <Strong>Upgrade survey</Strong>
                    </Text>
                    <svg
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.33366 9L5.00033 5.66667L1.66699 9M8.33366 4.33333L5.00033 1L1.66699 4.33333"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                  <Text>Starting from $11 per month</Text>
                </div>
              </Flex>
            </Card>
            <Card>
              <Flex
                direction={'column'}
                justify={'start'}
                gap={'4'}
                className="p-6"
              >
                <p>
                  <Text color="purple">03 </Text>
                  <Text>
                    <Strong>Access Gating = KYC (optional)</Strong>
                  </Text>
                </p>
                <Text className="w-1/2">
                  Control who can participate in this survey by setting specific
                  eligibility criteria related to the participant age and
                  geographical location
                </Text>
                <Button size={'3'} className="w-56">
                  Manage survey access
                </Button>
              </Flex>
            </Card>
            <Card>
              <Flex
                direction={'column'}
                justify={'start'}
                gap={'4'}
                className="p-6"
              >
                <p>
                  <Text color="purple">04 </Text>
                  <Text>
                    <Strong>Survey Tags (optional)</Strong>
                  </Text>
                </p>
                <Text>Selected tags for your survey</Text>
                <div className="w-64">
                  <TextFieldInput
                    size={'3'}
                    variant="soft"
                    placeholder="Start typing"
                  />
                </div>
              </Flex>
            </Card>
            <Card>
              <Flex
                direction={'column'}
                justify={'start'}
                gap={'4'}
                className="p-6"
              >
                <p>
                  <Text color="purple">05 </Text>
                  <Text>
                    <Strong>Survey Type</Strong>
                  </Text>
                </p>
                <Text>Update your survey contents</Text>
                <div className="flex gap-4">
                  <Button size={'3'}>
                    <Text>
                      <Strong>Public</Strong>
                    </Text>
                  </Button>
                  <Button size={'3'}>
                    <Text>
                      <Strong>Public</Strong>
                    </Text>
                  </Button>
                </div>
              </Flex>
            </Card>
            <Card>
              <Flex
                direction={'column'}
                justify={'start'}
                gap={'4'}
                className="p-6"
              >
                <p>
                  <Text color="purple">06 </Text>
                  <Text>
                    <Strong>Whitelist</Strong>
                  </Text>
                </p>
                <Text>Who can access this survey?</Text>
                <Button size={'3'} className=" w-56">
                  <Text>
                    <Strong>Manage whitelist</Strong>
                  </Text>
                  <svg
                    width={16}
                    height={14}
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6663 13V9M10.6663 11H14.6663M7.99967 9H5.33301C4.0905 9 3.46924 9 2.97919 9.20299C2.32578 9.47364 1.80665 9.99277 1.536 10.6462C1.33301 11.1362 1.33301 11.7575 1.33301 13M10.333 1.19384C11.3103 1.58943 11.9997 2.54754 11.9997 3.66667C11.9997 4.78579 11.3103 5.7439 10.333 6.13949M8.99967 3.66667C8.99967 5.13943 7.80577 6.33333 6.33301 6.33333C4.86025 6.33333 3.66634 5.13943 3.66634 3.66667C3.66634 2.19391 4.86025 1 6.33301 1C7.80577 1 8.99967 2.19391 8.99967 3.66667Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </Flex>
            </Card>
            <Button size={'4'} className="w-full">
              <Text>
                <Strong>Publish survey</Strong>
              </Text>
            </Button>
          </div>
        </div>
      </span>
    </main>
  );
};

export default SurveyChecklist;
