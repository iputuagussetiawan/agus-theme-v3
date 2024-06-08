<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit7863a65ffc9c6ecc64ee4c81070fb4e8
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'Psr\\SimpleCache\\' => 16,
        ),
        'D' => 
        array (
            'Detection\\' => 10,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Psr\\SimpleCache\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/simple-cache/src',
        ),
        'Detection\\' => 
        array (
            0 => __DIR__ . '/..' . '/mobiledetect/mobiledetectlib/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit7863a65ffc9c6ecc64ee4c81070fb4e8::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit7863a65ffc9c6ecc64ee4c81070fb4e8::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit7863a65ffc9c6ecc64ee4c81070fb4e8::$classMap;

        }, null, ClassLoader::class);
    }
}
