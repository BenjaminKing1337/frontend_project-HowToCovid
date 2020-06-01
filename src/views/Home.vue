<template>
  <div class="home">
    <h1>HOME</h1>
    <hr>
    <div class="gridbox">
      <div class="welcomebox">
        <h2>Welcome to <span>HowToCovid</span></h2>
        <p>We are here to provide some information for you about COVID-19/Coronavirus. Our team collected the most important information and guides to get an overview of how you should behave, if you would like to return to your everyday life.</p>
        </div>
      <div class="videobox">
        <iframe src="https://www.youtube.com/embed/EA09IG5nRHs"  width="100%" height="100%"></iframe>
      </div>
      <router-link to="/info" class="info">
        <div class="darken">
          <h2>INFO</h2>
          <p>Here you will find various info regarding the virus, possible symptoms, general precautions, guidelines, and misconceptions.</p>
        </div>
      </router-link>
      <router-link to="/contact" class="contact">
        <div class="darken">
          <h2>CONTACT</h2>
          <p>Many questions arise concerning novel coronavirus/COVID-19. Several authorities and organizations have, therefore, set up hotlines to help you and your employer. Here is an overview of the various hotlines and the services they offer.</p>
        </div>
      </router-link>
      <router-link to="/infographic" class="graphic">
        <div class="darken">
          <h2>INFOGRAPHICS</h2>
          <p>Here is an overview of all our graphical material available for download and print.</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>


export default {
  
}
</script>
<style lang="scss" scoped>
h1{
  text-align: start;
  margin: 0 0 0 1rem;
  color: #5B5A5A;
}
h2{
  font-size: 1.5rem;
  margin-bottom: 0;
  color: #C7D40F;
  text-align: start;
}
p{
  margin-top: 5rem;
  text-align: start;
  font-size: 1.2rem;
}
.howtocovid{
  color: #C7D40F;;
}
hr{
  width: 50%;
  margin: 0 0 0 1rem;
  height: 3px;
  border: none;
  background-color: #C7D40F;
}

.gridbox{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1.5fr;
  height: 800px;
  margin: 1rem 4rem 1rem 4rem;
  gap: 2rem;
}
.welcomebox, .videobox, .info, .contact, .graphic{
  display: flex;
  flex-direction: column;
  color: white;
  text-shadow: 1px 1px 3px #5B5A5A;
  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
  border-radius: 21px;
  overflow: hidden;
  text-decoration: none;
  transition: all 500ms;
}
.info:hover, .contact:hover, .graphic:hover{
  box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
  transform: translateY(-3px) scale(1);
}
.welcomebox{
  grid-area: 1 / 1 / 3 / 2;
  text-align: start;
  box-shadow: none;
  color: #5B5A5A;
  text-shadow: none;
  border-radius: 0;
  h2{
    font-size: 2rem;
    color: #5B5A5A;
  }
  span{
    color: #C7D40F;
    text-shadow: 1px 1px 2px black;
  }
}
.videobox{
  grid-area: 1 / 2 / 3 / 4
}
.darken{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.404);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.info{
  grid-area: 3 / 1 / 4 / 2;
  background: url("https://eeagrants.org/sites/default/files/styles/fmo_large_image/public/fusion-medical-animation-rnr8D3FNUNY-unsplash_0.jpg?itok=cwm4OsoG");
  background-size: 100% 100%;
  h2{
    padding: 0 1rem;
  }
  p{
    padding: 0.5rem 1rem;
    margin: 0;
    font-size: 1rem
  }
}
.contact{
  grid-area: 3 / 2 / 4 / 3;
  background: url("https://www.romania-insider.com/sites/default/files/styles/article_large_image/public/2019-02/emergency_call_phone_-_shutterstock.jpg");
  background-size: 100% 100%;
  h2{
    padding: 0 1rem;
  }
  p{
    padding: 0.5rem 1rem;
    margin: 0;
    font-size: 1rem
  }
}
.graphic{
  grid-area: 3 / 3 / 4 / 4;
  background: url("../assets/iGraphics.png");
  background-size: 100% 100%;
  h2{
    padding: 0 1rem;
  }
  p{
    padding: 0.5rem 1rem;
    margin: 0;
    font-size: 1rem
  }
}
@media only screen and (max-width: 900px){
  p{
    font-size: 0.8rem !important;
    margin-top: 3rem;
  }
  .gridbox{
    grid-template-columns: 1fr;
    grid-template-rows: 2.8fr 2.5fr 2fr 2fr 2fr;
    height: 900px;
    gap: 1rem;
    margin: 1rem 4.5rem 5.5rem 4.5rem;
  }
  .welcomebox{
  grid-area: 1 / 1 / 2 / 2
  }
  .videobox{
    grid-area: 2 / 1 / 3 / 2
  }
  .info{
    grid-area: 3 / 1 / 4 / 2;
  }
  .contact{
    grid-area: 4 / 1 / 5 / 2;
  }
  .graphic{
    grid-area: 5 / 1 / 6 / 2;
  }
}
@media only screen and (max-width: 600px){
  p{
    margin-top: 1rem;
  }
  .gridbox{
    margin: 1rem 1rem 5.5rem 1rem
  }
}
    
</style>