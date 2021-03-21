import { ToastPosition } from './ToastProvider';
const defaultConfig = {
    duration: 2000,
    maxMessages: 5,
    position: ToastPosition.top,
    containerToastStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 99999,
    },
    containerMessageStyle: {
        margin: 10,
        marginBottom: 5,
        padding: 10,
        borderRadius: 4,
        backgroundColor: '#586ae3',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 6,
        // typed styles
        info: {},
        error: {},
        warning: {},
        success: {},
    },
    textMessageStyle: {
        // typed styles
        info: {},
        error: {},
        warning: {},
        success: {},
    },
    textMessageProps: {},
};
export default defaultConfig;
