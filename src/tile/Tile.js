import React, { PropTypes } from 'react';
import {
	View,
	Image,
	StyleSheet,
	Dimensions,
} from 'react-native';
import Text from '../text/Text';
import Icon from '../icons/Icon';

const { width } = Dimensions.get('window');

const styles = {
	viewContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.2)',
		alignSelf: 'stretch',
		justifyContent: 'center',
		paddingLeft: 25,
		paddingRight: 25,
		paddingTop: 45,
		paddingBottom: 40,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	imageContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		resizeMode: 'cover',
		backgroundColor: '#ffffff',
		width : width,
		height: 0.8 * width,
	},
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'flex-start',
		backgroundColor: '#ffffff',
	},
	text: {
		color: '#ffffff',
		backgroundColor: 'rgba(0,0,0,0)',
		marginBottom: 15,
		textAlign: 'center',
	},
	contentContainer: {
		alignSelf: 'stretch',
		paddingTop: 15,
		paddingBottom: 5,
		paddingLeft: 15,
		paddingRight: 15,
	}
};

const Tile = ({
	icon,
	titleStyle,
	captionStyle,
	caption,
	featured,
	containerStyle,
	imageSrc,
	contentContainerStyle,
	title,
	children
}) => {
	let overlayIcon, overlayText;

	if (icon) {
		overlayIcon = <Icon {...icon} />
	} else {
		overlayText = (
			<View style={styles.viewContainer}>
				<Text
					h4
					style={[
						styles.text,
						titleStyle && titleStyle
					]}
				>
					{title}
				</Text>
				<Text
					style={[
						styles.text,
						captionStyle && captionStyle
					]}
				>
					{caption}
				</Text>
			</View>
		);
	}
	if (featured) {
		return (
			<Image
				style={[
					styles.imageContainer,
					containerStyle && containerStyle
				]}
				source={imageSrc}
			>
				{overlayIcon || overlayText}
			</Image>
		);
	}

	return (
		<View
			style={[
				styles.container,
				containerStyle && containerStyle
			]}
		>
			<Image
				style={styles.imageContainer}
				source={imageSrc}
			>
				{overlayIcon}
			</Image>
			<View
				style={[
					styles.contentContainer,
					contentContainerStyle && contentContainerStyle
				]}>
				<Text
					h4
					style={
						titleStyle && titleStyle
					}
				>
					{title}
				</Text>
				{children}
			</View>
		</View>
	);
}

Tile.propTypes = {
	icon: PropTypes.object,
	titleStyle: PropTypes.any,
	captionStyle: PropTypes.any,
	caption: PropTypes.string,
	featured: PropTypes.bool,
	containerStyle: PropTypes.any,
	imageSrc: PropTypes.object.isRequired,
	contentContainerStyle: PropTypes.any,
	title: PropTypes.string,
	children: PropTypes.element,
};

export default Tile;
