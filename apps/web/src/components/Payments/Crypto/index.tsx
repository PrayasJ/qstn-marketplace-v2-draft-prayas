import {
  Button,
  Card,
  Dialog,
  Flex,
  Strong,
  Text
} from '@sekmet/radix-ui-themes';
import type { Metadata, NextPage } from 'next';
import Image from 'next/image';
import { useRef } from 'react';

import aurora from '/public/assets/images/blockchains/aurora.png';
import avalanche from '/public/assets/images/blockchains/avalanche.png';
import base from '/public/assets/images/blockchains/base.png';
import bitfinity from '/public/assets/images/blockchains/bitfinity.png';
import bsc from '/public/assets/images/blockchains/bsc.png';
import ethereum from '/public/assets/images/blockchains/ethereum.png';
import filecoin from '/public/assets/images/blockchains/filecoin.png';
import hedera from '/public/assets/images/blockchains/hedera.png';
import internetComputer from '/public/assets/images/blockchains/internet-computer.png';
import moonbeam from '/public/assets/images/blockchains/moonbeam.png';
import near from '/public/assets/images/blockchains/near.png';
import optimism from '/public/assets/images/blockchains/optimism.png';
import polygon from '/public/assets/images/blockchains/polygon.png';
import solana from '/public/assets/images/blockchains/solana.png';
import stellar from '/public/assets/images/blockchains/stellar.png';
import coinbaseWallet from '/public/assets/images/wallets/coinbase-wallet.png';
import cryptoCom from '/public/assets/images/wallets/crypto-com.png';
import metamask from '/public/assets/images/wallets/metmask.png';
import trustWallet from '/public/assets/images/wallets/trust-wallet.png';
import walletConnect from '/public/assets/images/wallets/walletconnect.png';

import CryptoCard from './CryptoCard';

export const metadata: Metadata = {
  title: 'Crypto Payments'
};

const CryptoPayment: NextPage = () => {
  /* enum Blockchain {
    InternetComputer,
    Bitfinity,
    Stellar,
    Avalanche,
    Solana,
    Near,
    Aurora,
    Ethereum,
    Base,
    BSC,
    Optimism,
    Filecoin,
    Polygon,
    Moonbeam,
    Hedera
  }
*/
  //const [paidCrypto, setPaidCrypto] = useState<Blockchain>();

  const cryptoCardRef = useRef<Element[]>([]);
  const addCryptoCardRef = (card: HTMLDivElement) => {
    const element = card?.children[0];
    cryptoCardRef.current.push(element);
  };
  const handleClick = (card: any) => {
    console.log(card);
  };

  return (
    <main className="flex h-full flex-col gap-4 p-6">
      <section className="flex-grow">
        <div className="flex flex-col gap-6">
          <p className="flex flex-col gap-2">
            <Text size={'7'}>
              <Strong>Pay with Crypto</Strong>
            </Text>
            <Text>
              You can fund your campaign using the following blockchain networks
            </Text>
          </p>

          <Text>
            <Strong>Choose network</Strong>
          </Text>
          <span className="flex w-full">
            <div className="grid w-full grid-cols-3 gap-4">
              <div ref={addCryptoCardRef} onClick={handleClick}>
                <CryptoCard
                  imgSource={internetComputer}
                  blockchain={'Internet Computer'}
                />
              </div>
              <div ref={addCryptoCardRef} onClick={handleClick}>
                <CryptoCard imgSource={bitfinity} blockchain={'Bitfinity'} />
              </div>
              <div ref={addCryptoCardRef} onClick={handleClick}>
                <CryptoCard imgSource={base} blockchain={'Base'} />
              </div>
              <div ref={addCryptoCardRef} onClick={handleClick}>
                <CryptoCard imgSource={aurora} blockchain={'Aurora'} />
              </div>
              <div ref={addCryptoCardRef} onClick={handleClick}>
                <CryptoCard imgSource={avalanche} blockchain={'Avalanche'} />
              </div>
              <div ref={addCryptoCardRef} onClick={handleClick}>
                <CryptoCard
                  imgSource={bsc}
                  blockchain={'Binance Smart Chain'}
                />
              </div>
              <div ref={addCryptoCardRef} onClick={handleClick}>
                <CryptoCard imgSource={ethereum} blockchain={'Ethereum'} />
              </div>
              <div ref={addCryptoCardRef} onClick={handleClick}>
                <CryptoCard imgSource={filecoin} blockchain={'Filecoin'} />
              </div>
              <div ref={addCryptoCardRef} onClick={handleClick}>
                <CryptoCard imgSource={hedera} blockchain={'Hedera'} />
              </div>
              <div ref={addCryptoCardRef} onClick={handleClick}>
                <CryptoCard imgSource={moonbeam} blockchain={'Moonbeam'} />
              </div>
              <div ref={addCryptoCardRef} onClick={handleClick}>
                <CryptoCard imgSource={near} blockchain={'NEAR'} />
              </div>
              <div ref={addCryptoCardRef} onClick={handleClick}>
                <CryptoCard imgSource={optimism} blockchain={'Optimism'} />
              </div>
              <div ref={addCryptoCardRef} onClick={handleClick}>
                <CryptoCard imgSource={polygon} blockchain={'Polygon'} />
              </div>
              <div ref={addCryptoCardRef} onClick={handleClick}>
                <CryptoCard imgSource={solana} blockchain={'Solana'} />
              </div>
              <div ref={addCryptoCardRef} onClick={handleClick}>
                <CryptoCard imgSource={stellar} blockchain={'Stellar'} />
              </div>
            </div>
          </span>

          <span className="flex gap-4">
            <Button size={'3'}>
              <Text>
                <Strong>Back</Strong>
              </Text>
            </Button>
            <Dialog.Root>
              <Dialog.Trigger>
                <Button size={'3'}>
                  <Text>
                    <Strong>Pay</Strong>
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
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </Dialog.Trigger>

              <Dialog.Content>
                <Dialog.Close>
                  <div className="float-right flex h-6 w-6 items-center justify-center rounded-full bg-black">
                    <Card>
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.16665 0.833008L0.833313 9.16634M0.833313 0.833008L9.16665 9.16634"
                          stroke="white"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Card>
                  </div>
                </Dialog.Close>
                <Dialog.Title>Connect a wallet</Dialog.Title>
                <Dialog.Description>
                  Choose your wallet provider
                </Dialog.Description>

                <Flex direction={'column'} gap={'3'}>
                  <Card>
                    <div className="flex items-center justify-between">
                      <Text>
                        <Strong>Metamask</Strong>
                      </Text>
                      <Image src={metamask} alt="" width={'25'} />
                    </div>
                  </Card>
                  <Card>
                    <div className="flex items-center justify-between">
                      <Text>
                        <Strong>Trust Wallet</Strong>
                      </Text>
                      <Image src={trustWallet} alt="" width={'25'} />
                    </div>
                  </Card>
                  <Card>
                    <div className="flex items-center justify-between">
                      <Text>
                        <Strong>WalletConnect</Strong>
                      </Text>
                      <Image src={walletConnect} alt="" width={'25'} />
                    </div>
                  </Card>
                  <Card>
                    <div className="flex items-center justify-between">
                      <Text>
                        <Strong>Coinbase Wallet</Strong>
                      </Text>
                      <Image src={coinbaseWallet} alt="" width={'25'} />
                    </div>
                  </Card>
                  <Card>
                    <div className="flex items-center justify-between">
                      <Text>
                        <Strong>Crypto.com</Strong>
                      </Text>
                      <Image src={cryptoCom} alt="" width={'25'} />
                    </div>
                  </Card>
                </Flex>
              </Dialog.Content>
            </Dialog.Root>
          </span>
        </div>
      </section>
    </main>
  );
};

export default CryptoPayment;
