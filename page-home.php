<?php
/*
    Template Name: Home
*/
get_header();
?>
<main class="page-home">
    <?php
        get_template_part('template-parts/sections/home', 'banner');
        // get_template_part('template-parts/sections/home', 'portfolio');
        // get_template_part('template-parts/sections/home', 'features');
    ?>

    <section class="cb-screenshot" data-cursor="-inverse" id="showreel">
        <div class="cb-screenshot-preview" data-cursor-icon="play" data-modal-open="#modal-showreel">
            <div class="cb-screenshot-preview-media" >
                <video preload="auto" autoplay="" playsinline="" loop="" muted="">
                    <source src="<?php echo get_template_directory_uri()?> /assets/video/short.mp4" media="(min-width:768px)">
                    <source src="<?php echo get_template_directory_uri()?>/assets/video/short-sm.mp4">
                </video>
            </div>
        </div>
    </section>
    <div class="cb-modal cb-modal_box" id="modal-showreel">
        <div class="cb-modal_box-backdrop" data-modal-close data-cursor-icon="times">
        </div>
        <div class="cb-modal_box-dialog -full" data-modal-dialog="">
            <div class="cb-modal_box-embedded">
                <video autoplay muted loop>
                    <source src="<?php echo get_template_directory_uri()?> /assets/video/short.mp4" media="(min-width:1200px)">
                    <source src="<?php echo get_template_directory_uri()?>/assets/video/short-sm.mp4">
                </video>
            </div>
        </div>
    </div>

    <?php
        get_template_part('template-parts/sections/home', 'portfolio');
        get_template_part('template-parts/sections/home', 'features');
    ?>
    <section class="divider-new">
        <h1>Divider</h1>
        <div class="container">
            <div class="divider-container"></div>
        </div>
        <div class="footer-rounded-div" >
            <div class="rounded-div-wrap">
                <div class="rounded-div"></div>
            </div>
        </div>
    </section>
</main>
<?php get_footer(); ?>