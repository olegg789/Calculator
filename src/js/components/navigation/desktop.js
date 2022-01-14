import React from 'react';

import ThemeControllers from './themeControllers';

import {
  SplitCol,
	Panel,
	PanelHeader,
	Group,
	Cell
} from '@vkontakte/vkui';
import {
    Icon28KeyboardOutline,
    Icon28Profile
} from '@vkontakte/icons';

function DesktopNavigation({hasHeader, setActiveView, router}) {
	return(
    <SplitCol fixed width='280px' maxWidth='280px'>
      <Panel id='menuDesktop'>
        {hasHeader && <PanelHeader/>}
        <Group>
          <Cell
            data-id='home'
            onClick={setActiveView}
            disabled={router.activeView === 'home'}
            before={<Icon28KeyboardOutline/>}
            className={router.activeView === 'home' ? 'activeViewCell' : ''}
          >
            Калькулятор
          </Cell>

          <Cell
            data-id='profile'
            onClick={setActiveView}
            disabled={router.activeView === 'profile'}
            before={<Icon28Profile/>}
            className={router.activeView === 'profile' ? 'activeViewCell' : ''}
          >
            ...
          </Cell>
        </Group>

        <ThemeControllers/>
      </Panel>
    </SplitCol>
	)
}

export default DesktopNavigation;