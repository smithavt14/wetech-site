import React from "react";
import { Helmet } from "react-helmet";
import style from './index.module.css';
import cx from "classnames"

import Header from "../components/header/header";
import Banner from "../components/banner/banner";

import Collective from "../assets/vectors/client-collective.svg";
import Concord from "../assets/vectors/client-concord.svg";
import Lewagon from "../assets/vectors/client-lewagon.svg";
import Move from "../assets/vectors/client-move.svg";
import Wiredcraft from "../assets/vectors/client-wiredcraft.svg";

import Purple from "../assets/vectors/accent-purple.svg";

import Development from "../assets/vectors/service-development.svg";
import Strategy from "../assets/vectors/service-strategy.svg";
import Training from "../assets/vectors/service-training.svg";
import Wechat from "../assets/vectors/service-wechat.svg";

import Creation from "../assets/vectors/creation.svg";

export default function Home() {
  
  const services = [
    {icon: Wechat, title: 'WeChat Mini Programs', description: 'We help companies create customized and targeted WeChat Mini Programs for their product offering or company introduction.'},
    {icon: Development, title: 'Websites & WebApps', description: 'Localize your website’s design and deploy it on Chinese servers making it fast, easy, and attractive to your target audience.'},
    {icon: Strategy, title: 'Digital Strategy', description: 'It can be difficult for foreign businesses to succeed in China. We help you make sense of the digital landscape and create a plan which leverages local assets to achieve your business objectives.'},
    {icon: Training, title: 'Technical Training', description: 'Curious about how it all works? We know, we’ve been there. We work with your team to demystify technology and make it a tool for success, rather than a barrier. '}
  ]
  
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Zima Digital Technology Solutions</title>
        <meta name="description" content="Our China-based team of developers, designers, and strategists are here to help build better tools for modern teams." />
        <link rel="shortcut icon" href="hurray.png" type="image/x-icon"/>
      </Helmet>

      <Header/>

      <div className={cx(style.container, style.bannerContainer)}>
        <Banner/>
      </div>

      <div className={style.container}>
        <div className={style.logoContainer}>
          <Wiredcraft/><Move/><Lewagon/><Concord/><Collective/>
        </div>
        <div className={style.sectionContainer}>
          <Purple className={style.purpleAccent}></Purple>
          
          <h4>Our Services</h4>
          <h2>Get Shit Done.</h2>
          <p>We work with your team to create customizable digital experiences.</p>

          <div class={style.servicesContainer}>
            {services.map(item => (
              <div className={style.serviceContainer}>
                <div className={style.serviceFlex}>
                  <item.icon className={style.serviceIcon}/>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <Creation className={style.creationSVG}/>
      </div>
    </div>
  )
}