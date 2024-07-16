const blueLinearColorArr = [
  ['#37e6fa', '#0c717d'],
  ['#00c0f4', '#005c76'],
  ['#2681d7', '#1d5f9e'],
  ['#0186ff', '#006bcd'],
  ['#0065ff', '#0065ff'],
  ['#0040a2', '#0040a2']
];

export const getBlueLinearColor = (index = 0) => {
  const color = blueLinearColorArr[index] || blueLinearColorArr[index % blueLinearColorArr.length];
  return {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [
      {
        offset: 0,
        color: color[0]
      },
      {
        offset: 1,
        color: color[1]
      }
    ]
  };
};

const otherLinearColorArr = [
  ['rgba(0, 255, 210, .5)', 'rgba(0, 255, 210, 0)', '#00ffd2'],
  ['rgba(231, 79, 82, .5)', 'rgba(231, 79, 82, 0)', '#e74f52'],
  ['rgba(245, 186, 69, .5)', 'rgba(245, 186, 69, 0)', '#f5ba45']
];

export const getOtherLinearColor = (index = 0) => {
  const color = otherLinearColorArr[index] || otherLinearColorArr[index % otherLinearColorArr.length];
  return {
    color: {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: color[0]
        },
        {
          offset: 1,
          color: color[1]
        }
      ],
      global: false // 缺省为 false
    },
    borderColor: color[2]
  };
};
