module.exports = ((raw_global,the_global)=>{
	for(var k in the_global)raw_global[k]=the_global[k];
	return raw_global
})({},function(){return this}())
