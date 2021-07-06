```SnackPlayer name=RNE Social Icon
import React from 'react';
import { View, ScrollView } from 'react-native';
import { SocialIcon, SocialIconProps } from 'react-native-elements';

type IconData = {
  type: SocialMediaType;
  iconType: string;
};

const dataList: Partial<IconData>[] = [
  {
    type: 'facebook',
  },
  {
    type: 'twitter',
  },
  {
    type: 'google-plus-official',
  },
  {
    type: 'google',
  },
  {
    type: 'pinterest',
  },
  {
    type: 'linkedin',
  },
  {
    type: 'youtube',
  },
  {
    type: 'vimeo',
  },
  {
    type: 'tumblr',
  },
  {
    type: 'instagram',
  },
  {
    type: 'quora',
  },
  {
    type: 'flickr',
  },
  {
    type: 'foursquare',
  },
  {
    type: 'wordpress',
  },
  {
    type: 'stumbleupon',
  },
  {
    type: 'github',
  },
  {
    type: 'github-alt',
  },
  {
    type: 'twitch',
  },
  {
    type: 'medium',
  },
  {
    type: 'soundcloud',
  },
  {
    type: 'stack-overflow',
  },
  {
    type: 'gitlab',
  },
  {
    type: 'angellist',
  },
  {
    type: 'codepen',
  },
  {
    type: 'weibo',
  },
  {
    type: 'vk',
  },
  {
    type: 'facebook-messenger',
    iconType: 'material-community',
  },
  {
    type: 'whatsapp',
  },
];

type SocialIconsComponentProps = {};

const SocialIcons: React.FunctionComponent<SocialIconsComponentProps> = () => {
  const socialProps = {};
  return (
    <>
      <ScrollView>
        {_.chunk(dataList, 3).map(
          (chunk: Partial<IconData>[], chunkIndex: React.Key) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 10,
                backgroundColor: '#4c4c4c',
              }}
              key={chunkIndex}
            >
              {chunk.map((l: Partial<IconData>, i: React.Key) => (
                <SocialIcon
                  type={l.type}
                  iconType={l.iconType ? l.iconType : 'font-awesome'}
                  key={`${chunkIndex}-${i}`}
                />
              ))}
            </View>
          )
        )}
      </ScrollView>
    </>
  );
};

export default SocialIcons;
```
