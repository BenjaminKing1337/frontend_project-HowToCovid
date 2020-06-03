<template>
  <div>
    <div class="headline">
      <h1>Misconceptions</h1>
      <router-link tag="button" to="/info" class="back">
        <img src="@/assets/undo.svg" alt="undo" class="undo" height="100%" width="100%" /><h1 class="return">RETURN</h1>
      </router-link>
    </div>
    <hr />
    <div class="gridbox">
      <div class="box">
        <div class="picture"></div>
        <h2>Televangelists</h2>
        <p>Televangelism is the practice of using media, like radio and television, to spread the message of Christianity. Since Covid-19 occurred a lot of these preachers have been advocating false information about the virus.</p>
        <p>A great example would be Kenneth Copeland, an American Televangelist who around march 2020 repeatedly claimed that the pandemic had ended or would soon end, that he could heal followers of it, and that his followers should continue paying tithes if they lost their jobs in the economic crisis that the pandemic caused.</p>
        <p>He later made claims to have destroyed the virus and to have ended the still-ongoing pandemic. Sources such as this are more infectious than the disease itself and should be avoided at all costs!</p>
      </div>
      <div class="box">
        <div class="picture"></div>
        <h2>The Internet</h2>
        <p>As has always been true, the internet is one of the biggest places for misinformation. The pandemic however, has only increased the quantities and types of false information out there.</p>
        <p>It is mostly just people spouting their own opinionated versions of how to act accordingly during the pandemic, but there are also conspiracy theorists who are spreading fearful information and selling snake oil and other fake anti-Covid remedies.</p>
        <p>Nothing has been proven to work so far, and only official info from reliable sources should be trusted.</p>
      </div>
      <div class="box">
        <div class="picture"></div>
        <h2>POTUS</h2>
        <p>The President of the United States, Donald Trump, has been handling the global pandemic in the most imbecilic way possible ever since it began. Not only did he fire the global pandemic prevention team as one of the first things when he stepped into office, he did it right before the worst pandemic we’ve seen in a century.</p>
        <p>Donald Trump had been downplaying the virus up until it reached the US in greater numbers, and now it is the most infected country in the world. He has been advocating non-approved remedies, like drinking disinfectants or taking Hydroxychloroquine which is an antimalarial drug, meaning it is normally prescribed to people who have contracted Malaria.</p>
        <p>Nothing speaks well for Donald Trump and we advise everyone to not take anything serious he says about Corona, or Covid-19. In fact, it would be unarguably, objectively and plain evidently, supremely excellent, to disregard any and all statements coming from him regarding any subject as he has proven time and time again that he is denser than osmium, the densest known material to man.</p>
      </div>
      <div class="box">
        <div class="picture"></div>
        <h2>5G</h2>
        <p>As much as 5G does seem to be a health concern, it was not before the pandemic had begun that conspiracy theorists started blaming the virus on the new technology.</p>
        <p>Rumors have been speculating that it is all part of a grand scheme for population control, and some even claim that people like Bill Gates are behind it and advocating for genocide to reduce the population.</p>
        <p>Far-fetched, but brought surely brought about from one of Bill Gates many recent public talks on population reduction—Yes, he coincidentally has done those—but there’s no real proof to go from and accepting this as anything but crazy would be accepting that there in fact may be a New World Order, or whatever the conspiracy theorists refer to it as.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./src/scss/variables.scss";
.headline {
  display: flex;
  justify-content: space-between;
  width: 95%;
  align-items: flex-end;
}
h1 {
  text-align: start;
  margin: 0 0 0 1rem;
  color: #5b5a5a;
}
.undo {
  margin-left: 20px;
}
.back {
  color: #5b5a5a;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
  direction: rtl;
  height: 50px;
  width: 50px;
  border: none;
  cursor: pointer;
  transition: 300ms ease-in-out;
  background: #c9c0c0;
  border-radius: 50px;
  box-shadow: -2px 2px 2px black;
  &:hover {
    background: #949191;
    color: #c7d40f;
  }
.return{
  transition: 300ms ease-in-out;
  &:hover{
    color: #8d8b8b;
  }
}
}
h2 {
  color: #5b5a5a;
  padding: 0 0.4rem;
  text-align: start;
  transition: 200ms ease-in-out;
  &:hover {
    color: #8d8989;
  }
}
p {
  padding: 0 1rem;
}
hr {
  width: 50%;
  margin: 0 0 0 1rem;
  height: 3px;
  border: none;
  background-color: #c7d40f;
}
.gridbox {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  height: auto;
  margin: 1rem 4rem 1rem 4rem;
  gap: 1rem;
}
.box {
  background: #70707015;
  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem,
    rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
  border-radius: 21px;
  text-align: start;
  display: flex;
  flex-direction: column;
  .picture {
    min-height: 300px;
    width: 100%;
    border-radius: 21px 21px 0 0;
    border-bottom: 4px solid #c7d40f;
  }
}
.box:nth-child(1) {
  grid-area: 1 / 1 / 3 / 3;
  animation: appear 0.3s ease-out;
  .picture {
    background: url("../assets/televangelists.jpg");
    background-size: 100% 100%;
  }
}
.box:nth-child(2) {
  grid-area: 1 / 3 / 3 / 5;
  animation: appear 0.5s ease-out;
  .picture {
    background: url("../assets/internet.jpg");
    background-size: 105% 105%;
    background-position: center;
  }
}
.box:nth-child(3) {
  grid-area: 3 / 1 / 5 / 3;
  animation: appear 0.7s ease-out;
  .picture {
    background: url("../assets/potus.jpg");
    background-size: 100% 100%;
  }
}
.box:nth-child(4) {
  grid-area: 3 / 3 / 5 / 5;
  animation: appear 0.9s ease-out;
  .picture {
    background: url("../assets/5g.jpg");
    background-size: 100% 100%;
  }
}
@media only screen and (min-width: 1500px) {
  .picture {
    min-height: 400px !important;
  }
}
@media only screen and (max-width: 900px) {
  .back {
    width: 40px;
    height: 40px;
    &:hover {
      background: #a7a3a3;
    }
    .return{
      display: none;
    }
  }
  hr {
    width: 55%;
  }
  .gridbox {
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 0.5fr 1fr 0.8fr;
    height: auto;
    margin: 1rem 1rem 5.5rem 1rem;
  }
  .box:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;
  }
  .box:nth-child(2) {
    grid-area: 2 / 1 / 3 / 2;
  }
  .box:nth-child(3) {
    grid-area: 3 / 1 / 4 / 2;
  }
  .box:nth-child(4) {
    grid-area: 4 / 1 / 5 / 2;
  }
}
</style>