import Mock from 'mockjs'

const Random = Mock.Random

let home = {
  carousel: [
    { src: Random.dataImage('400x200'), href: '#' },
    { src: Random.dataImage('400x200'), href: '#' },
    { src: Random.dataImage('400x200'), href: '#' },
    { src: Random.dataImage('400x200'), href: '#' },
    { src: Random.dataImage('400x200'), href: '#' },
  ],
  goods: [
    {
      price: Random.float(1, 1000, 2, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('320x320'),
      id: 1
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('320x320'),
      id: 2
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('320x320'),
      id: 3
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('320x320'),
      id: 4
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('320x320'),
      id: 5
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('320x320'),
      id: 6
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('320x320'),
      id: 7
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('320x320'),
      id: 8
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('320x320'),
      id: 9
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('320x320'),
      id: 10
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('320x320'),
      id: 11
    },
  ]
}

let home_1 = {
  goods: [
    {
      price: Random.float(1, 1000, 2, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('320x320'),
      id: 1
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('320x320'),
      id: 2
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('320x320'),
      id: 3
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('320x320'),
      id: 4
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('320x320'),
      id: 5
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('320x320'),
      id: 6
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('320x320'),
      id: 7
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('320x320'),
      id: 8
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('320x320'),
      id: 9
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('320x320'),
      id: 10
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('320x320'),
      id: 11
    },
  ]
}

let shop_cart = [
  { count: 0, src: Random.dataImage('90x90'), title: Random.cparagraph(20), price: Random.integer(0, 1000) },
  { count: 0, src: Random.dataImage('90x90'), title: Random.cparagraph(20), price: Random.integer(0, 1000) },
  { count: 0, src: Random.dataImage('90x90'), title: Random.cparagraph(20), price: Random.integer(0, 1000) },
  { count: 0, src: Random.dataImage('90x90'), title: Random.cparagraph(20), price: Random.integer(0, 1000) },
]

let find = {
  carousel: [
    { src: Random.dataImage('400x150'), href: '#' },
    { src: Random.dataImage('400x150'), href: '#' },
    { src: Random.dataImage('400x150'), href: '#' },
  ],
  news: [
    {
      author: Random.ctitle(3, 5),
      title: Random.ctitle(5, 10),
      content: [
        Random.cparagraph(4), Random.cparagraph(10), Random.cparagraph(20)
      ],
      time: Random.datetime('yyyy-M-d H:m:s'),
      watches: Random.integer(0, 1000),
      src: Random.dataImage('300x300'),
      comment: [
        { person: Random.ctitle(3, 5), time: Random.datetime('yyyy-M-d H:m:s'), content: Random.cparagraph(3) },
        { person: Random.ctitle(3, 5), time: Random.datetime('yyyy-M-d H:m:s'), content: Random.cparagraph(3) },
        { person: Random.ctitle(3, 5), time: Random.datetime('yyyy-M-d H:m:s'), content: Random.cparagraph(3) },
        { person: Random.ctitle(3, 5), time: Random.datetime('yyyy-M-d H:m:s'), content: Random.cparagraph(3) }
      ]
    },
  ]
}

let goods_show = {
  src: [
    Random.dataImage('320x320'),
    Random.dataImage('320x320'),
    Random.dataImage('320x320'),
  ],
  title: Random.ctitle(3, 5),
  time: Random.datetime('yyyy-M-d H:m:s'),
  already_pay: Random.integer(0, 1000),
  comment: [
    {
      person: Random.ctitle(3, 5),
      time: Random.datetime('yyyy-M-d H:m:s'),
      content: Random.cparagraph(3),
      callback:[
        {person:Random.ctitle(2, 4),content:Random.cparagraph(2)},
        {person:Random.ctitle(2, 4),content:Random.cparagraph(2)},
        {person:Random.ctitle(2, 4),content:Random.cparagraph(2)},
      ]
    },
    {
      person: Random.ctitle(3, 5),
      time: Random.datetime('yyyy-M-d H:m:s'),
      content: Random.cparagraph(3),
      callback:[
        {person:Random.ctitle(2, 4),content:Random.cparagraph(2)},
        {person:Random.ctitle(2, 4),content:Random.cparagraph(2)},
        {person:Random.ctitle(2, 4),content:Random.cparagraph(2)},
      ]
    },
  ],
  price: Random.float(1, 1000, 2, 2),
  desc: Random.cparagraph(6)
}

Mock.mock('/data/home', 'post', home)
Mock.mock('/data/home/1', 'post', home_1)
Mock.mock('/data/find', 'post', find)
Mock.mock('/data/shop_cart', 'post', shop_cart)
Mock.mock('/data/goods_show', 'post', goods_show)