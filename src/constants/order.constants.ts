import { MenuProps } from "antd";

interface IFields {
  key: string;
  title: string;
  type: string;
  important: boolean;
  placeholder: string;
}

interface ISelectValues {
  [key: string]: MenuProps['items']
}

interface IOrderResults {
  header: string;
  title: string;
}

export const fields: IFields[] = [
  {
    key: 'pay',
    title: 'Способ оплаты',
    placeholder: 'Выберите способ оплаты',
    type: 'select',
    important: true,
  },
  {
    key: 'delivery',
    title: 'Способ доставки',
    placeholder: 'Выберите способ получения товара',
    type: 'select',
    important: true,
  },
  {
    key: 'city',
    title: 'Город',
    placeholder: 'Выберите город',
    type: 'select',
    important: true,
  },
  {
    key: 'firstname',
    title: 'Ваше имя',
    placeholder: 'Введите ваше имя',
    type: 'text',
    important: true,
  },
  {
    key: 'surname',
    title: 'Ваша фамилия',
    placeholder: 'Введите вашу фамилию',
    type: 'text',
    important: true,
  },
  {
    key: 'phone',
    title: 'Телефон',
    placeholder: 'Введите номер телефона',
    type: 'text',
    important: true,
  },
  {
    key: 'email',
    title: 'Почта',
    placeholder: 'Введите вашу почту',
    type: 'text',
    important: false,
  },
  {
    key: 'comment',
    title: 'Комментарий',
    placeholder: 'Напишите комментарий к заказу',
    type: 'textarea',
    important: false,
  }
]

export const selectValues: ISelectValues = {
  pay: [
    {
      key: 'Tinkoff',
      label: 'Tinkoff',
    },
    {
      key: 'PayPal',
      label: 'PayPal',
    },
    {
      key: 'Sberbank',
      label: 'Sberbank',
    },
    {
      key: 'Alfa-bank',
      label: 'Alfa-bank',
    }
  ],
  delivery: [
    {
      key: 'Самовывоз',
      label: 'Самовывоз',
    },
    {
      key: 'Доставка',
      label: 'Доставка',
    }
  ],
  city: [
    {
      key: 'Москва',
      label: 'Москва',
    },
    {
      key: 'Санкт-Петербург',
      label: 'Санкт-Петербург',
    }
  ]
}

export const results: IOrderResults[] = [
  {
    header: 'Сумма заказа',
    title: 'Стоимиость заказа'
  },
  {
    header: 'Доставка',
    title: 'Стоимиость доставки'
  },
  {
    header: 'Итого',
    title: 'Общая сумма'
  }
]