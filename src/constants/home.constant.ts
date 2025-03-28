import type { ResponsiveType } from "react-multi-carousel"

export interface IPagesCards {
  href: string;
  title: string;
  image: string;
  bgColor: string;
}

export const homeResponsive: ResponsiveType = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 1400 },
    items: 4,
    slidesToSlide: 4
  },
  desktop: {
    breakpoint: { max: 1400,  min: 530 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 530, min: 324 },
    items: 2,
    slidesToSlide: 2
  }
}

export const pagesCards: IPagesCards[] = [
  {
    href: '/',
    title: "Макияж",
    image: '/makeup_image_pages.png',
    bgColor: '#FFEBF7'
  },
  {
    href: '/',
    title: "Уход за кожей",
    image: '/skin_image_pages.png',
    bgColor: '#FBFCEA'
  },
  { 
    href: '/',
    title: "Уход за волосами",
    image: '/hair_image_pages.png',
    bgColor: '#EDEBFF'
  },
  {
    href: '/',
    title: "Аксессуары",
    image: '/accessories_image_pages.png',
    bgColor: '#E5FDFF'
  }
]