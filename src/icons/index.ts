import Add from './add.svg';
import Checkmark from './checkmark.svg';
import ChevronDown from './chevron-down.svg';
import ClipboardOutline from './clipboard-outline.svg';
import CloudOfflineOutline from './cloud-offline-outline.svg';
import CubeOutline from './cube-outline.svg';
import Grid from './grid.svg';
import HeartOutline from './heart-outline.svg';
import LayersOutline from './layers-outline.svg';
import PersonCircleOutline from './person-circle-outline.svg';
import Remove from './remove.svg';
import SearchOutline from './search-outline.svg';
import SettingsOutline from './settings-outline.svg';

/** Ionicons names, as used by the app through `@expo/vector-icons`. */
export const ICONS = {
	add: Add,
	checkmark: Checkmark,
	'chevron-down': ChevronDown,
	'clipboard-outline': ClipboardOutline,
	'cloud-offline-outline': CloudOfflineOutline,
	'cube-outline': CubeOutline,
	grid: Grid,
	'heart-outline': HeartOutline,
	'layers-outline': LayersOutline,
	'person-circle-outline': PersonCircleOutline,
	remove: Remove,
	'search-outline': SearchOutline,
	'settings-outline': SettingsOutline,
} as const;

export type IconName = keyof typeof ICONS;
