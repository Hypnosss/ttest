import Vue from 'vue'
import Router from 'vue-router'
import root from '@/components/root'
import equipmentRoot from '@/components/equipmentRoot'
import forum from '@/components/forum'
import passage from '@/components/passage'
import equipment from '@/components/equipment'


Vue.use(Router)

export default new Router({
  	routes: [
    	{
      		path: '/',
      		name: 'rootLink',
      		components:{
				mainRT:root	
      		}
		},
		{
			path: '/equipments/root',
      		name: 'equipmentsRoot',
      		components:{
     	   		mainRT:equipmentRoot
      		}
		},
		{
			path: '/equipments/:id',
      		name: 'equipments',
      		components:{
     	   		mainRT:equipment
      		}
		},
		{
			path: '/forum',
      		name: 'forum',
      		components:{
     	   		mainRT:forum
      		}
		},
		{
			path: '/forum/:id',
      		name: 'passage',
      		components:{
     	   		mainRT:passage
      		}
		}
  	]
})
