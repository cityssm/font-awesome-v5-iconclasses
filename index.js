import { getListByKeys } from 'font-awesome-v5-icons';
let _faIconsCache = [];
async function _getIcons() {
    if (_faIconsCache.length === 0) {
        _faIconsCache = await getListByKeys(['name', 'styles']);
    }
    return _faIconsCache;
}
const iconClasses = {
    solid: [],
    regular: [],
    brands: []
};
export default async function getIconClassesByStyle(style) {
    if (iconClasses[style].length === 0) {
        const allIcons = await _getIcons();
        const list = [];
        for (const icon of allIcons) {
            if ((icon.styles ?? []).includes(style) && icon.name !== undefined) {
                list.push(icon.name);
            }
        }
        iconClasses[style] = list;
    }
    return iconClasses[style];
}
export async function getSolidIconClasses() {
    return await getIconClassesByStyle('solid');
}
export async function getRegularIconClasses() {
    return await getIconClassesByStyle('regular');
}
export async function getBrandIconClasses() {
    return await getIconClassesByStyle('brands');
}
