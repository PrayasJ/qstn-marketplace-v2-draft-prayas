import MetaTags from '@components/Common/MetaTags';
import { useThemeMode } from '@hooks/useThemeMode';
import { APP_NAME } from '@qstn/data/constants';
import { Button } from '@sekmet/radix-ui-themes';
import Link from 'next/link';
import type { FC } from 'react';

interface HomeProps {
  loggedIn: boolean;
}

const Home: FC<HomeProps> = () => {
  const { mode } = useThemeMode();
  return (
    <>
      <MetaTags
        title={`Unleash the power of your personal information • ${APP_NAME}`}
      />
      <div className="relative min-h-screen">
        <div className="flex items-center max-lg:ml-3 max-lg:mr-3 max-md:flex-wrap">
          <div className="landing-intro container mx-auto flex flex-col pb-[50px] pt-[30px] text-center sm:pt-[120px]">
            <div className="relative inline-flex flex-col items-center sm:gap-[40px]">
              <div className="relative inline-flex flex-[0_0_auto] flex-col items-center sm:gap-[20px]">
                <p className="relative mt-[-1.00px] text-center text-xl font-semibold tracking-[0] text-transparent [font-family:'Inter-SemiBold',Helvetica] sm:w-[850px] sm:text-[48px] sm:leading-[60px]">
                  <span
                    className="text-[#ffffff]"
                    style={{ color: mode === 'light' ? '#27272A' : '' }}
                  >
                    Your Part to Engaging{' '}
                  </span>
                  <span className="text-[#a855f7]">
                    Surveys
                    <br />
                  </span>
                  <span
                    className="text-[#ffffff]"
                    style={{ color: mode === 'light' ? '#27272A' : '' }}
                  >
                    and{' '}
                  </span>
                  <span className="text-[#a855f7]">Rewarding</span>
                  <span
                    className="text-[#ffffff]"
                    style={{ color: mode === 'light' ? '#27272A' : '' }}
                  >
                    {' '}
                    Participation
                  </span>
                </p>
                <p
                  style={{ color: mode === 'light' ? '#27272A' : '' }}
                  className="font-text-base-medium relative mb-6 mt-6 text-center text-[length:var(--text-base-medium-font-size)] font-[number:var(--text-base-medium-font-weight)] leading-[var(--text-base-medium-line-height)] tracking-[var(--text-base-medium-letter-spacing)] text-zinc-200 [font-style:var(--text-base-medium-font-style)] sm:w-[650px]"
                >
                  Join QSTN and embark on a journey of engaging surveys
                  and&nbsp;&nbsp;rewarding participation. Share your insights
                  and collect valuable rewards in the Web3 era.
                </p>
              </div>
              <Link href="/login">
                <Button
                  className="h-36 w-48 rounded-2xl text-lg"
                  style={{ padding: '21px 12px', borderRadius: '12px' }}
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/*<Grid columns="2" gap="3" width="auto">
          <Box height="9">
            <div className="flex items-center max-lg:ml-3 max-lg:mr-3 max-md:flex-wrap">
              <div className="landing-intro container mx-auto flex flex-col pb-[10px] pt-[30px] text-center">
                <Image
                  src="/assets/images/homepage-banner1.png"
                  alt="qstn surveys"
                  width={800}
                  height={350}
                />
              </div>
            </div>
          </Box>
          <Box height="9">
            <Image
              src="/assets/images/banner-hp-1.svg"
              alt="qstn surveys"
              width={361}
              height={370}
            />
          </Box>
        </Grid>*/}
      </div>
    </>
  );
};

export default Home;
