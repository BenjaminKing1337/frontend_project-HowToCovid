<template>
  <div class="home">
    <h1>HOME</h1>
    <hr>
    <div class="gridbox">
      <div class="welcomebox">welcome</div>
      <div class="videobox">video</div>
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
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  height: 85vh;
  margin: 1rem 1rem 1rem 4rem;
  gap: 2rem;
}
.welcomebox, .videobox{
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #707070a8;
  font-size: 3rem;
  color: #C7D40F;
  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
  border-radius: 21px;
  overflow: hidden;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.welcomebox{
  grid-area: 1 / 1 / 3 / 2
}
.videobox{
  grid-area: 1 / 2 / 3 / 3
}
@media only screen and (max-width: 900px){
  .gridbox{
    margin: 1rem;
  }
  .welcomebox{
  grid-area: 1 / 1 / 2 / 3
  }
  .videobox{
    grid-area: 2 / 1 / 3 / 3
  }
}
    
</style>