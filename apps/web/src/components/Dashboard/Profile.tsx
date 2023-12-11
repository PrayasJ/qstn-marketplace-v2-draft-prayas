import { Footer } from '@components/Footer/FooterDashboard';
import { Input } from '@components/Input/Input';
import { TextArea } from '@components/TextArea/TextArea';
import * as Form from '@radix-ui/react-form';
import { Avatar, Button, Strong, Text } from '@sekmet/radix-ui-themes';
import { useEffect, useRef } from 'react';

export default function Profile() {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    console.log(ref);
  }, []);

  return (
    <main className="flex h-full flex-col justify-between">
      <span className="grid h-full grid-cols-10 gap-4">
        <Form.Root className="col-span-6 h-full">
          <Text size={'8'}>
            <Strong>Profile</Strong>
          </Text>
          <div className="flex h-full w-full flex-col gap-16">
            <div className="grid w-full grid-cols-2 gap-6">
              <Form.Field name="businessName">
                <div>
                  <Form.Label>Business name</Form.Label>
                  <Form.Message
                    className="text-[13px] text-white opacity-[0.8]"
                    match="valueMissing"
                  >
                    Please enter your business name
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <Input placeholder="Write your business name" />
                </Form.Control>
              </Form.Field>

              <Form.Field name="displayName">
                <div>
                  <Form.Label>Display name</Form.Label>
                  <Form.Message
                    className="text-[13px] text-white opacity-[0.8]"
                    match="valueMissing"
                  >
                    Please enter a display name
                  </Form.Message>
                  <Form.Message
                    className="text-[13px] text-white opacity-[0.8]"
                    match="badInput"
                  >
                    Please enter a valid display name
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <Input placeholder="display name" />
                </Form.Control>
              </Form.Field>
            </div>
            <Form.Field name="email">
              <div>
                <Form.Label>Email</Form.Label>
                <Form.Message
                  className="text-[13px] text-white opacity-[0.8]"
                  match="valueMissing"
                >
                  Please enter your business name
                </Form.Message>
              </div>
              <Form.Control asChild>
                <Input placeholder="john.doe@gmail.com" />
              </Form.Control>
            </Form.Field>
            <Form.Field name="businessName">
              <div>
                <Form.Label>Business Name</Form.Label>
                <Form.Message
                  className="text-[13px] text-white opacity-[0.8]"
                  match="valueMissing"
                >
                  Please enter your business name
                </Form.Message>
              </div>
              <Form.Control asChild>
                <TextArea placeholder="your bio" />
              </Form.Control>
              <Text size={'2'} className="hint-text">
                Brief bio for your business.
              </Text>
            </Form.Field>

            <Form.Submit asChild>
              <Button size={'3'} className="w-36">
                Update Profile
              </Button>
            </Form.Submit>
          </div>
        </Form.Root>

        <div className="relative col-span-4">
          <div className="absolute top-[10%] grid w-full grid-cols-5 px-12">
            <div className="relative col-span-2 h-full w-full">
              <Avatar
                fallback={'?'}
                radius="full"
                size={'8'}
                ref={ref}
                className="absolute left-1/2 -translate-x-1/2"
              />
              {/* <div className='bg-black rounded-full'>
                                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
                                        <path d="M16 12L12 8M12 8L8 12M12 8V17.2C12 18.5907 12 19.2861 12.5505 20.0646C12.9163 20.5819 13.9694 21.2203 14.5972 21.3054C15.5421 21.4334 15.9009 21.2462 16.6186 20.8719C19.8167 19.2036 22 15.8568 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.7014 4.01099 18.9331 7 20.6622" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div> */}
            </div>
            <p className="col-span-3 flex flex-col gap-2 py-6 pl-6 pr-16">
              <Text>
                <Strong>Business Logo</Strong>
              </Text>
              <Text>We recommend an image of at least 400x400.</Text>
            </p>
          </div>
        </div>
      </span>
      <Footer />
    </main>
  );
}
