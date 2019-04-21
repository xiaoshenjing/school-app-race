import Mock from 'mockjs'

const Random = Mock.Random

let home = {
  carousel: [
    { src: Random.dataImage('400x200'), href: '#' },
    { src: Random.dataImage('400x200'), href: '#' },
    { src: Random.dataImage('400x200'), href: '#' },
  ],
  goods: [
    {
      id: 1,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
    {
      id: 2,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
    {
      id: 3,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
    {
      id: 4,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
    {
      id: 5,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
    {
      id: 6,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
    {
      id: 7,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
    {
      id: 8,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
    {
      id: 9,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
    {
      id: 10,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
    {
      id: 11,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
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
      id: 1,
      author: Random.ctitle(3, 5),
      title: Random.ctitle(5, 10),
      content: [
        Random.cparagraph(4), Random.cparagraph(10), Random.cparagraph(20)
      ],
      time: Random.datetime('yyyy-M-d H:m:s'),
      watches: Random.integer(0, 1000),
      src: Random.dataImage('300x300'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ]
    },
    {
      id: 2,
      author: Random.ctitle(3, 5),
      title: Random.ctitle(5, 10),
      content: [
        Random.cparagraph(4), Random.cparagraph(10), Random.cparagraph(20)
      ],
      time: Random.datetime('yyyy-M-d H:m:s'),
      watches: Random.integer(0, 1000),
      src: Random.dataImage('300x300'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ]
    },
    {
      id: 3,
      author: Random.ctitle(3, 5),
      title: Random.ctitle(5, 10),
      content: [
        Random.cparagraph(4), Random.cparagraph(10), Random.cparagraph(20)
      ],
      time: Random.datetime('yyyy-M-d H:m:s'),
      watches: Random.integer(0, 1000),
      src: Random.dataImage('300x300'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ]
    },
    {
      id: 4,
      author: Random.ctitle(3, 5),
      title: Random.ctitle(5, 10),
      content: [
        Random.cparagraph(4), Random.cparagraph(10), Random.cparagraph(20)
      ],
      time: Random.datetime('yyyy-M-d H:m:s'),
      watches: Random.integer(0, 1000),
      src: Random.dataImage('300x300'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ]
    },
    {
      id: 5,
      author: Random.ctitle(3, 5),
      title: Random.ctitle(5, 10),
      content: [
        Random.cparagraph(4), Random.cparagraph(10), Random.cparagraph(20)
      ],
      time: Random.datetime('yyyy-M-d H:m:s'),
      watches: Random.integer(0, 1000),
      src: Random.dataImage('300x300'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ]
    },
  ]
}

let person = {
  avatar: Random.dataImage('100x100'),
  student_id: Random.integer(1000000000000, 10000000000000),
  goods: [
    {
      id: 1,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
    {
      id: 2,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
    {
      id: 3,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
    {
      id: 4,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
    {
      id: 5,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
    {
      id: 6,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
  ],
  news: [
    {
      id: 1,
      author: Random.ctitle(3, 5),
      title: Random.ctitle(5, 10),
      content: [
        Random.cparagraph(4), Random.cparagraph(10), Random.cparagraph(20)
      ],
      time: Random.datetime('yyyy-M-d H:m:s'),
      watches: Random.integer(0, 1000),
      src: Random.dataImage('300x300'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ]
    },
    {
      id: 2,
      author: Random.ctitle(3, 5),
      title: Random.ctitle(5, 10),
      content: [
        Random.cparagraph(4), Random.cparagraph(10), Random.cparagraph(20)
      ],
      time: Random.datetime('yyyy-M-d H:m:s'),
      watches: Random.integer(0, 1000),
      src: Random.dataImage('300x300'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ]
    },
    {
      id: 3,
      author: Random.ctitle(3, 5),
      title: Random.ctitle(5, 10),
      content: [
        Random.cparagraph(4), Random.cparagraph(10), Random.cparagraph(20)
      ],
      time: Random.datetime('yyyy-M-d H:m:s'),
      watches: Random.integer(0, 1000),
      src: Random.dataImage('300x300'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ]
    },
    {
      id: 4,
      author: Random.ctitle(3, 5),
      title: Random.ctitle(5, 10),
      content: [
        Random.cparagraph(4), Random.cparagraph(10), Random.cparagraph(20)
      ],
      time: Random.datetime('yyyy-M-d H:m:s'),
      watches: Random.integer(0, 1000),
      src: Random.dataImage('300x300'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ]
    },
    {
      id: 5,
      author: Random.ctitle(3, 5),
      title: Random.ctitle(5, 10),
      content: [
        Random.cparagraph(4), Random.cparagraph(10), Random.cparagraph(20)
      ],
      time: Random.datetime('yyyy-M-d H:m:s'),
      watches: Random.integer(0, 1000),
      src: Random.dataImage('300x300'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ]
    },
  ],
  foot_step: [
    {
      id: 1,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
    {
      id: 2,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
    {
      id: 3,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
    {
      id: 4,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
    {
      id: 5,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
    {
      id: 6,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
  ],
  order: [
    {
      id: 1,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
    {
      id: 2,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
    {
      id: 3,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
    {
      id: 4,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
    {
      id: 5,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
    {
      id: 6,
      price: Random.float(1, 1000, 2, 2),
      watch: Random.integer(0, 2000),
      count: 0,
      src: [
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
        Random.dataImage('320x320'),
      ],
      title: Random.ctitle(3, 20),
      time: Random.datetime('yyyy-M-d H:m:s'),
      comment: [
        {
          person: Random.ctitle(3, 5),
          time: Random.datetime('yyyy-M-d H:m:s'),
          content: Random.cparagraph(3),
          callback: [
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
            { person: Random.ctitle(2, 4), content: Random.cparagraph(2) },
          ]
        },
      ],
      desc: Random.cparagraph(6),
      max_count: Random.integer(0, 20),
    },
  ],
  address: [
    { pos: Random.cparagraph(3), main: false },
    { pos: Random.cparagraph(3), main: true },
    { pos: Random.cparagraph(3), main: false },
    { pos: Random.cparagraph(3), main: false },
  ],
  money: Random.integer(0, 100),
}

Mock.mock('/data/home', 'post', home)
Mock.mock('/data/find', 'post', find)
Mock.mock('/data/mine', 'post', person)