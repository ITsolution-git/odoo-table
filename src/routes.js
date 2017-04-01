export default {
  product_list: {
    initialRoute: true,

    title: 'Snack Impact',
    component: require('./scenes/ProductListView').default,

    children: {
      barcode_scanner_view: {
        title: 'SCAN ITEM BARCODE',
        component: require('./scenes/BarcodeScannerView').default,
      },
      login_view: {
        title: 'SIGN IN',
        component: require('./scenes/Auth0LoginView').default,
      },
      checkout_view: {
        title: 'CHECKOUT',
        component: require('./scenes/CheckoutView').default,
      }
    }
  }
};// default
