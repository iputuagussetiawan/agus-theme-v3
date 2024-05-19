<?php
get_header();
?>
<main class="single-portfolio" data-barba="container" data-barba-namespace="single-portfolio">
    <?php
        get_template_part('template-parts/sections/portfolio/single', 'header');
        get_template_part('template-parts/sections/portfolio/single', 'thumbnail');
        // get_template_part('template-parts/sections/home', 'portfolio');
        //get_template_part('template-parts/sections/home', 'features');
    ?>
</main>
<?php get_footer(); ?>