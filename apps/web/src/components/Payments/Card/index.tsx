import * as Form from '@radix-ui/react-form';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as Select from '@radix-ui/react-select';
import { Button, Flex, Strong, Text, TextField } from '@sekmet/radix-ui-themes';
import type { Metadata, NextPage } from 'next';
import { useRouter } from 'next/navigation';

import PlanCard from './PlanCard';

export const metadata: Metadata = {
  title: 'Card Payments'
};

const CardPayment: NextPage = () => {
  const router = useRouter();
  //const plan = 'Individual';

  return (
    <main className="flex h-full flex-col gap-4 p-6">
      <Button
        variant="ghost"
        size={'3'}
        onClick={() => router.back()}
        className="w-[10%]"
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
          <Text>Back</Text>
        </div>
      </Button>

      <Text>
        <Strong>Pay with Card</Strong>
      </Text>
      <Text>We use Stripe to process credit card payments securely</Text>

      <section className="flex w-full flex-grow">
        <Form.Root className="flex w-full flex-col gap-4">
          <Form.Field name="cardholderName" className="flex flex-col">
            <Form.Label>Cardholder name</Form.Label>
            <Form.Message match={'valueMissing'}>
              Please enter the name on the card
            </Form.Message>
            <Form.Control asChild>
              <TextField.Input
                size={'3'}
                type="text"
                placeholder="JOHN DOE"
                required
              />
            </Form.Control>
          </Form.Field>
          <Form.Field name="cardNumber" className="flex flex-col">
            <Form.Label>Card number</Form.Label>
            <Form.Message match={'badInput'}>
              Please enter a valid card number
            </Form.Message>
            <Form.Control asChild>
              <TextField.Input
                size={'3'}
                type="number"
                placeholder="1234 5678 9012 3456"
                required
              />
            </Form.Control>
          </Form.Field>
          <Flex width={'100%'} justify={'between'} gap={'4'}>
            <Form.Field name="expirationDate" className="flex w-full flex-col">
              <Form.Label>Expiration date</Form.Label>
              <Form.Message match={'badInput'}>
                Please enter a valid expiration date
              </Form.Message>
              <Form.Control asChild>
                <TextField.Input
                  size={'3'}
                  type="date"
                  placeholder="MM/YY"
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Field name="CVC" className="flex w-full flex-col">
              <Form.Label>CVC</Form.Label>
              <Form.Message match={'badInput'}>
                Please enter a valid CVC
              </Form.Message>
              <Form.Control asChild>
                <TextField.Input
                  size={'3'}
                  type="number"
                  placeholder="CVC"
                  required
                />
              </Form.Control>
            </Form.Field>
          </Flex>
          <Form.Field name="country" className="flex flex-col">
            <Form.Label>Country</Form.Label>
            <Form.Control asChild>
              <Select.Root>
                <Select.Trigger
                  className="text-violet11 hover:bg-mauve3 data-[placeholder]:text-violet9 inline-flex h-[35px] items-center justify-between gap-[5px] rounded bg-white px-[15px] text-[13px] leading-none shadow-[0_2px_10px] shadow-black/10 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
                  aria-label="Food"
                >
                  <Select.Value placeholder="Choose from the list..." />
                  <Select.Icon className="text-violet11">
                    <ChevronDownIcon />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content className="overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                    <Select.ScrollUpButton className="text-violet11 flex h-[25px] cursor-default items-center justify-center bg-white">
                      <ChevronUpIcon />
                    </Select.ScrollUpButton>
                    <Select.Viewport className="p-[5px]">
                      <Select.Item value="usa">
                        United States of America
                      </Select.Item>
                      <Select.Item value="canada">Canada</Select.Item>
                      <Select.Item value="mexico">Mexico</Select.Item>
                      <Select.Item value="uk">United Kingdom</Select.Item>
                      <Select.Item value="france">France</Select.Item>
                      <Select.Item value="germany">Germany</Select.Item>
                      <Select.Item value="spain">Spain</Select.Item>
                      <Select.Item value="italy">Italy</Select.Item>
                      <Select.Item value="japan">Japan</Select.Item>
                      <Select.Item value="china">China</Select.Item>
                    </Select.Viewport>
                    <Select.ScrollDownButton className="text-violet11 flex h-[25px] cursor-default items-center justify-center bg-white">
                      <ChevronDownIcon />
                    </Select.ScrollDownButton>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </Form.Control>
          </Form.Field>

          <div className="flex gap-2">
            <Button size={'3'} variant="surface">
              <Text>
                <Strong>Back</Strong>
              </Text>
            </Button>
            <Form.Submit asChild>
              <Button size={'3'}>
                <Text>
                  <Strong>Pay with Stripe</Strong>
                </Text>
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9L5 5L1 1"
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

        <div className="flex w-full justify-end">
          <PlanCard className="max-h-[25rem] w-3/4 max-w-xl" />
        </div>
      </section>
    </main>
  );
};

export default CardPayment;
