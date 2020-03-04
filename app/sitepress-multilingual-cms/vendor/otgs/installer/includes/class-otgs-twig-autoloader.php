<?php

class OTGS_Twig_Autoloader {

	const PATH_TO_TWIG = '/../../twig/twig/src/';
	const PATH_TO_TWIG_LEGACY = '/../../twig/twig/lib/';

	/**
	 * @param bool $prepend
	 */
	public static function register( $prepend = false ) {
		if ( PHP_VERSION_ID < 50300 ) {
			spl_autoload_register( array( __CLASS__, 'autoload' ) );
		} else {
			spl_autoload_register( array( __CLASS__, 'autoload' ), true, $prepend );
		}

	}

	/**
	 * @param string $class
	 */
	public static function autoload( $class ) {
		if ( 0 !== strpos( $class, 'Twig' ) ) {
			return;
		}

		$result = self::require_class_using_namespace( $class );
		if ( false === $result ) {
			self::require_class_from_legacy_code( $class );
		}
	}

	/**
	 * @param string $class
	 *
	 * @return bool
	 */
	private static function require_class_using_namespace( $class ) {
		return self::require_file_by_classname(
			self::filter_class_with_namespace( $class ),
			self::PATH_TO_TWIG
		);
	}

	/**
	 * @param string $class
	 *
	 * @return string
	 */
	private static function filter_class_with_namespace( $class ) {
		return str_replace( array( 'Twig\\', '\\' ), array( '', '/' ), $class );
	}

	/**
	 * @param string $class
	 *
	 * @return bool
	 */
	private static function require_class_from_legacy_code( $class ) {
		return self::require_file_by_classname(
			$class,
			self::PATH_TO_TWIG_LEGACY
		);
	}

	/**
	 * @param string $class
	 * @param string $twig_path
	 *
	 * @return bool
	 */
	private static function require_file_by_classname( $class, $twig_path ) {
		$file = self::get_file_path( $twig_path, $class );
		if ( is_file( $file ) ) {
			require $file;

			return true;
		}

		return false;
	}

	/**
	 * @param string $twig_path
	 * @param string $class
	 *
	 * @return string
	 */
	private static function get_file_path( $twig_path, $class ) {
		$parsed_class = str_replace( array( '_', "\0" ), array( '/', '' ), $class );
		return WP_Installer()->plugin_path() . $twig_path . $parsed_class . '.php';
	}
}
