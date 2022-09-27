import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, classNames, ButtonTheme } from '../../../shared';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { t, i18n } = useTranslation();
  const { className, short } = props;

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames({ cls: cls.LangSwitcher, additional: [className] })}
      onClick={toggle}
    >
      {t(short ? 'SHORT_LANG' : 'LANG')}
    </Button>
  );
};
