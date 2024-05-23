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

<body <?php body_class(); ?> data-barba="wrapper">
    <div id="barba-container" data-barba="container">
    <?php wp_body_open(); ?>
    <div class="load-container">
        <div class="loading-screen"></div>
    </div>
    <nav class="cb-menu custom-menu">
        <div class="cb-menu-logo">
            <?php
                if(function_exists('the_custom_logo')) {
                    the_custom_logo();
                }
            ?>
        </div>
        <ul class="main-menu" data-cursor="-opaque">
            <li class="main-menu__item">
                <a href="" class="main-menu__link">
                    Home
                </a>
            </li>
            <li class="main-menu__item">
                <a href="" class="main-menu__link">
                    About me
                </a>
            </li>
            <li class="main-menu__item">
                <a href="" class="main-menu__link">
                    What we do
                </a>
            </li>
        </ul>
        <div class="nav-search">
            <div class="nav-search__icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </div>
            <div class="nav-search__input-container">
                <input class="form-control nav-search__input" type="search" placeholder="Search">
            </div>
        </div>
        <div class="burger-menu">
            <button class="burger-menu__button" aria-label="Menu" tabindex="0" data-cursor="-menu" data-cursor-stick="">
                <span class="burger-menu__line"></span>
                <span class="burger-menu__line"></span>
            </button>
        </div>
        <div class="menu-box">
            <div class="menu-box__backdrop"></div>
            <div class="menu-box__fill" ></div>
            <div class="menu-box__content">
                <div class="menu-box__body">
                    <div class="menu-box__container">
                        <div class="menu-box__grid">
                            <div class="-left menu-box__col">
                                <div class="menu-box__title">Social</div>
                                <div class="menu-box__socials" data-cursor="-opaque">
                                    <a class="menu-box__social" href="" target="_blank" rel="noopener"><em><span data-text="LinkedIn">LinkedIn</span></em></a>
                                    <a class="menu-box__social" href="" target="_blank" rel="noopener"><em><span data-text="Behance">Behance</span></em></a>
                                    <a class="menu-box__social" href="" target="_blank" rel="noopener"><em><span data-text="Dribbble">Dribbble</span></em></a>
                                    <a class="menu-box__social" href="" target="_blank" rel="noopener"><em><span data-text="Instagram">Instagram</span></em></a>
                                    <a class="menu-box__social" href="" target="_blank" rel="noopener"><em><span data-text="YouTube">YouTube</span></em></a>
                                    <a class="menu-box__social" href="" target="_blank" rel="noopener"><em><span data-text="Twitter">Twitter</span></em></a>
                                    <a class="menu-box__social" href="" target="_blank" rel="noopener"><em><span data-text="GitHub">GitHub</span></em></a>
                                </div>
                            </div>
                            <div class="-right menu-box__col">
                                <div class="menu-box__title">Menu</div>
                                <div class="menu-box__navs" role="navigation" data-cursor="-opaque">
                                    <div class="menu-box__nav"><a class="menu-box__nav-link" href="http://localhost/iputuagussetiawan.com/what-we-do/"><em><span data-text="What we do">What we do</span></em></a></div>
                                    <div class="menu-box__nav"><a class="menu-box__nav-link"  href=""><em><span data-text="Projects">Projects</span></em></a></div>
                                    <div class="menu-box__nav"><a class="menu-box__nav-link"  href=""><em><span data-text="Company">Company</span></em></a></div>
                                    <div class="menu-box__nav"><a class="menu-box__nav-link"  href=""><em><span data-text="Tutorials">Tutorials</span></em></a></div>
                                    <div class="menu-box__nav"><a class="menu-box__nav-link"  href=""><em><span data-text="Contacts">Contacts</span></em></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="menu-box__footer">
                    <div class="menu-box__container">
                        <div class="-sm menu-box__title">Get in touch</div>
                        <div class="menu-box__mail">
                            <a class="menu-box__mail-link" href="mailto:agussetiawaniputu@gmail.com"><span>agussetiawaniputu@gmail.com</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>


    <?php //show_debug_helper(); ?>