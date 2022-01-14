import React from 'react';

import {
	Tabbar,
	TabbarItem
} from '@vkontakte/vkui';
import {Icon28KeyboardOutline} from '@vkontakte/icons';

function MobailNavigation({setActiveView, router}) {

	function openView(e) {
		let nowView = router.activeView
		setActiveView(e)
		
		if (e.currentTarget.dataset.id === nowView) {
		  router.toHash(`${e.currentTarget.dataset.id}/base`)
		}
	}

	return(
	    <Tabbar>
	      <TabbarItem
	        data-id='home'
	        selected={router.activeView === 'home'}
	        onClick={openView}
	        text='Калькулятор'
	      ><Icon28KeyboardOutline/></TabbarItem>

	    </Tabbar>
	)
}

export default MobailNavigation;