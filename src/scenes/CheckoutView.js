import React, {
  View,
  Text,
  Image,
  Component,
  ProgressBarAndroid
} from 'react-native';

import {
  Card,
  Button,
  TYPO,
  COLOR
} from 'react-native-material-design';

export default class CheckoutView extends Component {
  static contextTypes = {
    navigator: React.PropTypes.object.isRequired,
    theme: React.PropTypes.string.isRequired
  };// contextTypes

  static propTypes = {
    cart_items: React.PropTypes.array.isRequired
  };// propTypes

  constructor(props) {
    super(props);

    this.state = {
    };
  }// constructor

  componentDidMount() {
    // console.log(this.props);
  }// componentDidMount

  renderLoadingView() {
    const { theme } = this.context;
    const themeColor = COLOR[`${theme}500`].color;
    const { cart_items } = this.props;

    return (
      <View style={styles.loadingView}>
        <Text style={styles.header}>
          Processing your purchase...
        </Text>
        <ProgressBarAndroid styleAttr="Large" color={themeColor} />
      </View>
    );// return
  }// renderLoadingView

  render() {
    const { theme, navigator } = this.context;
    const { cart_items } = this.props;
    console.log(cart_items);
    const themeColor = COLOR[`${theme}500`].color;

    var bgColor = `#904caf50`;
    // console.log(bgColor);

    return (
      <View style={styles.container}>
        {
          this.renderLoadingView()
        }
      </View>
    );// return
  }// render
}// CheckoutView

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    // flexWrap: 'wrap',
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.googleGrey100.color
  },
  loadingView: {
    // flex: 1,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.googleGrey100.color
  },
  header: [
    {
      textAlign: 'center',
    },
    TYPO.paperFontHeadline,
    COLOR.googleGrey700
  ],
  subheader: [
    {
      textAlign: 'center',
    },
    TYPO.paperFontSubhead,
    COLOR.googleGrey700
  ]
};// styles
