import { Footer } from '@components/Footer/FooterDashboard';
import { Button, Card, Strong, Text } from '@sekmet/radix-ui-themes';
//import CreateSurveyButton from "@components/CreateSurveyButton";
import { useEffect, useRef } from 'react';

export default function Balance() {
  const ref = useRef<HTMLDivElement>(null);

  const transactions = [
    {
      transaction: 'TPfxb4sHKTtjm5SzdEyaVrPXmqgs6rs6RS0',
      status: 'In progress',
      amount: 36.90518361340467,
      date: 'October 21'
    },
    {
      transaction: 'TPfxb4sHKTtjm5SzdEyaVrPXmqgs6rs6RS1',
      status: 'Done',
      amount: 41.30921521065281,
      date: 'October 21'
    },
    {
      transaction: 'TPfxb4sHKTtjm5SzdEyaVrPXmqgs6rs6RS2',
      status: 'Cancelled',
      amount: 28.597473298592663,
      date: 'October 21'
    },
    {
      transaction: 'TPfxb4sHKTtjm5SzdEyaVrPXmqgs6rs6RS3',
      status: 'In progress',
      amount: 70.28706825973258,
      date: 'October 21'
    },
    {
      transaction: 'TPfxb4sHKTtjm5SzdEyaVrPXmqgs6rs6RS4',
      status: 'Done',
      amount: 54.22000821272172,
      date: 'October 21'
    },
    {
      transaction: 'TPfxb4sHKTtjm5SzdEyaVrPXmqgs6rs6RS5',
      status: 'Cancelled',
      amount: 46.21707995685833,
      date: 'October 21'
    },
    {
      transaction: 'TPfxb4sHKTtjm5SzdEyaVrPXmqgs6rs6RS6',
      status: 'In progress',
      amount: 38.44162411552142,
      date: 'October 21'
    },
    {
      transaction: 'TPfxb4sHKTtjm5SzdEyaVrPXmqgs6rs6RS7',
      status: 'Done',
      amount: 26.454540506013088,
      date: 'October 21'
    },
    {
      transaction: 'TPfxb4sHKTtjm5SzdEyaVrPXmqgs6rs6RS8',
      status: 'Cancelled',
      amount: 39.50013523404127,
      date: 'October 21'
    },
    {
      transaction: 'TPfxb4sHKTtjm5SzdEyaVrPXmqgs6rs6RS9',
      status: 'In progress',
      amount: 65.2847108726395,
      date: 'October 21'
    },
    {
      transaction: 'TPfxb4sHKTtjm5SzdEyaVrPXmqgs6rs6RS10',
      status: 'Done',
      amount: 25.578174835008452,
      date: 'October 21'
    },
    {
      transaction: 'TPfxb4sHKTtjm5SzdEyaVrPXmqgs6rs6RS11',
      status: 'Cancelled',
      amount: 40.85176426179097,
      date: 'October 21'
    },
    {
      transaction: 'TPfxb4sHKTtjm5SzdEyaVrPXmqgs6rs6RS12',
      status: 'In progress',
      amount: 34.6692555990637,
      date: 'October 21'
    },
    {
      transaction: 'TPfxb4sHKTtjm5SzdEyaVrPXmqgs6rs6RS2',
      status: 'Cancelled',
      amount: 28.597473298592663,
      date: 'October 21'
    },
    {
      transaction: 'TPfxb4sHKTtjm5SzdEyaVrPXmqgs6rs6RS3',
      status: 'In progress',
      amount: 70.28706825973258,
      date: 'October 21'
    },
    {
      transaction: 'TPfxb4sHKTtjm5SzdEyaVrPXmqgs6rs6RS4',
      status: 'Done',
      amount: 54.22000821272172,
      date: 'October 21'
    }
    // {
    //     "transaction": "TPfxb4sHKTtjm5SzdEyaVrPXmqgs6rs6RS5",
    //     "status": "Cancelled",
    //     "amount": 46.21707995685833,
    //     "date": "October 21"
    // },
    // {
    //     "transaction": "TPfxb4sHKTtjm5SzdEyaVrPXmqgs6rs6RS6",
    //     "status": "In progress",
    //     "amount": 38.44162411552142,
    //     "date": "October 21"
    // },
    // {
    //     "transaction": "TPfxb4sHKTtjm5SzdEyaVrPXmqgs6rs6RS7",
    //     "status": "Done",
    //     "amount": 26.454540506013088,
    //     "date": "October 21"
    // },
    // {
    //     "transaction": "TPfxb4sHKTtjm5SzdEyaVrPXmqgs6rs6RS8",
    //     "status": "Cancelled",
    //     "amount": 39.50013523404127,
    //     "date": "October 21"
    // },
    // {
    //     "transaction": "TPfxb4sHKTtjm5SzdEyaVrPXmqgs6rs6RS9",
    //     "status": "In progress",
    //     "amount": 65.2847108726395,
    //     "date": "October 21"
    // },
    // {
    //     "transaction": "TPfxb4sHKTtjm5SzdEyaVrPXmqgs6rs6RS10",
    //     "status": "Done",
    //     "amount": 25.578174835008452,
    //     "date": "October 21"
    // },
    // {
    //     "transaction": "TPfxb4sHKTtjm5SzdEyaVrPXmqgs6rs6RS11",
    //     "status": "Cancelled",
    //     "amount": 40.85176426179097,
    //     "date": "October 21"
    // },
    // {
    //     "transaction": "TPfxb4sHKTtjm5SzdEyaVrPXmqgs6rs6RS12",
    //     "status": "In progress",
    //     "amount": 34.6692555990637,
    //     "date": "October 21"
    // }
  ];

  useEffect(() => {
    console.log(ref.current);
  }, []);

  return (
    <main className="relative h-full w-full">
      <div className="flex h-full flex-col gap-6">
        <div className="flex justify-between" ref={ref}>
          <p className="flex flex-col">
            <Text size={'8'} className="h-16">
              <Strong>Balance</Strong>
            </Text>
            <Text>Business ID #196 registered transactions.</Text>
          </p>
          <Button>Export CSV</Button>
        </div>
        <span className="w-full flex-grow">
          <Card className="h-full">
            {transactions?.length <= 0 && (
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4">
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={48} height={48} rx={24} fill="#E4E4E7" />
                  <path
                    d="M32.3337 21.0833H15.667M15.667 24.4166H18.6226C19.0727 24.4166 19.2978 24.4166 19.5154 24.4554C19.7086 24.4899 19.8971 24.5469 20.0769 24.6254C20.2795 24.7139 20.4668 24.8387 20.8414 25.0884L21.326 25.4115C21.7005 25.6612 21.8878 25.7861 22.0904 25.8745C22.2702 25.953 22.4587 26.0101 22.6519 26.0445C22.8695 26.0833 23.0946 26.0833 23.5448 26.0833H24.4559C24.906 26.0833 25.1311 26.0833 25.3488 26.0445C25.542 26.0101 25.7304 25.953 25.9102 25.8745C26.1129 25.7861 26.3001 25.6612 26.6747 25.4115L27.1593 25.0884C27.5338 24.8387 27.7211 24.7139 27.9237 24.6254C28.1036 24.5469 28.292 24.4899 28.4852 24.4554C28.7029 24.4166 28.9279 24.4166 29.3781 24.4166H32.3337M15.667 20L15.667 28C15.667 28.9334 15.667 29.4001 15.8486 29.7566C16.0084 30.0702 16.2634 30.3252 16.577 30.485C16.9335 30.6666 17.4002 30.6666 18.3337 30.6666L29.667 30.6666C30.6004 30.6666 31.0671 30.6666 31.4236 30.485C31.7372 30.3252 31.9922 30.0702 32.152 29.7566C32.3337 29.4001 32.3337 28.9334 32.3337 28V20C32.3337 19.0666 32.3337 18.5998 32.152 18.2433C31.9922 17.9297 31.7372 17.6748 31.4236 17.515C31.0671 17.3333 30.6004 17.3333 29.667 17.3333L18.3337 17.3333C17.4002 17.3333 16.9335 17.3333 16.577 17.515C16.2634 17.6748 16.0084 17.9297 15.8486 18.2433C15.667 18.5998 15.667 19.0666 15.667 20Z"
                    stroke="#09090B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32.3337 21.0833H15.667M15.667 24.4166H18.6226C19.0727 24.4166 19.2978 24.4166 19.5154 24.4554C19.7086 24.4899 19.8971 24.5469 20.0769 24.6254C20.2795 24.7139 20.4668 24.8387 20.8414 25.0884L21.326 25.4115C21.7005 25.6612 21.8878 25.7861 22.0904 25.8745C22.2702 25.953 22.4587 26.0101 22.6519 26.0445C22.8695 26.0833 23.0946 26.0833 23.5448 26.0833H24.4559C24.906 26.0833 25.1311 26.0833 25.3488 26.0445C25.542 26.0101 25.7304 25.953 25.9102 25.8745C26.1129 25.7861 26.3001 25.6612 26.6747 25.4115L27.1593 25.0884C27.5338 24.8387 27.7211 24.7139 27.9237 24.6254C28.1036 24.5469 28.292 24.4899 28.4852 24.4554C28.7029 24.4166 28.9279 24.4166 29.3781 24.4166H32.3337M15.667 20L15.667 28C15.667 28.9334 15.667 29.4001 15.8486 29.7566C16.0084 30.0702 16.2634 30.3252 16.577 30.485C16.9335 30.6666 17.4002 30.6666 18.3337 30.6666L29.667 30.6666C30.6004 30.6666 31.0671 30.6666 31.4236 30.485C31.7372 30.3252 31.9922 30.0702 32.152 29.7566C32.3337 29.4001 32.3337 28.9334 32.3337 28V20C32.3337 19.0666 32.3337 18.5998 32.152 18.2433C31.9922 17.9297 31.7372 17.6748 31.4236 17.515C31.0671 17.3333 30.6004 17.3333 29.667 17.3333L18.3337 17.3333C17.4002 17.3333 16.9335 17.3333 16.577 17.515C16.2634 17.6748 16.0084 17.9297 15.8486 18.2433C15.667 18.5998 15.667 19.0666 15.667 20Z"
                    stroke="black"
                    strokeOpacity="0.2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32.3337 21.0833H15.667M15.667 24.4166H18.6226C19.0727 24.4166 19.2978 24.4166 19.5154 24.4554C19.7086 24.4899 19.8971 24.5469 20.0769 24.6254C20.2795 24.7139 20.4668 24.8387 20.8414 25.0884L21.326 25.4115C21.7005 25.6612 21.8878 25.7861 22.0904 25.8745C22.2702 25.953 22.4587 26.0101 22.6519 26.0445C22.8695 26.0833 23.0946 26.0833 23.5448 26.0833H24.4559C24.906 26.0833 25.1311 26.0833 25.3488 26.0445C25.542 26.0101 25.7304 25.953 25.9102 25.8745C26.1129 25.7861 26.3001 25.6612 26.6747 25.4115L27.1593 25.0884C27.5338 24.8387 27.7211 24.7139 27.9237 24.6254C28.1036 24.5469 28.292 24.4899 28.4852 24.4554C28.7029 24.4166 28.9279 24.4166 29.3781 24.4166H32.3337M15.667 20L15.667 28C15.667 28.9334 15.667 29.4001 15.8486 29.7566C16.0084 30.0702 16.2634 30.3252 16.577 30.485C16.9335 30.6666 17.4002 30.6666 18.3337 30.6666L29.667 30.6666C30.6004 30.6666 31.0671 30.6666 31.4236 30.485C31.7372 30.3252 31.9922 30.0702 32.152 29.7566C32.3337 29.4001 32.3337 28.9334 32.3337 28V20C32.3337 19.0666 32.3337 18.5998 32.152 18.2433C31.9922 17.9297 31.7372 17.6748 31.4236 17.515C31.0671 17.3333 30.6004 17.3333 29.667 17.3333L18.3337 17.3333C17.4002 17.3333 16.9335 17.3333 16.577 17.515C16.2634 17.6748 16.0084 17.9297 15.8486 18.2433C15.667 18.5998 15.667 19.0666 15.667 20Z"
                    stroke="black"
                    strokeOpacity="0.2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <Text>
                  <Strong>Balance is empty</Strong>
                </Text>
                <Text>Top up your balance</Text>
              </div>
            )}
            {transactions?.length > 0 && (
              <span className="">
                <div className="grid grid-cols-5 px-4">
                  <Text className="col-span-2">
                    <Strong>Transaction ID</Strong>
                  </Text>
                  <Text>
                    <Strong>Status</Strong>
                  </Text>
                  <Text>
                    <Strong>Amount</Strong>
                  </Text>
                  <Text>
                    <Strong>Date</Strong>
                  </Text>
                </div>
                <div
                  className="hide-scrollbar overflow-y-scroll rounded-xl border-solid 
                                border-slate-300 bg-white"
                >
                  {transactions.map((transaction, index) => (
                    <div
                      key={index}
                      className={`mx-4
                                        grid grid-cols-5 justify-center border-gray-200
                                        ${
                                          index < transactions?.length - 1
                                            ? 'border-b'
                                            : ''
                                        }`}
                    >
                      <Text className="col-span-2">
                        {transaction.transaction}
                      </Text>
                      <Text>{transaction.date}</Text>
                      <Text
                        color={`${
                          transaction.status === 'Done'
                            ? 'green'
                            : transaction.status === 'In progress'
                              ? 'purple'
                              : 'red'
                        }`}
                      >
                        {transaction.status}
                      </Text>
                      <Text>{transaction.amount}</Text>
                    </div>
                  ))}
                </div>
              </span>
            )}
          </Card>
        </span>
      </div>
      <Footer />
    </main>
  );
}
