import { Card, Flex, Strong, Text } from '@sekmet/radix-ui-themes';

export default function PlanCard({ className }: { className?: string }) {
  return (
    <Card className={`${className}`} size={'3'}>
      <div className="flex h-full w-full flex-col justify-around gap-4">
        <span className="flex flex-col gap-2">
          <Text>
            <Strong>Campaign plan</Strong>
          </Text>
          <Card>
            <Flex direction={'column'}>
              <Text>
                <Strong>{'Large Business'}</Strong>
              </Text>
              <Text>Survey {'500'} users.</Text>
            </Flex>
          </Card>
        </span>
        <span className="flex flex-col gap-2">
          <Text>
            <Strong>Campaign objective</Strong>
          </Text>
          <Card>
            <Flex direction={'column'}>
              <Text>
                <Strong>Qualitative</Strong>
              </Text>
              <Text>
                Response are judged by performance and mathematics rather than
                feel.
              </Text>
            </Flex>
          </Card>
        </span>

        <Card style={{ backgroundColor: '#EDEDED' }}>
          <Text>
            <Strong>$55.00</Strong>
          </Text>
          <Text size={'2'}>+2% Stripe fee</Text>
        </Card>
      </div>
    </Card>
  );
}
