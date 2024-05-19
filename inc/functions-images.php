<?php
function loadImage($params = array()) {
    $blockName = isset($params['blockName']) ? $params['blockName'] : 'tmdr';
    $isLazyLoad = isset($params['isLazyLoad']) ? $params['isLazyLoad'] : true;
    $imgUrl = isset($params['imgUrl']) ? $params['imgUrl'] : '';
    $smallImageUrl = isset($params['smallImageUrl']) ? $params['smallImageUrl'] : '';
    $imgTitle = isset($params['imgTitle']) ? $params['imgTitle'] : '';
    $imgContainerAttr = isset($params['imgContainerAttr']) ? $params['imgContainerAttr'] : '';
    $imgAttr = isset($params['imgAttr']) ? $params['imgAttr'] : '';
    $containerClass = isset($params['containerClass']) ? $params['containerClass'] : '';
    $imageTemplate = '';
    if( $isLazyLoad ){
        $imageTemplate .= '<div class="' . $blockName . '__image-container '.$containerClass.'"  ' . $imgContainerAttr . '><img data-src="' . $imgUrl . '" alt="' . $imgTitle . '" src="' . $smallImageUrl . '" class="' . $blockName . '__image lazy-img ratio-item" ' . $imgAttr . '></div>';
    }else{
        $imageTemplate .= '<div class="' . $blockName . '__image-container '.$containerClass.'" ' . $imgContainerAttr . '><img alt="' . $imgTitle . '" src="' . $imgUrl . '" class="' . $blockName . '__image  ratio-item" ' . $imgAttr . '></div>';
    }
    return $imageTemplate;
}

add_action('init', 'loadImage');