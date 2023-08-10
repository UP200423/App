import React from 'react'

export const GraficaLineas = () => {
  return (
    <div class="line-chart-block block">
  <div class="line-chart">
    <div class='grafico'>
      <ul class='eje-y'>
        <li data-ejeY='30'></li>
        <li data-ejeY='20'></li>
        <li data-ejeY='10'></li>
        <li data-ejeY='0'></li>
      </ul>
      <ul class='eje-x'>
        <li>Apr</li>
        <li>May</li>
        <li>Jun</li>
      </ul>
      <span data-valor='25'>
        <span data-valor='8'>
          <span data-valor='13'>
            <span data-valor='5'>   
              <span data-valor='23'>   
                <span data-valor='12'>
                  <span data-valor='15'></span></span></span></span></span></span></span>
    </div>
  </div>
  <ul class="time-lenght horizontal-list">
    <li><a class="time-lenght-btn" href="#14">Week</a></li>
    <li><a class="time-lenght-btn" href="#15">Month</a></li>
    <li><a class="time-lenght-btn" href="#16">Year</a></li>
  </ul>
  <ul class="month-data clear">
    <li>
      <p>APR<span class="scnd-font-color"> 2013</span></p>
      <p><span class="entypo-plus increment"> </span>21<sup>%</sup></p>
    </li>
    <li>
      <p>MAY<span class="scnd-font-color"> 2013</span></p>
      <p><span class="entypo-plus increment"> </span>48<sup>%</sup></p>
    </li>
    <li>
      <p>JUN<span class="scnd-font-color"> 2013</span></p>
      <p><span class="entypo-plus increment"> </span>35<sup>%</sup></p>
    </li>
  </ul>
</div>

  )
}
