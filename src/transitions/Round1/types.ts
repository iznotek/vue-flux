import { CSSProperties } from 'vue';
import { TransitionConf, TransitionProps } from '../types';

export interface Round1Props extends TransitionProps {
	options: {
		rows?: number;
		cols?: number;
		tileDuration?: number;
		tileDelay?: number;
		easing?: CSSProperties['animation-timing-function'];
	};
}

export interface Round1Conf extends TransitionConf {
	rows: number;
	cols: number;
	tileDuration: number;
	tileDelay: number;
	easing: CSSProperties['animation-timing-function'];
}
