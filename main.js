window.onload = () => {
  const imgElement = document.querySelector('img')
  const textElem = document.querySelector('h1')
  const music = document.createElement('audio')
  music.src = 'music.mp3'
  const text = "HAPPY BIRTHDAY DAY TO YOU, HAPPY BIRTHDAY DAY TO YOU, HAPPY BIRTHDAY DAY DEAR MORSHED, HAPPY BIRTHDAY TO YOU"
  const colors = ["#ff1010ee",
    "#fff510ee",
    "#73ff5dee",
    "#5dffefee",
    "#5d7effee",
    "#b05dffee",
    "#ff5dfeee",
    "#ff5d87ee",
    "#ff5d5dee"]


  function showGift() {
    imgElement.remove()
    textElem.textContent = ""
    const gift_img = document.createElement ('img')
    gift_img.src = 'cake.jpeg'
    gift_img.width = '150px'
    gift_img.height = '150px'
    document.body.appendChild(gift_img)
  }
  let indx = 0
  const maxIndx = text.length
  let myInterval;
  textElem.style.color = "#eb1f1fee"

  function showText() {
    if (indx >= maxIndx-1) {
      clearInterval(myInterval)
      const sensor = new LinearAccelerationSensor ()
      setTimeout(()=> {
        alert("ফোন ঝাঁকুনি দিন ")
        sensor.start()
        sensor.onreading = () => {
         if ((sensor.x > 0 || sensor.x < 0) || (sensor.y > 0 || sensor.y < 0))
           showGift()
      }
    },2000)

    }

    textElem.style.color = colors [Math.floor(Math.random()*colors.length)]
    textElem.textContent += text[indx]
    indx++
  }

  imgElement.addEventListener('click', function () {
    music.play()
    textElem.innerText = ""
    myInterval = setInterval(showText, 300)
  })
}
