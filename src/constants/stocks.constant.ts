import { ResponsiveType } from "react-multi-carousel";

interface IGreeting {
  title: string;
  span: string;
  href: string;
  image: string;
}

interface IBrandsCards {
  heading: string;
  image1: string;
  image2: string;
  brand: string;
}

export const stocksGreetingResp: ResponsiveType = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 50 },
    items: 1,
    slidesToSlide: 1
  }
}

export const greeting: IGreeting[] = [
  {
    title: 'Забота о красоте кожи в два этапа',
    span: 'АКТУАЛЬНО',
    href: '/',
    image: '/stocks_greeting.png'
  },
  {
    title: 'Семь правил красоты',
    span: 'ШКОЛА КРАСОТЫ',
    href: '/',
    image: '/stocks_greeting.png'
  }
]

export const brands: IBrandsCards[] = [
  {
    heading: 'ART SOFFIO',
    image1: '/stocks_greeting.png',
    image2: '/stocks_greeting.png',
    brand: 'art-soffio'
  },
  {
    heading: 'VOLLARÉ',
    image1: '/stocks_greeting.png',
    image2: '/stocks_greeting.png',
    brand: 'vollare'
  },
  {
    heading: 'SESSIO',
    image1: '/stocks_greeting.png',
    image2: '/stocks_greeting.png',
    brand: 'sessio'
  },
  {
    heading: 'VARIÉTÉ',
    image1: '/stocks_greeting.png',
    image2: '/stocks_greeting.png',
    brand: 'variete'
  }
]