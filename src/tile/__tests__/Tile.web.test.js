import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import parseSamples, {
  assignRef,
  genRefId,
} from 'enzyme-styleguidist-sample-parser';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import options, {
  snapShot,
  buildJsxForGuideMethod,
  ensureCalled,
  onlyEnsureCalled,
  onlySnapshots,
} from '../../../samples';
import Tile from '../Tile';

const props = {
  imageSrc: {
    component: Tile,
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
    component: Tile,
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
    component: Tile,
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
    component: Tile,
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
    component: Tile,
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
    component: Tile,
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
    component: Tile,
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
    component: Tile,
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
    component: Tile,
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
    component: Tile,
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
    component: Tile,
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
    component: Tile,
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

describe('Tile component', () => {
  it('should render without issues', () => {
    const component = shallow(<Tile imageSrc={{ url: 'http://google.com' }} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render featured tile', () => {
    const component = shallow(
      <Tile
        imageSrc={{ url: 'http://google.com' }}
        title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
        featured
        caption="Some Caption Text"
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render featured tile with icon', () => {
    const component = shallow(
      <Tile
        imageSrc={{ url: 'http://google.com' }}
        icon={{ name: 'play-circle', type: 'font-awesome' }}
        featured
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render tile with icon', () => {
    const component = shallow(
      <Tile
        imageSrc={{ url: 'http://google.com' }}
        title="Lorem ipsum dolor sit amet, consectetur"
        icon={{ name: 'play-circle', type: 'font-awesome' }}
        contentContainerStyle={{ height: 70 }}
        imageContainerStyle={{ height: 70 }}
        iconContainerStyle={{ height: 70 }}
        containerStyle={{ height: 70 }}
        titleStyle={{ backgroundColor: 'yellow' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
