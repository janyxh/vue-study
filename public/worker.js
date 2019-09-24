//当主线程发来信息后，触发该message事件

let num = 0;
onmessage = event => {
  console.log("子线程运行");
  console.log("name", self);
  //向主线程发送event.data.name信息
  setInterval(() => {
    if (num < 10) {
      num++;
      postMessage(num);
    } else {
      close();
    }
  }, 1000);

  console.log(event);
  // postMessage(event.data.name);
  // close();
};
