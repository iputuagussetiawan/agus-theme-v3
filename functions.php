<?php

// ======================================
// Functions Partial -- start
// ======================================

include_once 'inc/functions-custom.php';
include_once 'inc/functions-plugin.php';
include_once 'inc/functions-style-script.php';
include_once 'inc/functions-acf.php';
include_once 'inc/functions-polylang.php';
include_once 'inc/functions-theme-setup.php';
include_once 'inc/functions-images.php';
include_once 'vendor/autoload.php';

// ======================================
// Functions Partial -- end
// ======================================

use Detection\MobileDetect;
add_theme_support( 'post-thumbnails' ); 

function detectDevice(){
    $detect = new MobileDetect();
    $isMobile = $detect->isMobile();
    $isTablet = $detect->isTablet();
    return  $isTablet;
}


function convertDate() {
    $postDate = get_the_date('m/d/y');
    $timeString = strtotime($postDate);
    $convertedDate = date('F d, Y', $timeString);
    return $convertedDate;
}