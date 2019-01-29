<template>
  <div>
    <Header></Header>
    <ul class="list">
      <li v-for="item in lists">
      	<time v-text="$fortime.goodTime(item.create_at)"></time>
      	<router-link :to="'/content/' + item.id">{{item.title}}</router-link>
      </li>
    </ul>
    <Footer></Footer>
  </div>
</template>

<script type="text/javascript">
	import Header from '../components/header'
	import Footer from '../components/footer'



	export default{
		components:{Header,Footer},
		data(){
			return{
				lists:[]
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