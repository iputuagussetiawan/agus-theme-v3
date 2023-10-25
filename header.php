<!DOCTYPE html>
<html lang="<?php echo getCurrentLang(); ?>">
<head>
    
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name=”format-detection” content=”telephone=no”>
    <meta name="theme-color" content="#10AF13">
    
    <?php wp_head(); ?>
</head>

<body>
    <?php wp_body_open(); ?>
    <nav class="cb-menu">
        <div class="cb-menu-logo">
            <a href="" aria-label="Cuberto" tabindex="-1">
                <!-- <svg class="cb-svgsprite -logo">
                    <use xlink:href="/assets/sprites/svgsprites.svg#logo"></use>
                </svg> -->
            </a>
        </div>
        <div class="burger-menu">
            <button class="burger-menu__button" aria-label="Menu" tabindex="0" data-cursor="-menu" data-cursor-stick="">
                <span class="burger-menu__line"></span>
                <span class="burger-menu__line"></span>
            </button>
        </div>
        <div class="cb-menu-box menu-box">
            <div class="cb-menu-backdrop menu-box__backdrop"></div>
            <div class="cb-menu-fill menu-box__fill" ></div>
            <div class="cb-menu-content menu-box__content">
                <div class="cb-menu-body menu-box__body">
                    <div class="cb-menu-container menu-box__container">
                        <div class="cb-menu-grid menu-box__grid">
                            <div class="cb-menu-grid-col -left menu-box__col">
                                <div class="cb-menu-title menu-box__title">Social</div>
                                <div class="cb-menu-socials menu-box__socials" data-cursor="-opaque">
                                    <a class="cb-menu-social menu-box__social" href="" target="_blank" rel="noopener"><em><span data-text="LinkedIn">LinkedIn</span></em></a>
                                    <a class="cb-menu-social menu-box__social" href="" target="_blank" rel="noopener"><em><span data-text="Behance">Behance</span></em></a>
                                    <a class="cb-menu-social menu-box__social" href="" target="_blank" rel="noopener"><em><span data-text="Dribbble">Dribbble</span></em></a>
                                    <a class="cb-menu-social menu-box__social" href="" target="_blank" rel="noopener"><em><span data-text="Instagram">Instagram</span></em></a>
                                    <a class="cb-menu-social menu-box__social" href="" target="_blank" rel="noopener"><em><span data-text="YouTube">YouTube</span></em></a>
                                    <a class="cb-menu-social menu-box__social" href="" target="_blank" rel="noopener"><em><span data-text="Twitter">Twitter</span></em></a>
                                    <a class="cb-menu-social menu-box__social" href="" target="_blank" rel="noopener"><em><span data-text="GitHub">GitHub</span></em></a>
                                </div>
                            </div>
                            <div class="cb-menu-grid-col -right menu-box__col">
                                <div class="cb-menu-title menu-box__title">Menu</div>
                                <div class="cb-menu-navs menu-box__navs" role="navigation" data-cursor="-opaque">
                                    <div class="cb-menu-nav menu-box__nav"><a class="menu-box__nav-link" href=""><em><span data-text="What we do">What we do</span></em></a></div>
                                    <div class="cb-menu-nav menu-box__nav"><a class="menu-box__nav-link"  href=""><em><span data-text="Projects">Projects</span></em></a></div>
                                    <div class="cb-menu-nav menu-box__nav"><a class="menu-box__nav-link"  href=""><em><span data-text="Company">Company</span></em></a></div>
                                    <div class="cb-menu-nav menu-box__nav"><a class="menu-box__nav-link"  href=""><em><span data-text="Tutorials">Tutorials</span></em></a></div>
                                    <div class="cb-menu-nav menu-box__nav"><a class="menu-box__nav-link"  href=""><em><span data-text="Contacts">Contacts</span></em></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cb-menu-footer menu-box__footer">
                    <div class="cb-menu-container menu-box__container">
                        <div class="cb-menu-title -sm menu-box__title">Get in touch</div>
                        <div class="cb-menu-mail menu-box__mail">
                            <a class="cb-menu-mail menu-box__mail-link" href="mailto:agussetiawaniputu@gmail.com"><span>agussetiawaniputu@gmail.com</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>


    <?php //show_debug_helper(); ?>