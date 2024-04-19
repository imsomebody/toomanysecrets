import { useAppStore } from 'stores/app';
import { type NavigationGuard } from 'vue-router';

export const TITLE_PREFIX = 'Textool';
export const TITLE_SEP = '|';

export function parseTitle(text: string) {
  return [TITLE_PREFIX, text].join(TITLE_SEP);
}

const DEACTIVATED = true;

export const titleGuard: NavigationGuard = (to, _, next) => {
  if (DEACTIVATED) return next();

  const appStore = useAppStore();

  if ('title' in to.meta) {
    const title = (to.meta.title || '').toString();

    document.title = parseTitle(title);
    appStore.setTitle(title);
  } else {
    appStore.setTitle(null);
  }

  next();
};
