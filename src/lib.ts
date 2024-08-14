declare global {
    interface Window {
        [key: string]: any 
    }

	interface Element {
        [key: string]: any 
    }
}

export * from './components';
export * from './complements';
export * from './resources';
export * from './transitions';

export {
	Player,
	Directions,
	Statuses,
	PlayerResource,
	PlayerTransition,
} from './controllers/Player';

export type * from './controllers/Player/types';

export { Size, Position } from './shared';
