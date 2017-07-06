const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader',
        ],
      },
    ],
  },
  externals: {
    react: 'react',
    'react-native': 'react-native',
    'react-native-vector-icons/MaterialIcons': 'react-native-vector-icons/MaterialIcons',
    'react-native-vector-icons/FontAwesome': 'react-native-vector-icons/FontAwesome',
    'react-native-vector-icons/Zocial': 'react-native-vector-icons/Zocial',
    'react-native-vector-icons/Octicons': 'react-native-vector-icons/Octicons',
    'react-native-vector-icons/MaterialCommunityIcons': 'react-native-vector-icons/MaterialCommunityIcons',
    'react-native-vector-icons/Foundation': 'react-native-vector-icons/Foundation',
    'react-native-vector-icons/SimpleLineIcons': 'react-native-vector-icons/SimpleLineIcons',
    'react-native-vector-icons/EvilIcons': 'react-native-vector-icons/EvilIcons',
    'react-native-vector-icons/Entypo': 'react-native-vector-icons/Entypo',
    'react-native-vector-icons/Ionicons': 'react-native-vector-icons/Ionicons',
    'react-native-side-menu': 'react-native-side-menu',
    'react-native-tab-navigator': 'react-native-tab-navigator',
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()],
};
