import { Singleton } from './Singleton';

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log('Is A same as B', a === b);