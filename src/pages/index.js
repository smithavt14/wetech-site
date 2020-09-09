import React from "react";
import { Helmet } from "react-helmet";
import style from './index.module.css';
import cx from "classnames"

// Components
import Header from "../components/header/header";
import Button from "../components/btn/btn";

// Vector Images
import Collective from "../assets/vectors/client-collective.svg";
import Concord from "../assets/vectors/client-concord.svg";
import Lewagon from "../assets/vectors/client-lewagon.svg";
import Move from "../assets/vectors/client-move.svg";
import Wiredcraft from "../assets/vectors/client-wiredcraft.svg";
import BannerVector from "../assets/vectors/banner-img.svg";

import Purple from "../assets/vectors/accent-purple.svg";
import Purple2 from "../assets/vectors/accent-purple-2.svg";

import Development from "../assets/vectors/service-development.svg";
import Strategy from "../assets/vectors/service-strategy.svg";
import Training from "../assets/vectors/service-training.svg";
import Wechat from "../assets/vectors/service-wechat.svg";
import Creation from "../assets/vectors/creation.svg";

export default function Home () {
  const services = [
    {icon: Wechat, title: 'WeChat Mini Programs', description: 'We help companies create customized and targeted WeChat Mini Programs for their product offering or company introduction.'},
    {icon: Development, title: 'Websites & WebApps', description: 'Localize your website’s design and deploy it on Chinese servers making it fast, easy, and attractive to your target audience.'},
    {icon: Strategy, title: 'Digital Strategy', description: 'It can be difficult for foreign businesses to succeed in China. We help you make sense of the digital landscape and create a plan which leverages local assets to achieve your business objectives.'},
    {icon: Training, title: 'Technical Training', description: 'Curious about how it all works? We know, we’ve been there. We work with your team to demystify technology and make it a tool for success, rather than a barrier. '}
  ]

  const projects = [
    {title: 'Le Wagon Events', description: 'An external event registration platform allowing users to view and signup for activities across multiple cities.', img: '/phone-1.png'},
    {title: 'Space Stories', description: 'A Science Fiction short story reader that allows users to select from a database of over 260 stories or have a story randomly generated for them. ', img: '/phone-2.png'},
    {title: 'Dianda (电达)', description: 'A logistics supply application that allows users to order delivery services from a fleet of electric-only vehicles.', img: '/phone-3.png'},
    {title: 'Move SH', description: 'A membership platform that provides users to activitites in over 200+ venues in Shanghai. Users can register and pay for activities in the application.', img: '/phone-4.png'}
  ]

  return (
    <div className={style.pageContainer}>
      
      <Helmet>
        <meta charSet="utf-8" />
        <title>Zima Digital Technology Solutions</title>
        <meta name="description" content="Our China-based team of developers, designers, and strategists are here to help build better tools for modern teams." />
        <link rel="shortcut icon" href="hurray.png" type="image/x-icon"/>
      </Helmet>
      
      <Header/>

      <div className={cx(style.background, style.backgroundDots)}></div>

      <div className={cx('d-flex', 'justify-content-between', 'align-items-center', style.sectionContainer)}>
        <div className={cx('w-50')}>
          <h1>Building Modern Tools for Modern Teams</h1>
          <p>Our international team of strategists, designers, and developers is here to help you navigate the dark spaces when it comes to your digital footprint in China.</p>
          <div style={{width: '40%', margin: '40px 0'}}>
              <a href="https://wetech188297.typeform.com/to/b0nuCjfo" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
                  <Button content="Contact Us" type="primary"/>
              </a>
          </div>
        </div>
        <BannerVector style={{width: '40%', height: '100%'}}/>
      </div>

      <div className={cx('py-5', 'd-flex', 'justify-content-around', 'w-100', 'align-items-center')}>
        <Wiredcraft/><Move/><Lewagon/><Concord/><Collective/>
      </div>

      <div className={cx(style.sectionContainer, style.backgroundGreen)}>
        <Purple className={style.accentPurple}></Purple>

        <div style={{textAlign: 'center'}}>
          <h4>Our Services</h4>
          <h2>Get Shit Done.</h2>
          <p>We work with your team to create customizable digital experiences.</p>
        </div>

        <div className={style.services}>
          {services.map((item, i) => (
            <div className={style.service} key={i}>
              <div className={cx('d-flex', 'mb-3')}>
                <item.icon className={style.serviceIcon}/>
                <h3>{item.title}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={cx(style.sectionContainer, style.backgroundPurple)}>
        <Creation className={style.creationSVG}/>
        <Purple2 className={style.accentPurple2}></Purple2>

        <div style={{textAlign: 'center'}}>
          <h4>Our Projects</h4>
          <h2>What We've Done.</h2>
          <p>We've made some killer apps for both our clients and ourselves.</p>
        </div>

        <div className={style.services}>
          {projects.map((item, i) => (
            <div className={style.project} key={i}>
              <div className={cx('mb-3')}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <img src={item.img}/>
            </div>
          ))}
        </div>
      </div>

      <div className={style.footer}>
        <div className={style.footerContainer}>
          <div className={cx('d-flex', 'align-items-center', 'justify-content-center')}>
            <h2 className={cx('mr-5')}>Say Hello.</h2>
            <img className={cx('ml-5')} src="/qr.jpg"/>
          </div>
          <div className={style.footerLine}></div>
          <div className={cx('d-flex', 'justify-content-between')}>
            <div><p>© 2020 ZIMA DIGITAL</p></div>
            <div><p>alex@zimadigital.io</p></div>
          </div>
        </div>
        
      </div>

    </div>
  )
}