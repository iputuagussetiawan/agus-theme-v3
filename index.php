<?php

get_header(); 

?>



<div class="container">
    <!-- <div data-cursor="-hidden">Hover me to hide cursor!</div>
    <div data-cursor="-inverse">Hover me to inverse cursor!</div>
    <a>On this element cursor will be in pointer state</a>
    <div class="my-image">On this element cursor will be in opaque state</div>
    <div class="my-input">On this element cursor will be hidden</div>
    <div data-cursor-text="Hello!" class="my-skewing" data-magnetic>Hover me!</div>
    <div data-cursor-icon="arrow-left">Hover me!</div>
    <div data-cursor-stick data-magnetic>Hover me to stick cursor!</div>
    <div data-cursor-stick="#stick-me">Hover <div id="stick-me">me</div> to stick cursor!</div>

    <div data-cursor-show data-cursor-text="Surprise!">Hover me to show cursor!</div> -->

    <a class="cb-btn cb-btn_cta btn-primary-outline" href="">
        <span class="cb-btn_cta-border btn-primary-outline__border"></span>
        <span class="cb-btn_cta-ripple btn-primary-outline__ripple">
            <span></span>
        </span>
        <span class="cb-btn_cta-title btn-primary-outline__title">
            <span data-text="How we work">How we work</span>
        </span>
    </a>
    <h1><?php the_title(); ?></h1>
    <p><?php the_content(); ?></p>
</div>


<?php
get_footer();
?>