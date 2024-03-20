var karaokeText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ullam eaque placeat. Sint culpa minima commodi ratione unde magnam obcaecati optio repellendus impedit enim! Iure voluptates nesciunt ipsam corrupti. Soluta? ";
karaokeText = karaokeText.replaceAll(` `, `</span> <span>`);
karaokeText = `<span>` + karaokeText + `</span>`;
var indexHighlight = 0;

setInterval(function () {
  var nextSpan = karaokeText.indexOf("<span>", indexHighlight + 1);
  if (nextSpan === -1) {
    nextSpan = karaokeText.length;
  }
  //dk char ===">" && charNext !==,
  var preHighlight = karaokeText.slice(0, indexHighlight);
  var highlight = karaokeText
    .slice(indexHighlight, nextSpan)
    .replace("<span>", '<span class="highlight">');
  console.log("highlight: ", highlight);
  html= preHighlight + highlight;
  document.
}, 1000);
document.write(karaokeText);
// console.log(highlight);
var indexHighlight = 0;

setInterval(function () {
  var spans = document.querySelectorAll<body>;
  if (indexHighlight < spans.length) {
    spans[indexHighlight].classList.add("highlight");
    indexHighlight++;
  }
}, 1000);
