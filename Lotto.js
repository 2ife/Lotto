function showPick(number) {
  document.querySelector("#showPick" + number).value = document.querySelector(
    "#selectSelf" + number
  ).value;
}
function setBallColor(part, number) {
  if (document.querySelector(part + number).value <= 10) {
    document.querySelector(part + number).style.backgroundImage =
      "url('yellowball.png')";
  } else if (document.querySelector(part + number).value <= 20) {
    document.querySelector(part + number).style.backgroundImage =
      "url('blueball.png')";
  } else if (document.querySelector(part + number).value <= 30) {
    document.querySelector(part + number).style.backgroundImage =
      "url('redball.png')";
  } else if (document.querySelector(part + number).value <= 40) {
    document.querySelector(part + number).style.backgroundImage =
      "url('blackball.png')";
  } else {
    document.querySelector(part + number).style.backgroundImage =
      "url('greenball.png')";
  }
  document.querySelector(part + number).style.backgroundSize = "84px";
  document.querySelector(part + number).style.backgroundRepeat = "no-repeat";
}
function selectRandom(part, number) {
  document.querySelector(part + number).value = Math.ceil(Math.random() * 45);
}
function showPickAll(part) {
  var i;
  for (i = 0; i < 7; i++) {
    showPick(i + 1);
    setBallColor(part, i + 1);
  }
}
function selectRandomall(part) {
  var i;
  var arr = [];
  while (
    arr.filter((item, index) => arr.indexOf(item) === index).length !== 7
  ) {
    var arr = [];
    for (i = 0; i < 7; i++) {
      selectRandom(part, i + 1);
      arr.push(document.querySelector(part + (i + 1)).value);
      setBallColor(part, i + 1);
    }
  }
  if (part === "#showResult") {
    compare();
    if (Number(document.querySelector("#compare").value) === 6) {
      alert("축하드립니다!!!!!!!!!!!!!!!!!!!!! 1등에 당첨되셨습니다.");
    } else if (Number(document.querySelector("#compare").value) === 5) {
      if (
        document.querySelector("#showPick7") ===
        document.querySelector("#showResult7")
      ) {
        alert("축하드립니다!!!!!!!!!!!!!!!!!!!!! 2등에 당첨되셨습니다.");
      } else {
        alert("축하드립니다!!!!!!!!!!!!!!!!!!!!! 3등에 당첨되셨습니다.");
      }
    } else if (Number(document.querySelector("#compare").value) === 4) {
      alert("축하드립니다!!!!!!!!!!!!!!!!!!!!! 4등에 당첨되셨습니다.");
    } else if (Number(document.querySelector("#compare").value) === 3) {
      alert("축하드립니다!!!!!!!!!!!!!!!!!!!!! 5등에 당첨되셨습니다.");
    } else {
      alert("다음 기회에~");
    }
    alert(document.querySelector("#compare").value + "개 일치");
  }
}
function compare() {
  var i;
  var j;
  document.querySelector("#compare").value = "0";
  for (i = 1; i < 7; i++) {
    for (j = 1; j < 7; j++) {
      if (
        (document.querySelector("#showPick" + i).value ===
          document.querySelector("#showResult" + j).value) ===
        true
      ) {
        document.querySelector("#compare").value = eval(
          document.querySelector("#compare").value + "+" + 1
        );
      }
    }
  }
}
