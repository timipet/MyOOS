<?php
/* ----------------------------------------------------------------------
   $Id: taxes.php 437 2013-06-22 15:33:30Z r23 $

   MyOOS [Shopsystem]
   http://www.oos-shop.de/

   Copyright (c) 2003 - 2015 by the MyOOS Development Team.
   ----------------------------------------------------------------------
   Based on:

   File: taxes.php,v 1.16 2002/03/16 00:20:11 hpdl
   ----------------------------------------------------------------------
   osCommerce, Open Source E-Commerce Solutions
   http://www.oscommerce.com

   Copyright (c) 2003 osCommerce
   ----------------------------------------------------------------------
   Released under the GNU General Public License
   ---------------------------------------------------------------------- */

$bActive = false;
if ($_SESSION['selected_box'] == 'taxes' ) {
	$bActive = true;
}

$aBlocks[] = array(
	'heading' => BOX_HEADING_LOCATION_AND_TAXES,
	'link' => oos_href_link_admin(basename($_SERVER['PHP_SELF']), oos_get_all_get_params(array('selected_box')) . 'selected_box=taxes'),
	'icon' => 'fa fa-globe',
	'active' => $bActive,
	'contents' => array(
		array(
			'title' => BOX_TAXES_COUNTRIES,
			'link' => oos_admin_files_boxes('countries', 'selected_box=taxes')
		),
		array(
			'title' => BOX_TAXES_ZONES,
			'link' => oos_admin_files_boxes('zones', 'selected_box=taxes')
		),
		array(
			'title' => BOX_TAXES_GEO_ZONES,
			'link' => oos_admin_files_boxes('geo_zones', 'selected_box=taxes')
		),
		array(
			'title' => BOX_TAXES_TAX_CLASSES,
			'link' =>  oos_admin_files_boxes('tax_classes', 'selected_box=taxes')
		),
		array(
			'title' => BOX_TAXES_TAX_RATES,
			'link' => oos_admin_files_boxes('tax_rates', 'selected_box=taxes')
		),	
	),
);

