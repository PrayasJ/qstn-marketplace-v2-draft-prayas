import { Button, Dialog, DropdownMenu } from '@sekmet/radix-ui-themes';

import DialogPopup from './DialogPopup';

export default function CreateSurveyButton() {
  //const [createQuiz, setCreateQuiz] = useState(false);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="light-button-main">
        <Button variant="solid" radius="large" size={'3'}>
          <p>Create survey</p>
          <svg
            width={11}
            height={12}
            viewBox="0 0 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.49967 1.33301V10.6663M0.833008 5.99967H10.1663"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content variant="soft" className="w-[110%]">
        <DropdownMenu.Item>Create Quiz</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Create Campaign</DropdownMenu.Item>
        <Dialog.Root>
          <Dialog.Trigger>
            <DropdownMenu.Item onSelect={(e) => e.preventDefault()}>
              Create Quiz
              <svg
                width={44}
                height={26}
                viewBox="0 0 44 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width={44}
                  height={26}
                  rx={13}
                  fill="#A855F7"
                  fillOpacity="0.2"
                />
                <path
                  d="M9.69602 17H8.2983L11.4389 8.27273H12.9602L16.1009 17H14.7031L12.2358 9.85795H12.1676L9.69602 17ZM9.9304 13.5824H14.4645V14.6903H9.9304V13.5824ZM18.6779 8.27273V17H17.3612V8.27273H18.6779Z"
                  fill="#C084FC"
                />
                <g clipPath="url(#clip0_1032_35689)">
                  <path
                    d="M30.4999 14L28.9999 12.5M31.5051 8.75V8M33.4748 9.53033L34.0051 9M33.4748 13.5L34.0051 14.0303M29.5051 9.53033L28.9748 9M34.2551 11.5H35.0051M27.0656 17.4343L31.6842 12.8157C31.8822 12.6177 31.9813 12.5187 32.0183 12.4045C32.051 12.3041 32.051 12.1959 32.0183 12.0955C31.9813 11.9813 31.8822 11.8823 31.6842 11.6843L31.3156 11.3157C31.1176 11.1177 31.0186 11.0187 30.9044 10.9816C30.804 10.9489 30.6958 10.9489 30.5954 10.9816C30.4813 11.0187 30.3822 11.1177 30.1842 11.3157L25.5656 15.9343C25.3676 16.1323 25.2686 16.2313 25.2315 16.3455C25.1989 16.4459 25.1989 16.5541 25.2315 16.6545C25.2686 16.7687 25.3676 16.8677 25.5656 17.0657L25.9342 17.4343C26.1322 17.6323 26.2313 17.7313 26.3454 17.7684C26.4458 17.8011 26.554 17.8011 26.6544 17.7684C26.7686 17.7313 26.8676 17.6323 27.0656 17.4343Z"
                    stroke="#C084FC"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1032_35689">
                    <rect
                      width={12}
                      height={12}
                      fill="white"
                      transform="translate(24 7)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </DropdownMenu.Item>
          </Dialog.Trigger>

          <DialogPopup
            title="Generate a Quiz"
            description="Generate a quiz using using AI (machine learning) based on a keyword you select. Try it out!"
            input1_label="What is this survey about?"
            input2_label="Number of questions"
            input1_placeholder="Type a keyword..."
            input2_placeholder="Number"
            continue_button_text="Generate Quiz"
            path=""
          />
        </Dialog.Root>

        <Dialog.Root>
          <Dialog.Trigger>
            <DropdownMenu.Item onSelect={(e) => e.preventDefault()}>
              Create Survey
              <svg
                width={44}
                height={26}
                viewBox="0 0 44 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width={44}
                  height={26}
                  rx={13}
                  fill="#A855F7"
                  fillOpacity="0.2"
                />
                <path
                  d="M9.69602 17H8.2983L11.4389 8.27273H12.9602L16.1009 17H14.7031L12.2358 9.85795H12.1676L9.69602 17ZM9.9304 13.5824H14.4645V14.6903H9.9304V13.5824ZM18.6779 8.27273V17H17.3612V8.27273H18.6779Z"
                  fill="#C084FC"
                />
                <g clipPath="url(#clip0_1032_35689)">
                  <path
                    d="M30.4999 14L28.9999 12.5M31.5051 8.75V8M33.4748 9.53033L34.0051 9M33.4748 13.5L34.0051 14.0303M29.5051 9.53033L28.9748 9M34.2551 11.5H35.0051M27.0656 17.4343L31.6842 12.8157C31.8822 12.6177 31.9813 12.5187 32.0183 12.4045C32.051 12.3041 32.051 12.1959 32.0183 12.0955C31.9813 11.9813 31.8822 11.8823 31.6842 11.6843L31.3156 11.3157C31.1176 11.1177 31.0186 11.0187 30.9044 10.9816C30.804 10.9489 30.6958 10.9489 30.5954 10.9816C30.4813 11.0187 30.3822 11.1177 30.1842 11.3157L25.5656 15.9343C25.3676 16.1323 25.2686 16.2313 25.2315 16.3455C25.1989 16.4459 25.1989 16.5541 25.2315 16.6545C25.2686 16.7687 25.3676 16.8677 25.5656 17.0657L25.9342 17.4343C26.1322 17.6323 26.2313 17.7313 26.3454 17.7684C26.4458 17.8011 26.554 17.8011 26.6544 17.7684C26.7686 17.7313 26.8676 17.6323 27.0656 17.4343Z"
                    stroke="#C084FC"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1032_35689">
                    <rect
                      width={12}
                      height={12}
                      fill="white"
                      transform="translate(24 7)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </DropdownMenu.Item>
          </Dialog.Trigger>

          <DialogPopup
            title="Generate a Survey"
            description="Generate a srvey using using AI (machine learning) based on a keyword you select. Try it out!"
            input1_label="What is this survey about?"
            input2_label="Number of questions"
            input1_placeholder="Type a keyword..."
            input2_placeholder="Number"
            continue_button_text="Generate Quiz"
            path="/survey"
          />
        </Dialog.Root>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
