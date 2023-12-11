import { Button, Card, Strong, Text } from '@sekmet/radix-ui-themes';
import type { Metadata, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Payments'
};

const Payments: NextPage = () => {
  const router = useRouter();
  //const { mode } = useThemeMode();

  return (
    <main className="flex h-full flex-col gap-4 p-6">
      <Button
        variant="ghost"
        size={'3'}
        onClick={() => router.back()}
        className="w-44"
      >
        <div className="flex w-full items-center justify-items-start gap-3">
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 11L1.5 6L6.5 1"
              stroke="#A1A1AA"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <Text className="">Back</Text>
        </div>
      </Button>

      <Text size={'7'}>
        <Strong>Fund your survey</Strong>
      </Text>
      <Text>What's your preferred payment method to fund your survey?</Text>

      <section className="mb-6 flex w-full flex-grow flex-col gap-8">
        <span className="grid grid-cols-10 gap-8 py-6">
          <Card size={'3'} className="col-span-3">
            <div className="flex h-full flex-col justify-center gap-8 ">
              <Image
                width={400}
                height={88}
                src="/assets/images/card-payments.png"
                alt="Accepted card payment methods"
              />

              <Text>
                <Strong>Card</Strong> 2% fee
              </Text>
              <Text>
                We accept Visa, MasterCard, AMerican Express and others. We use
                Stripe to process payments
              </Text>
              <Button
                size={'4'}
                onClick={() => router.push('/plans/payments/card')}
              >
                <Text>
                  <Strong>Pay with card</Strong>
                </Text>
              </Button>
            </div>
          </Card>
          <Card size={'3'} className="col-span-3">
            <div className="flex h-full flex-col justify-center gap-8 ">
              <Image
                width={400}
                height={88}
                src="/assets/images/crypto-payments.png"
                alt="Accepted crypto payment methods"
              />

              <p>
                <Text>
                  <Strong>Card</Strong>
                </Text>
                <Text color="green"> 0% fee</Text>
              </p>
              <Text>
                We allow users to send NEAR and hEP related tokens (e.g. nUSDC,
                nSTC, nETH)
              </Text>
              <Button
                size={'4'}
                onClick={() => router.push('/plans/payments/crypto')}
              >
                <Text>
                  <Strong>Pay with Crypto</Strong>
                </Text>
              </Button>
            </div>
          </Card>
        </span>
        <p className="flex flex-col gap-2">
          <Text color="purple">
            Learn more about our financial capabilities.
          </Text>
          <Text color="purple">Learn more about our Terms and Conditions</Text>
        </p>
      </section>
    </main>
  );
};

export default Payments;
