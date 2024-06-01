<?php
    $videoInteractiveTitle=isset($args['title']) ? $args['title'] : null ;
    $videoInteractiveSubtitle=isset($args['subtitle']) ? $args['subtitle'] : null ;
    $videoInteractiveDescription=isset($args['description']) ? $args['description'] : null ;
    $videoInteractiveVideo=isset($args['video']) ? $args['video'] : null ;
?>
<section class="video-interactive">
    <div class="container">
        <div class="video-interactive__header">
            <h2 class="video-interactive__title">
                <?php echo  $videoInteractiveTitle?>
            </h2>
        </div>
        <div class="video-interactive__info-container">
            <h3 class="video-interactive__subtitle"><?php echo  $videoInteractiveSubtitle?></h3>
            <div class="video-interactive__info">
                <?php echo $videoInteractiveDescription?>
            </div>
        </div>
        <div class="video-interactive__inner">
            <div class="video-interactive__video-container">
                <video autoplay muted loop playsinline id="banner-video" class="video-interactive__video">
                    <source src="//cdn.cuberto.com/cb/projects/riyadh/screenshot/2.mp4" type="video/mp4">
                </video>    
            </div>
        </div>
    </div>
</section>