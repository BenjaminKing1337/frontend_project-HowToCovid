<template>
    <nav class="navbar">
        <ul>
            <li class="logo">
                <img class="covid" src="@/assets/logo.svg" alt="logo" width="2rem">
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/">
                    <img src="@/assets/home.svg" alt="home" width="2rem">
                    <span class="link-text">Home</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/info">
                    <img src="@/assets/info.svg" alt="info" width="2rem">
                    <span class="link-text">Info</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/contact">
                    <img src="@/assets/contact.svg" alt="contact" width="2rem">
                    <span class="link-text">Contact</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .navbar{
        position: fixed;
        z-index: 999;
        background-color: #5B5A5A;
        transition: 200ms ease-in-out;
        ul{
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            align-items: center;
            height: 100%;
            .logo{
                font-size: 1.5rem;
                width: 100%;
                display: flex;
                justify-content: center;
                img{
                    min-width: 4rem;
                    margin: 0 1.5rem;
                    transform: rotate(0deg);
                    transition: 500ms ease-in-out;
                }
            }
            .nav-item{
                width: 100%;
                .nav-link{
                    display: flex;
                    align-items: center;
                    height: 5rem;
                    color: white;
                    text-decoration: none;
                img{
                    min-width: 2rem;
                    margin: 0 1.5rem;
                }
                .link-text{
                    color: white;
                    margin-left: 1rem;
                    visibility: hidden;
                }
            }
            }
            
        }
    }
    .router-link-exact-active {
      background: rgb(68, 68, 68);;
    }

    /*small screen*/
    @media only screen and (max-width: 600px){
        .navbar{
            bottom: 0;
            width: 100vw;
            height: 5rem;
        }
        ul{
            flex-direction: row;
            .logo{
                display: none !important;
            }
            .link-text{
                display: none !important;
            }
        }
        .nav-link{
            justify-content: center;
        }
    }
    /*large screen*/
    @media only screen and (min-width: 600px){
        .navbar{
            top: 0;
            width: 5rem;
            height: 100vh;
        }
        ul{
            flex-direction: column;
        }
        .logo{
            margin-top: 4rem;
        }
        .nav-item{
            margin-top: 5rem;
        }
        .navbar:hover{
            width: 12rem;
        }
        .navbar:hover .link-text{
        visibility: visible !important;
        }
        .navbar:hover .covid{
            transform: rotate(-180deg);
        }
    }
</style>