<template>
  <nav class="z-[5] w-full fixed top-0 left-0 transition-all duration-[.6s]">
    <div class="main_nav">
      <img src="@/image/logo.png" class="logo" alt="rush hub">
      <div class="main_links">
        <ul>
          <li @click="menu = false"><router-link to="/">Home</router-link></li>
          <li @click="menu = false"><router-link to="/about">About</router-link></li>
          <li @click="menu = false"><router-link to="/subject">Birthdays</router-link></li>
          <li @click="menu = false"><router-link to="/subject">Events</router-link></li>
          <li @click="menu = false"><router-link to="/services-features">Contact</router-link></li>
          <li @click="menu = false" class="booking_now"><router-link to="/services-features">Book a Party</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavPage',
  data(){
    return{
    }
  },
}
</script>

<style scoped lang="scss">

@import url('https://db.onlinewebfonts.com/c/09c6fa9769528ae2357e67e71c192ee0?family=AvenirNextLTPro-Heavy');

nav{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  font-family: "AvenirNextLTPro-Heavy";
                                                

  .main_nav{
    width: 100%;
    max-width: 1245px;
    padding: 35px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;

    .logo{
      width: 150px;
    }

    .main_links{


      ul{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;

        li{
          color: #FFF;
          text-align: center;
          font-size: 14px;
          font-weight: bold;
          line-height: normal;
          position: relative;

          &::after{
            content: "";
            position: absolute;
            right: 0;
            bottom: -5px;
            width: 0%;
            height: 3px;
            border-radius: 5px;
            background-color: rgb(255, 0, 170);
            transition: .5s;
          }
          &:hover::after{
            width: 100%;
          }
        }
        .booking_now{
          background: #c7007b;
          padding: 10px 18px;
          border-radius: 4px;
          transition: .5s;

          &::after{
            background-color: transparent;
          }

          &:hover{
            box-shadow: inset 0px 0px 90px #5f257c;
          }
        }
      }
    }

  }
}

</style>
