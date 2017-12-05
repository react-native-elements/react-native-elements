import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import parseSamples, {
  assignRef,
  genRefId,
} from 'enzyme-styleguidist-sample-parser';
import options, {
  snapShot,
  buildJsxForGuideMethod,
  ensureCalled,
  onlyEnsureCalled,
  onlySnapshots,
} from '../samples';
import { Tile as Component } from '../../src';

const props = {
  imageSrc: {
    component: Component,
    props: {
      imageSrc: 'hero.jpg',
      width: 400,
      height: 400,
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  icon: {
    component: Component,
    props: {
      imageSrc: 'hero.jpg',
      icon: {
        name: 'pets',
        color: 'white',
      },
      width: 400,
      height: 400,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  iconContainerStyle: {
    component: Component,
    props: {
      imageSrc: 'hero.jpg',
      iconContainerStyle: { borderWidth: 5, borderColor: 'white' },
      icon: {
        name: 'pets',
        color: 'white',
      },
      width: 400,
      height: 400,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  title: {
    component: Component,
    props: {
      imageSrc: 'hero.jpg',
      title: 'Title',
      width: 400,
      height: 400,
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  titleStyle: {
    component: Component,
    props: {
      imageSrc: 'hero.jpg',
      title: 'Title',
      titleStyle: {
        color: '#071',
      },
      width: 400,
      height: 400,
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  titleNumberOfLines: {
    component: Component,
    props: {
      imageSrc: 'hero.jpg',
      title: 'Title line1\\nline2\\nline3',
      titleNumberOfLines: 3,
      width: 400,
      height: 400,
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  caption: {
    component: Component,
    props: {
      imageSrc: 'hero.jpg',
      title: 'Title',
      caption: 'Caption',
      featured: true,
      width: 400,
      height: 400,
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  captionStyle: {
    component: Component,
    props: {
      imageSrc: 'hero.jpg',
      title: 'Title',
      featured: true,
      caption: 'Caption',
      captionStyle: {
        color: '#071',
      },
      width: 400,
      height: 400,
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  containerStyle: {
    component: Component,
    props: {
      imageSrc: 'hero.jpg',
      containerStyle: {
        borderWidth: 5,
      },
      width: 400,
      height: 400,
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  onPress: {
    component: Component,
    props: {
      imageSrc: 'hero.jpg',
      onPress: () => {
        console.log('pressed');
      },
      width: 400,
      height: 400,
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  activeOpacity: {
    component: Component,
    props: {
      imageSrc: 'hero.jpg',
      activeOpacity: 0.99,
      onPress: () => {
        console.log('pressed');
      },
      width: 400,
      height: 400,
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  contentContainerStyle: {
    component: Component,
    props: {
      imageSrc: 'hero.jpg',
      contentContainerStyle: {
        borderWidth: 5,
      },
      width: 400,
      height: 400,
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
};

const samples = {
  props,
};

parseSamples(
  {
    Misc: { sectionComponents: { Tile: { samples } } },
  },
  options
);
