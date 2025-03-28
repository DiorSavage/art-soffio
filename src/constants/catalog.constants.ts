import { ResponsiveType } from "react-multi-carousel";

interface ICatalogPages {
  heading: string,
  href: string;
  catalogs: {
    image: string;
    href: string;
    title: string;
    productName: string;
    brand: string;
  }[]
}

export const catalogPages: ICatalogPages[] = [
  {
    heading: "ART SOFFIO",
    href: '/catalog/FashionClub',
    catalogs: [
      {
        image: '/catalogPage.png',
        href: '/catalog/FashionClub',
        brand: 'art-soffio',
        productName: 'productName',
        title: 'Каталог на Тушь Fashion Club'
      },
      {
        image: '/catalogPage.png',
        href: '/catalog/FashionClub',
        brand: 'art-soffio',
        productName: 'productName',
        title: 'Каталог на Тушь Fashion Club'
      },
      {
        image: '/catalogPage.png',
        href: '/catalog/FashionClub',
        brand: 'art-soffio',
        productName: 'productName',
        title: 'Каталог на Тушь Fashion Club'
      },
      {
        image: '/catalogPage.png',
        href: '/catalog/FashionClub',
        brand: 'art-soffio',
        productName: 'productName',
        title: 'Каталог на Тушь Fashion Club'
      },
      {
        image: '/catalogPage.png',
        href: '/catalog/FashionClub',
        brand: 'art-soffio',
        productName: 'productName',
        title: 'Каталог на Тушь Fashion Club'
      },
      {
        image: '/catalogPage.png',
        href: '/catalog/FashionClub',
        brand: 'art-soffio',
        productName: 'productName',
        title: 'Каталог на Тушь Fashion Club'
      }
    ]
  },
  {
    heading: "VOLLARÉ",
    href: '/catalog/ChernyuNigger',
    catalogs: [
      {
        image: '/catalogPage.png',
        href: '/catalog/FashionClub',
        brand: 'vollare',
        productName: 'productName',
        title: 'Каталог на Тушь Fashion Club'
      },
      {
        image: '/catalogPage.png',
        href: '/catalog/FashionClub',
        brand: 'vollare',
        productName: 'productName',
        title: 'Каталог на Тушь Fashion Club'
      },
      {
        image: '/catalogPage.png',
        href: '/catalog/FashionClub',
        brand: 'vollare',
        productName: 'productName',
        title: 'Каталог на Тушь Fashion Club'
      },
      {
        image: '/catalogPage.png',
        href: '/catalog/FashionClub',
        brand: 'vollare',
        productName: 'productName',
        title: 'Каталог на Тушь Fashion Club'
      },
      {
        image: '/catalogPage.png',
        href: '/catalog/FashionClub',
        brand: 'vollare',
        productName: 'productName',
        title: 'Каталог на Тушь Fashion Club'
      },
      {
        image: '/catalogPage.png',
        href: '/catalog/FashionClub',
        brand: 'vollare',
        productName: 'productName',
        title: 'Каталог на Тушь Fashion Club'
      }
    ]
  },
  {
    heading: "SESSIO",
    href: '/catalog/Gucci',
    catalogs: [
      {
        image: '/catalogPage.png',
        href: '/catalog/FashionClub',
        brand: 'sessio',
        productName: 'productName',
        title: 'Каталог на Тушь Fashion Club'
      },
      {
        image: '/catalogPage.png',
        href: '/catalog/FashionClub',
        brand: 'sessio',
        productName: 'productName',
        title: 'Каталог на Тушь Fashion Club'
      },
      {
        image: '/catalogPage.png',
        href: '/catalog/FashionClub',
        brand: 'sessio',
        productName: 'productName',
        title: 'Каталог на Тушь Fashion Club'
      },
      {
        image: '/catalogPage.png',
        href: '/catalog/FashionClub',
        brand: 'sessio',
        productName: 'productName',
        title: 'Каталог на Тушь Fashion Club'
      },
      {
        image: '/catalogPage.png',
        href: '/catalog/FashionClub',
        brand: 'sessio',
        productName: 'productName',
        title: 'Каталог на Тушь Fashion Club'
      },
      {
        image: '/catalogPage.png',
        href: '/catalog/FashionClub',
        brand: 'sessio',
        productName: 'productName',
        title: 'Каталог на Тушь Fashion Club'
      }
    ]
  },
  {
    heading: "VARIÉTÉ",
    href: '/catalog/PidorGoda',
    catalogs: [
      {
        image: '/catalogPage.png',
        brand: 'variete',
        href: '/catalog/FashionClub',
        productName: 'productName',
        title: 'Каталог на Тушь Fashion Club'
      },
      {
        image: '/catalogPage.png',
        brand: 'variete',
        href: '/catalog/FashionClub',
        productName: 'productName',
        title: 'Каталог на Тушь Fashion Club'
      },
      {
        image: '/catalogPage.png',
        brand: 'variete',
        href: '/catalog/FashionClub',
        productName: 'productName',
        title: 'Каталог на Тушь Fashion Club'
      },
      {
        image: '/catalogPage.png',
        brand: 'variete',
        href: '/catalog/FashionClub',
        productName: 'productName',
        title: 'Каталог на Тушь Fashion Club'
      },
      {
        image: '/catalogPage.png',
        brand: 'variete',
        href: '/catalog/FashionClub',
        productName: 'productName',
        title: 'Каталог на Тушь Fashion Club'
      },
      {
        image: '/catalogPage.png',
        brand: 'variete',
        href: '/catalog/FashionClub',
        productName: 'productName',
        title: 'Каталог на Тушь Fashion Club'
      }
    ]
  }
]

export const catalogResponsive: ResponsiveType = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 1000 },
    items: 4,
    slidesToSlide: 4
  },
  desktop: {
    breakpoint: { max: 1000,  min: 520 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 520, min: 330},
    items: 2,
    slidesToSlide: 2
  },
  mobile: { 
    breakpoint: { max: 330, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
}