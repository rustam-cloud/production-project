import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getArticleDetailsData } from '../../../../entities';
import { Button, ButtonTheme, HorizontalStack, classNames } from '../../../../shared';
import { routeCreator } from '../../../../shared/constants';
import { getCanEditArticle } from '../../model';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className = '' } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(routeCreator.getRouteArticles());
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    if (article?.id) {
      navigate(routeCreator.getRouteArticleDetails(article.id));
    }
  }, [article?.id, navigate]);

  return (
    <HorizontalStack justify="between" max className={classNames({ additional: [className] })}>
      <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
        {t('BACK TO LIST')}
      </Button>

      {canEdit && (
        <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
          {t('EDIT')}
        </Button>
      )}
    </HorizontalStack>
  );
});
