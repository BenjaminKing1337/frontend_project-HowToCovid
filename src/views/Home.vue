<template>
  <div class="home">
    <h1>HOME</h1>
    <hr>
    <div class="gridbox">
      <div class="welcomebox">welcome</div>
      <div class="videobox">video</div>
      <div class="info">Info</div>
      <div class="contact">Contact</div>
      <div class="graphic">Infographics</div>
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
  height: 900px;
  margin: 1rem 4rem 1rem 4rem;
  gap: 2rem;
}
.welcomebox, .videobox, .info, .contact, .graphic{
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #707070a8;
  font-size: 3rem;
  color: #C7D40F;
  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
  border-radius: 21px;
  overflow: hidden;
}
.welcomebox{
  grid-area: 1 / 1 / 3 / 2
}
.videobox{
  grid-area: 1 / 2 / 3 / 4
}
.info{
  grid-area: 3 / 1 / 4 / 2;
}
.contact{
  grid-area: 3 / 2 / 4 / 3;
}
.graphic{
  grid-area: 3 / 3 / 4 / 4;
}
@media only screen and (max-width: 900px){
  .gridbox{
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    height: 800px;
    margin: 1rem 1rem 5.5rem 1rem;
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
    
</style>