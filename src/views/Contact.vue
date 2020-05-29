<template>
    <div class="contact">
        <h1>Contact</h1>
        <hr>
        <div class="gridbox">
            <div class="dk_hotline">
                <h2>Joint Danish Authorities Hotline</h2>
                <h3>Call +45 7020 0233</h3>
            </div>
            <div class="ministry">
                <h2>Ministry of Foreign Affairs of Denmark's Citizen Service</h2>
                <p>For general advice about travel and foreign affairs.</p>
                <h3>Call +45 3392 1112</h3>
                <h3>Email: bbb@um.dk</h3>
            </div>
            <div class="arrivals_hotline">
                <h2>Arrivals hotline</h2>
                <p>Foreigners arriving in Denmark will be refused entry to Denmark at all internal and external borders unless they have a worthy purpose of entering Denmark. Purposes characterised as worthy are described on the page: If you are travelling to and from Denmark. This page provides answers to most of the frequently asked questions. If your question is not answered, the Danish police has opened a dedicated hotline to answer questions about worthy purposes of travelling to or transiting Denmark.</p>
                <h3>Call +45 7020 6044</h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.contact{
    background: url("../assets/corona_gray.svg");
    background-repeat: no-repeat;
    background-size: 90% 90%;
    background-position: 450% 450%;
}
h1{
  text-align: start;
  margin: 0 0 0 1rem;
  color: #5B5A5A;
}
h2,h3{
    text-align: start;
    color: #5B5A5A;
}
h3{
    color: rgb(156, 152, 152);
}
p{
    text-align: justify ;
    line-height: 3vh;
    font-size: 1.2rem;
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
  grid-template-columns: 1.4fr 1fr 2fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  height: 100%;
  margin: 1rem 4rem 0 4rem;
  
}
.dk_hotline,.ministry,.arrivals_hotline{
    height: 100%;
    width: 100%;
}
.dk_hotline{
    grid-area: 1 / 1 / 2 / 2;
}
.ministry{
    grid-area: 1 / 3 / 3 / 4;
    h2{
        margin: 0;
    }
    p{
        margin: 2rem 0;
    }
}
.arrivals_hotline{
    grid-area: 2 / 1 / 5 / 3;
    h2{
        margin-top: 4rem;
        margin-bottom: 2rem;
    }
    p{
        margin: 3rem 0;
    }
}

@media only screen and (max-width: 900px){
    .contact{
        background: transparent;
    }
    h2{
        font-size: 1.2rem;
    }
    p{
        font-size: 0.9rem;
    }
    .gridbox{
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1.4fr 3fr;
        margin: 1rem 1rem 8rem 1rem;
        }
    .dk_hotline{
        grid-area: 1 / 1 / 2 / 2;
    }
    .ministry{
        grid-area: 2 / 1 / 3 / 2;
    }
    .arrivals_hotline{
        grid-area: 3 / 1 / 4 / 2;
        p{
            margin: 0;
        }
        h2{
        margin-top: 2rem;
        margin-bottom: 1rem;
    }
    }
    .corona{
        display: none;
    }
}
</style>