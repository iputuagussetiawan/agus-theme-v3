<section class="portfolio section-padding">
    <div class="container">
        <div class="portfolio__header">
            <h2 class="section-title">
                Portfolio
            </h2>
    
            <div class="section-description">Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.</div>
        </div>

        <div class="portfolio__inner">
            <div class="text-center" data-aos="fade-up" data-aos-delay="300">
                <ul class="nav nav-pills custom-tabs mb-3 justify-content-center" id="pills-tab" role="tablist">
                    <?php
                    $args = array(
                        'post_type' => 'portfolio',
                        'taxonomy'  => 'portfolio-category',
                        'hide_empty' => true,
                    );
                    $categories = get_terms($args);
                    $iMenuTab = 0;
                    $menuClass='';
                    foreach ($categories as $category) {
                        if($iMenuTab==0){
                            $menuClass='active';
                        }else{
                            $menuClass='';
                        }

                            echo '<li class="nav-item" role="presentation">
                                    <button class="nav-link '.$menuClass.'" id="pills-' . $category->term_id . '-tab" data-bs-toggle="pill" data-bs-target="#pills-' . $category->term_id . '" type="button" role="tab">  <span class="nav-link__text" >' . $category->name . ' <span class="nav-link__badge">' . $category->count . '</span></span></button>
                                </li>';
                        
                        $iMenuTab++;
                    }
                    ?>
                </ul>
            </div>
            <div class="tab-content" id="pills-tabContent" data-aos="fade-up" data-aos-delay="400">
                <?php
                $iContentTab = 0;
                $contentTabClass='';
                foreach ($categories as $category) :
                    if($iContentTab==0){
                        $contentTabClass='show active';
                    }else{
                        $contentTabClass='';
                    }
                ?>
                    <div class="tab-pane fade <?php echo $contentTabClass; ?>" id="pills-<?php echo  $category->term_id ?>" role="tabpanel" aria-labelledby="pills-<?php echo  $category->term_id ?>-tab">
                        <div class="wrapper-masonry">    
                            <div id="masonry<?php echo $iContentTab?>">
                                    <?php
                                    $Portfolios = new WP_Query(array(
                                        'posts_per_page' => -1,
                                        'post_type' => 'portfolio',
                                        'tax_query' => array(
                                            array(
                                                'taxonomy' => 'portfolio-category',
                                                'terms' =>  $category->term_id,
                                                'field' => 'term_id',
                                            )
                                        ),
                                        'order' => 'ASC'
                                    ));
                                    $accourdionNumber=0;
                                    if ($Portfolios->have_posts()) :
                                        while ($Portfolios->have_posts()) :
                                            $Portfolios->the_post();
                                            $portfoliosID= get_the_ID();
                                            $portfolioLink = get_permalink( $portfoliosID );
                                            $portfolioTitle = get_the_title($portfoliosID);
                                            $portfolioContent = get_the_content($portfoliosID);
                                    ?>
                                        <div class="card-portfolio">
                                            <div class="card-portfolio__image-container">
                                                <img src="<?php echo get_the_post_thumbnail_url($portfoliosID,'full')?>" alt="portfolio" class="card-portfolio__image">
                                            </div>
                                            <div class="card-portfolio__info-container">
                                                <h3 class="card-portfolio__title">
                                                    <?php echo $portfolioTitle?>
                                                </h3>
                                                <div class="card-portfolio__info">
                                                    <?php echo $portfolioContent?>
                                                </div>
                                            </div>
                                            <div class="card-portfolio__action">
                                                <a href="" class="card-portfolio__btn">
                                                    <svg class="card-portfolio__btn-icon"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
                                                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                                                        <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
                                                    </svg>
                                                    <span class="card-portfolio__btn-badge">30</span>
                                                </a>
                                                <a href="" class="card-portfolio__btn">
                                                    <svg class="card-portfolio__btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    <?php 
                                        $accourdionNumber++;
                                        endwhile;
                                        wp_reset_postdata();
                                    else :
                                    ?>
                                        <h3 class="text-center">Data Not Found</h3>
                                    <?php
                                    endif;
                                    ?>
                                </div>
                        </div>
                    </div>
                <?php
                    $iContentTab++;
                endforeach;
                ?>
            </div>
        </div>
        <div class="portfolio__action">
            <a class="btn-primary-outline" href="">
                <span class="btn-primary-outline__border"></span>
                <span class="btn-primary-outline__ripple">
                    <span></span>
                </span>
                <span class="btn-primary-outline__title">
                    <span data-text="View All">View All</span>
                </span>
            </a>
        </div>
    </div>
</section>