import React from 'react';
import  Dropdown  from '../Dropdown';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { TouchableOpacity } from 'react-native';
const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s11.favim.com/orig/7/772/7729/77295/profile-pics-pretty-girl-cute-Favim.com-7729542.jpg',
      subtitle: 'Cousin'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/03/pjimage-2-1585013198.jpg',
      subtitle: 'Brother'
    },
    {
        name: 'Mathew Jackson',
        avatar_url: 'http://3doz1i2eztq711nqzp2is66b-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/Father.jpg',
        subtitle: 'Father'
      },
      {
        name: 'Casey Jackson',
        avatar_url: 'https://penfieldbuildingblocks.org/wp-content/uploads/2018/08/the-mother-child-relationship.jpg',
        subtitle: 'Mom'
      },
  ]
describe('Dropdown Component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Dropdown containerStyle={{backgroundColor:'white'}} initalNumberOfelement={6} >
              <Dropdown.Head activeOpacity={0.5}  >
                  <Dropdown.Content>
                      <Dropdown.Title>
                      Family
                      </Dropdown.Title>
                      <Dropdown.Subtitle style={{color:"grey"}}>
                      4 Contacts
                      </Dropdown.Subtitle>
                  </Dropdown.Content>
                  <Dropdown.Chevron />
              </Dropdown.Head>
              {
              list.map((l, i) => (
                  <Dropdown.Item    key={i} > 
                      <Dropdown.Content>
                          <Dropdown.Title>
                          {l.name}
                          </Dropdown.Title>
                          <Dropdown.Subtitle>
                          {l.subtitle}
                          </Dropdown.Subtitle>
                      </Dropdown.Content>
                  </Dropdown.Item>
              ))
              }
          </Dropdown>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
