import MetaTags from '@components/Common/MetaTags';
import { HomeIcon } from '@heroicons/react/24/outline';
import { APP_NAME } from '@qstn/data/constants';
import { Button } from '@qstn/ui';
import Link from 'next/link';
import type { FC } from 'react';

const Custom404: FC = () => {
  return (
    <div className="page-center relative min-h-screen flex-col">
      <MetaTags title={`404 • ${APP_NAME}`} />
      <img
        src={`/assets/images/nyan_cat.gif`}
        alt="Nyan Cat"
        className="h-60"
        height={240}
      />
      <div className="py-10 text-center">
        <h1 className="mb-4 text-3xl font-bold">Oops, Page not Found!</h1>
        <div className="mb-4">This page could not be found.</div>
        <Link href="/">
          <Button
            className="bg-navy-300 mx-auto flex items-center"
            size="lg"
            icon={<HomeIcon className="h-4 w-4" />}
          >
            Go to home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
