// banner
{
	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".pagerbox li");
	let banner=document.querySelector("#banner");
	let next=document.querySelector(".next");
	let prev=document.querySelector(".prev");
	// console.log(imgs);
	// console.log(pager);
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			//this ele pagers[index]
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	})
	var n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
 				pagers[i].classList.remove("active");
 				imgs[i].classList.remove("active");
			}
			//this ele pagers[index]
			imgs[n].classList.add("active");
			pagers[n].classList.add("active");
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}
	next.onclick=function(){
		move();
	}
	prev.onclick=function(){
		n-=2;
		move();
	}
}

//小米单品
{
	const btn1=document.querySelector(".star_btn1");
	const btn2=document.querySelector(".star_btn2");
	const inner=document.querySelector(".buy_inner");
	let n=0;//屏数
	btn2.onclick=function(){
		n++;
		btn1.classList.remove("disable");
		if(n===3){
			this.classList.add("disable");
		}
		if(n===4){
			n=3;
			return;
		}
		inner.style.marginLeft=-1226*n+"px";
	}

	btn1.onclick=function(){
		n--;
		btn2.classList.remove("disable");
		if(n===0){
			this.classList.add("disable");
		}
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-1226*n+"px";
	}
}

//内容部分
{	
	function dapei(parent){
	const types=parent.querySelectorAll(".type");
	const goodlist=parent.querySelectorAll(".goodlist");
	types.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(var i=0;i<types.length;i++){
				types[i].classList.remove("active");
				goodlist[i].classList.remove("active");
			}
			this.classList.add("active");
			goodlist[index].classList.add("active");
		}
	});
	}
	const contentlist=document.querySelectorAll(".dapei");
	contentlist.forEach(function(ele){
		dapei(ele);
	});
}


{
	const btn1=document.querySelector(".star_btn3");
	const btn2=document.querySelector(".star_btn4");
	const inner=document.querySelector(".buy_inner1");
	let n=0;//屏数
	btn2.onclick=function(){
		n++;
		btn1.classList.remove("disable");
		if(n===3){
			this.classList.add("disable");
		}
		if(n===4){
			n=3;
			return;
		}
		inner.style.marginLeft=-1226*n+"px";
	}

	btn1.onclick=function(){
		n--;
		btn2.classList.remove("disable");
		if(n===0){
			this.classList.add("disable");
		}
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-1226*n+"px";
	}
}