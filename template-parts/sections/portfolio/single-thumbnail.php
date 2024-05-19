<section class="portfolio-thumbnail">
    <?php 
        $portfolioID=get_the_ID();
        $portFolioTitle=get_the_title();
        $portfolioThumbnail = get_field('portfolio_thumbnail',$portfolioID);
        if ($portfolioThumbnail) :
            $urlPortfolioThumbnail = $portfolioThumbnail['url'];
            $urlPortfolioThumbnailSmall =$portfolioThumbnail['sizes'][ 'thumbnail' ];
        else :
            $urlPortfolioThumbnail = get_template_directory_uri() . '/assets/images/blank-image.svg';
            $urlPortfolioThumbnailSmall = $urlPortfolioThumbnail;
        endif;
        $imageParams = array(
            'blockName' => 'portfolio-thumbnail',
            'containerClass'=>'image-parallax',
            'imgUrl' => $urlPortfolioThumbnail,
            'smallImageUrl' => $urlPortfolioThumbnailSmall,
            'imgTitle' => $portFolioTitle,
        );
        echo loadImage($imageParams)
    ?>
</section>