<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInit7863a65ffc9c6ecc64ee4c81070fb4e8
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        require __DIR__ . '/platform_check.php';

        spl_autoload_register(array('ComposerAutoloaderInit7863a65ffc9c6ecc64ee4c81070fb4e8', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInit7863a65ffc9c6ecc64ee4c81070fb4e8', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInit7863a65ffc9c6ecc64ee4c81070fb4e8::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
