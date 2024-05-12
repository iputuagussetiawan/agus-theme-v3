<?php
/*
    Template Name: Home
*/
get_header();
?>
<main class="page-home" data-barba="container" data-barba-namespace="home">
    <?php
        get_template_part('template-parts/sections/home', 'banner');
        get_template_part('template-parts/sections/home', 'portfolio');
        //get_template_part('template-parts/sections/home', 'features');
    ?>
</main>
<?php get_footer(); ?>