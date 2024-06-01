<?php
    $PortfolioImageFullImageUrl=isset($args['image-url']) ? $args['image-url'] : null ;
    $PortfolioImageFullImageUrlSmall=isset($args['image-small']) ? $args['image-small'] : null ;
    $PortfolioImageFullTitle=isset($args['title']) ? $args['title'] : null ;
?>
<section class="portfolio-imageFull">
    <h2 class="portfolio-imageFull__title">
        <?php echo $PortfolioImageFullTitle;?>
    </h2>
    <?php 
        $imageParams = array(
            'blockName' => 'portfolio-imageFull',
            'containerClass'=>'image-parallax',
            'imgUrl' => $PortfolioImageFullImageUrl,
            'smallImageUrl' => $PortfolioImageFullImageUrlSmall,
            'imgTitle' => $PortfolioImageFullTitle,
        );
        echo loadImage($imageParams)
    ?>
</section>