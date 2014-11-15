<?php
/* ----------------------------------------------------------------------
   $Id: password_forgotten.php,v 1.1 2007/06/07 17:11:51 r23 Exp $

   MyOOS [Shopsystem]
   http://www.oos-shop.de/

   Copyright (c) 2003 - 2014 by the MyOOS Development Team.
   ----------------------------------------------------------------------
   Based on:

   File: password_forgotten.php,v 1.48 2003/02/13 03:10:55 hpdl 
   ----------------------------------------------------------------------
   osCommerce, Open Source E-Commerce Solutions
   http://www.oscommerce.com

   Copyright (c) 2003 osCommerce
   ----------------------------------------------------------------------
   Released under the GNU General Public License
   ---------------------------------------------------------------------- */

  /** ensure this file is being included by a parent file */
  defined( 'OOS_VALID_MOD' ) or die( 'Direct Access to this location is not allowed.' );

  require_once MYOOS_INCLUDE_PATH . '/includes/languages/' . $sLanguage . '/user_password_forgotten.php';

  if (isset($_GET['action']) && ($_GET['action'] == 'process')) {
    $customerstable = $oostable['customers'];
    $check_customer_sql = "SELECT customers_firstname, customers_lastname, customers_password, customers_id
                           FROM $customerstable
                           WHERE customers_email_address = '" . oos_db_input($email_address) . "'";
    $check_customer_result = $dbconn->Execute($check_customer_sql);

    if ($check_customer_result->RecordCount()) {
      $check_customer = $check_customer_result->fields;

      // Crypted password mods - create a new password, update the database and mail it to them
      $newpass = oos_create_random_value(ENTRY_PASSWORD_MIN_LENGTH);
      $crypted_password = oos_encrypt_password($newpass);

      $customerstable = $oostable['customers'];
      $dbconn->Execute("UPDATE $customerstable
                        SET customers_password = '" . oos_db_input($crypted_password) . "'
                        WHERE customers_id = '" . $check_customer['customers_id'] . "'");

      oos_mail($check_customer['customers_firstname'] . " " . $check_customer['customers_lastname'], $email_address, $aLang['email_password_reminder_subject'], nl2br(sprintf($aLang['email_password_reminder_body'], $newpass)), STORE_OWNER, STORE_OWNER_EMAIL_ADDRESS);
      oos_redirect(oos_href_link($aContents['login'], 'info_message=' . urlencode($aLang['text_password_sent']), 'SSL', true, false));
    } else {
      oos_redirect(oos_href_link($aContents['password_forgotten'], 'email=nonexistent', 'SSL'));
    }
  } else {

    // links breadcrumb
    $oBreadcrumb->add($aLang['navbar_title_1'], oos_href_link($aContents['login'], '', 'SSL'));
    $oBreadcrumb->add($aLang['navbar_title_2'], oos_href_link($aContents['password_forgotten'], '', 'SSL'));

    $aOption['template_main'] = $sTheme . '/modules/user_password_forgotten.html';
    $aOption['page_heading'] = $sTheme . '/heading/page_heading.html';

    $nPageType = OOS_PAGE_TYPE_SERVICE;

    require_once MYOOS_INCLUDE_PATH . '/includes/oos_system.php';
    if (!isset($option)) {
      require_once MYOOS_INCLUDE_PATH . '/includes/info_message.php';
      require_once MYOOS_INCLUDE_PATH . '/includes/oos_blocks.php';
    }

    // assign Smarty variables;
    $smarty->assign(
        array(
            'oos_breadcrumb'    => $oBreadcrumb->trail(BREADCRUMB_SEPARATOR),
            'oos_heading_title' => $aLang['heading_title'],
            'oos_heading_image' => 'password_forgotten.gif'
        )
    );

    $smarty->assign('oosPageHeading', $smarty->fetch($aOption['page_heading']));
    $smarty->assign('contents', $smarty->fetch($aOption['template_main']));

    // display the template
    require_once MYOOS_INCLUDE_PATH . '/includes/oos_display.php';

  }