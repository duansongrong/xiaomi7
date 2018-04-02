 // banner
{
	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".pagerbox li");
	let banner=document.querySelector("#banner");
	let next=document.querySelector(".next");
	let prev=document.querySelector(".prev");
	let flag=true;
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
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
		if(flag){
			flag=false;
			move();
		}
	}
	prev.onclick=function(){
		if(flag){
			flag=false;
			n-=2;
			move();
		}
	}
	imgs.forEach(function(ele,index){
		ele.addEventListener("transitionend",function(){
			flag=true;
		})
	})
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
		inner.style.marginLeft=-978*n+"px";
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
		inner.style.marginLeft=-978*n+"px";
	}
}

//搭配部分
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

//推荐部分
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

//内容部分
{	
	function wheel(parent){
		let prev=parent.querySelector(".neirong_btn");
		let next=parent.querySelector(".neirong_btn2");
		let inner=parent.querySelector(".neirong_inner");
		let contents=parent.querySelectorAll(".neirong_ye");
		let pagers=parent.querySelectorAll(".neirong_dian");
		let n=0;
		next.onclick=function(){
			n++;
			if(n===contents.length){
				n=contents.length-1;
				return;
			}
			inner.style.marginLeft=n*-296+"px";
			pagers[n].classList.add("active");
			pagers[n-1].classList.remove("active");
			obj=pagers[n];
		}
		prev.onclick=function(){
			n--;
			if(n<0){
				n=0;
				return;
			}
			inner.style.marginLeft=n*-296+"px";
			pagers[n].classList.add("active");
			pagers[n+1].classList.remove("active");
			obj=pagers[n];
		}
		let obj=pagers[0];
		pagers.forEach(function(ele,index){
			ele.onclick=function(){
				obj.classList.remove("active");
				ele.classList.add("active");
				obj=ele;
				inner.style.marginLeft=index*-296+"px";
				n=index;
			}
		})
	}
	let items=document.querySelectorAll(".neirong_item");
	items.forEach(function(ele){
		wheel(ele);
	})
}

//侧导航
{
	let labels=document.querySelectorAll(".banner_nav li");
	let menus=document.querySelectorAll(".menu");
	let obj=menus[0];
	labels.forEach(function(ele,index){
		ele.onmouseenter=function(){
			menus[index].style.display="block";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}
	});
}

//xiala
{
	let box=document.querySelector(".nav_total");
	let top=document.querySelector(".nav_xialawenzi");
	let bottom=document.querySelector(".nav_xiala_bottom1");
	let types=document.querySelectorAll(".nav_xialawenzi span");
	let goodlist=document.querySelectorAll(".nav_goodlist");
	top.onmouseenter=function(){
		bottom.style.height="230px";
	}
	box.onmouseleave=function(){
		bottom.style.height="0";
	}
	let obj=goodlist[0];
	types.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			goodlist[index].style.display="block";
			obj=goodlist[index];
		}
	});	
}

//倒计时
 {
     let date=new Date();
     let hourEle=document.querySelector(".hours");
     let minEle=document.querySelector(".minutes");
     let secondEle=document.querySelector(".seconds");
     let target=new Date(date.getFullYear(),date.getMonth()+1,date.getDate(),22,0,0);
     let targetTime=target.getTime();
     setInterval(time,1000);
     time();
     function time(){
         let now=new Date();
         let nowTime=now.getTime();
         let duration=targetTime-nowTime;
         // let days=Math.floor(duration/(1000*60*60*24));
         // dateEle.innerHTML=days;
         let hours=Math.floor(duration/(1000*60*60))%24;
         if(hours<10){
             hourEle.innerHTML="0"+hours;
		 }else{
             hourEle.innerHTML=hours;
         }
         let minutes=Math.floor(duration/(1000*60))%60;
         if(minutes<10){
             minEle.innerHTML="0"+minutes;
         }else{
             minEle.innerHTML=minutes;
         }
         let seconds=Math.floor(duration/1000)%60;
         if(seconds<10){
             secondEle.innerHTML="0"+seconds;
         }else{
             secondEle.innerHTML=seconds;
         }
         if(hours<0){
             hourEle.innerHTML="0";
             minEle.innerHTML="0";
             secondEle.innerHTML="0";
         }
     }
 }