import salesStyles from '@components/Common/sales.module.scss';
import { Footer } from '@components/Footer/FooterDashboard';
import { useThemeMode } from '@hooks/useThemeMode';
import { Button, Card, Flex, Strong, Text } from '@sekmet/radix-ui-themes';
import Tippy from '@tippyjs/react/headless';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { SalesDropdowns } from './SalesDropdowns';

interface dataInterface {
  selected: boolean;
  image: string;
  title: string;
  subtitle: string;
  category: string;
  price: {
    type: string;
    value: number;
    est_usd: number;
  };
  buyer_details: {
    name: string;
    login: string;
    address: string;
  };
  date: string;
}

function classnames(...classes: any[]) {
  return classes.join(' ');
}

export default function Sales() {
  let dummyData: dataInterface[] = [
    {
      selected: false,
      image: '/assets/images/admin-users/johnDoe.svg',
      title: 'Pudgy Bears #189',
      subtitle: 'Pudgy Bears',
      category: 'NFT',
      price: {
        type: 'WETH',
        value: 0.0002,
        est_usd: 10.632
      },
      buyer_details: {
        name: 'AlexRing',
        login: '@JDM***11',
        address: 'tr2i4w2ri432nvio2343290321'
      },
      date: '12:34 AM Jul 10, 2023'
    }
  ];

  const dummCount = 10;
  for (let i = 1; i < dummCount; i++) {
    dummyData.push(JSON.parse(JSON.stringify(dummyData[0])));
  }

  const [data, setData] = useState<dataInterface[]>(dummyData);
  const { mode } = useThemeMode();

  const toggleSelectedStatus = (index: number) => {
    let tempData = [...data];
    tempData[index].selected = !tempData[index].selected;
    setData(tempData);
  };

  return (
    <main className="relative h-full w-full">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <p className="flex flex-col">
            <Text size={'8'} className="h-16">
              <Strong>Sales</Strong>
            </Text>
          </p>
        </div>
        <SalesDropdowns data={data} setData={setData} />
        <table cellSpacing={0} className={salesStyles.salesDataContainer}>
          {data.map((row, index) => (
            <tr
              key={index}
              className={salesStyles.rowContainer}
              style={{
                backgroundColor: mode == 'light' ? '#FFF' : '#1F1F22'
              }}
            >
              <td
                className={classnames(
                  salesStyles.dataCommon,
                  salesStyles.firstData
                )}
              >
                <div
                  style={{
                    backgroundColor: !row.selected
                      ? mode == 'light'
                        ? '#E4E4E7'
                        : '#27272A'
                      : '#A855F7'
                  }}
                  className={salesStyles.salesRowCheckbox}
                  onClick={() => toggleSelectedStatus(index)}
                >
                  {row.selected && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </td>
              <td className={classnames(salesStyles.dataCommon)}>
                <div className={salesStyles.dataDiv}>
                  <Image src={row.image} width={44} height={44} alt={''} />
                </div>
              </td>
              <td className={classnames(salesStyles.dataCommon)}>
                <div className={salesStyles.dataTitleDiv}>
                  <div
                    className={salesStyles.salesRowTitle}
                    style={{ color: mode == 'light' ? '#09090B' : '#FFF' }}
                  >
                    {row.title}
                  </div>
                  <div className={salesStyles.salesRowSubtitle}>
                    {row.subtitle}
                  </div>
                </div>
              </td>
              <td className={classnames(salesStyles.dataCommon)}>
                <div className={salesStyles.dataTitleDiv}>
                  <div
                    className={salesStyles.dataFieldTitle}
                    style={{ color: mode == 'light' ? '#52525B' : '#A1A1AA' }}
                  >
                    Category
                  </div>
                  <div
                    className={salesStyles.dataFieldValue1}
                    style={{ color: mode == 'light' ? '#09090B' : '#FFF' }}
                  >
                    {row.category}
                  </div>
                </div>
              </td>
              <td className={classnames(salesStyles.dataCommon)}>
                <div className={salesStyles.dataTitleDiv}>
                  <div
                    className={salesStyles.dataFieldTitle}
                    style={{ color: mode == 'light' ? '#52525B' : '#A1A1AA' }}
                  >
                    Price
                  </div>
                  <div className={salesStyles.dataFieldValueContainer}>
                    <Image
                      src={'/assets/images/ethereum.svg'}
                      width={16}
                      height={16}
                      alt={''}
                      className={salesStyles.dataFieldImage}
                    />
                    <div
                      className={salesStyles.dataFieldValue2}
                      style={{ color: mode == 'light' ? '#09090B' : '#FFF' }}
                    >
                      {row.price.value + ' ' + row.price.type}
                    </div>
                    <div
                      className={salesStyles.dataFieldValue3}
                      style={{ color: mode == 'light' ? '#52525B' : '#A1A1AA' }}
                    >
                      {'≈$' + row.price.est_usd}
                    </div>
                  </div>
                </div>
              </td>
              <td className={classnames(salesStyles.dataCommon)}>
                <div className={salesStyles.dataTitleDiv}>
                  <div
                    className={salesStyles.dataFieldTitle}
                    style={{ color: mode == 'light' ? '#52525B' : '#A1A1AA' }}
                  >
                    Buyer
                  </div>
                  <div className={salesStyles.dataFieldValueContainer}>
                    <div
                      className={salesStyles.dataFieldValue1}
                      style={{ color: mode == 'light' ? '#09090B' : '#FFF' }}
                    >
                      {row.buyer_details.name}
                    </div>
                    <Tippy
                      placement="bottom"
                      arrow={false}
                      render={(attrs) => (
                        <div
                          className={salesStyles.buyerInfoContainer}
                          style={{
                            color: mode == 'light' ? '#09090B' : '#FFF',
                            borderColor:
                              mode == 'light' ? '#D4D4D8' : '#3F3F46',
                            backgroundColor:
                              mode == 'light' ? '#FFF' : '#27272A'
                          }}
                          {...attrs}
                        >
                          <div className={salesStyles.buyerInfoTitle}>
                            Buyer
                          </div>
                          <div className={salesStyles.buyerInfoRow}>
                            <div className={salesStyles.buyerInfoField}>
                              Name
                            </div>
                            <div className={salesStyles.buyerInfoValue}>
                              {row.buyer_details.name}
                            </div>
                          </div>
                          <div className={salesStyles.buyerInfoRow}>
                            <div className={salesStyles.buyerInfoField}>
                              Login
                            </div>
                            <div className={salesStyles.buyerInfoValue}>
                              {row.buyer_details.login}
                            </div>
                          </div>
                          <div className={salesStyles.buyerInfoRow}>
                            <div className={salesStyles.buyerInfoField}>
                              Address
                            </div>
                            <div className={salesStyles.buyerInfoValue}>
                              {row.buyer_details.address}
                            </div>
                          </div>
                        </div>
                      )}
                    >
                      <div
                        className={salesStyles.dataFieldImage}
                        style={{ marginLeft: 4, cursor: 'pointer' }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_4652_1389)">
                            <path
                              d="M8.00007 10.6663V7.99967M8.00007 5.33301H8.00674M14.6667 7.99967C14.6667 11.6816 11.682 14.6663 8.00007 14.6663C4.31817 14.6663 1.3334 11.6816 1.3334 7.99967C1.3334 4.31778 4.31817 1.33301 8.00007 1.33301C11.682 1.33301 14.6667 4.31778 14.6667 7.99967Z"
                              stroke="#71717A"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_4652_1389">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </Tippy>
                  </div>
                </div>
              </td>
              <td
                className={classnames(
                  salesStyles.dataCommon,
                  salesStyles.lastData
                )}
              >
                <div className={salesStyles.dataTitleDiv}>
                  <div
                    className={salesStyles.dataFieldTitle}
                    style={{ color: mode == 'light' ? '#52525B' : '#A1A1AA' }}
                  >
                    Date
                  </div>
                  <div className={salesStyles.dataFieldValue1}>{row.date}</div>
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <Footer />
    </main>
  );
}
