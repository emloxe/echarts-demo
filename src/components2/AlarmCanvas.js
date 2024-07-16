export function addCenterImg({ zr, cx, cy }, imgPath, rotation = -Math.PI * 2, time = 7000, z = 1) {
  const img = new zrender.Image({
    originX: cx,
    originY: cy,
    z,
    style: {
      image: imgPath,
      x: 0,
      y: 0
    }
  });

  img
    .animate('', true)
    .when(time, {
      rotation
    })
    .done(() => {
      console.log('动画完成');
    })
    .start();

  zr.add(img);
}

export function addCircle({ zr, cx, cy }, delay = 0) {
  setTimeout(() => {
    const circle = new zrender.Circle({
      originX: cx,
      originY: cy,
      z: 10,
      shape: {
        cx,
        cy,
        r: 0
      },
      style: {
        stroke: '#ff0000',
        // fill: '#ff0000',
        opacity: 0.4,
        lineWidth: 1
      }
    });
    circle
      .animate('shape', true)
      .when(3000, {
        r: 100
      })
      .done(() => {
        console.log('动画完成');
      })
      .start();

    circle
      .animate('style', true)
      .when(3000, {
        opacity: 0,
        lineWidth: 20
      })
      .done(() => {
        console.log('动画完成');
      })
      .start();

    zr.add(circle);
  }, delay);
}
