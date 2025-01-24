//navbar start
let div=document.querySelector("div#head")
const getPost=()=>{
    let html=""
    axios.get("http://localhost:3004/header").then((res)=>{
        res.data.map((elem)=>{
           html+=`<img src="${elem.src}"/>`
        })
        div.innerHTML=html
    })
}
getPost();

let div1=document.querySelector("a#basket")
const getPost1=()=>{
    let html1=""
    axios.get("http://localhost:3004/navbar").then((res)=>{
        res.data.map((elem)=>{
            html1+=`<img class="w-[24px]" src="${elem.src}"/>`
        })
        div1.innerHTML=html1
    }) 
}
getPost1()

let div2=document.querySelector("a#enter")
const getPost2=()=>{
    let html2=""
    axios.get("http://localhost:3004/navbar1").then((res)=>{
        res.data.map((elem)=>{
            html2+=`<span class="text-[#BE185D] font-semibold">${elem.text}</span>`
            html2+=`<img class="w-[24px]" src="${elem.src}"/>`
        })
        div2.innerHTML=html2
    }) 
}
getPost2()

let div3=document.querySelector("div#search")
const getPost3=()=>{
    let html3=""
    axios.get("http://localhost:3004/search").then((res)=>{
        res.data.map((elem)=>{
            html3+=`<span class="text-[#A3A3A9]">${elem.text}</span>`
            html3+=`<img class="w-[24px]" src="${elem.src}"/>`
        })
        div3.innerHTML=html3
    }) 
}
getPost3()

let div4=document.querySelector("a#logo")
const getPost4=()=>{
    let html4=""
    axios.get("http://localhost:3004/logo").then((res)=>{
        res.data.map((elem)=>{
            html4+=`<img src="${elem.src}"/>`
        })
        div4.innerHTML=html4
    }) 
}
getPost4()
//navbar end
//menu start
let star=document.querySelector("a#nav1")
const getPost5=()=>{
    axios.get("http://localhost:3004/nav").then((res)=>{
        if(res.data.length > 0){
            let firstItem=res.data[0];
            let html5=`<img class="w-[24px]" src="${firstItem.src}"/>`
            star.innerHTML=html5
        }
    })
}
getPost5()

let navElements=document.querySelectorAll("a#nav")
const navbar=()=>{
    axios.get("http://localhost:3004/nav").then((res)=>{
        navElements.forEach((navElement,index)=>{
            if(res.data[index]){
                let span = document.createElement("span");
                span.className="text-white text-sm transition-all hover:text-[#B6265A]"
                span.textContent=res.data[index].text;
                navElement.appendChild(span)
            }
        })
    })
}
navbar()
//menu end
//swiper1 start
let swiperContainer = document.querySelector("div#swiper1");
const swiperjs = () => {
    axios.get("http://localhost:3004/swiper").then((res) => {
        res.data.forEach((item) => {
            let imgWrapper = document.createElement("div");
            imgWrapper.className = "swiper-slide"; 
            let imgElement = document.createElement("img");
            imgElement.src = item.src;
            imgWrapper.appendChild(imgElement);
            swiperContainer.appendChild(imgWrapper);
        });
    });
};
swiperjs();
//swiper1 end
//swiper2(pinkbox) start
let pink = document.querySelector("div#pink-box");
const pinkBox = () => {
  axios.get("http://localhost:3004/swiper2").then((res) => {
    if (res.data[0]) {
      let firstImg = document.createElement('img');
      firstImg.src = res.data[0].src1; 
      let secondImg = document.createElement('img');
      secondImg.src = res.data[0].src2; 
      pink.appendChild(firstImg);
      pink.appendChild(secondImg);
      let haraj=document.createElement('span')
      haraj.textContent=res.data[0].text
      haraj.className="text-white font-bold text-[14px]"
      pink.appendChild(haraj)
    }
  });
}
pinkBox();

let seeAll=document.querySelector("a.see-all")
const seeAl=()=>{
    axios.get("http://localhost:3004/swiper2").then((res)=>{
        if(res.data[10]){
            let seeAllImg=document.createElement('img')
            seeAllImg.className="w-[32px]"
            seeAllImg.src=res.data[10].src
            let seeAllSpan=document.createElement('span')
            seeAllSpan.className="text-white text-[14px] font-bold"
            seeAllSpan.textContent=res.data[10].text
            seeAll.appendChild(seeAllImg)
            seeAll.appendChild(seeAllSpan)
        }
    })
}
seeAl()

let swiperImgs = document.querySelectorAll("div.swimg");
let swiperPrices = document.querySelectorAll("div.swprice");
let swiperOffs = document.querySelectorAll("div.swoff");

const swiper2 = () => {
    axios.get("http://localhost:3004/swiper2").then((res) => {
        res.data.slice(1, 10).forEach((item, index) => {
            if (swiperImgs[index] && swiperPrices[index] && swiperOffs[index]) {
                let swiperImg = swiperImgs[index];
                let swiperPrice = swiperPrices[index];
                let swiperOff = swiperOffs[index];
                let swimg = document.createElement('img');
                swimg.className = "rounded-md";
                swimg.src = item.src;
                let swinfo = document.createElement('span');
                swinfo.className = "text-[#171717] text-[13px] self-start";
                swinfo.textContent = item.info;
                let firstChild = swiperImg.firstChild;
                swiperImg.insertBefore(swimg, firstChild);
                swiperImg.insertBefore(swinfo, firstChild);
                let bPrice = document.createElement('span');
                bPrice.className = "line-through text-[14px] text-[#A3A3A3]";
                bPrice.textContent = item.price;
                let aPrice = document.createElement('span');
                aPrice.className = "flex text-[14px]";
                aPrice.textContent = item.price2;
                let toman = document.createElement('img');
                toman.src = item.src2;
                toman.className = "w-[20px]";
                aPrice.appendChild(toman);
                swiperPrice.appendChild(bPrice);
                swiperPrice.appendChild(aPrice);
                let swoff = document.createElement('span');
                swoff.className = "text-[14px] text-white";
                swoff.textContent = item.off;
                swiperOff.appendChild(swoff);
            }
        });
    });
};
swiper2();
//swiper2(pinkbox) end
//swiper3 start
let swiperContainer2 = document.querySelector("div#swiper2")

const swiperJs2=()=>{
    axios.get("http://localhost:3004/swiper3").then((res)=>{
        res.data.forEach((item) => {
            let imgWrapper = document.createElement("div");
            imgWrapper.className = "swiper-slide w-full"; 
            let imgElement = document.createElement("img");
            imgElement.src = item.src;
            imgElement.className="rounded-md"
            imgWrapper.appendChild(imgElement);
            swiperContainer2.appendChild(imgWrapper);
        })
    })
}
swiperJs2()
//swiper3 end
//swiper4(porfoorosh) start
let swiperImgs2=document.querySelectorAll("div.swimg2")
let swiperPrices2 = document.querySelectorAll("div.swprice2");
let swiperOffs2 = document.querySelectorAll("div.swoff2");

const swiper3=()=>{
    axios.get("http://localhost:3004/swiper4").then((res)=>{
        res.data.slice(0, 9).forEach((item, index)=>{
            if(swiperImgs2[index] && swiperPrices2[index] && swiperOffs2[index]){
                let swiperImg = swiperImgs2[index];
                let swiperPrice = swiperPrices2[index];
                let swiperOff = swiperOffs2[index];
                let swimg2=document.createElement('img')
                swimg2.src=item.src1
                let swinfo2=document.createElement('span')
                swinfo2.className="text-[#A3A3A3] text-[14px] self-start"
                let swinfo=document.createElement('span')
                swinfo.className="text-[#171717] text-[13px] self-start"
                swinfo2.textContent=item.brand
                swinfo.textContent=item.info
                let firstChild = swiperImg.firstChild;
                swiperImg.insertBefore(swimg2, firstChild);
                swiperImg.insertBefore(swinfo2, firstChild);
                swiperImg.insertBefore(swinfo, firstChild);
                let bPrice = document.createElement('span');
                bPrice.className = "line-through text-[14px] text-[#A3A3A3]";
                bPrice.textContent = item.price;
                let aPrice = document.createElement('span');
                aPrice.className = "flex text-[14px]";
                aPrice.textContent = item.price2;
                let toman = document.createElement('img');
                toman.src = item.toman;
                toman.className = "w-[20px]";
                aPrice.appendChild(toman);
                swiperPrice.appendChild(bPrice);
                swiperPrice.appendChild(aPrice);
                let swoff = document.createElement('span');
                swoff.className = "text-[14px] text-white";
                swoff.textContent = item.off;
                swiperOff.appendChild(swoff);
            }
        })
    })
}
swiper3()
//swiper4(porfoorosh) end
//categories start
let category=document.querySelectorAll("div.categories>a")

const categories=()=>{
    axios.get("http://localhost:3004/categories").then((res)=>{
        res.data.slice(0, 6).forEach((item, index)=>{
            if(category[index]){
                let categoryImg=document.createElement('img')
                categoryImg.className="w-[64px]"
                categoryImg.src=item.src
                let categoryText=document.createElement('span')
                categoryText.className="font-bold xl:text-[14px] text-[12px]"
                categoryText.textContent=item.text
                category[index].appendChild(categoryImg);
                category[index].appendChild(categoryText);
            }
        })
    })
}
categories()
//categories end
//swiper5 start
let swiperContainer3 = document.querySelector("div#swiper3")

const swiperJs3=()=>{
    axios.get("http://localhost:3004/swiper5").then((res)=>{
        res.data.forEach((item) => {
            let imgWrapper = document.createElement("div");
            imgWrapper.className = "swiper-slide w-full"; 
            let imgElement = document.createElement("img");
            imgElement.src = item.src;
            imgElement.className="rounded-md"
            imgWrapper.appendChild(imgElement);
            swiperContainer3.appendChild(imgWrapper);
        })
    })
}
swiperJs3()
//swiper5 end
//twoimage start
let twoImg=document.querySelectorAll("div.twoimg > a")

const twoImage=()=>{
    axios.get("http://localhost:3004/twoimg").then((res)=>{
        res.data.forEach((item, index)=>{
            if(twoImg[index]){
                let imgs=document.createElement("img")
                imgs.className="rounded-md"
                imgs.src=item.src
                twoImg[index].appendChild(imgs);
            }
        })
    })
}
twoImage()
//twoimage end
//swiper6(jadidtarin) start
let swiperImgs3=document.querySelectorAll("div.swimg3")
let swiperPrices3 = document.querySelectorAll("div.swprice3");
let swiperOffs3 = document.querySelectorAll("div.swoff3");

const swiper4=()=>{
    axios.get("http://localhost:3004/swiper6").then((res)=>{
        res.data.slice(0, 9).forEach((item, index)=>{
            if(swiperImgs3[index] && swiperPrices3[index] && swiperOffs3[index]){
                let swiperImg = swiperImgs3[index];
                let swiperPrice = swiperPrices3[index];
                let swiperOff = swiperOffs3[index];
                let swimg3=document.createElement('img')
                swimg3.src=item.src1
                let swinfo3=document.createElement('span')
                swinfo3.className="text-[#A3A3A3] text-[14px] self-start"
                let swinfo=document.createElement('span')
                swinfo.className="text-[#171717] text-[13px] self-start"
                swinfo3.textContent=item.brand
                swinfo.textContent=item.info
                let firstChild = swiperImg.firstChild;
                swiperImg.insertBefore(swimg3, firstChild);
                swiperImg.insertBefore(swinfo3, firstChild);
                swiperImg.insertBefore(swinfo, firstChild);
                let bPrice = document.createElement('span');
                bPrice.className = "line-through text-[14px] text-[#A3A3A3]";
                bPrice.textContent = item.price;
                let aPrice = document.createElement('span');
                aPrice.className = "flex text-[14px]";
                aPrice.textContent = item.price2;
                let toman = document.createElement('img');
                toman.src = item.toman;
                toman.className = "w-[20px]";
                aPrice.appendChild(toman);
                swiperPrice.appendChild(bPrice);
                swiperPrice.appendChild(aPrice);
                let swoff = document.createElement('span');
                swoff.className = "text-[14px] text-white";
                swoff.textContent = item.off;
                swiperOff.appendChild(swoff);
            }
        })
    })
}
swiper4()
//swiper6(jadidtarin) end
//fourimage start
let img4=document.querySelectorAll('div.img4>a')

const fourImage=()=>{
    axios.get("http://localhost:3004/img4").then((res)=>{
        res.data.forEach((item, index)=>{
            if(img4[index]){
                let imgs = document.createElement('img')
                imgs.className='rounded-md'
                imgs.src=item.src
                img4[index].appendChild(imgs)
            }
        })
    })
}
fourImage()
//fourimage end
//swiper7(pishnahad) start
let swiperImgs4=document.querySelectorAll("div.swimg4")
let swiperPrices4 = document.querySelectorAll("div.swprice4");
let swiperOffs4 = document.querySelectorAll("div.swoff4");

const swiper5=()=>{
    axios.get("http://localhost:3004/swiper7").then((res)=>{
        res.data.slice(0, 9).forEach((item, index)=>{
            if(swiperImgs4[index] && swiperPrices4[index] && swiperOffs4[index]){
                let swiperImg = swiperImgs4[index];
                let swiperPrice = swiperPrices4[index];
                let swiperOff = swiperOffs4[index];
                let swimg3=document.createElement('img')
                swimg3.src=item.src1
                let swinfo3=document.createElement('span')
                swinfo3.className="text-[#A3A3A3] text-[14px] self-start"
                let swinfo=document.createElement('span')
                swinfo.className="text-[#171717] text-[13px] self-start"
                swinfo3.textContent=item.brand
                swinfo.textContent=item.info
                let firstChild = swiperImg.firstChild;
                swiperImg.insertBefore(swimg3, firstChild);
                swiperImg.insertBefore(swinfo3, firstChild);
                swiperImg.insertBefore(swinfo, firstChild);
                let bPrice = document.createElement('span');
                bPrice.className = "line-through text-[14px] text-[#A3A3A3]";
                bPrice.textContent = item.price;
                let aPrice = document.createElement('span');
                aPrice.className = "flex text-[14px]";
                aPrice.textContent = item.price2;
                let toman = document.createElement('img');
                toman.src = item.toman;
                toman.className = "w-[20px]";
                aPrice.appendChild(toman);
                swiperPrice.appendChild(bPrice);
                swiperPrice.appendChild(aPrice);
                let swoff = document.createElement('span');
                swoff.className = "text-[14px] text-white";
                swoff.textContent = item.off;
                swiperOff.appendChild(swoff);
            }
        })
    })
}
swiper5()
//swiper7(pishnahad) end
//products start
let products=document.querySelectorAll("div.products>a")

const product=()=>{
    axios.get("http://localhost:3004/products").then((res)=>{
        res.data.forEach((item, index)=>{
            if(products[index]){
                let imgs=document.createElement('img')
                imgs.className="rounded-md"
                imgs.src=item.src
                products[index].appendChild(imgs)
            }
        })
    })
}
product()
//products end
//brands start
let brands=document.querySelectorAll("div.brands>a")

const brand=()=>{
    axios.get("http://localhost:3004/brands").then((res)=>{
        res.data.forEach((item, index)=>{
            if(brands[index]){
                let imgs=document.createElement('img')
                imgs.src=item.src
                brands[index].appendChild(imgs)
            }
        })
    })
}
brand()
//brands end
//lastimge start
let lastImage=document.querySelector("div.last-img>a")

const lastImg=()=>{
    axios.get("http://localhost:3004/lastImage").then((res)=>{
        res.data.map((elem)=>{
        let img=document.createElement('img')
        img.className='rounded-md'
        img.src=elem.src
        lastImage.appendChild(img)
        })
    })
}
lastImg()
//lastimage end
//footer start
let socials=document.querySelectorAll('div.socials>a')
let socials2=document.querySelectorAll('div.socials2>a')
let communications=document.querySelector('div.communications')
let tell=document.querySelector('div.tel')
let tel=document.querySelector('div.tel>a')

const comms=()=>{
    axios.get("http://localhost:3004/socials").then((res)=>{
        res.data.slice(0,3).forEach((item, index)=>{
            if(socials[index]){
                let logo=document.createElement('img')
                logo.className='w-[24px]'
                logo.src=item.src
                socials[index].appendChild(logo)
            }
        })
        res.data.slice(0,3).forEach((item, index)=>{
            if(socials2[index]){
                let logo=document.createElement('img')
                logo.className='w-[24px]'
                logo.src=item.src
                socials2[index].appendChild(logo)
            }
        })
        if(res.data.length > 0){
            let firstItem=res.data[3]
            let text1=document.createElement('span')
            text1.className = 'text-white text-[16px]';
            text1.textContent = firstItem.text;
            communications.appendChild(text1);
        }
        if (res.data.length > 0) {
            let firstItem = res.data[4]; 
            let text2 = document.createElement('span');
            text2.className = 'text-white text-[14px]';
            text2.textContent = firstItem.text1;
            tell.insertBefore(text2, tel);
            tel.textContent = res.data[5].tel;
        }
    })
}
comms()

let footerSpan=document.querySelector('div.footerL')
let footerLeft=document.querySelectorAll('div.footerL>div>a')
let footerSpan2=document.querySelector('div.footerR')
let footerRight=document.querySelectorAll('div.footerR>div>a')

const footerL=()=>{
    axios.get("http://localhost:3004/footerL").then((res)=>{
        let firstItem=res.data[0]
        let text=document.createElement('span')
        text.className='text-white text-[16px]'
        text.textContent=firstItem.text
        footerSpan.insertBefore(text, footerSpan.firstChild);
        res.data.slice(1,7).forEach((item, index)=>{
            if(footerLeft[index]){
                footerLeft[index].textContent=item.text
            }
        })
    })
}
footerL()
const footerR=()=>{
    axios.get("http://localhost:3004/footerR").then((res)=>{
        let firstItem=res.data[0]
        let text=document.createElement('span')
        text.className='text-white text-[16px]'
        text.textContent=firstItem.text
        footerSpan2.insertBefore(text, footerSpan2.firstChild);
        res.data.slice(1,8).forEach((item, index)=>{
            if(footerRight[index]){
                footerRight[index].textContent=item.text
            }
        })
    })
}
footerR()

let footerEnd=document.querySelectorAll('div.footerE>a')
let copyRight=document.querySelector('div.copyRight')

const footerE=()=>{
    axios.get("http://localhost:3004/footerEnd").then((res)=>{
        let lastItem=res.data[3]
        let text=document.createElement('span')
        text.className='xl:text-[12px] text-[10px] text-[#A3A3A3]'
        text.textContent=lastItem.text
        copyRight.appendChild(text)
        res.data.slice(0,3).forEach((item, index)=>{
            if(footerEnd[index]){
                let imgs=document.createElement('img')
                imgs.className='w-[80%]'
                imgs.src=item.src
                footerEnd[index].appendChild(imgs)
            }
        })
    })
}
footerE()
//footer end
//submenu start
let subMenu = document.querySelector('div.sub-menu');
let subMenuItem = document.querySelectorAll('div.submenu-items > a');

function subMenuEvent() {
    subMenuItem.forEach((elem) => {
        elem.addEventListener('mouseover', () => {
            subMenu.classList.add('active');
        });
        elem.addEventListener('mouseleave', () => {
            setTimeout(() => {
                if (!subMenu.matches(':hover') && !elem.matches(':hover')) {
                    subMenu.classList.remove('active');
                }
            }, 100);
        });
    });
    subMenu.addEventListener('mouseover', () => {
        subMenu.classList.add('active');
    });
    subMenu.addEventListener('mouseleave', () => {
        subMenu.classList.remove('active');
    });
}
subMenuEvent();

let subm=document.querySelector('div.submenu>a')
let submen=document.querySelectorAll('div.submenu1>a')
let header=document.querySelectorAll('div.brr>a.header')
let ctgories=document.querySelectorAll('a.ctg')

const sabMenu=()=>{
    axios.get("http://localhost:3004/submenu").then((res)=>{
        if(res.data[0]){
            let cAll=document.createElement('span')
            let img=document.createElement('img')
            cAll.className="text-[#BE185D] text-[15px] font-bold"
            cAll.textContent=res.data[0].text
            img.className="w-[14px]"
            img.src=res.data[0].src
            subm.appendChild(cAll)
            subm.appendChild(img)
        }
        res.data.slice(1,4).forEach((item, index)=>{
            if(submen[index]){
                let span=document.createElement('span')
                span.className="text-[14px] font-bold"
                span.textContent=item.text
                submen[index].appendChild(span)
            }
        })
        const selectedItems=[res.data[4], res.data[9]]
        selectedItems.forEach((item, index)=>{
            if(header[index]){
                let span=document.createElement('span')
                span.className='bor pr-[7px] text-[14px] font-bold'
                span.textContent=item.text
                header[index].appendChild(span)
            }
        })
        const selectedItems2=res.data.slice(5,14)
        selectedItems2.splice(4,1)
        selectedItems2.forEach((item, index)=>{
            if(ctgories[index]){
                let span=document.createElement('span')
                span.className='text-[13px] text-[#8C8C8C]'
                span.textContent=item.text
                ctgories[index].appendChild(span)
            }
        })
    })
}
sabMenu()

//submenu end

//responsive menu and searchbar start
let search=document.querySelector('a.serch>img')
let serchBar=document.querySelector('section.searchBar')
let closeBtn=document.querySelector('button.closeBtn')

function searchBar(){
    search.addEventListener("click",()=>{
        serchBar.classList.add('active')
    })
}
searchBar()
function closeButton(){
    closeBtn.addEventListener("click",()=>[
        serchBar.classList.remove('active')
    ])
}
closeButton()

let closeBtn2=document.querySelector('button.closeBtn2')
let responsiveMenu=document.querySelector('section.resMenu')
let sekhat=document.querySelector('a.sekhat>img')

function resMenu(){
    sekhat.addEventListener('click',()=>{
        responsiveMenu.classList.add('active')
    })
}
resMenu()

function closeButton2(){
    closeBtn2.addEventListener("click",()=>{
        responsiveMenu.classList.remove('active')
    })
}
closeButton2()
//responsive menu and searchbar end

//responsive footer start
let khadamat=document.querySelectorAll('div.khadamat>span')
let sherkat=document.querySelectorAll('div.sherkat>span')

const resFooter1=()=>{
    axios.get("http://localhost:3004/footerL").then((res)=>{
        res.data.forEach((item, index)=>{
            if(khadamat[index]){
                khadamat[index].textContent=item.text
            }
        })
    })
}
resFooter1()

const resFooter2=()=>{
    axios.get("http://localhost:3004/footerR").then((res)=>{
        res.data.forEach((item, index)=>{
            if(sherkat[index]){
                sherkat[index].textContent=item.text
            }
        })
    })
}
resFooter2()

let fallow=document.querySelector('span.fallow')

const falow=()=>{
    axios.get("http://localhost:3004/socials").then((res)=>{
        fallow.textContent=res.data[3].text
    })
}
falow()

let app=document.querySelector('div.app>span')
let apps=document.querySelectorAll('div.app>div>span')

const applications=()=>{
    axios.get("http://localhost:3004/apps").then((res)=>{
        app.textContent=res.data[0].text
        res.data.slice(1,3).forEach((item, index)=>{
            if(apps[index]){
                apps[index].textContent=item.text
            }
        })
    })
}
applications()
//responsive footer end

//leftover start
let jaMande=document.querySelectorAll('#ja-monde')

const leftOver=()=>{
    axios.get("http://localhost:3004/jaMonde").then((res)=>{
        res.data.slice(0,5).forEach((item, index)=>{
            if(jaMande[index]){
                jaMande[index].textContent=item.text
            }
        })
    })
}
leftOver()

let imgsLeftOver=document.querySelectorAll('.leftOverImgs')

const leftOverImgs=()=>{
    axios.get("http://localhost:3004/leftOverImgs").then((res)=>{
        res.data.slice(0,2).forEach((item, index)=>{
            if(imgsLeftOver[index]){
                imgsLeftOver[index].src=item.src
            }
        })
    })
}
leftOverImgs()
//leftover end

//responsive search and menu start
let searchBarResponsive=document.querySelectorAll('.resSearchBar')

const resSearchBar=()=>{
    axios.get("http://localhost:3004/responsiveSearchBar").then((res)=>{
        res.data.slice(0,9).forEach((item, index)=>{
            if(searchBarResponsive[index]){
                searchBarResponsive[index].textContent=item.text
            }
        })
    })
}
resSearchBar()

let responsiveMenuHeader=document.querySelectorAll('div.resMenuHeader>*')
let responsiveMenuRows=document.querySelectorAll('div.resMenuRows>a')

const resMenuHeader=()=>{
    axios.get("http://localhost:3004/resMenu").then((res)=>{
        res.data.slice(0,2).forEach((item, index)=>{
            if(responsiveMenuHeader[index]){
                responsiveMenuHeader[index].textContent=item.text
            }
        })
    })
}
resMenuHeader()

const resMenuRows=()=>{
    axios.get("http://localhost:3004/resMenu").then((res)=>{
        res.data.slice(2,13).forEach((item, index)=>{
            if(responsiveMenuRows[index]){
                let imgs=document.createElement('img')
                let spans=document.createElement('span')
                imgs.src=item.src
                spans.className="text-[12px]"
                spans.textContent=item.text
                responsiveMenuRows[index].appendChild(imgs)
                responsiveMenuRows[index].appendChild(spans)
            }
        })
    })
}
resMenuRows()
//responsive search and menu end