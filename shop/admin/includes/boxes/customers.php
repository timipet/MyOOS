<?php
/* ----------------------------------------------------------------------
   $Id: customers.php 437 2013-06-22 15:33:30Z r23 $

   MyOOS [Shopsystem]
   http://www.oos-shop.de/

   Copyright (c) 2003 - 2015 by the MyOOS Development Team.
   ----------------------------------------------------------------------
   Based on:

   File: customers.php,v 1.15 2002/03/16 00:20:11 hpdl
   ----------------------------------------------------------------------
   osCommerce, Open Source E-Commerce Solutions
   http://www.oscommerce.com

   Copyright (c) 2003 osCommerce
   ----------------------------------------------------------------------
   Released under the GNU General Public License
   ---------------------------------------------------------------------- */

   
   
$aBlocks[] = array(
	'heading' => BOX_HEADING_CUSTOMERS,
	'link' => oos_href_link_admin(basename($_SERVER['PHP_SELF']), oos_get_all_get_params(array('selected_box')) . 'selected_box=customers'),
	'icon' => 'fa fa-users',
	'contents' => array(
		array(
			'title' => BOX_CUSTOMERS_CUSTOMERS,
			'link' => oos_admin_files_boxes('customers', 'selected_box=customers')
		),
		array(
			'title' => BOX_CUSTOMERS_ORDERS,
			'link' => oos_admin_files_boxes('orders', 'selected_box=customers')
		),
		array(
			'title' => BOX_LOCALIZATION_CUSTOMERS_STATUS,
			'link' => oos_admin_files_boxes('customers_status','selected_box=customers')
		),
		array(
			'title' => BOX_CUSTOMERS_CUSTOMERS,
			'link' => oos_admin_files_boxes('orders_status', 'selected_box=customers')
		),
		array(
			'title' => BOX_CUSTOMERS_ORDERS,
			'link' => oos_admin_files_boxes('campaigns', 'selected_box=customers')
		),
		array(
			'title' => BOX_LOCALIZATION_CUSTOMERS_STATUS,
			'link' => oos_admin_files_boxes('manual_loging', 'selected_box=customers')
		),
	),
);
