/*
 @ FOR WHAT?
  getRandomValues() func. doesn't works in React Native environment and other crypto methods.
  To not install additional package for it it's a plain function that generate uuid
*/
import { times } from 'lodash';
const uuidGenerator = (quarters = 2) => {
    const generateQuarter = () => 
    // eslint-disable-next-line no-bitwise
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    return times(quarters, (i) => i).reduce(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (uuid, _) => uuid + generateQuarter(), '');
};
export default uuidGenerator;
