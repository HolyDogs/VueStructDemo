<template>
  <div>
    <h1 class="logo">cnodejs Api Test</h1>
    <ul class="list">
      <li v-for="item in lists" v-text="item.title"></li>
    </ul>
  </div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				lists:[{id:1,title:"test1"},{id:2,title:"test2"}]
			}
		},
		created(){
			this.get_data()
		},
		methods:{
            get_data:function(params){
            	var v=this
            	if(!params) params={}
            		v.$api.get('topics',params,function(r){
            			v.lists=r.data;
            		})
            },
		},
	}
</script>