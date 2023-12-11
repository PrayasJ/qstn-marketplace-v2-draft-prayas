import { Input } from '@components/Input/Input';
import { TextArea } from '@components/TextArea/TextArea';
import * as Form from '@radix-ui/react-form';
import { Button, Flex, Strong, Text } from '@sekmet/radix-ui-themes';
import type { Metadata, NextPage } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Business Onboarding'
};

import { useRouter } from 'next/navigation';

const Onboarding: NextPage = () => {
  const router = useRouter();
  //const { mode } = useThemeMode();

  return (
    <div className="mt-16 flex flex-col items-center justify-center">
      <Flex
        justify={'center'}
        align={'center'}
        className="h-[70vh] w-[80%] max-lg:h-3/5 max-lg:w-full"
      >
        <div className="h-full w-1/2 px-10 py-6 max-lg:w-3/4 max-md:w-full">
          <div className="mb-6">
            <Text size={'7'}>
              <Strong>Onboarding</Strong>
            </Text>
            <br />
            <Text>
              We need to set up a few more things to personalize your experience
              and get you started using our services.
            </Text>
          </div>
          <Text>
            <Strong>Account info</Strong>
          </Text>
          <Form.Root className="mt-6 h-4/5">
            <div className="flex h-full flex-col justify-around">
              <div>
                <Form.Field name="displayName">
                  <Form.Label>Display name</Form.Label>
                  <Form.Message
                    className="text-[13px] text-white opacity-[0.8]"
                    match="valueMissing"
                  >
                    Please enter your display name
                  </Form.Message>

                  <Form.Control asChild>
                    <Input
                      type="text"
                      placeholder="Enter your display name"
                      required
                    />
                  </Form.Control>
                </Form.Field>
              </div>

              <div>
                <Form.Field name="bio">
                  <Form.Label>Bio</Form.Label>
                  <Form.Control asChild>
                    <TextArea placeholder="About your company in a few words" />
                  </Form.Control>
                  <Form.Label className="text-[#71717A]">
                    Brief bio for your business.
                  </Form.Label>
                </Form.Field>
              </div>

              <Form.Submit asChild>
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
            </div>
          </Form.Root>
        </div>

        <Image
          src="/assets/images/marketplace-screenshot.png"
          alt="Marketplace Screenshot"
          className="h-full w-1/2 px-10 max-lg:hidden"
          width={512}
          height={476}
        />
      </Flex>
    </div>
  );
};

export default Onboarding;
