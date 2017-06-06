<template>
  <div>
    <section id="top_banner">
      <nav layout="row center">
        <a class="logo" self="center"><img
          src="https://htmlstream.com/preview/unify-v1.9.8/assets/img/themes/logo1-default.png"></a>
        <ul layout="row center-stretch">
          <li>HOME</li>
          <li>PAGES</li>
          <li>BLOG</li>
          <li>PORTFOLIO</li>
          <li>FEATRUES</li>
          <li>SHORTCODES</li>
          <li>DEMO</li>
        </ul>
        <div class="icons" self="center" layout="row">
          <span class="icon-cart counter"></span>
          <span class="icon-search"></span>
        </div>
      </nav>
      <div class="bottom" layout="row-center-center">
        <div class="content" layout="column-center-center">
          <div class="title">UNIFY BOOTSTRAP TEMPLATE</div>
          <h1>WE ARE CREATIVE COMPANY</h1>
          <div class="buttons">
            <span><a href="">Learn More</a></span>
            <span><a href="">Purchase Now</a></span>
          </div>
        </div>
      </div>
    </section>
    <section id="html_dsescription" layout="row-center">
      <div class="box" layout="column-center">
        <img src="https://htmlstream.com/preview/unify-v1.9.8/assets/img/icons/flat/01.png" alt="">
        <div class="title">Fully Responsive</div>
        <div class="content">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cur modo, tortor mauris con</div>
      </div>
      <div class="box" layout="column-center">
        <img src="https://htmlstream.com/preview/unify-v1.9.8/assets/img/icons/flat/02.png" alt="">
        <div class="title">HTML5 + CSS3</div>
        <div class="content">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cur modo, tortor mauris con</div>
      </div>
      <div class="box" layout="column-center">
        <img src="https://htmlstream.com/preview/unify-v1.9.8/assets/img/icons/flat/03.png" alt="">
        <div class="title">Launch Ready</div>
        <div class="content">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cur modo, tortor mauris con</div>
      </div>
    </section >
    <!--<section id="computer" layout="row stretch-stretch">-->
      <!--<img src="https://htmlstream.com/preview/unify-v1.9.8/assets/img/mockup/imac2.png" alt="">-->
      <!--<div class="conteent"></div>-->
    <!--</section>-->
  </div>
</template>

<script>
  import icon from '../../assets/icon.css'
  let set_top_banner_h = ()=> {
    const h = $(window).height()
    console.log(h)
    $("#top_banner").css("height", h)
  }

  export default {
    mounted() {
      set_top_banner_h()
      $(window).resize(res=> {
        set_top_banner_h()


      })
    }
  }


</script>

<style src="../../css/unify.sass" lang="sass" scoped>


</style>
