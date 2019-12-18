<?php
/**
 * The Updates routine for version 1.0.36
 *
 * @since      1.0.36
 * @package    RankMath
 * @subpackage RankMath\Updates
 * @author     Rank Math <support@rankmath.com>
 */

use RankMath\Helper;
use RankMath\Admin\Admin_Helper;

/**
 * Clear SEO Analysis result.
 */
function rank_math_1_0_36_reset_options() {
	delete_option( 'rank_math_connect_data' );
}
rank_math_1_0_36_reset_options();
