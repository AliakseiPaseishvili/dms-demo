import React, { FC } from 'react';
import { I18nextProvider } from 'react-i18next';

import { ReactChildren } from '../../types';

import i18n from './i18n';

export const TranslationProvider: FC<ReactChildren> = ({ children }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
