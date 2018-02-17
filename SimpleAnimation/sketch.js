const burst1 = new mojs.Burst({
  radius: {
    0: 100
  },
  count: 20,
  children: {
    shape: 'cross',
    stroke: 'white',
    strokeWidth: {
      6: 0
    },
    angle: {
      360: 0
    },
    radius: {
      30: 5
    },
    opacity: {
      1: 0
    },
    duration: 3500 //miliseconds
  }
});

const burst2 = new mojs.Burst({
  radius: {
    0: 200
  },
  count: 12,
  children: {
    shape: 'zigzag',
    points: 4,
    stroke: {
      'magenta': 'pink'
    },
    fill: 'none',
    strokeWidth: {
      6: 0
    },
    angle: {
      '-360': 0
    },
    radius: {
      30: 5
    },
    opacity: {
      1: 0
    },
    duration: 3000 //miliseconds
  }
});

const burst3 = new mojs.Burst({
  radius: {
    0: 200
  },
  count: 5,
  children: {
    fill: 'grey',
    points: 7,
    angle: {
      '-360': 0
    },
    radius: {
      10: 5
    },
    opacity: {
      1: 0
    },
    duration: 2000 //miliseconds
  }
});

const circ_opt = {
  radius: {
    0: 200
  },
  fill: 'none',
  stroke: 'teal',
  opacity: {
    1: 0
  },
  duration: 1500
};

const circ1 = new mojs.Shape({
  ...circ_opt
});

const circ2 = new mojs.Shape({
  ...circ_opt,
  delay: 500

});

const timeline = new mojs.Timeline({
    repeat: 1000
  })
  .add(burst1, burst2, burst3, circ1, circ2)
  .play();
