const customIcons = {};
export const registerCustomIconType = (id, customIcon) => {
    customIcons[id] = customIcon;
};
const iconSets = {
    zocial: () => {
        try {
            return require('@react-native-vector-icons/zocial').default;
        }
        catch (_a) {
            try {
                const oldLib = require('react-native-vector-icons/Zocial').default;
                console.warn('Warning: "react-native-vector-icons" has been deprecated. Please install the modular library "@react-native-vector-icons/zocial" instead.');
                return oldLib;
            }
            catch (_b) {
                console.warn('Zocial icon set is not available. Please install "@react-native-vector-icons/zocial" to use it.');
                return null;
            }
        }
    },
    octicon: () => {
        try {
            return require('@react-native-vector-icons/octicons').default;
        }
        catch (_a) {
            try {
                const oldLib = require('react-native-vector-icons/Octicons').default;
                console.warn('Warning: "react-native-vector-icons" has been deprecated. Please install the modular library "@react-native-vector-icons/octicons" instead.');
                return oldLib;
            }
            catch (_b) {
                console.warn('Octicons icon set is not available. Please install "@react-native-vector-icons/octicons" to use it.');
                return null;
            }
        }
    },
    material: () => {
        try {
            return require('@react-native-vector-icons/material-icons').default;
        }
        catch (_a) {
            try {
                const oldLib = require('react-native-vector-icons/MaterialIcons').default;
                console.warn('Warning: "react-native-vector-icons" has been deprecated. Please install the modular library "@react-native-vector-icons/material-icons" instead.');
                return oldLib;
            }
            catch (_b) {
                console.warn('Material icon set is not available. Please install "@react-native-vector-icons/material-icons" to use it.');
                return null;
            }
        }
    },
    'material-community': () => {
        console.warn('Warning: Value for type "material-community" is deprecated. Use "material-design" instead.');
        try {
            return require('@react-native-vector-icons/material-design-icons')
                .default;
        }
        catch (_a) {
            try {
                const oldLib = require('react-native-vector-icons/MaterialCommunityIcons').default;
                console.warn('Warning: "react-native-vector-icons" has been deprecated. Please install the modular library "@react-native-vector-icons/material-design-icons" instead.');
                return oldLib;
            }
            catch (_b) {
                console.warn('Material Design Icons icon set is not available. Please install "@react-native-vector-icons/material-design-icons" to use it.');
                return null;
            }
        }
    },
    'material-design': () => {
        try {
            return require('@react-native-vector-icons/material-design-icons')
                .default;
        }
        catch (_a) {
            try {
                const oldLib = require('react-native-vector-icons/MaterialCommunityIcons').default;
                console.warn('Warning: "react-native-vector-icons" has been deprecated. Please install the modular library "@react-native-vector-icons/material-design-icons" instead.');
                return oldLib;
            }
            catch (_b) {
                console.warn('Material Design Icons icon set is not available. Please install "@react-native-vector-icons/material-design-icons" to use it.');
                return null;
            }
        }
    },
    ionicon: () => {
        try {
            return require('@react-native-vector-icons/ionicons').default;
        }
        catch (_a) {
            try {
                const oldLib = require('react-native-vector-icons/Ionicons').default;
                console.warn('Warning: "react-native-vector-icons" has been deprecated. Please install the modular library "@react-native-vector-icons/ionicons" instead.');
                return oldLib;
            }
            catch (_b) {
                console.warn('Ionicons icon set is not available. Please install "@react-native-vector-icons/ionicons" to use it.');
                return null;
            }
        }
    },
    foundation: () => {
        try {
            return require('@react-native-vector-icons/foundation').default;
        }
        catch (_a) {
            try {
                const oldLib = require('react-native-vector-icons/Foundation').default;
                console.warn('Warning: "react-native-vector-icons" has been deprecated. Please install the modular library "@react-native-vector-icons/foundation" instead.');
                return oldLib;
            }
            catch (_b) {
                console.warn('Foundation icon set is not available. Please install "@react-native-vector-icons/foundation" to use it.');
                return null;
            }
        }
    },
    evilicon: () => {
        try {
            return require('@react-native-vector-icons/evil-icons').default;
        }
        catch (_a) {
            try {
                const oldLib = require('react-native-vector-icons/EvilIcons').default;
                console.warn('Warning: "react-native-vector-icons" has been deprecated. Please install the modular library "@react-native-vector-icons/evil-icons" instead.');
                return oldLib;
            }
            catch (_b) {
                console.warn('EvilIcons icon set is not available. Please install "@react-native-vector-icons/evil-icons" to use it.');
                return null;
            }
        }
    },
    entypo: () => {
        try {
            return require('@react-native-vector-icons/entypo').default;
        }
        catch (_a) {
            try {
                const oldLib = require('react-native-vector-icons/Entypo').default;
                console.warn('Warning: "react-native-vector-icons" has been deprecated. Please install the modular library "@react-native-vector-icons/entypo" instead.');
                return oldLib;
            }
            catch (_b) {
                console.warn('Entypo icon set is not available. Please install "@react-native-vector-icons/entypo" to use it.');
                return null;
            }
        }
    },
    'font-awesome': () => {
        try {
            return require('@react-native-vector-icons/fontawesome').default;
        }
        catch (_a) {
            try {
                const oldLib = require('react-native-vector-icons/FontAwesome').default;
                console.warn('Warning: "react-native-vector-icons" has been deprecated. Please install the modular library "@react-native-vector-icons/fontawesome" instead.');
                return oldLib;
            }
            catch (_b) {
                console.warn('FontAwesome icon set is not available. Please install "@react-native-vector-icons/fontawesome" to use it.');
                return null;
            }
        }
    },
    fa: () => iconSets['font-awesome'](),
    'font-awesome-5': () => {
        try {
            return require('@react-native-vector-icons/fontawesome5').default;
        }
        catch (_a) {
            try {
                const oldLib = require('react-native-vector-icons/FontAwesome5').default;
                console.warn('Warning: "react-native-vector-icons" has been deprecated. Please install the modular library "@react-native-vector-icons/fontawesome5" instead.');
                return oldLib;
            }
            catch (_b) {
                console.warn('FontAwesome5 icon set is not available. Please install "@react-native-vector-icons/fontawesome5" to use it.');
                return null;
            }
        }
    },
    'fa-5': () => iconSets['font-awesome-5'](),
    'font-awesome-6': () => {
        try {
            return require('@react-native-vector-icons/fontawesome6').default;
        }
        catch (_a) {
            try {
                const oldLib = require('react-native-vector-icons/FontAwesome6').default;
                console.warn('Warning: "react-native-vector-icons" has been deprecated. Please install the modular library "@react-native-vector-icons/fontawesome6" instead.');
                return oldLib;
            }
            catch (_b) {
                console.warn('FontAwesome6 icon set is not available. Please install "@react-native-vector-icons/fontawesome6" to use it.');
                return null;
            }
        }
    },
    'fa-6': () => iconSets['font-awesome-6'](),
    'simple-line-icon': () => {
        try {
            return require('@react-native-vector-icons/simple-line-icons').default;
        }
        catch (_a) {
            try {
                const oldLib = require('react-native-vector-icons/SimpleLineIcons').default;
                console.warn('Warning: "react-native-vector-icons" has been deprecated. Please install the modular library "@react-native-vector-icons/simple-line-icons" instead.');
                return oldLib;
            }
            catch (_b) {
                console.warn('SimpleLineIcons icon set is not available. Please install "@react-native-vector-icons/simple-line-icons" to use it.');
                return null;
            }
        }
    },
    feather: () => {
        try {
            return require('@react-native-vector-icons/feather').default;
        }
        catch (_a) {
            try {
                const oldLib = require('react-native-vector-icons/Feather').default;
                console.warn('Warning: "react-native-vector-icons" has been deprecated. Please install the modular library "@react-native-vector-icons/feather" instead.');
                return oldLib;
            }
            catch (_b) {
                console.warn('Feather icon set is not available. Please install "@react-native-vector-icons/feather" to use it.');
                return null;
            }
        }
    },
    antdesign: () => {
        try {
            return require('@react-native-vector-icons/ant-design').default;
        }
        catch (_a) {
            try {
                const oldLib = require('react-native-vector-icons/AntDesign').default;
                console.warn('Warning: "react-native-vector-icons" has been deprecated. Please install the modular library "@react-native-vector-icons/ant-design" instead.');
                return oldLib;
            }
            catch (_b) {
                console.warn('AntDesign icon set is not available. Please install "@react-native-vector-icons/ant-design" to use it.');
                return null;
            }
        }
    },
    'ant-design': () => iconSets.antdesign(),
    fontisto: () => {
        try {
            return require('@react-native-vector-icons/fontisto').default;
        }
        catch (_a) {
            try {
                const oldLib = require('react-native-vector-icons/Fontisto').default;
                console.warn('Warning: "react-native-vector-icons" has been deprecated. Please install the modular library "@react-native-vector-icons/fontisto" instead.');
                return oldLib;
            }
            catch (_b) {
                console.warn('Fontisto icon set is not available. Please install "@react-native-vector-icons/fontisto" to use it.');
                return null;
            }
        }
    },
};
export default function getIcon(type) {
    if (customIcons[type]) {
        return customIcons[type];
    }
    const loader = iconSets[type];
    if (loader) {
        return loader();
    }
    return iconSets.material();
}
