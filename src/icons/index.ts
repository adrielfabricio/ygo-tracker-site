import AlbumsOutline from './albums-outline.svg';
import CalculatorOutline from './calculator-outline.svg';
import Checkmark from './checkmark.svg';
import ChevronDown from './chevron-down.svg';
import ClipboardOutline from './clipboard-outline.svg';
import CloudOfflineOutline from './cloud-offline-outline.svg';
import CubeOutline from './cube-outline.svg';
import DiceOutline from './dice-outline.svg';
import HeartOutline from './heart-outline.svg';
import LayersOutline from './layers-outline.svg';
import PeopleOutline from './people-outline.svg';
import PersonCircleOutline from './person-circle-outline.svg';
import Remove from './remove.svg';
import SearchOutline from './search-outline.svg';
import StatsChartOutline from './stats-chart-outline.svg';
import TrophyOutline from './trophy-outline.svg';

/** Ionicons names, as used by the app through `@expo/vector-icons`. */
export const ICONS = {
	'albums-outline': AlbumsOutline,
	'calculator-outline': CalculatorOutline,
	checkmark: Checkmark,
	'chevron-down': ChevronDown,
	'clipboard-outline': ClipboardOutline,
	'cloud-offline-outline': CloudOfflineOutline,
	'cube-outline': CubeOutline,
	'dice-outline': DiceOutline,
	'heart-outline': HeartOutline,
	'layers-outline': LayersOutline,
	'people-outline': PeopleOutline,
	'person-circle-outline': PersonCircleOutline,
	remove: Remove,
	'search-outline': SearchOutline,
	'stats-chart-outline': StatsChartOutline,
	'trophy-outline': TrophyOutline,
} as const;

export type IconName = keyof typeof ICONS;
