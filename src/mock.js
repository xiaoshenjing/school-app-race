import Mock from 'mockjs'

const Random = Mock.Random

let main = {
  carousel: [
    { src: Random.dataImage('400x150'), href: '#' },
    { src: Random.dataImage('400x150'), href: '#' },
    { src: Random.dataImage('400x150'), href: '#' },
    { src: Random.dataImage('400x150'), href: '#' },
    { src: Random.dataImage('400x150'), href: '#' },
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

Mock.mock('/data/home/goods', 'post', main)