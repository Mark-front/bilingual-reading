import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page';
// eslint-disable-next-line mym-path-checker/layer-imports
import { RequireAuth } from '@/app/providers/router/ui/RequireAuth';
// eslint-disable-next-line mym-path-checker/layer-imports
import { RequireRole } from '@/app/providers/router/ui/RequireRole';

const AdminPanelPage = memo(() => {
    const { t } = useTranslation()
    return (
        <RequireRole roles={[ 'ADMIN', 'MANAGER' ]}>
            <RequireAuth>
                <Page data-testid='AdminPanelPage'>
                    <div>
                        {t('Администрирование')}
                    </div>
                </Page>
            </RequireAuth>
        </RequireRole>
    )
})

export default AdminPanelPage
