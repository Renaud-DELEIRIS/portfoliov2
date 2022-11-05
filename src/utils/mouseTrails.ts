var timer: NodeJS.Timeout | null = null;
var mouseTrailsEnabled = true;

const mouseTrails = (e: MouseEvent) => {
  // don't play this function if it has been called in the last 50ms
  if (timer) {
    return;
  }
  timer = setTimeout(() => {
    timer = null;
  }, 10);

  [1, 0.9, 0.8, 0.5, 0.1].forEach(function (i) {
    var j = (1 - i) * 50;
    var elem = document.createElement("div");
    var size = Math.ceil(Math.random() * 10 * i) + "px";
    elem.style.position = "fixed";
    elem.style.top = e.clientY + Math.round(Math.random() * j - j / 2) + "px";
    elem.style.left = e.clientX + Math.round(Math.random() * j - j / 2) + "px";
    elem.style.width = size;
    elem.style.height = size;
    elem.style.background =
      "hsla(" +
      Math.round(Math.random() * 360) +
      ", " +
      "100%, " +
      "50%, " +
      i +
      ")";
    elem.style.borderRadius = size;
    elem.style.pointerEvents = "none";
    elem.style.zIndex = "0";
    document.body.appendChild(elem);
    window.setTimeout(function () {
      document.body.removeChild(elem);
    }, Math.round(Math.random() * i * 2000));
  });
};

const initMouseTrails = (ref: HTMLDivElement | null) => {
  if (!ref) return;
  ref.addEventListener("mousemove", mouseTrails);
  console.log("added mouse trails");
  mouseTrailsEnabled = true;
};

const removeMouseTrails = (ref: HTMLDivElement | null) => {
  if (!ref) return;
  ref.removeEventListener("mousemove", mouseTrails);
  console.log("removed mouse trails");
  mouseTrailsEnabled = false;
};

const mouseTrailsState = () => mouseTrailsEnabled;

export { initMouseTrails, removeMouseTrails, mouseTrailsState };
