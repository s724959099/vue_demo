<template>
  <div class="container" layout="rows-center-center">
    <div class="weatherbox">
      <label for="box_check">
        <input type="checkbox" id="box_check" hidden>
        <div class="top" layout="column stretch-stretch">
          <div class="top_top" self="size-x5">
            <svg>
              <circle cx="0" cy="80" r="3"></circle>
              <circle cx="60" cy="120" r="3"></circle>
              <circle cx="120" cy="140" r="3"></circle>
              <circle cx="180" cy="125" r="3"></circle>
              <circle cx="240" cy="90" r="3"></circle>
              <circle cx="300" cy="70" r="3"></circle>
              <circle cx="360" cy="80" r="3"></circle>

              <text class="text" x="0" y="80">26°C</text>
              <text class="text" x="60" y="120">26°C</text>
              <text class="text" x="120" y="140">26°C</text>
              <text class="text" x="180" y="125">26°C</text>
              <text class="text" x="240" y="90">26°C</text>
              <text class="text" x="300" y="70">26°C</text>
              <text class="text" x="360" y="80">26°C</text>

              <polyline points="0,80 60,120 120,140 180,125 240,90 300,70 360,80 400,70"></polyline>
            </svg>
            <div class="moon"></div>
          </div>
          <div class="top_bottom" layout="row stretch-stretch" self="size-x4">
            <div class="day_content">
              <div class="temprature">26°C</div>
              <div class="info">
                <div class="address">新竹市香山區茄苳里</div>
                <div class="time">星期三 上午4:00</div>
              </div>
            </div>
            <div class="day_show">
              <div class="day_img"></div>
              <div class="rain rain1"></div>
              <div class="rain rain2"></div>
              <div class="rain rain3"></div>
              <div class="rain rain4"></div>
            </div>
          </div>
        </div>
        <div class="bottom" layout="row-stretch-spread">
          <div class="day_weather" layout="column">
            <h2 self="center"> MON</h2>
            <svg viewBox="-50 -50 100 100">
              <circle class="sun" cx="0" cy="0" r="12"></circle>
            </svg>
          </div>
          <div class="day_weather" layout="column">
            <h2 self="center"> THU</h2>
            <svg viewBox="-50 -50 100 100">
              <circle class="sun" cx="0" cy="0" r="12"></circle>
            </svg>
          </div>
          <div class="day_weather" layout="column">
            <h2 self="center"> WED</h2>
            <svg viewBox="-50 -45 100 100">
              <circle class="sun" cx="-10" cy="5" r="12"></circle>
              <circle class="cloud" cx="16" cy="20" r="15"></circle>
              <circle class="cloud" cx="-2" cy="20" r="15"></circle>
              <circle class="cloud" cx="6" cy="20" r="15"></circle>
              <circle class="cloud" cx="2" cy="5" r="10"></circle>
              <circle class="cloud" cx="12" cy="2" r="11"></circle>
            </svg>
          </div>
          <div class="day_weather" layout="column">
            <h2 self="center"> THR</h2>
            <svg viewBox="-50 -45 100 100">
              <circle class="sun" cx="-10" cy="5" r="12"></circle>
              <circle class="cloud" cx="16" cy="20" r="15"></circle>
              <circle class="cloud" cx="-2" cy="20" r="15"></circle>
              <circle class="cloud" cx="6" cy="20" r="15"></circle>
              <circle class="cloud" cx="2" cy="5" r="10"></circle>
              <circle class="cloud" cx="12" cy="2" r="11"></circle>
            </svg>
          </div>
          <div class="day_weather" layout="column">
            <h2 self="center"> FRI</h2>
            <svg viewBox="-50 -50 100 100">
              <circle class="sun" cx="0" cy="0" r="12"></circle>
            </svg>
          </div>
          <div class="day_weather" layout="column">
            <h2 self="center"> SAT</h2>
            <svg viewBox="-50 -45 100 100">
              <circle class="cloud" cx="16" cy="20" r="15"></circle>
              <circle class="cloud" cx="-2" cy="20" r="15"></circle>
              <circle class="cloud" cx="6" cy="20" r="15"></circle>
              <circle class="cloud" cx="2" cy="5" r="10"></circle>
              <circle class="cloud" cx="12" cy="2" r="11"></circle>
            </svg>
          </div>
          <div class="day_weather" layout="column">
            <h2 self="center"> SUN</h2>
            <svg viewBox="-50 -45 100 100">
              <circle class="sun" cx="-10" cy="5" r="12"></circle>
              <circle class="cloud" cx="16" cy="20" r="15"></circle>
              <circle class="cloud" cx="-2" cy="20" r="15"></circle>
              <circle class="cloud" cx="6" cy="20" r="15"></circle>
              <circle class="cloud" cx="2" cy="5" r="10"></circle>
              <circle class="cloud" cx="12" cy="2" r="11"></circle>
            </svg>
          </div>
        </div>
      </label>
    </div>
  </div>
</template>

<script lang="coffee">
  export default {}
</script>

<style src="../../css/weather.sass" lang="sass" scoped>
</style>

<style lang="sass">

</style>
