<?php
/*
    Template Name: Home
*/
get_header();
?>
<main class="page-home">
    <?php
        get_template_part('template-parts/sections/home', 'banner');
        get_template_part('template-parts/sections/home', 'portfolio');
        get_template_part('template-parts/sections/home', 'features');
    ?>

    <section class="divider-new">
        <h1>Divider</h1>
        <div class="container">
            <div class="divider-container"></div>
        </div>
    </section>
</main>
<?php get_footer(); ?>