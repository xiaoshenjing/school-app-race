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
      img: Random.dataImage('170x240'),
      id: 1
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('170x240'),
      id: 2
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('170x240'),
      id: 3
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('170x240'),
      id: 4
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('170x240'),
      id: 5
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('170x240'),
      id: 6
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('170x240'),
      id: 7
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('170x240'),
      id: 8
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('170x240'),
      id: 9
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('170x240'),
      id: 10
    },
    {
      price: Random.float(1, 1000, 1, 2),
      num: Random.integer(0, 2000),
      title: Random.cparagraph(2),
      img: Random.dataImage('170x240'),
      id: 11
    },
  ]
}

let find = {
  carousel: [
    { src: Random.dataImage('400x150'), href: '#' },
    { src: Random.dataImage('400x150'), href: '#' },
    { src: Random.dataImage('400x150'), href: '#' },
  ],
  news: [
    {
      title: Random.ctitle(3, 5),
      content: Random.cparagraph(20),
      time: Random.datetime('y-M-d H:m:s'),
      watches: Random.integer(0, 1000),
      src: Random.dataImage('300x300'),
    },
    {
      title: Random.ctitle(3, 5),
      content: Random.cparagraph(20),
      time: Random.datetime('y-M-d H:m:s'),
      watches: Random.integer(0, 1000),
      src: Random.dataImage('300x300'),
    },
    {
      title: Random.ctitle(3, 5),
      content: Random.cparagraph(20),
      time: Random.datetime('y-M-d H:m:s'),
      watches: Random.integer(0, 1000),
      src: Random.dataImage('300x300'),
    },
    {
      title: Random.ctitle(3, 5),
      content: Random.cparagraph(20),
      time: Random.datetime('y-M-d H:m:s'),
      watches: Random.integer(0, 1000),
      src: Random.dataImage('300x300'),
    },
    {
      title: Random.ctitle(3, 5),
      content: Random.cparagraph(20),
      time: Random.datetime('y-M-d H:m:s'),
      watches: Random.integer(0, 1000),
      src: Random.dataImage('300x300'),
    },
    {
      title: Random.ctitle(3, 5),
      content: Random.cparagraph(20),
      time: Random.datetime('y-M-d H:m:s'),
      watches: Random.integer(0, 1000),
      src: Random.dataImage('300x300'),
    },
    {
      title: Random.ctitle(3, 5),
      content: Random.cparagraph(20),
      time: Random.datetime('y-M-d H:m:s'),
      watches: Random.integer(0, 1000),
      src: Random.dataImage('300x300'),
    },
    {
      title: Random.ctitle(3, 5),
      content: Random.cparagraph(20),
      time: Random.datetime('y-M-d H:m:s'),
      watches: Random.integer(0, 1000),
      src: Random.dataImage('300x300'),
    },
    {
      title: Random.ctitle(3, 5),
      content: Random.cparagraph(20),
      time: Random.datetime('y-M-d H:m:s'),
      watches: Random.integer(0, 1000),
      src: Random.dataImage('300x300'),
    },
    {
      title: Random.ctitle(3, 5),
      content: Random.cparagraph(20),
      time: Random.datetime('y-M-d H:m:s'),
      watches: Random.integer(0, 1000),
      src: Random.dataImage('300x300'),
    },
  ]
}

let shop_cart = [
  { count: 4, src: Random.dataImage('90x90'), title: Random.cparagraph(20), price: Random.integer(0, 1000) },
  { count: 5, src: Random.dataImage('90x90'), title: Random.cparagraph(20), price: Random.integer(0, 1000) },
  { count: 34, src: Random.dataImage('90x90'), title: Random.cparagraph(20), price: Random.integer(0, 1000) },
  { count: 45, src: Random.dataImage('90x90'), title: Random.cparagraph(20), price: Random.integer(0, 1000) },
]

Mock.mock('/data/home', 'post', home)
Mock.mock('/data/find', 'post', find)
Mock.mock('/data/shop_cart', 'post', shop_cart)