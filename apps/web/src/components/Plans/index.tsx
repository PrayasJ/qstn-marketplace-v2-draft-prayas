import { Button, Card, Separator, Strong, Text } from '@sekmet/radix-ui-themes';
import type { Metadata, NextPage } from 'next';
import { useRouter } from 'next/navigation';

export enum BusinessPlan {
  Individual,
  SmallBusiness,
  MediumBusiness,
  LargeBusiness
}

export type BusinessPlanDetails = {
  [BusinessPlan.Individual]: {
    name: 'Individual';
    users: 20;
    fee: 10;
  };
  [BusinessPlan.SmallBusiness]: {
    name: 'Small business';
    users: 100;
    fee: 7;
  };
  [BusinessPlan.MediumBusiness]: {
    name: 'Medium business';
    users: 200;
    fee: 5;
  };
  [BusinessPlan.LargeBusiness]: {
    name: 'Large business';
    users: 500;
    fee: 2.5;
  };
};

export type Individual = BusinessPlanDetails[BusinessPlan.Individual];
export type SmallBusiness = BusinessPlanDetails[BusinessPlan.SmallBusiness];
export type MediumBusiness = BusinessPlanDetails[BusinessPlan.MediumBusiness];
export type LargeBusiness = BusinessPlanDetails[BusinessPlan.LargeBusiness];

export const metadata: Metadata = {
  title: 'Business Plans'
};

const Plans: NextPage = () => {
  const router = useRouter();
  //const { mode } = useThemeMode();

  const selectButton = (plan: BusinessPlan) => {
    console.log(plan);

    return (
      <Button
        size={'3'}
        radius="large"
        onClick={() => router.push('/plans/payments')}
      >
        <Text>Select package</Text>
      </Button>
    );
  };

  return (
    <main className="flex h-full flex-col justify-between p-6">
      <section className="flex flex-grow flex-col justify-between p-6 px-16">
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

        <p className="flex flex-col gap-2 pt-8">
          <Text size={'7'}>
            <Strong>Select a package</Strong>
          </Text>
          <Text className="w-2/5">
            Pick one of our plans to get started with your campaign. You can
            reach out to use for a custom plan first your needs by contacting
            us.
          </Text>
        </p>

        <div className="flex h-full flex-grow justify-center ">
          <section className="flex items-center justify-center gap-8">
            <Card size={'4'}>
              <div className="flex flex-col gap-2 px-2">
                <Text size={'4'}>
                  <Strong>Individual</Strong>
                </Text>
                <Text color="gray">For small teams</Text>

                <Text size={'6'}>
                  <Strong>$11/month</Strong>
                </Text>
                <Separator size={'3'} className="m-auto my-4" />

                <ul className="hint-text list-disc py-2">
                  <li className="list-item">
                    <Text color="gray">
                      Survey <Strong>20 users</Strong>
                    </Text>
                  </li>
                  <li className="list-item">
                    <Text color="gray">
                      QSTN service fee <Strong>10%/campaign</Strong>
                    </Text>
                  </li>
                </ul>
                {selectButton(BusinessPlan.Individual)}
              </div>
            </Card>
            <Card size={'4'}>
              <div className="flex flex-col gap-2 px-2">
                <div className=" absolute right-0 top-0 rounded-bl-xl bg-green-300 p-2 px-3">
                  <Text>
                    <Strong>Most popular</Strong>
                  </Text>
                </div>
                <Text size={'4'}>
                  <Strong>Small business</Strong>
                </Text>
                <Text color="gray">For startups</Text>

                <Text size={'6'}>
                  <Strong>$49/month</Strong>
                </Text>
                <Separator size={'3'} className="m-auto my-4" />

                <ul className="hint-text list-disc py-2">
                  <li className="list-item">
                    <Text color="gray">
                      Survey <Strong>100 users</Strong>
                    </Text>
                  </li>
                  <li className="list-item">
                    <Text color="gray">
                      QSTN service fee <Strong>7%/campaign</Strong>
                    </Text>
                  </li>
                </ul>
                {selectButton(BusinessPlan.SmallBusiness)}
              </div>
            </Card>
            <Card size={'4'}>
              <div className="flex flex-col gap-2 px-2">
                <Text size={'4'}>
                  <Strong>Medium business</Strong>
                </Text>
                <Text color="gray">For scale-up companies</Text>

                <Text size={'6'}>
                  <Strong>$99/month</Strong>
                </Text>
                <Separator size={'3'} className="m-auto my-4" />

                <ul className="hint-text list-disc py-2">
                  <li className="list-item">
                    <Text color="gray">
                      Survey <Strong>200 users</Strong>
                    </Text>
                  </li>
                  <li className="list-item">
                    <Text color="gray">
                      QSTN service fee <Strong>5%/campaign</Strong>
                    </Text>
                  </li>
                </ul>
                {selectButton(BusinessPlan.MediumBusiness)}
              </div>
            </Card>
            <Card size={'4'}>
              <div className="flex flex-col gap-2 px-2">
                <Text size={'4'}>
                  <Strong>Large business</Strong>
                </Text>
                <Text color="gray">For enterprises</Text>

                <Text size={'6'}>
                  <Strong>$199/month</Strong>
                </Text>
                <Separator size={'3'} className="m-auto my-4" />

                <ul className="hint-text list-disc py-2">
                  <li className="list-item">
                    <Text color="gray">
                      Survey <Strong>500 users</Strong>
                    </Text>
                  </li>
                  <li className="list-item">
                    <Text color="gray">
                      QSTN service fee <Strong>2.5%/campaign</Strong>
                    </Text>
                  </li>
                </ul>
                {selectButton(BusinessPlan.LargeBusiness)}
              </div>
            </Card>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Plans;
