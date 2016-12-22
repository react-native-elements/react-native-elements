import ZocialIcon from 'react-native-vector-icons/Zocial'
import OcticonIcon from 'react-native-vector-icons/Octicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Ionicon from 'react-native-vector-icons/Ionicons'
import FoundationIcon from 'react-native-vector-icons/Foundation'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'

export default (type) => {
  switch (type) {
    case 'zocial':
      return ZocialIcon
    case 'octicon':
      return OcticonIcon
    case 'material':
      return MaterialIcon
    case 'ionicon':
      return Ionicon
    case 'foundation':
      return FoundationIcon
    case 'evilicon':
      return EvilIcon
    case 'entypo':
      return EntypoIcon
    case 'font-awesome':
      return FAIcon
    case 'simple-line-icon':
      return SimpleLineIcon
    default:
      return MaterialIcon
  }
}
