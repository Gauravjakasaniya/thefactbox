<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '$FjPM))!Z3jo/q+W)GFw%}Uc,lbssxJPG;tph{1p>^6NBFo5F<9@^jjxG,PI(f(q' );
define( 'SECURE_AUTH_KEY',  'F8:4c/y.. 6Uq&!DDI9)Q1ch#$INoRekf0Hm-/V;?*|t= _wNMRW1SQeFDv+=s&(' );
define( 'LOGGED_IN_KEY',    'WOTdEb@e]#V))z!];iS{545kOR)0Ybek5 8FL6R9;?!Qc]7*UM?v1jh(,J*IoZkk' );
define( 'NONCE_KEY',        '}<N?u!(BT*Kb9!ig3+x[RkKiq?r0yzhXROglkWs#ycqH/P_Ws4GMT*1:GTnSyhd;' );
define( 'AUTH_SALT',        'E;<7])[::<! 0}CH7@.Pts$PX>l.%qQd)FTb%C2$~;]?xF`GvpUcSR}+bBg:Xs+=' );
define( 'SECURE_AUTH_SALT', '4~5jShXBWG9kgm])Uh#Xrj?.A5,BWz#[b;@vO{yK&bqmOa?LRQhuzD*P3w&w1|EO' );
define( 'LOGGED_IN_SALT',   'sEWhdG^Qy+t;_m}LnG@N8pEm>Asr&L@@EcSE_zJ(^x-R_]g4Dg#UWAQ&g87%@3.(' );
define( 'NONCE_SALT',       '8@v~h1=D=&sarZFfQnoj#t+926#>cS<a@TUlUVa._Ys_@<),,PF]0P/%X|]vKjhg' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */

@ini_set( 'upload_max_filesize' , '128M' );
@ini_set( 'post_max_size', '128M');
@ini_set( 'memory_limit', '256M' );
@ini_set( 'max_execution_time', '300' );
@ini_set( 'max_input_time', '300' );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
