<template>
    <div>
        <div class="headline">
            <h1>Precautions</h1>
            <router-link tag="button" to="/info" class="back">
                <img src="@/assets/undo.svg" alt="undo" height="100%" width="100%">
            </router-link>
        </div>
        <hr>
        <div class="gridbox_precautions">
            <div class="precautions">
                <ul>
                    <li><h2>Stay home if you feel unwell. </h2></li>
                    <li><h2>If you have a fever, cough and difficulty breathing, see medical attention. Call in advance. </h2></li>
                    <li><h2>Follow the directions of your local Health authority</h2></li>
                    <li><h2>Refrain from smoking and other activities that weaken the lungs.</h2></li>
                    <li><h2>Use Mask</h2></li>
                </ul>
            </div>
        </div>
        <h1>Guidelines</h1>
        <hr>
        <div class="gridbox_guidelines">
            <div class="distance">
                <img src="@/assets/Distance.png" alt="distance" width="90%" height="90%">
                <h2>REMEMBER TO KEEP
                    <br> YOUR DISTANCE
                    <br> IN PUBLIC SPACES</h2>
            </div>
            <div class="wash">
                <img src="@/assets/Wash.png" alt="distance" width="90%" height="90%">
                <h2>ALWAYS WASH
                   <br> YOUR HANDS 
                   <br> BEFORE DOING 
                   <br> ANYTHING</h2>
            </div>
            <div class="cough">
                <img src="@/assets/Cough.png" alt="distance" width="90%" height="90%">
                <h2>
                    SNEEZE 
                   <br> INTO YOUR 
                   <br> CLOTHING IF 
                   <br> YOU HAVE NO
                   <br> TISSUES
                </h2>
            </div>
            <div class="handshake">
                <img src="@/assets/Touch.png" alt="distance" width="90%" height="90%">
                <h2>AVOID UNNECESSARY
                    TOUCHING OF HANDS </h2>
            </div>
            <div class="disinfect">
                <img src="@/assets/Disinfect.png" alt="distance" width="90%" height="90%">
                <h2>DISINFECT YOUR
                   <br> WORKSPACE DAILY</h2>
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
    font-size: 1.3rem;
}
hr{
  width: 50%;
  margin: 0 0 0 1rem;
  height: 3px;
  border: none;
  background-color: #C7D40F;
}
.gridbox_precautions{
  display: grid;
  grid-template-columns: 1fr 0.4fr;
  grid-template-rows: 1fr;
  height: 300px;
  margin: 1rem 4rem 1rem 4rem;
  gap: 0rem;
}
.precautions{
    grid-area: 1 / 1 / 2 / 2;
    text-align: start;
}
.gridbox_guidelines{
  display: grid;
  grid-template-columns: 0.7fr 1.3fr 0.8fr;
  grid-template-rows: 1fr 1fr 1fr;
  height: 700px;
  margin: 1rem 20% 1rem 4rem;
  gap: 0.7rem;
}
.distance,.wash,.cough,.handshake,.disinfect{
    background: #70707015;
    box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
    border-radius: 21px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}
.distance{
    grid-area: 1 / 1 / 2 / 3;
    img{
        width: 30%;
        height: 100%;
    }
    h2{
        width: 70%;
        align-self: center;
    }
}
.wash{
    grid-area: 1 / 3 / 3 / 4;
    flex-direction: column;
    align-items: center;
    img{
        width: 80%;
        height: 50%;
    }
    h2{
        width: 100%;
        align-self: center;
    }
}
.cough{
    grid-area: 2 / 1 / 4 / 2;
    flex-direction: column;
    flex-direction: column-reverse;
    img{
        width: 90%;
        height: 50%;
    }
    h2{
        width: 100%;
        align-self: center;
    }
}
.handshake{
    grid-area: 2 / 2 / 3 / 3;
    img{
        width: 45%;
        height: 100%;
    }
    h2{
        width: 55%;
        align-self: center;
        word-wrap: break-word   ;
    }
}
.disinfect{
    grid-area: 3 / 2 / 4 / 4;
    flex-direction: row-reverse;
    img{
        width: 30%;
        height: 100%;
    }
    h2{
        width: 70%;
        align-self: center;
    }
}
@media only screen and (max-width: 900px){
    .back{
        width: 40px;
       height: 40px;
        &:hover{
            background: #a7a3a3;
        }
    }
    h2{
        font-size: 1rem;
    }
    br{
        display: none;
    }
    .gridbox_precautions{
        grid-template-columns: 1fr;
        margin: 1rem 1rem 1rem 1rem;
    }
    .gridbox_guidelines{
        grid-template-columns: 1fr;
        grid-template-rows: repeat(5, 1fr);
        margin: 1rem 1rem 5rem 1rem;
    }
    .distance{
        grid-area: 1 / 1 / 2 / 2;
        img{
        width: 30%;
        height: 100%;
        }
        h2{
            width: 70%;
            align-self: center;
        }
        }
    .wash{
        grid-area: 2 / 1 / 3 / 2;
        flex-direction: row;
        img{
        width: 30%;
        height: 100%;
        }
        h2{
            width: 70%;
            align-self: center;
        }
    }
    .cough{
        grid-area: 3 / 1 / 4 / 2;
        flex-direction: row;
        img{
        width: 30%;
        height: 100%;
        }
        h2{
            width: 70%;
            align-self: center;
        }
    }
    .handshake{
        grid-area: 4 / 1 / 5 / 2;
        img{
        width: 30%;
        height: 100%;
        }
        h2{
            width: 70%;
            align-self: center;
        }
    }
    .disinfect{
        grid-area: 5 / 1 / 6 / 2;
        flex-direction: row;
        img{
        width: 30%;
        height: 100%;
        }
        h2{
            width: 70%;
            align-self: center;
        }
    }
}
</style>