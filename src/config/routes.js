import index from '../page/index.vue'
import content from '../page/content.vue'
import Frame from '../frame/subroute'
import userIndex from '../page/user/index'
import userInfo from '../page/user/info'
import userLove from '../page/user/love'

export default[
    {
    	path:'/',
    	component:index
    },
    {
    	path: '/content/:id',
    	component:content
    },
    {
    	path: '/user',
    	component:Frame,
    	children: [
    	    {path:'/',component:userIndex},
    	    {path:'info',component:userInfo},
    	    {path:'love',component:userLove},

    	]
    }
]