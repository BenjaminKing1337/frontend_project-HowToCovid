<template>
    <nav class="navbar">
        <img class="decoration" src="@/assets/virus_sidebar.png" alt="virus_sidebar" width="80%" height="8%">
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
            <li class="nav-item">
                <router-link class="nav-link" to="/infographic">
                    <img class="graphics_icon" src="@/assets/graphics.svg" alt="contact" width="2rem">
                    <span class="link-text">Infographics</span>
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
        .decoration{
            margin-right: 20%;
        }
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
                transition: 200ms ease-in-out;
                &:hover{
                    background: rgb(112, 112, 112);
                }
                .nav-link{
                    display: flex;
                    align-items: center;
                    height: 4rem;
                    color: white;
                    text-decoration: none;
                img{
                    min-width: 2rem;
                    margin: 0 1.5rem;
                }
                .graphics_icon{
                    min-width: 1.5rem;
                    margin: 0 1.7rem;
                }
                .link-text{
                    color: white;
                    visibility: hidden;
                }
            }
            }
            
        }
    }
    .router-link-exact-active {
      background: rgb(68, 68, 68);
    }

    /*small screen*/
    @media only screen and (max-width: 600px){
        .navbar{
            bottom: 0;
            width: 100vw;
            height: 4rem;
            .decoration{
                display: none;
            }
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
            margin-top: 3rem;
        }
        .nav-item{
            margin-top: 3rem;
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