import Checkmark from './checkmark.svg';
import ChevronDown from './chevron-down.svg';
import ClipboardOutline from './clipboard-outline.svg';
import CloudOfflineOutline from './cloud-offline-outline.svg';
import CubeOutline from './cube-outline.svg';
import HeartOutline from './heart-outline.svg';
import LayersOutline from './layers-outline.svg';
import PersonCircleOutline from './person-circle-outline.svg';
import Remove from './remove.svg';
import SearchOutline from './search-outline.svg';

/** Ionicons names, as used by the app through `@expo/vector-icons`. */
export const ICONS = {
	checkmark: Checkmark,
	'chevron-down': ChevronDown,
	'clipboard-outline': ClipboardOutline,
	'cloud-offline-outline': CloudOfflineOutline,
	'cube-outline': CubeOutline,
	'heart-outline': HeartOutline,
	'layers-outline': LayersOutline,
	'person-circle-outline': PersonCircleOutline,
	remove: Remove,
	'search-outline': SearchOutline,
} as const;

export type IconName = keyof typeof ICONS;
