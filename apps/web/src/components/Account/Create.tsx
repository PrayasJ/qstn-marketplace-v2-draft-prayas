import {
  Button,
  Card,
  Checkbox,
  Flex,
  Strong,
  Text
} from '@sekmet/radix-ui-themes';
import type { Metadata, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const metadata: Metadata = {
  title: 'Create Account'
};

const CreateAccount: NextPage = () => {
  //const ref = useRef([]);
  const router = useRouter();
  //const { mode } = useThemeMode();

  enum AccountType {
    User,
    Business
  }

  const [accountType, setAccountType] = useState<any>();

  //const handleAccountType = () => {};

  const handleSubmit = () => {
    console.log('testing');
    console.log(accountType);
    setAccountType(AccountType.User);

    if (accountType === AccountType.User) {
      router.push('/account/create/user');
    } else if (accountType === AccountType.Business) {
      router.push('/account/create/business');
    }
  };

  return (
    <>
      <div className="mt-10 flex items-center justify-center">
        <Card
          className="max-h-[export default
                    function 800px] m-auto h-3/5 h-[70vh] w-2/3 max-w-2xl bg-slate-600 p-8 max-md:w-[90%]"
        >
          <Flex direction={'column'} justify={'between'} className="h-full">
            <div className="flex h-1/5 flex-col ">
              <Text size={'7'}>
                <Strong>Create account</Strong>
              </Text>
              <br />
              <Text>Choose an account type</Text>
            </div>

            <Flex justify={'between'} gap={'4'} className="h-[30%] w-full">
              <Card className="w-1/2">
                <Flex
                  direction={'column'}
                  align={'center'}
                  justify={'center'}
                  gap={'3'}
                  className="relative"
                  height={'100%'}
                >
                  <Checkbox className="absolute right-0 top-0" />
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.3163 18.4384C4.92462 17.0052 6.34492 16 8 16H14C15.6551 16 17.0754 17.0052 17.6837 18.4384M15 8.5C15 10.7091 13.2091 12.5 11 12.5C8.79086 12.5 7 10.7091 7 8.5C7 6.29086 8.79086 4.5 11 4.5C13.2091 4.5 15 6.29086 15 8.5ZM21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                      stroke="#09090B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.3163 18.4384C4.92462 17.0052 6.34492 16 8 16H14C15.6551 16 17.0754 17.0052 17.6837 18.4384M15 8.5C15 10.7091 13.2091 12.5 11 12.5C8.79086 12.5 7 10.7091 7 8.5C7 6.29086 8.79086 4.5 11 4.5C13.2091 4.5 15 6.29086 15 8.5ZM21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                      stroke="black"
                      stroke-opacity="0.2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.3163 18.4384C4.92462 17.0052 6.34492 16 8 16H14C15.6551 16 17.0754 17.0052 17.6837 18.4384M15 8.5C15 10.7091 13.2091 12.5 11 12.5C8.79086 12.5 7 10.7091 7 8.5C7 6.29086 8.79086 4.5 11 4.5C13.2091 4.5 15 6.29086 15 8.5ZM21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                      stroke="black"
                      stroke-opacity="0.2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <Text className="text-center">
                    <Strong>User Account</Strong>
                  </Text>
                </Flex>
              </Card>
              <Card className="w-1/2">
                <Flex
                  direction={'column'}
                  align={'center'}
                  justify={'center'}
                  gap={'3'}
                  className="relative"
                  height={'100%'}
                >
                  <Checkbox className="absolute right-0 top-0" />

                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 19V13.6C13 13.0399 13 12.7599 12.891 12.546C12.7951 12.3578 12.6422 12.2049 12.454 12.109C12.2401 12 11.9601 12 11.4 12H8.6C8.03995 12 7.75992 12 7.54601 12.109C7.35785 12.2049 7.20487 12.3578 7.10899 12.546C7 12.7599 7 13.0399 7 13.6V19M17 19V4.2C17 3.0799 17 2.51984 16.782 2.09202C16.5903 1.71569 16.2843 1.40973 15.908 1.21799C15.4802 1 14.9201 1 13.8 1H6.2C5.07989 1 4.51984 1 4.09202 1.21799C3.71569 1.40973 3.40973 1.71569 3.21799 2.09202C3 2.51984 3 3.0799 3 4.2V19M19 19H1M7.5 6H7.51M12.5 6H12.51M8 6C8 6.27614 7.77614 6.5 7.5 6.5C7.22386 6.5 7 6.27614 7 6C7 5.72386 7.22386 5.5 7.5 5.5C7.77614 5.5 8 5.72386 8 6ZM13 6C13 6.27614 12.7761 6.5 12.5 6.5C12.2239 6.5 12 6.27614 12 6C12 5.72386 12.2239 5.5 12.5 5.5C12.7761 5.5 13 5.72386 13 6Z"
                      stroke="#09090B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13 19V13.6C13 13.0399 13 12.7599 12.891 12.546C12.7951 12.3578 12.6422 12.2049 12.454 12.109C12.2401 12 11.9601 12 11.4 12H8.6C8.03995 12 7.75992 12 7.54601 12.109C7.35785 12.2049 7.20487 12.3578 7.10899 12.546C7 12.7599 7 13.0399 7 13.6V19M17 19V4.2C17 3.0799 17 2.51984 16.782 2.09202C16.5903 1.71569 16.2843 1.40973 15.908 1.21799C15.4802 1 14.9201 1 13.8 1H6.2C5.07989 1 4.51984 1 4.09202 1.21799C3.71569 1.40973 3.40973 1.71569 3.21799 2.09202C3 2.51984 3 3.0799 3 4.2V19M19 19H1M7.5 6H7.51M12.5 6H12.51M8 6C8 6.27614 7.77614 6.5 7.5 6.5C7.22386 6.5 7 6.27614 7 6C7 5.72386 7.22386 5.5 7.5 5.5C7.77614 5.5 8 5.72386 8 6ZM13 6C13 6.27614 12.7761 6.5 12.5 6.5C12.2239 6.5 12 6.27614 12 6C12 5.72386 12.2239 5.5 12.5 5.5C12.7761 5.5 13 5.72386 13 6Z"
                      stroke="black"
                      stroke-opacity="0.2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13 19V13.6C13 13.0399 13 12.7599 12.891 12.546C12.7951 12.3578 12.6422 12.2049 12.454 12.109C12.2401 12 11.9601 12 11.4 12H8.6C8.03995 12 7.75992 12 7.54601 12.109C7.35785 12.2049 7.20487 12.3578 7.10899 12.546C7 12.7599 7 13.0399 7 13.6V19M17 19V4.2C17 3.0799 17 2.51984 16.782 2.09202C16.5903 1.71569 16.2843 1.40973 15.908 1.21799C15.4802 1 14.9201 1 13.8 1H6.2C5.07989 1 4.51984 1 4.09202 1.21799C3.71569 1.40973 3.40973 1.71569 3.21799 2.09202C3 2.51984 3 3.0799 3 4.2V19M19 19H1M7.5 6H7.51M12.5 6H12.51M8 6C8 6.27614 7.77614 6.5 7.5 6.5C7.22386 6.5 7 6.27614 7 6C7 5.72386 7.22386 5.5 7.5 5.5C7.77614 5.5 8 5.72386 8 6ZM13 6C13 6.27614 12.7761 6.5 12.5 6.5C12.2239 6.5 12 6.27614 12 6C12 5.72386 12.2239 5.5 12.5 5.5C12.7761 5.5 13 5.72386 13 6Z"
                      stroke="black"
                      stroke-opacity="0.2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <Text className="text-center">
                    <Strong>Business Account</Strong>
                  </Text>
                </Flex>
              </Card>
            </Flex>

            <Button
              size={'4'}
              className="w-1/4 max-w-xl max-md:w-32"
              onClick={() => handleSubmit()}
            >
              <Text>
                <Strong>Continue</Strong>
              </Text>
            </Button>

            <hr />

            <div>
              <Text>Already have an account? </Text>
              <Link href={'/login'} className="text-violet-500">
                Login
              </Link>
            </div>
          </Flex>
        </Card>
      </div>

      {/*accountType === AccountType.User && (
                <UserAccount />
            )}
            {accountType === AccountType.Business && (
                <BusinessAccount />
            )*/}
    </>
  );
};

export default CreateAccount;
