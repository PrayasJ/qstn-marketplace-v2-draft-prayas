//import CreateSurveyButton from "@components/CreateSurveyButton";
import { Footer } from '@components/Footer/FooterDashboard';
import { Button, Checkbox, Flex, Strong, Text } from '@sekmet/radix-ui-themes';
import { useRef, useState } from 'react';

interface PaymentMethodCardProps {
  method: string;
}
function PaymentMethodCard({ method }: PaymentMethodCardProps) {
  const checkRef = useRef<HTMLButtonElement>(null);
  const cardRef = useRef<HTMLButtonElement>(null);
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
    checkRef.current?.click();
  };

  return (
    <Button
      onClick={() => handleClick()}
      ref={cardRef}
      variant="soft"
      size={'4'}
      color="gray"
      className="hover:selected-color flex"
    >
      <div className="flex w-full items-center gap-2">
        <Checkbox color="purple" ref={checkRef} onClick={() => handleClick()} />

        <Text>{method}</Text>
      </div>
    </Button>
  );
}

export default function Settings() {
  const apiKey = 'CQGN-8T3NA-5DRMB2G-FAAH';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiKey);
  };

  return (
    <main className="relative h-full w-full">
      <div className="page-minus-footer flex h-screen flex-col gap-4">
        <Text size={'8'} className="h-16">
          <Strong>Settings</Strong>
        </Text>
        <span className="grid grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <p className="flex flex-col">
              <Text>
                <Strong>Preferred Payment Method</Strong>
              </Text>
              <Text>Select your preferred payment method</Text>
            </p>
            <PaymentMethodCard method="NEAR Wallet" />
            <PaymentMethodCard method="Credit Card - Stripe" />
            <PaymentMethodCard method="Other payment method" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="flex flex-col">
              <Text>
                <Strong>SDK API Key</Strong>
              </Text>
              <Text>Below is your SDK API key</Text>
            </p>
            <Button
              variant="soft"
              size={'4'}
              color="gray"
              className="w-3/4"
              onClick={() => copyToClipboard()}
            >
              <Flex justify={'between'} align={'center'} width={'100%'}>
                <Text>{apiKey}</Text>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 2H9.73333C11.2268 2 11.9735 2 12.544 2.29065C13.0457 2.54631 13.4537 2.95426 13.7094 3.45603C14 4.02646 14 4.77319 14 6.26667V11M4.13333 14H9.53333C10.2801 14 10.6534 14 10.9387 13.8547C11.1895 13.7268 11.3935 13.5229 11.5213 13.272C11.6667 12.9868 11.6667 12.6134 11.6667 11.8667V6.46667C11.6667 5.71993 11.6667 5.34656 11.5213 5.06135C11.3935 4.81046 11.1895 4.60649 10.9387 4.47866C10.6534 4.33333 10.2801 4.33333 9.53333 4.33333H4.13333C3.3866 4.33333 3.01323 4.33333 2.72801 4.47866C2.47713 4.60649 2.27316 4.81046 2.14532 5.06135C2 5.34656 2 5.71993 2 6.46667V11.8667C2 12.6134 2 12.9868 2.14532 13.272C2.27316 13.5229 2.47713 13.7268 2.72801 13.8547C3.01323 14 3.3866 14 4.13333 14Z"
                    stroke="#27272A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Flex>
            </Button>
          </div>
        </span>
      </div>
      <Footer />
    </main>
  );
}
