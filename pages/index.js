import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Button from "../components/button";
import ArrowButton from "../components/arrowButton";
import Container from "../components/container";
import Card from "../components/card";
import Product from "../components/product";
import FeatureItem from "../components/featureItem";
import OtherFeatureItem from "../components/otherFeatureItem";
import useScrollTop from "../hooks/useScrollTop";

const Index = () => {
  const scrollTop = useScrollTop();

  const featureRef = useRef(null);
  const othersRef = useRef(null);

  console.log("scrollTop", scrollTop);

  return (
    <div>
      <Head>
        <title>Casper DeFi</title>
        <meta name="description" content="Casper DeFi is an all-in-one crypto suite, Our mission is to make investing simple & safe. We believe in building useful & unique dapps that will improve crypto." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-fill bg-black min-h-screen py-12 bg-hero bg-no-repeat bg-right-top">
        <Container>
          <Header />

          <div className="flex flex-col space-y-32">
            <div className="section-1 grid md:grid-cols-2 xs:grid-cols-1 gap-4">
              <div className="section-1-left h-full flex flex-col justify-center">
                <div className="text-white text-6xl mb-6 font-black animate__animated animate__fadeInLeft animate__delay-1s">
                  Casper Next Gen Platform
                </div>
                <div className="text-white text-base mb-6 animate__animated animate__fadeInLeft animate__delay-2s">
                 Casper DeFi is an all-in-one crypto suite, Our mission is to make investing simple &amp; safe. We believe in building useful &amp; unique dapps that will improve crypto.
                </div>
 {/*   <div className="flex items-center space-x-4 animate__animated animate__fadeInLeft animate__delay-3s">
                  <Button>Buy Casper</Button>
                  <ArrowButton>Check Charts</ArrowButton>
                </div>*/}
              </div>

              <div className="section-1-right animate__animated animate__bounceInRight animate__delay-4s">
                <div className="animate__animated animate__wobble animate__delay-5s">
                
                <Image
                  src="/img/section-1.svg"
                  height={1000}
                  width={1000}
                  alt="section-1-img"
                />
                </div>
              </div>
            </div>

            <div className="section-2">
              <div className="flex items-center justify-between mb-12">
                <div className="text-white text-3xl font-black">
                  Explore Products
                </div>
                <ArrowButton>View All Products</ArrowButton>
              </div>

              <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-12">
                <Card
                  title="Casper Tracker"
                  text="Casper Tracker is a Multi-Chain Crypto tracking platform. You can check live prices, liquidity, trades &amp; more! Now on Fantom Opera &amp; soon on Binance Smart Chain, Ethereum, KCC, Matic, Solana."
                  icon="/img/products/trade.svg"
                  buttonText="Check Tracker"
                  className={[
                    "delay-100 duration-1000",
                    scrollTop > 300
                      ? "mb-0 mt-0 opacity-1"
                      : "mt-20 -mb-20 opacity-0",
                  ].join(" ")}
                />
                <Card
                  title="Casper Farm"
                  text="Casper Farming will allow you to earn Casper or other tokens. All pools/farms will be vetted from low risk - high risk. Now on Fantom Opera &amp; soon on BSC, ETH, KCC, Matic, Solana."
                  icon="/img/products/farm.svg"
                  buttonText="Coming Soon"
                  className={[
                    "delay-300 duration-1000",
                    scrollTop > 300
                      ? "mb-0 mt-0 opacity-1"
                      : "mt-20 -mb-20 opacity-0",
                  ].join(" ")}
                />
                <Card
                  title="Casper API"
                  text="Casper API is the API that will power the entire Casper Ecosystem. Our API gets almost for everything crypto related. Our API gets data on Fantom Opera &amp; soon on BSC, ETH, KCC, Matic, Solana."
                  icon="/img/products/api.svg"
                  buttonText="Check API"
                  className={[
                    "delay-100 duration-1000",
                    scrollTop > 500
                      ? "mb-0 mt-0 opacity-1"
                      : "mt-20 -mb-20 opacity-0",
                  ].join(" ")}
                />
                <Card
                  title="CasperPad"
                  text="CasperPad will be a Multi-Chain launchpad for new tokens &amp; project. CasperPad will allow tokens to be launched on Fantom Opera, Binance Smart Chain, Ethereum, KCC, Matic, Solana."
                  icon="/img/products/token.svg"
                  buttonText="Coming Soon"
                  className={[
                    "delay-300 duration-1000",
                    scrollTop > 500
                      ? "mb-0 mt-0 opacity-1"
                      : "mt-20 -mb-20 opacity-0",
                  ].join(" ")}
                />
              </div>

            </div>

            <div className="section-3 text-white">
              <div className="text-3xl font-black mb-12">Why Casper</div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col space-y-6">
                  <div className="text-xl font-bold mb-6">Casper</div>
                  <FeatureItem
                    className={[
                      "duration-1000 delay-100",
                      scrollTop > 1400 ? "ml-0 opacity-1" : "-ml-20 opacity-0",
                    ].join(" ")}
                  >
                    Doxxed Team
                  </FeatureItem>
                  <FeatureItem
                    className={[
                      "duration-1000 delay-300",
                      scrollTop > 1400 ? "ml-0 opacity-1" : "-ml-20 opacity-0",
                    ].join(" ")}
                  >
                    Built on Fantom Opera
                  </FeatureItem>
                  <FeatureItem
                    className={[
                      "duration-1000 delay-500",
                      scrollTop > 1400 ? "ml-0 opacity-1" : "-ml-20 opacity-0",
                    ].join(" ")}
                  >
                    Decentralized Platform
                  </FeatureItem>
                  <FeatureItem
                    className={[
                      "duration-1000 delay-700",
                      scrollTop > 1400 ? "ml-0 opacity-1" : "-ml-20 opacity-0",
                    ].join(" ")}
                  >
                    Multi-Chain
                  </FeatureItem>
                </div>

                <div className="flex flex-col space-y-6">
                  <div className="text-xl font-bold mb-6">Others</div>
                  <OtherFeatureItem
                    className={[
                      "duration-1000 delay-900",
                      scrollTop > 1400 ? "ml-0 opacity-1" : "-ml-20 opacity-0",
                    ].join(" ")}
                  >
                    Not Secure
                  </OtherFeatureItem>
                  <OtherFeatureItem
                    className={[
                      "duration-1000 delay-1100",
                      scrollTop > 1400 ? "ml-0 opacity-1" : "-ml-20 opacity-0",
                    ].join(" ")}
                  >
                    Fully Anon Team
                  </OtherFeatureItem>
                  <OtherFeatureItem
                    className={[
                      "duration-1000 delay-1300",
                      scrollTop > 1400 ? "ml-0 opacity-1" : "-ml-20 opacity-0",
                    ].join(" ")}
                  >
                    No Community
                  </OtherFeatureItem>
                  <OtherFeatureItem
                    className={[
                      "duration-1000 delay-1500",
                      scrollTop > 1400 ? "ml-0 opacity-1" : "-ml-20 opacity-0",
                    ].join(" ")}
                  >
                    Fully Closed Source
                  </OtherFeatureItem>
                </div>
              </div>
            </div>

            <div className="section-4 flex flex-col space-y-12 ">
              <Product
                direction="left"
                image="/img/products/tracker.png"
                title="Casper Tracker"
                text="Casper Tracker is a Multi-Chain Crypto tracking platform. You can check live prices, liquidity, trades &amp; more! Now on Fantom Opera &amp; soon on Binance Smart Chain, Ethereum, KCC, Matic, Solana."
                buttonText="Go to Tracker"
                classNameImage={[
                  "delay-100 duration-1000 rounded-md",
                  scrollTop > 1800
                    ? "mb-0 mt-0 opacity-1"
                    : "mt-30 -mb-30 opacity-0",
                ].join(" ")}
                classNameDesc={[
                  "delay-300 duration-1000",
                  scrollTop > 1800
                    ? "mb-0 mt-0 opacity-1"
                    : "mt-30 -mb-30 opacity-0",
                ].join(" ")}
              />
              <Product
                direction="right"
                image="/img/products/farms.png"
                title="Casper Farm"
                text="Casper Farming will allow you to earn Casper or other tokens. All pools/farms will be vetted from low risk - high risk. Now on Fantom Opera &amp; soon on BSC, ETH, KCC, Matic, Solana."
                buttonText="Coming Soon"
                classNameImage={[
                  "delay-500 duration-1000",
                  scrollTop > 2200
                    ? "mb-0 mt-0 opacity-1"
                    : "mt-30 -mb-30 opacity-0",
                ].join(" ")}
                classNameDesc={[
                  "delay-700 duration-1000",
                  scrollTop > 2200
                    ? "mb-0 mt-0 opacity-1"
                    : "mt-30 -mb-30 opacity-0",
                ].join(" ")}
              />
              <Product
                direction="left"
                image="/img/products/api.png"
                title="Casper Api"
                text="ICasper API is the API that will power the entire Casper Ecosystem. Our API gets almost for everything crypto related. Our API gets data on Fantom Opera &amp; soon on BSC, ETH, KCC, Matic, Solana."
                buttonText="Coming Soon"
                classNameImage={[
                  "delay-500 duration-1000",
                  scrollTop > 2600
                    ? "mb-0 mt-0 opacity-1"
                    : "mt-30 -mb-30 opacity-0",
                ].join(" ")}
                classNameDesc={[
                  "delay-700 duration-1000",
                  scrollTop > 2600
                    ? "mb-0 mt-0 opacity-1"
                    : "mt-30 -mb-30 opacity-0",
                ].join(" ")}
              />
              <Product
                direction="right"
                image="/img/products/launchpad.png"
                title="CasperPad"
                text="CasperPad will be a Multi-Chain launchpad for new tokens &amp; project. CasperPad will allow tokens to be launched on Fantom Opera, Binance Smart Chain, Ethereum, KCC, Matic, Solana."
                buttonText="Coming Soon"
                classNameImage={[
                  "delay-500 duration-1000",
                  scrollTop > 3000
                    ? "mb-0 mt-0 opacity-1"
                    : "mt-30 -mb-30 opacity-0",
                ].join(" ")}
                classNameDesc={[
                  "delay-700 duration-1000",
                  scrollTop > 3000
                    ? "mb-0 mt-0 opacity-1"
                    : "mt-30 -mb-30 opacity-0",
                ].join(" ")}
              />
            </div>
          </div>

          <Footer />
        </Container>
      </div>
    </div>
  );
};

export default Index;
