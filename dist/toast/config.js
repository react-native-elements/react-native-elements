const defaultConfig = {
    duration: 2000,
    maxMessages: 5,
    position: 'top',
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
        fontSize: 16,
        color: '#fff',
        // typed styles
        info: {},
        error: {},
        warning: {},
        success: {},
    },
    textMessageProps: {},
};
export default defaultConfig;
