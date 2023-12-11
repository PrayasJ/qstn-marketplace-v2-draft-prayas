import CreateSurveyButton from '@components/CreateSurveyButton';
import { Footer } from '@components/Footer/FooterDashboard';
import { Strong, Text } from '@sekmet/radix-ui-themes';
import { useState } from 'react';

export default function Analytics() {
  enum DateRange {
    All,
    Seven,
    Fourteen,
    Thirty
  }
  const [dateRange, setDateRange] = useState<DateRange>(DateRange.All);

  // fetch chart data

  return (
    <div className="grid h-screen w-full grid-cols-1 grid-rows-3">
      <div className="relative p-4">
        <div className="flex justify-between">
          <Text size={'8'}>
            <Strong>Analytics</Strong>
          </Text>
          <div className="flex w-1/4 items-center justify-around rounded-full bg-white">
            <button
              className={`w-20 rounded-full ${
                dateRange === DateRange.All ? 'bg-light-mode' : ''
              }`}
              onClick={() => setDateRange(DateRange.All)}
            >
              All
            </button>
            <button
              className={`w-20 rounded-full ${
                dateRange === DateRange.Seven ? 'bg-light-mode' : ''
              }`}
              onClick={() => setDateRange(DateRange.Seven)}
            >
              7 days
            </button>
            <button
              className={`w-20 rounded-full ${
                dateRange === DateRange.Fourteen ? 'bg-light-mode' : ''
              }`}
              onClick={() => setDateRange(DateRange.Fourteen)}
            >
              14 days
            </button>
            <button
              className={`w-20 rounded-full ${
                dateRange === DateRange.Thirty ? 'bg-light-mode' : ''
              }`}
              onClick={() => setDateRange(DateRange.Thirty)}
            >
              30 days
            </button>
          </div>
        </div>
        <div className="absolute left-[43%] top-[43%] flex -translate-x-[43%] -translate-y-[43%] flex-col items-center justify-center gap-4">
          <svg
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[48px] w-[48px]"
          >
            <rect width={48} height={48} rx={24} fill="white" />
            <path
              d="M16.5 23.1667L16.5 31.5M26.5 23.1667L26.5 31.5M21.5 16.5L21.5 31.5M31.5 16.5V31.5"
              stroke="#09090B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 23.1667L16.5 31.5M26.5 23.1667L26.5 31.5M21.5 16.5L21.5 31.5M31.5 16.5V31.5"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 23.1667L16.5 31.5M26.5 23.1667L26.5 31.5M21.5 16.5L21.5 31.5M31.5 16.5V31.5"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p>No data to show</p>
        </div>
      </div>
      <div className="relative mb-24 p-4">
        <Text size={'7'}>
          <Strong>Survey Insights</Strong>
        </Text>
        <div className="absolute left-[43%] top-[43%] flex -translate-x-[43%] -translate-y-[43%] flex-col items-center justify-center gap-4">
          <svg
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width={48} height={48} rx={24} fill="white" />
            <path
              d="M29.417 27.3333C31.0278 27.3333 32.3337 24.9082 32.3337 21.9167C32.3337 18.9251 31.0278 16.5 29.417 16.5M29.417 27.3333C27.8062 27.3333 26.5003 24.9082 26.5003 21.9167C26.5003 18.9251 27.8062 16.5 29.417 16.5M29.417 27.3333L18.5366 25.3551C17.7637 25.2146 17.3772 25.1443 17.0648 24.9908C16.4291 24.6785 15.9556 24.1113 15.7621 23.4299C15.667 23.095 15.667 22.7022 15.667 21.9167C15.667 21.1311 15.667 20.7383 15.7621 20.4034C15.9556 19.7221 16.4291 19.1548 17.0648 18.8425C17.3772 18.689 17.7637 18.6188 18.5366 18.4783L29.417 16.5M18.167 25.6667L18.4952 30.2617C18.5264 30.698 18.542 30.9162 18.6369 31.0816C18.7205 31.2272 18.8461 31.3441 18.9972 31.4171C19.1689 31.5 19.3877 31.5 19.8252 31.5H21.3105C21.8106 31.5 22.0607 31.5 22.2458 31.4003C22.4084 31.3126 22.5373 31.1734 22.6122 31.0046C22.6974 30.8124 22.6783 30.5631 22.6399 30.0644L22.3337 26.0833"
              stroke="#09090B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M29.417 27.3333C31.0278 27.3333 32.3337 24.9082 32.3337 21.9167C32.3337 18.9251 31.0278 16.5 29.417 16.5M29.417 27.3333C27.8062 27.3333 26.5003 24.9082 26.5003 21.9167C26.5003 18.9251 27.8062 16.5 29.417 16.5M29.417 27.3333L18.5366 25.3551C17.7637 25.2146 17.3772 25.1443 17.0648 24.9908C16.4291 24.6785 15.9556 24.1113 15.7621 23.4299C15.667 23.095 15.667 22.7022 15.667 21.9167C15.667 21.1311 15.667 20.7383 15.7621 20.4034C15.9556 19.7221 16.4291 19.1548 17.0648 18.8425C17.3772 18.689 17.7637 18.6188 18.5366 18.4783L29.417 16.5M18.167 25.6667L18.4952 30.2617C18.5264 30.698 18.542 30.9162 18.6369 31.0816C18.7205 31.2272 18.8461 31.3441 18.9972 31.4171C19.1689 31.5 19.3877 31.5 19.8252 31.5H21.3105C21.8106 31.5 22.0607 31.5 22.2458 31.4003C22.4084 31.3126 22.5373 31.1734 22.6122 31.0046C22.6974 30.8124 22.6783 30.5631 22.6399 30.0644L22.3337 26.0833"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M29.417 27.3333C31.0278 27.3333 32.3337 24.9082 32.3337 21.9167C32.3337 18.9251 31.0278 16.5 29.417 16.5M29.417 27.3333C27.8062 27.3333 26.5003 24.9082 26.5003 21.9167C26.5003 18.9251 27.8062 16.5 29.417 16.5M29.417 27.3333L18.5366 25.3551C17.7637 25.2146 17.3772 25.1443 17.0648 24.9908C16.4291 24.6785 15.9556 24.1113 15.7621 23.4299C15.667 23.095 15.667 22.7022 15.667 21.9167C15.667 21.1311 15.667 20.7383 15.7621 20.4034C15.9556 19.7221 16.4291 19.1548 17.0648 18.8425C17.3772 18.689 17.7637 18.6188 18.5366 18.4783L29.417 16.5M18.167 25.6667L18.4952 30.2617C18.5264 30.698 18.542 30.9162 18.6369 31.0816C18.7205 31.2272 18.8461 31.3441 18.9972 31.4171C19.1689 31.5 19.3877 31.5 19.8252 31.5H21.3105C21.8106 31.5 22.0607 31.5 22.2458 31.4003C22.4084 31.3126 22.5373 31.1734 22.6122 31.0046C22.6974 30.8124 22.6783 30.5631 22.6399 30.0644L22.3337 26.0833"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p>You have no published surveys.</p>
          <CreateSurveyButton />
        </div>
      </div>

      <Footer />
    </div>
  );
}
