<?php
    $PortfolioContentListingTitle=isset($args['title']) ? $args['title'] : null ;
    $PortfolioContentListingSubtitle=isset($args['subtitle']) ? $args['subtitle'] : null ;
    $PortfolioContentListingDescription=isset($args['description']) ? $args['description'] : null ;
    $PortfolioContentListingListing=isset($args['listing']) ? $args['listing'] : null ;
?>
<section class="content-listing">
    <div class="container">
        <div class="content-listing__header">
            <h2 class="content-listing__title">
                <?php echo  $PortfolioContentListingTitle?>
            </h2>
        </div>
        <div class="content-listing__info-container">
            <h3 class="content-listing__subtitle"><?php echo  $PortfolioContentListingSubtitle?></h3>
            <div class="content-listing__info">
                <?php echo $PortfolioContentListingDescription?>
            </div>
        </div>
        <div class="content-listing__grid">
            <?php foreach ($PortfolioContentListingListing as $item): 
                $cardPortfolioListingTitle=$item['content_listing_item_title'];
                $cardPortfolioListingImageUrl=$item['content_listing_item_image']['url'];
            ?>
                <div class="card-portfolioListing">
                    <?php 
                        $imageParams = array(
                            'blockName' => 'card-portfolioListing',
                            'containerClass'=>'image-parallax',
                            'imgUrl' => $cardPortfolioListingImageUrl,
                            'smallImageUrl' => $cardPortfolioListingImageUrl,
                            'imgTitle' => $cardPortfolioListingTitle,
                        );
                        echo loadImage($imageParams)
                    ?>
                    <div class="card-portfolioListing__info-container">
                        <h3 class="card-portfolioListing__title">
                            <?php echo  $cardPortfolioListingTitle ?>
                        </h3>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>