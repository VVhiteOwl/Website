function loading() {
  	let elem = document.getElementById("LP");
  
	let start = Date.now();

	let timer = setInterval(function() {
	let timePassed = Date.now() - start;
    
    LP.style.opacity = 1 - timePassed / 5000;
    
    if (timePassed > 5000) elem.parentNode.removeChild(elem);
   	if (timePassed > 5000) s.style.opacity = 0 - 1 + timePassed / 5000;
    if (timePassed > 5000) clearInterval(timer);
    if (timePassed > 10000) clearInterval(timer);

	}, 20);
  
	let timer2 = setInterval(function() {
	let timePassed = Date.now() - start;
    
    s.style.opacity = 0 - 1 + timePassed / 5000;
      
    if (timePassed > 10000) clearInterval(timer2);

	}, 20);
}

let big1 = 'o';

let small1 = "homeFontSize";

function fHome() {
  big1 = home2();
};
function home2() {
  return big1 = 'homeFontSize';
}

function fWorks() {
  big1 = works2();
};
function works2() {
  return big1 = 'worksFontSize';
} 

function fProjects() {
  big1 = projects2();
};
function projects2() {
  return big1 = 'projectsFontSize';
} 

function fAbout() {
  big1 = about2();
};
function about2() {
  return big1 = 'aboutFontSize';
} 

function changeFontSize() {
  let small = small1;
  
  if (small === 'homeFontSize') {sHome()}
  
  if (small === 'worksFontSize') {sWorks()}
  
  if (small === 'projectsFontSize') {sProjects()}
  
  if (small === 'aboutFontSize') {sAbout()}
  
  return big1 = 'o';
}; 
function sHome() {
	if (big1 === 'worksFontSize') {
    	let start = Date.now();
      	
      	webDesign.classList.add('design');
        graphicDesign.classList.add('design');
  	
		let timer = setInterval(function() {
		let timePassed = Date.now() - start;

		works.style.fontSize = 64 + timePassed / 20 + "px";
        hi.style.opacity = 1 - timePassed / 320;
        D.style.opacity = 0 + timePassed / 320;
		home.style.fontSize = 80 - timePassed / 20 + "px";

   		if (timePassed > 320) clearInterval(timer);

		}, 20);
      	return small1 = big1;
    }
  
  	if (big1 === 'projectsFontSize') {
      	wbg.style.pointerEvents = "auto";	
      	wbg.style.cursor = "pointer";
      
      
    	let start = Date.now();
  	
		let timer = setInterval(function() {
		let timePassed = Date.now() - start;

		projects.style.fontSize = 64 + timePassed / 20 + "px";
        hi.style.opacity = 1 - timePassed / 320;
		home.style.fontSize = 80 - timePassed / 20 + "px";
        project1.style.opacity = 0 + timePassed / 320;
	
        if (timePassed > 320) clearInterval(timer);
   		if (timePassed > 320) clearInterval(timer);

		}, 20);
      return small1 = big1;
    }
  
  	if (big1 === 'aboutFontSize') {
      	wbg.style.pointerEvents = "auto";	
      	wbg.style.cursor = "pointer";
      
    	let start = Date.now();
  	
		let timer = setInterval(function() {
		let timePassed = Date.now() - start;

		about.style.fontSize = 64 + timePassed / 20 + "px";
        hi.style.opacity = 1 - timePassed / 320;
		home.style.fontSize = 80 - timePassed / 20 + "px";

   		if (timePassed > 320) clearInterval(timer);

		}, 20);
      return small1 = big1;
    }
}
function sWorks() {
	if (big1 === 'homeFontSize') {
    	if(WD.style.opacity > 0.1) {
        	let start = Date.now();
      	
			let timer = setInterval(function() {
			let timePassed = Date.now() - start;

			home.style.fontSize = 64 + timePassed / 20 + "px";
        	hi.style.opacity = 0 + timePassed / 320;
        	WD.style.opacity = 1 - timePassed / 320;
			works.style.fontSize = 80 - timePassed / 20 + "px";
			wdT.style.opacity = 1 - timePassed / 320;
        
        	if (timePassed > 319) back.classList.remove('back');
   			if (timePassed > 320) clearInterval(timer);

			}, 20); return small1 = big1;
        }
      	else if(DG.style.opacity > 0.1) {
			document.body.style.overflowY = "hidden";
        	let start = Date.now();
      	
			let timer = setInterval(function() {
			let timePassed = Date.now() - start;

			home.style.fontSize = 64 + timePassed / 20 + "px";
        	hi.style.opacity = 0 + timePassed / 320;
        	DG.style.opacity = 1 - timePassed / 320;
            images.style.opacity = 1 - timePassed / 320;
			works.style.fontSize = 80 - timePassed / 20 + "px";
            gdT.style.opacity = 1 - timePassed / 320;
        
        	if (timePassed > 319) backS.classList.remove('back');
   			if (timePassed > 320) clearInterval(timer);         

			}, 20); return small1 = big1;
        }
        else {
        	let start = Date.now();
      	
			let timer = setInterval(function() {
			let timePassed = Date.now() - start;

			home.style.fontSize = 64 + timePassed / 20 + "px";
        	hi.style.opacity = 0 + timePassed / 320;
        	D.style.opacity = 1 - timePassed / 320;
			works.style.fontSize = 80 - timePassed / 20 + "px";
        	
        	if (timePassed > 317) back.classList.remove('back');
        	if (timePassed > 318) webDesign.classList.remove('design');
        	if (timePassed > 319) graphicDesign.classList.remove('design');
   			if (timePassed > 320) clearInterval(timer);  
        	}, 20); return small1 = big1;
       	}	
    }
  
  	if (big1 === 'projectsFontSize') {
    	if(WD.style.opacity > 0.1) {
      		wbg.style.pointerEvents = "auto";	
      		wbg.style.cursor = "pointer";
          
        	let start = Date.now();
      	
			let timer = setInterval(function() {
			let timePassed = Date.now() - start;

			projects.style.fontSize = 64 + timePassed / 20 + "px";
        	WD.style.opacity = 1 - timePassed / 320;
			works.style.fontSize = 80 - timePassed / 20 + "px";
			wdT.style.opacity = 1 - timePassed / 320;
            project1.style.opacity = 0 + timePassed / 320;
        	
        	if (timePassed > 319) back.classList.remove('back');
   			if (timePassed > 320) clearInterval(timer);         

			}, 20); return small1 = big1;
        }
      	else if(DG.style.opacity > 0.1) {
      		wbg.style.pointerEvents = "auto";	
      		wbg.style.cursor = "pointer";
          	document.body.style.overflowY = "hidden";
          
        	let start = Date.now();
      	
			let timer = setInterval(function() {
			let timePassed = Date.now() - start;

			projects.style.fontSize = 64 + timePassed / 20 + "px";
        	DG.style.opacity = 1 - timePassed / 320;
            images.style.opacity = 1 - timePassed / 320;
			works.style.fontSize = 80 - timePassed / 20 + "px";
            gdT.style.opacity = 1 - timePassed / 320;
            project1.style.opacity = 0 + timePassed / 320;
        
        	if (timePassed > 319) backS.classList.remove('back');
   			if (timePassed > 320) clearInterval(timer);         

			}, 20); return small1 = big1;
        }
        else {      
      		wbg.style.pointerEvents = "auto";	
      		wbg.style.cursor = "pointer";
          	
        	let start = Date.now();
      	
			let timer = setInterval(function() {
			let timePassed = Date.now() - start;

			projects.style.fontSize = 64 + timePassed / 20 + "px";
        	D.style.opacity = 1 - timePassed / 320;
			works.style.fontSize = 80 - timePassed / 20 + "px";
        	
        	if (timePassed > 317) back.classList.remove('back');
        	if (timePassed > 318) webDesign.classList.remove('design');
        	if (timePassed > 319) graphicDesign.classList.remove('design');
   			if (timePassed > 320) clearInterval(timer);  
            project1.style.opacity = 0 + timePassed / 320;
        	}, 20); return small1 = big1;
       	}	
    }
  
  	if (big1 === 'aboutFontSize') {
    	if(WD.style.opacity > 0.1) {
          
        	let start = Date.now();
      	
			let timer = setInterval(function() {
			let timePassed = Date.now() - start;

			about.style.fontSize = 64 + timePassed / 20 + "px";
        	WD.style.opacity = 1 - timePassed / 320;
			works.style.fontSize = 80 - timePassed / 20 + "px";
			wdT.style.opacity = 1 - timePassed / 320;
        	
        	if (timePassed > 319) back.classList.remove('back');
   			if (timePassed > 320) clearInterval(timer);         

			}, 20); return small1 = big1;
        }
      	else if(DG.style.opacity > 0.1) {
          	document.body.style.overflowY = "hidden";
          
        	let start = Date.now();
      	
			let timer = setInterval(function() {
			let timePassed = Date.now() - start;

			about.style.fontSize = 64 + timePassed / 20 + "px";
        	DG.style.opacity = 1 - timePassed / 320;
            images.style.opacity = 1 - timePassed / 320;
			works.style.fontSize = 80 - timePassed / 20 + "px";
            gdT.style.opacity = 1 - timePassed / 320;
        
        	if (timePassed > 319) backS.classList.remove('back');
   			if (timePassed > 320) clearInterval(timer);         

			}, 20); return small1 = big1;
        }
        else {
        	let start = Date.now();
      	
			let timer = setInterval(function() {
			let timePassed = Date.now() - start;

			about.style.fontSize = 64 + timePassed / 20 + "px";
        	D.style.opacity = 1 - timePassed / 320;
			works.style.fontSize = 80 - timePassed / 20 + "px";
        	
        	if (timePassed > 316) back.classList.remove('back');
        	if (timePassed > 318) webDesign.classList.remove('design');
        	if (timePassed > 319) graphicDesign.classList.remove('design');
   			if (timePassed > 320) clearInterval(timer);  
        	}, 20); return small1 = big1;
       	}	
    }
}
function sProjects() {
	if (big1 === 'homeFontSize') {
    	let start = Date.now();
  	
		let timer = setInterval(function() {
		let timePassed = Date.now() - start;

		home.style.fontSize = 64 + timePassed / 20 + "px";
        hi.style.opacity = 0 + timePassed / 320;
		projects.style.fontSize = 80 - timePassed / 20 + "px";
        project1.style.opacity = 1 - timePassed / 320;
		  
		if (timePassed > 318) wbg.style.pointerEvents = "none";	
      	if (timePassed > 319) wbg.style.cursor = "default";
   		if (timePassed > 320) clearInterval(timer);

		}, 20);
      return small1 = big1;
    }
  
  	if (big1 === 'worksFontSize') {
    	let start = Date.now();
      
      	webDesign.classList.add('design');
        graphicDesign.classList.add('design');
  	
		let timer = setInterval(function() {
		let timePassed = Date.now() - start;

		works.style.fontSize = 64 + timePassed / 20 + "px";
        D.style.opacity = 0 + timePassed / 320;
		projects.style.fontSize = 80 - timePassed / 20 + "px";
        project1.style.opacity = 1 - timePassed / 320;
          
		if (timePassed > 318) wbg.style.pointerEvents = "none";	
      	if (timePassed > 319) wbg.style.cursor = "default";
   		if (timePassed > 320) clearInterval(timer);

		}, 20);
      return small1 = big1;
    }
  
  	if (big1 === 'aboutFontSize') {
      
    	let start = Date.now();
  	
		let timer = setInterval(function() {
		let timePassed = Date.now() - start;

		about.style.fontSize = 64 + timePassed / 20 + "px";
		projects.style.fontSize = 80 - timePassed / 20 + "px";
        project1.style.opacity = 1 - timePassed / 320;
          
		if (timePassed > 318) wbg.style.pointerEvents = "none";	
      	if (timePassed > 319) wbg.style.cursor = "default";
   		if (timePassed > 320) clearInterval(timer);

		}, 20);
      return small1 = big1;
    }
}
function sAbout() {
	if (big1 === 'homeFontSize') {
    	let start = Date.now();
  	
		let timer = setInterval(function() {
		let timePassed = Date.now() - start;

		home.style.fontSize = 64 + timePassed / 20 + "px";
        hi.style.opacity = 0 + timePassed / 320;
		about.style.fontSize = 80 - timePassed / 20 + "px";
        
   		if (timePassed > 320) clearInterval(timer);

		}, 20);
      return small1 = big1;
    }
  
  	if (big1 === 'worksFontSize') {
    	let start = Date.now();
      
      	webDesign.classList.add('design');
        graphicDesign.classList.add('design');
  	
		let timer = setInterval(function() {
		let timePassed = Date.now() - start;

		works.style.fontSize = 64 + timePassed / 20 + "px";
        D.style.opacity = 0 + timePassed / 320;
		about.style.fontSize = 80 - timePassed / 20 + "px";
		
   		if (timePassed > 320) clearInterval(timer);

		}, 20);
      return small1 = big1;
    }
  
  	if (big1 === 'projectsFontSize') {
      	wbg.style.pointerEvents = "auto";	
      	wbg.style.cursor = "pointer";
      
    	let start = Date.now();
  	
		let timer = setInterval(function() {
		let timePassed = Date.now() - start;

		projects.style.fontSize = 64 + timePassed / 20 + "px";
		about.style.fontSize = 80 - timePassed / 20 + "px";
        project1.style.opacity = 0 + timePassed / 320;
		
   		if (timePassed > 320) clearInterval(timer);

		}, 20);
      return small1 = big1;
    }
}

function FontSizeWD() {
  	let start = Date.now();
  	
		let timer = setInterval(function() {
		let timePassed = Date.now() - start;

		webDesign.style.fontSize = 96 + timePassed / 10 + "px";

   		if (timePassed > 160) clearInterval(timer);

		}, 20);
}
function unFontSizeWD() {
  	let start = Date.now();
  	
		let timer = setInterval(function() {
		let timePassed = Date.now() - start;

		webDesign.style.fontSize = 112 - timePassed / 10 + "px";

   		if (timePassed > 160) clearInterval(timer);

		}, 20);
}
function FontSizeGD() {
  	let start = Date.now();
  	
		let timer = setInterval(function() {
		let timePassed = Date.now() - start;

		graphicDesign.style.fontSize = 96 + timePassed / 10 + "px";

   		if (timePassed > 160) clearInterval(timer);

		}, 20);
}
function unFontSizeGD() {
  	let start = Date.now();
  	
		let timer = setInterval(function() {
		let timePassed = Date.now() - start;

		graphicDesign.style.fontSize = 112 - timePassed / 10 + "px";

   		if (timePassed > 160) clearInterval(timer);

		}, 20);
}
  
function clickWD() {
    	if(D.style.opacity > 0.99) {
          back.classList.add('back');
          let start = Date.now();
  	
			let timer = setInterval(function() {
			let timePassed = Date.now() - start;

        	D.style.opacity = 1 - timePassed / 320;
            WD.style.opacity = 0 + timePassed / 320;
            wdT.style.opacity = 0 + timePassed / 320;
            
        	if (timePassed > 318) webDesign.classList.remove('design');
        	if (timePassed > 319) graphicDesign.classList.remove('design');
   			if (timePassed > 320) clearInterval(timer);

			}, 20);
		}
}
function back1() {
       	let start = Date.now();
  	
		let timer = setInterval(function() {
		let timePassed = Date.now() - start;

        back.style.fontSize = 64 + timePassed / 10 + "px";
		
   		if (timePassed > 160) clearInterval(timer);

	}, 20);
}
function back0() {
       	let start = Date.now();
  	
		let timer = setInterval(function() {
		let timePassed = Date.now() - start;

        back.style.fontSize = 80 - timePassed / 10 + "px";
		
   		if (timePassed > 160) clearInterval(timer);

	}, 20);
}
function clickBack() {
    	if(WD.style.opacity > 0.99) {
          webDesign.classList.add('design');
          graphicDesign.classList.add('design');
          let start = Date.now();
  	
			let timer = setInterval(function() {
			let timePassed = Date.now() - start;

        	WD.style.opacity = 1 - timePassed / 320;
			wdT.style.opacity = 1 - timePassed / 320;
            D.style.opacity = 0 + timePassed / 320;
            
        	if (timePassed > 319) back.classList.remove('back');
   			if (timePassed > 320) clearInterval(timer);

			}, 20);
		}
}

function clickGD() {
    	if(D.style.opacity > 0.99) {
          backS.classList.add('back');
          images.classList.add('images');
          document.body.style.overflowY = "scroll";
          let start = Date.now();
  	
			let timer = setInterval(function() {
			let timePassed = Date.now() - start;

        	D.style.opacity = 1 - timePassed / 320;
            DG.style.opacity = 0 + timePassed / 320;
            images.style.opacity = 0 + timePassed / 320;
            gdT.style.opacity = 0 + timePassed / 320;
            
        	if (timePassed > 318) webDesign.classList.remove('design');
        	if (timePassed > 319) graphicDesign.classList.remove('design');
   			if (timePassed > 320) clearInterval(timer);

			}, 20);
		}
}
function backS1() {
       	let start = Date.now();
  	
		let timer = setInterval(function() {
		let timePassed = Date.now() - start;

        backS.style.fontSize = 64 + timePassed / 10 + "px";
		
   		if (timePassed > 160) clearInterval(timer);

	}, 20);
}
function backS0() {
       	let start = Date.now();
  	
		let timer = setInterval(function() {
		let timePassed = Date.now() - start;

        backS.style.fontSize = 80 - timePassed / 10 + "px";
		
   		if (timePassed > 160) clearInterval(timer);

	}, 20);
}
function clickBackS() {
    	if(DG.style.opacity > 0.99) {
          document.body.style.overflowY = "hidden";
          webDesign.classList.add('design');
          graphicDesign.classList.add('design');
          
          let start = Date.now();
  	
			let timer = setInterval(function() {
			let timePassed = Date.now() - start;

        	DG.style.opacity = 1 - timePassed / 320;
            images.style.opacity = 1 - timePassed / 320;
            gdT.style.opacity = 1 - timePassed / 320;
            D.style.opacity = 0 + timePassed / 320;
			
        	if (timePassed > 319) backS.classList.remove('back');
   			if (timePassed > 320) clearInterval(timer);

			}, 20);
		}
}

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting && images.style.opacity > 0.99) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.im');

  for (let elm of elements) {
    observer.observe(elm);
  }