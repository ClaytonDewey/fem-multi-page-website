import { PortfolioData } from './Types';

import expressImg from '../public/assets/web-design/desktop/image-express.jpg';
import transferImg from '../public/assets/web-design/desktop/image-transfer.jpg';
import photonImg from '../public/assets/web-design/desktop/image-photon.jpg';
import builderImg from '../public/assets/web-design/desktop/image-builder.jpg';
import blogrImg from '../public/assets/web-design/desktop/image-blogr.jpg';
import campImg from '../public/assets/web-design/desktop/image-camp.jpg';

export const WebData: PortfolioData[] = [
  {
    title: 'Express',
    text: 'A multi-carrier shipping website for ecommerce businesses',
    image: expressImg,
  },
  {
    title: 'Transfer',
    text: 'Site for low-cost money transfers and sending money within seconds',
    image: transferImg,
  },
  {
    title: 'Photon',
    text: 'A state-of-the-art music player with high-resolution audio and DSP effects',
    image: photonImg,
  },
  {
    title: 'Builder',
    text: 'Connects users with local contractors based on their location',
    image: builderImg,
  },
  {
    title: 'Blogr',
    text: 'Blogr is a platform for creating an online blog or publication',
    image: blogrImg,
  },
  {
    title: 'Camp',
    text: 'Get expert training in coding, data, design, and digital marketing',
    image: campImg,
  },
];

import airfilterImg from '../public/assets/app-design/desktop/image-airfilter.jpg';
import eyecamImg from '../public/assets/app-design/desktop/image-eyecam.jpg';
import faceitImg from '../public/assets/app-design/desktop/image-faceit.jpg';
import todoImg from '../public/assets/app-design/desktop/image-todo.jpg';
import loopstudiosImg from '../public/assets/app-design/desktop/image-loopstudios.jpg';

export const AppData: PortfolioData[] = [
  {
    title: 'Airfilter',
    text: 'Solving the problem of poor indoor air quality by filtering the air',
    image: airfilterImg,
  },
  {
    title: 'Eyecam',
    text: 'Product that lets you edit your favorite photos and videos at any time',
    image: eyecamImg,
  },
  {
    title: 'Faceit',
    text: 'Get to meet your favorite internet superstar with the faceit app',
    image: faceitImg,
  },
  {
    title: 'Todo',
    text: 'A todo app that features cloud sync with light and dark mode',
    image: todoImg,
  },
  {
    title: 'Loopstudios',
    text: 'A VR experience app made for Loopstudios',
    image: loopstudiosImg,
  },
];

import changeImg from '../public/assets/graphic-design/desktop/image-change.jpg';
import boxedWaterImg from '../public/assets/graphic-design/desktop/image-boxed-water.jpg';
import scienceImg from '../public/assets/graphic-design/desktop/image-science.jpg';

export const GraphicData: PortfolioData[] = [
  {
    title: 'Tim Brown',
    text: 'A book cover designed for Tim Brown’s new release, ‘Change’',
    image: changeImg,
  },
  {
    title: 'Boxed Water',
    text: 'A simple packaging concept made for Boxed Water',
    image: boxedWaterImg,
  },
  {
    title: 'Science!',
    text: 'A poster made in collaboration with the Federal Art Project',
    image: scienceImg,
  },
];

export const Locations = [
  {
    canada: {
      address: {
        title: 'Designo Central Office',
        line1: '3886 Wellington Street',
        line2: 'Toronto, Ontario M9C 3J5',
        country: 'Canada',
      },
      coords: {
        lat: 43.64401384490509,
        long: -79.39453595896893,
      },
      contact: {
        phone: '+1 253-863-8967',
        email: 'contact@designo.co',
      },
    },
    australia: {
      address: {
        title: 'Designo AU Office',
        line1: '19 Balonne Street',
        line2: 'New South Wales 2443',
        country: 'Australia',
      },
      coords: {
        lat: -30.32939720210423,
        long: 149.78823051913605,
      },
      contact: {
        phone: '(02) 6720 9092',
        email: 'contact@designo.au',
      },
    },
    uk: {
      address: {
        title: 'Designo UK Office',
        line1: '13  Colorado Way',
        line2: 'Rhyd-y-fro SA8 9GA',
        country: 'United Kingdom',
      },
      coords: {
        lat: 51.732253541193714,
        long: -3.8621086109279243,
      },
      contact: {
        phone: '078 3115 1400',
        email: 'contact@designo.uk',
      },
    },
  },
];
