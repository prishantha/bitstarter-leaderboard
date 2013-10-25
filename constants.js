/*
   Note that COINBASE_PREORDER_DATA_CODE is the button code from
   coinbase.com/merchant_tools, used for the Preorder Button.  This is
   different from the COINBASE_API key in .env file, which is from
   coinbase.com/account/integrations

   The button code can be shown publicly, while the API key should only be
   included in a .env file and never shown publicly.  The former allows
   people to send you money, the latter allows people to send money from
   your account.

   For FUNDING_UNIT_SYMBOL, we use mBTC to represent 1/1000 of a Bitcoin and
   FUNDING_SI_SCALE for the corresponding multiplier.

   Note that for FUNDING_UNIT_SYMBOL, in theory we could use the Thai Baht
   symbol, but then we'd have to change the font.  If you use another
   payment backend, you can substitute "$" for the dollar or use one of the
   other currency symbols.

    - https://en.bitcoin.it/wiki/Bitcoin_symbol#Existing_Unicode_symbol
    - http://webdesign.about.com/od/localization/l/blhtmlcodes-cur.htm#codes
*/
var Constants = {
  APP_NAME: "Prish", 
  APP_TITLE: "The PrishFunder",
  FUNDING_TARGET: 10.00,
  FUNDING_UNIT_SYMBOL: "mBTC",
  FUNDING_SI_SCALE: 1000,
  FUNDING_END_DATE: new Date("November 20, 2013"),
  TABS: '<li class="active"><a href="/">Home</a></li><li><a href="/about">About</a></li><li><a href="/orders">Orders</a></li><li><a href="/contact">Contact</a></li>',
  PRODUCT_NAME: "The Prish Fund",
  PRODUCT_SHORT_DESCRIPTION: "Just because.",
  ABOUT_DESC: "[About Page Filler Txt]",
  TWITTER_USERNAME: "nodejs",
  TWITTER_TWEET: "I supported the Prish Fund. And you can to!.",
  COINBASE_PREORDER_DATA_CODE: "c28a2b9238630eacf3c3e3688ce487af",
  days_left: function() {
      return Math.max(Math.ceil((this.FUNDING_END_DATE - new Date()) / (1000*60*60*24)), 0);
  }
};

module.exports = Constants;
