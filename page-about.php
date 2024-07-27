<?php
/*
    Template Name: About
*/
get_header();
?>
<main class="page-about">
    <section class="about-header">
        <div class="container">
            <div class="about-header__inner">
                <h1 class="about-header__title">
                    Helping brands thrive <br>
                    in the digital world
                </h1>
            </div>
        </div>
    </section>

    <section class="my-profile">
        <div class="container">
            <div class="my-profile__inner">
                <div class="my-profile__left">
                    I help  companies from all over the world with tailor-made solutions. With each project, i push my work to new horizons, always putting quality first.
                </div>
                <div class="my-profile__right">
                    <div class="my-profile__image-container image-parallax">
                        <img src="<?php echo get_template_directory_uri()."/assets/images/page/about/DSC07312-2.jpg"?>" alt="" class="my-profile__image ratio-item">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="my-work">
        <div class="container">
            <h2 class="my-work__title">
                I can help you with
            </h2>

            <div class="my-work__grid">
                <div class="card-work">
                    <div class="card-work__number">
                        01
                    </div>
                    <div class="card-work__info-container">
                        <h3 class="card-work__title">
                            Design
                        </h3>
                        <div class="card-work__info">
                            With a solid track record in designing websites, i deliver strong and user-friendly digital design. (Since 2024 only in combination with development)
                        </div>
                    </div>
                </div>

                <div class="card-work">
                    <div class="card-work__number">
                        02
                    </div>
                    <div class="card-work__info-container">
                        <h3 class="card-work__title">
                            Development
                        </h3>
                        <div class="card-work__info">
                            With a solid track record in designing websites, i deliver strong and user-friendly digital design. (Since 2024 only in combination with development)
                        </div>
                    </div>
                </div>

                <div class="card-work">
                    <div class="card-work__number">
                        03
                    </div>
                    <div class="card-work__info-container">
                        <h3 class="card-work__title">
                            The full package
                        </h3>
                        <div class="card-work__info">
                            With a solid track record in designing websites, i deliver strong and user-friendly digital design. (Since 2024 only in combination with development)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="my-skill">
        <div class="my-skill__inner">
            <div class="wrapperRollingText">
                <div class="rollingText text">
                    Ultra high-performance, professional-grade animation for the modern web
                </div>
            </div>
    
            <div class="wrapperRollingText02">
                <div class="rollingText02 text">
                    <span>• GreenSock •</span> Ultra high-performance, professional-grade animation for the modern web
                </div>
            </div>  
        </div>
    </section>
</main>
<?php get_footer(); ?>