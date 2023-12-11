import { Input } from '@components/Input/Input';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Dialog from '@radix-ui/react-dialog';
import * as Form from '@radix-ui/react-form';
import { CheckIcon } from '@radix-ui/react-icons';
import { Button, Flex, Strong, Text } from '@sekmet/radix-ui-themes';
import type { Metadata, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Confetti from 'react-confetti';

export const metadata: Metadata = {
  title: 'Create Business Account'
};

const BusinessAccount: NextPage = () => {
  const router = useRouter();
  //const { mode } = useThemeMode();

  const handleSubmit = () => {
    console.log('testing');
  };

  //const proceedToOnboarding = () => {
  // verify registration and error handling
  //};

  return (
    <div className="mt-16 flex flex-col items-center justify-center">
      <Flex
        justify={'center'}
        align={'center'}
        className="h-[70vh] w-[80%] max-lg:h-3/5 max-lg:w-full"
      >
        <div className="h-full w-1/2 px-10 py-6 max-lg:w-3/4 max-md:w-full">
          <Text size={'7'}>
            <Strong>Create business account</Strong>
          </Text>
          <Form.Root className="h-full">
            <div className="flex h-full flex-col justify-around">
              <div>
                <Form.Field name="businessName">
                  <Form.Label>Business name</Form.Label>
                  <Form.Message
                    className="text-[13px] text-white opacity-[0.8]"
                    match="valueMissing"
                  >
                    Please enter your business name
                  </Form.Message>

                  <Form.Control asChild>
                    <Input
                      className="bg-blackA2 text-bl selection:color-white selection:bg-blackA6 inline-flex h-12 w-full appearance-none items-center justify-center rounded-2xl px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                      type="text"
                      placeholder="QSTN Inc."
                      required
                    />
                  </Form.Control>
                </Form.Field>
              </div>

              <div>
                <Form.Field name="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Message
                    className="text-[13px] text-white opacity-[0.8]"
                    match="valueMissing"
                  >
                    Please enter your email
                  </Form.Message>
                  <Form.Message
                    className="text-[13px] text-white opacity-[0.8]"
                    match="patternMismatch"
                  >
                    Please provide a valid email
                  </Form.Message>

                  <Form.Control asChild>
                    <Input
                      className="bg-blackA2 selection:color-white selection:bg-blackA6 inline-flex h-12 w-full appearance-none items-center justify-center rounded-2xl px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                      type="email"
                      placeholder="qstnus@gmail.com"
                      required
                    />
                  </Form.Control>
                </Form.Field>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <Checkbox.Root className="hover:bg-violet3 flex h-5 w-5 items-center justify-center rounded-[4px] border border-solid border-black bg-white">
                    <Checkbox.Indicator className="text-violet11">
                      <CheckIcon />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <Text>
                    I agree with QSTN
                    <Link href="/terms-of-service" className="text-violet-500">
                      {' '}
                      Terms of Service
                    </Link>
                  </Text>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox.Root className="hover:bg-violet3 flex h-5 w-5 items-center justify-center rounded-[4px] border border-solid border-black bg-white">
                    <Checkbox.Indicator className="text-violet11">
                      <CheckIcon />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <Text>
                    I agree with QSTN
                    <Link href="/privacy-policy" className="text-violet-500">
                      {' '}
                      Privacy Policy
                    </Link>
                  </Text>
                </div>
              </div>

              <Flex align={'center'}>
                <Checkbox.Root
                  className="hover:bg-violet3 flex h-5 w-5 items-center justify-center rounded-[4px] border border-solid border-black bg-white"
                  defaultChecked
                  id="c1"
                >
                  <Checkbox.Indicator className="text-violet11">
                    <CheckIcon />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <Text>&nbsp; Stay logged in for a week.</Text>
              </Flex>

              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <Form.Submit asChild onClick={() => handleSubmit()}>
                    <Button
                      className="h-24 w-36 rounded-2xl"
                      style={{
                        padding: '26px 14px',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        backgroundColor: '#A855F7'
                      }}
                      onClick={() => router.push('/dashboard')}
                    >
                      Get started
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 12L10 8L6 4"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Button>
                  </Form.Submit>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 backdrop-blur-sm" />
                  <Dialog.Content
                    className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] flex max-h-[70vh] w-[100vw] max-w-[450px] translate-x-[-50%] 
                                            translate-y-[-50%] flex-col items-center justify-center gap-4
                                            rounded-3xl bg-white p-[25px] py-10 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
                  >
                    <Confetti
                      numberOfPieces={400}
                      gravity={0.08}
                      recycle={false}
                      className="h-full w-full rounded-2xl"
                    />
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="48" height="48" rx="24" fill="#E4E4E7" />
                      <path
                        d="M30.6663 19L21.4997 28.1667L17.333 24"
                        stroke="#09090B"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M30.6663 19L21.4997 28.1667L17.333 24"
                        stroke="black"
                        stroke-opacity="0.2"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M30.6663 19L21.4997 28.1667L17.333 24"
                        stroke="black"
                        stroke-opacity="0.2"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <Dialog.Title className="text-mauve12 m-0 text-xl font-medium">
                      Registration successful!
                    </Dialog.Title>
                    <Dialog.Description className="text-mauve11 mb-5 mt-[10px] text-[15px] leading-normal">
                      Your account is pending approval
                    </Dialog.Description>

                    <div className="mt-[25px] flex justify-end">
                      <button
                        className="h-12 w-32 rounded-2xl bg-violet-500 text-white"
                        onClick={() =>
                          router.push('/account/create/business/onboarding')
                        }
                      >
                        Got it
                      </button>
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>

              <hr />
              <div>
                <Text>Already have an account? </Text>
                <Text color="violet">Login</Text>
              </div>
            </div>
          </Form.Root>
        </div>

        <Image
          src={`/assets/images/analytics-screenshot.png`}
          alt="Analytics Screenshot"
          className="h-full w-1/2 px-10 max-lg:hidden"
          width={512}
          height={476}
        />
      </Flex>
    </div>
  );
};

export default BusinessAccount;
