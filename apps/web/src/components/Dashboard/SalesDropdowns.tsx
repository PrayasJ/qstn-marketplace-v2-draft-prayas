import { themeColors } from '@colors/themeColors';
import salesStyles from '@components/Common/sales.module.scss';
import { Input } from '@components/Input/Input';
import { useThemeMode } from '@hooks/useThemeMode';
import { Button, Flex } from '@sekmet/radix-ui-themes';
import Image from 'next/image';
import type { Dispatch, SetStateAction } from 'react';
import React, { useEffect, useState } from 'react';

import { BaseDropdown } from './BaseDropdown';

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

export const SalesDropdowns: React.FC<{
  data: dataInterface[];
  setData: Dispatch<SetStateAction<dataInterface[]>>;
}> = ({ data, setData }) => {
  const getSelectedState = () => {
    let isSelectedOne = false;
    let isSelectedAll = true;
    for (const item of data) {
      isSelectedOne ||= item.selected;
      isSelectedAll &&= item.selected;
    }
    return +isSelectedOne + +isSelectedAll;
  };

  const getSelectedCount = () => {
    let count = 0;
    for (const item of data) {
      count += +item.selected;
    }
    return count;
  };

  const toggleSelectedStatus = (index: number) => {
    let tempData = [...data];
    tempData[index].selected = !tempData[index].selected;
    setData(tempData);
  };

  const getSelectedItems = () => {
    let selectedItems = [];
    for (const [i, datum] of data.entries()) {
      if (datum.selected) {
        selectedItems.push({
          title: datum.title,
          index: i
        });
      }
    }
    return selectedItems;
  };

  const setCheckedStates = (state: boolean) => {
    const tempData = [...data];
    for (const tempDatum of tempData) {
      tempDatum.selected = state;
    }
    setData(tempData);
  };

  const [checkState, setCheckState] = useState<number>(0);

  const sortOptions: {
    title: string;
    sortFunc?: () => void; //will be used to sort on this basis
  }[] = [
    {
      title: 'Top sales (in USD)'
    },
    {
      title: 'NFT sales (inc)'
    },
    {
      title: 'NFT sales (dec)'
    },
    {
      title: 'Digital good sales (inc)'
    },
    {
      title: 'Digital good sales (dec)'
    },
    {
      title: 'Discount codes (inc)'
    },
    {
      title: 'Discount codes (dec)'
    }
  ];

  const [selectedSort, setSelectedSort] = useState<number>(0);

  const categoryOptions: {
    title: string;
  }[] = [
    { title: 'All' },
    ...[...new Set(data.map((item) => item.category))].map((category) => ({
      title: category
    }))
  ];

  const [selectedCategory, setselectedCategory] = useState<number>(0);

  const { mode } = useThemeMode();

  useEffect(() => {
    setCheckState(getSelectedState());
  });

  const [isShareOpen, setIsSharedOpen] = useState<boolean>(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState<boolean>(false);

  return (
    <div>
      <Flex
        justify={'between'}
        wrap={'wrap'}
        className={salesStyles.adminDropdowns}
        gap={'3'}
      >
        <BaseDropdown
          label=""
          subtitle="Operation"
          placeholder={
            <div
              style={{
                backgroundColor:
                  checkState == 0
                    ? mode == 'light'
                      ? '#E4E4E7'
                      : '#27272A'
                    : '#A855F7'
              }}
              className={salesStyles.salesCheckedBox}
              onClick={() => {
                switch (getSelectedState()) {
                  case 0:
                    setCheckState(2);
                    setCheckedStates(true);
                    break;
                  case 1:
                    setCheckState(2);
                    setCheckedStates(true);
                    break;
                  case 2:
                    setCheckState(0);
                    setCheckedStates(false);
                    break;
                }
              }}
            >
              {checkState == 1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M2.5 6H9.5"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
              {checkState == 2 && (
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
          }
          options={[
            {
              type: 'btn',
              img: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M13.8609 8.40513C14.0237 8.26563 14.105 8.19589 14.1348 8.11289C14.161 8.04004 14.161 7.96035 14.1348 7.8875C14.105 7.8045 14.0237 7.73476 13.8609 7.59526L8.21375 2.75484C7.9336 2.51471 7.79353 2.39465 7.67493 2.3917C7.57186 2.38915 7.47341 2.43443 7.40828 2.51435C7.33333 2.6063 7.33333 2.7908 7.33333 3.15978V6.02328C5.91021 6.27225 4.60773 6.99337 3.63981 8.07611C2.58455 9.25654 2.00082 10.7842 2 12.3675V12.7755C2.69956 11.9328 3.573 11.2512 4.56051 10.7775C5.43113 10.3598 6.37228 10.1124 7.33333 10.0472V12.8406C7.33333 13.2096 7.33333 13.3941 7.40828 13.486C7.47341 13.566 7.57186 13.6112 7.67493 13.6087C7.79353 13.6057 7.9336 13.4857 8.21375 13.2455L13.8609 8.40513Z"
                    stroke={mode === 'light' ? 'black' : 'white'}
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ),
              text: 'Share',
              fn: () => setIsSharedOpen(!isShareOpen)
            },
            {
              type: 'btn',
              img: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M13.3333 8.33301V4.53301C13.3333 3.4129 13.3333 2.85285 13.1153 2.42503C12.9236 2.0487 12.6176 1.74274 12.2413 1.55099C11.8134 1.33301 11.2534 1.33301 10.1333 1.33301H5.86663C4.74652 1.33301 4.18647 1.33301 3.75864 1.55099C3.38232 1.74274 3.07636 2.0487 2.88461 2.42503C2.66663 2.85285 2.66663 3.4129 2.66663 4.53301V11.4663C2.66663 12.5864 2.66663 13.1465 2.88461 13.5743C3.07636 13.9506 3.38232 14.2566 3.75864 14.4484C4.18647 14.6663 4.74652 14.6663 5.86663 14.6663H7.99996M9.33329 7.33301H5.33329M6.66663 9.99967H5.33329M10.6666 4.66634H5.33329M9.66663 12.6663L11 13.9997L14 10.9997"
                    stroke={mode === 'light' ? 'black' : 'white'}
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ),
              text: 'download receipt',
              fn: () => setIsDownloadOpen(!isDownloadOpen)
            }
          ]}
        />
        <BaseDropdown
          label="Sort by"
          width={240}
          selected={selectedSort}
          options={sortOptions.map((option, index) => {
            return {
              type: 'btn',
              text: option.title,
              fn: () => setSelectedSort(index),
              img:
                index == selectedSort ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="16" height="16" rx="8" fill="#A855F7" />
                    <path
                      d="M12 5L6.5 10.5L4 8"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="16"
                      height="16"
                      rx="8"
                      fill={mode === 'light' ? '#D4D4D8' : '#3F3F46'}
                    />
                  </svg>
                )
            };
          })}
        />
        <BaseDropdown
          label="Category"
          width={220}
          selected={selectedCategory}
          options={categoryOptions.map((option, index) => {
            return {
              type: 'btn',
              text: option.title,
              fn: () => setselectedCategory(index),
              img:
                index == selectedCategory ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="16" height="16" rx="8" fill="#A855F7" />
                    <path
                      d="M12 5L6.5 10.5L4 8"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="16"
                      height="16"
                      rx="8"
                      fill={mode === 'light' ? '#D4D4D8' : '#3F3F46'}
                    />
                  </svg>
                )
            };
          })}
        />
        <div className={salesStyles.searchInput}>
          <p
            style={{
              textTransform: 'capitalize',
              fontSize: 15,
              height: 40
            }}
          >
            Search sales
          </p>
          <Input
            placeholder="Search"
            prefixIcon={
              <Image
                height={20}
                width={20}
                alt="h"
                src={'/assets/images/search-sm.svg'}
              />
            }
            style={{
              background: themeColors[mode].dropdown
            }}
          />
        </div>
      </Flex>
      {isShareOpen && (
        <div className={salesStyles.modalContainer}>
          <div
            className={salesStyles.modalBox}
            style={{
              background: mode == 'light' ? '#EDEDED' : '#18181B',
              borderColor: mode == 'light' ? '#D4D4D8' : '#18181B'
            }}
          >
            <div
              className={salesStyles.closeContainer}
              onClick={() => setIsSharedOpen(!isShareOpen)}
              style={{
                background: mode == 'light' ? '#EDEDED' : '#18181B',
                borderColor: mode == 'light' ? '#D4D4D8' : '#27272A'
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M14.1666 5.83301L5.83325 14.1663M5.83325 5.83301L14.1666 14.1663"
                  stroke={mode === 'light' ? '#09090B' : 'white'}
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className={salesStyles.modalIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.3261 10.5062C17.5296 10.3318 17.6313 10.2446 17.6686 10.1409C17.7013 10.0498 17.7013 9.9502 17.6686 9.85914C17.6313 9.75539 17.5296 9.6682 17.3261 9.49383L10.2672 3.44331C9.917 3.14315 9.74191 2.99306 9.59367 2.98939C9.46483 2.98619 9.34177 3.04279 9.26035 3.14269C9.16667 3.25764 9.16667 3.48825 9.16667 3.94948V7.52886C7.38777 7.84007 5.75966 8.74146 4.54976 10.0949C3.23069 11.5704 2.50103 13.48 2.5 15.4591V15.9691C3.37445 14.9157 4.46626 14.0638 5.70063 13.4716C6.78891 12.9495 7.96535 12.6403 9.16667 12.5588V16.0505C9.16667 16.5117 9.16667 16.7424 9.26035 16.8573C9.34177 16.9572 9.46483 17.0138 9.59367 17.0106C9.74191 17.0069 9.917 16.8569 10.2672 16.5567L17.3261 10.5062Z"
                  stroke="#A855F7"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div
              className={salesStyles.modalMainTitle}
              style={{ color: mode == 'light' ? '#09090B' : '#FFF' }}
            >
              You are about to share this sales
            </div>
            <div
              className={salesStyles.modalListContainer}
              style={{ background: mode == 'light' ? '#FFF' : '#27272A' }}
            >
              {getSelectedItems().map((item) => (
                <div
                  key={item.index}
                  className={salesStyles.modalItemContainer}
                  style={{
                    background: mode == 'light' ? '#E4E4E7' : '#3F3F46'
                  }}
                >
                  <div
                    className={salesStyles.modalItemValue}
                    style={{ color: mode == 'light' ? '#09090B' : '#FFF' }}
                  >
                    {item.title}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    onClick={() => toggleSelectedStatus(item.index)}
                  >
                    <rect
                      width="16"
                      height="16"
                      rx="8"
                      fill={mode === 'light' ? '#F4F4F5' : '#1F1F22'}
                    />
                    <path
                      d="M5.71387 5.71484L10.2853 10.2863M10.2853 5.71484L5.71387 10.2863"
                      stroke={mode === 'light' ? '#09090B' : 'white'}
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              ))}
            </div>
            <div className={salesStyles.modalListCount}>
              {`${getSelectedCount()}/${data.length} share on the list`}
            </div>
            <div className={salesStyles.modalBtnContainer}>
              <Button
                className={salesStyles.cancelButton}
                style={{
                  background: mode == 'light' ? '#FFF' : '#1F1F22',
                  color: mode == 'light' ? '#09090B' : '#FFF'
                }}
              >
                Cancel
              </Button>
              <Button className={salesStyles.submitButton}>
                Yes, I'm sure
              </Button>
            </div>
          </div>
        </div>
      )}
      {isDownloadOpen && (
        <div className={salesStyles.modalContainer}>
          <div
            className={salesStyles.modalBox}
            style={{
              background: mode == 'light' ? '#EDEDED' : '#18181B',
              borderColor: mode == 'light' ? '#D4D4D8' : '#18181B'
            }}
          >
            <div
              className={salesStyles.closeContainer}
              onClick={() => setIsDownloadOpen(!isDownloadOpen)}
              style={{
                background: mode == 'light' ? '#EDEDED' : '#18181B',
                borderColor: mode == 'light' ? '#D4D4D8' : '#27272A'
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M14.1666 5.83301L5.83325 14.1663M5.83325 5.83301L14.1666 14.1663"
                  stroke={mode === 'light' ? '#09090B' : 'white'}
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className={salesStyles.modalIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M16.6666 10.417V5.66699C16.6666 4.26686 16.6666 3.5668 16.3941 3.03202C16.1544 2.56161 15.772 2.17916 15.3016 1.93948C14.7668 1.66699 14.0667 1.66699 12.6666 1.66699H7.33325C5.93312 1.66699 5.23305 1.66699 4.69828 1.93948C4.22787 2.17916 3.84542 2.56161 3.60574 3.03202C3.33325 3.5668 3.33325 4.26686 3.33325 5.66699V14.3337C3.33325 15.7338 3.33325 16.4339 3.60574 16.9686C3.84542 17.439 4.22787 17.8215 4.69828 18.0612C5.23305 18.3337 5.93312 18.3337 7.33325 18.3337H9.99992M11.6666 9.16699H6.66659M8.33325 12.5003H6.66659M13.3333 5.83366H6.66659M12.0833 15.8337L13.7499 17.5003L17.4999 13.7503"
                  stroke="#A855F7"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div
              className={salesStyles.modalMainTitle}
              style={{ color: mode == 'light' ? '#09090B' : '#FFF' }}
            >
              You are about to download this sales
            </div>
            <div
              className={salesStyles.modalListContainer}
              style={{ background: mode == 'light' ? '#FFF' : '#27272A' }}
            >
              {getSelectedItems().map((item) => (
                <div
                  key={item.index}
                  className={salesStyles.modalItemContainer}
                  style={{
                    background: mode == 'light' ? '#E4E4E7' : '#3F3F46'
                  }}
                >
                  <div
                    className={salesStyles.modalItemValue}
                    style={{ color: mode == 'light' ? '#09090B' : '#FFF' }}
                  >
                    {item.title}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    onClick={() => toggleSelectedStatus(item.index)}
                  >
                    <rect
                      width="16"
                      height="16"
                      rx="8"
                      fill={mode === 'light' ? '#F4F4F5' : '#1F1F22'}
                    />
                    <path
                      d="M5.71387 5.71484L10.2853 10.2863M10.2853 5.71484L5.71387 10.2863"
                      stroke={mode === 'light' ? '#09090B' : 'white'}
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              ))}
            </div>
            <div className={salesStyles.modalListCount}>
              {`${getSelectedCount()}/${data.length} download on the list`}
            </div>
            <div className={salesStyles.modalBtnContainer}>
              <Button
                className={salesStyles.cancelButton}
                style={{
                  background: mode == 'light' ? '#FFF' : '#1F1F22',
                  color: mode == 'light' ? '#09090B' : '#FFF'
                }}
              >
                Cancel
              </Button>
              <Button className={salesStyles.submitButton}>
                Yes, I'm sure
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
