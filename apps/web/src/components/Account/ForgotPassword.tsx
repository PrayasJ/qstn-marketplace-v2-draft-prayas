import { Input } from '@components/Input/Input';
import { useThemeMode } from '@hooks/useThemeMode';
import * as Form from '@radix-ui/react-form';
import { Button, Card, Flex, Strong, Text } from '@sekmet/radix-ui-themes';
import type { Metadata, NextPage } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reset Password'
};

const ForgotPassword: NextPage = () => {
  const { mode } = useThemeMode();

  return (
    <Flex direction={'column'} justify={'center'} className="mt-10">
      <Card
        className="m-auto h-3/5
                    w-2/3 max-w-2xl p-8 sm:h-[60vh] sm:max-h-[800px]"
      >
        <Flex direction={'column'} height={'100%'}>
          <div className="flex h-2/5 flex-col justify-around">
            <Text size={'8'}>
              <Strong>Reset your password</Strong>
            </Text>

            <Text>
              Enter the email address associated with your account and we'll
              send you a link to reset your password.
            </Text>
          </div>

          <Form.Root className="flex h-2/5 flex-col justify-around">
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
                  match="typeMismatch"
                >
                  Please provide a valid email
                </Form.Message>

                <Form.Control asChild>
                  <Input type="email" placeholder="john.doe@gmail.com" />
                </Form.Control>
              </Form.Field>
            </div>

            <div className="flex items-center justify-start gap-2">
              <Link href="/login">
                <Button
                  className="h-24 w-36 rounded-2xl"
                  style={{
                    padding: '26px 14px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    backgroundColor: mode === 'dark' ? '#27272A' : '#EDEDED',
                    color: mode === 'dark' ? 'white' : 'black'
                  }}
                >
                  Back to Login
                </Button>
              </Link>
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
              >
                Continue
              </Button>
            </div>
          </Form.Root>
          <hr className="my-6 h-px border bg-gray-200 dark:bg-gray-700" />
          <div className="flex h-1/5 items-center gap-2">
            <Text>Don&apos;t have an account? </Text>
            <Link href={'/account/create'} className="text-violet-500">
              Sign up
            </Link>
          </div>
        </Flex>
      </Card>
    </Flex>
  );
};

export default ForgotPassword;
