import {
  getListByKeys,
  type FontAwesomeV5Icon,
  type FontAwesomeV5Styles
} from 'font-awesome-v5-icons'

let _faIconsCache: FontAwesomeV5Icon[] = []

async function _getIcons(): Promise<FontAwesomeV5Icon[]> {
  if (_faIconsCache.length === 0) {
    _faIconsCache = await getListByKeys(['name', 'styles'])
  }

  return _faIconsCache
}

const iconClasses: Record<FontAwesomeV5Styles, string[]> = {
  solid: [],
  regular: [],
  brands: []
}

export async function getIconClassesByStyle(
  style: FontAwesomeV5Styles
): Promise<string[]> {
  if (iconClasses[style].length === 0) {
    const allIcons = await _getIcons()

    const list: string[] = []

    for (const icon of allIcons) {
      if ((icon.styles ?? []).includes(style) && icon.name !== undefined) {
        list.push(icon.name)
      }
    }

    iconClasses[style] = list
  }

  return iconClasses[style]
}

export async function getSolidIconClasses(): Promise<string[]> {
  return await getIconClassesByStyle('solid')
}

export async function getRegularIconClasses(): Promise<string[]> {
  return await getIconClassesByStyle('regular')
}

export async function getBrandIconClasses(): Promise<string[]> {
  return await getIconClassesByStyle('brands')
}
