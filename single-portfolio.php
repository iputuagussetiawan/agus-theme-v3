<?php
get_header();
?>
<main class="single-portfolio" data-barba="container" data-barba-namespace="single-portfolio">

    <section class="text-anime">
        <div class="container">
            <h1>Text Anime</h1>
            <div class="heading_wrap">
                <h2 class="split-lines">
                    We Create Best Website For You with authentic creative solution, with a core mission in building strong and provocative relationships between brands
                </h2>
            </div>
        </div>
    </section>
    <?php
        get_template_part('template-parts/sections/portfolio/single', 'header');
        get_template_part('template-parts/sections/portfolio/single', 'thumbnail');
        if( have_rows('portfolio_flexible_content') ):
            while ( have_rows('portfolio_flexible_content') ) : the_row();
                if( get_row_layout() == 'image_full' ):
                    $image_full_inside = get_sub_field('image_full_inside');
                    $imageUrl=$image_full_inside['url'];
                    $imageFullTitle='From Image Full';
                    get_template_part('template-parts/sections/portfolio/single', 'imageFull',array(
                        'image-url' => $imageUrl ,
                        'image-small' => $imageUrl ,
                        'title' => $imageFullTitle ,
                    ));
                elseif( get_row_layout() == 'content_listing' ): 
                    $contentListingTitle = get_sub_field('content_listing_title');
                    $contentListingSubtitle = get_sub_field('content_listing_subtitle');
                    $contentListingInfo = get_sub_field('content_listing_info');
                    $contentListingData = get_sub_field('content_listing_data');
                    
                    get_template_part('template-parts/sections/portfolio/single', 'contentListing',array(
                        'title' => $contentListingTitle,
                        'subtitle' => $contentListingSubtitle,
                        'description'=>$contentListingInfo,
                        'listing'=> $contentListingData
                    ));
                elseif( get_row_layout() == 'video_interactive' ): 
                    $videoInteractiveTitle = get_sub_field('video_interactive_title');
                    $videoInteractiveSubtitle = get_sub_field('video_interactive_subtitle');
                    $videoInteractiveInfo = get_sub_field('video_interactive_info');
                    $videoInteractiveFile = get_sub_field('video_interactive_file');
                    
                    get_template_part('template-parts/sections/portfolio/single', 'videoInteractive',array(
                        'title' => $videoInteractiveTitle,
                        'subtitle' => $videoInteractiveSubtitle,
                        'description'=>$videoInteractiveInfo,
                        'video'=> $videoInteractiveFile
                    ));
                endif;
            endwhile;
        endif;
    ?>
</main>
<?php get_footer(); ?>