<?php
/*
    Template Name: Home
*/
get_header();
?>
<main class="page-home">
    <?php
        get_template_part('template-parts/sections/home', 'banner');
        get_template_part('template-parts/sections/home', 'features');
    ?>
</main>
<?php get_footer(); ?>