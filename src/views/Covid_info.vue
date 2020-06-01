<template>
    <div>
        <div class="headline">
            <h1>Covid Info</h1>
            <router-link tag="button" to="/info" class="back">
                <img src="@/assets/undo.svg" alt="undo" height="100%" width="100%">
            </router-link>
        </div>
        <hr>
        <div class="gridbox">
            <div>
                <h2>COVID-19</h2>
                <p>COVID-19 is the infectious disease caused by the most recently discovered coronavirus. </p>
                <p>This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019. </p>
                <p>COVID-19 is now a pandemic affecting many countries globally. </p>
                <p>Most people have only a small risk of becoming seriously ill if they become infected with novel coronavirus, and particularly children and adolescents seem to be less affected and have mild cases of the disease. </p>
                <p>Generally speaking, 80% develop mild symptoms, 15% become seriously ill and require hospitalisation, and 5% require treatment in an intensive care unit. The World Health Organization (WHO) estimates that between 0,3% and 1% of those infected will die from COVID-19. That equates to 1 out of 100-300 people infected with COVID-19.</p>
                <h2>Who is at higher risk?</h2>
                <p>For people with some illnesses and conditions, there is a higher risk of a serious course of COVID-19 – e.g. requiring hospitalisation and possibly intensive care.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.headline{
    display: flex;
    justify-content: space-between;
    width: 95%;
    align-items: flex-end;
}
h1{
  text-align: start;
  margin: 0 0 0 1rem;
  color: #5B5A5A;
}
.back{
    height: 50px;
    width: 50px;
    border: none;
    cursor: pointer;
    transition: 300ms ease-in-out;
    background: #c9c0c0;
    border-radius: 50px;
    box-shadow: -2px 2px 2px black;
    &:hover{
        background: #a7a3a3;
    }
}
h2{
    color: #5B5A5A;
}
p{
    margin-left: 1rem;
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
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: auto;
  margin: 1rem 20% 1rem 4rem;
  gap: 0rem;
  text-align: start;
}
@media only screen and (max-width: 900px){
    .back{
        width: 40px;
       height: 40px;
        &:hover{
            background: #a7a3a3;
        }
    }
    .gridbox{
        margin: 1rem 1rem 4rem 1rem;
    }
}
</style>