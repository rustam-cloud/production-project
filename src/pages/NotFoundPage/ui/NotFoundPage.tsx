import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '../../../shared';
import { PageWrapper } from '../../../widgets';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = memo(({ className = '' }: NotFoundPageProps) => {
  const { t } = useTranslation();

  return (
    <PageWrapper className={classNames({ cls: cls.NotfoundPage, additional: [className] })}>
      {t('NOT_FOUND_PAGE')}
    </PageWrapper>
  );
});
