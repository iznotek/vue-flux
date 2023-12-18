import { TransitionConf, TransitionProps } from '../types';

export interface Round1Props extends TransitionProps {}

export interface Round1Conf extends TransitionConf {
	rows: number;
	cols: number;
	tileDuration: number;
	tileDelay: number;
}
