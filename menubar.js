

document.addEventListener("DOMContentLoaded", function(){
    const header = document.getElementById('header')
    const menubar = document.getElementById('menubar')
    const globalnav_link_text_Store = document.getElementById('globalnav-link-text Store')
    const globalnav_link_text_Mac = document.getElementById('globalnav-link-text Mac')
    const globalnav_link_text_iPad = document.getElementById('globalnav-link-text iPad')
    const globalnav_link_text_iPhone = document.getElementById('globalnav-link-text iPhone')
    const globalnav_link_text_Watch = document.getElementById('globalnav-link-text Watch')
    const globalnav_link_text_AirPods = document.getElementById('globalnav-link-text AirPods')
    const globalnav_link_text_TV = document.getElementById('globalnav-link-text TV')
    const globalnav_link_text_Entertainment = document.getElementById('globalnav-link-text Entertainment')
    const globalnav_link_text_Acc = document.getElementById('globalnav-link-text Acc')
    const globalnav_link_text_Customer = document.getElementById('globalnav-link-text Customer')
    
    const menubar_flex = document.createElement('div')
    const menubar_ul = document.createElement('ul')
    const menubar_ul_2 = document.createElement('ul')
    const menubar_ul_3 = document.createElement('ul')
    
    menubar_flex.setAttribute('class', 'menubar_flex')
    menubar_ul.setAttribute('id', 'ul_1')
    menubar.setAttribute('id', 'menubar')


    // header.appendChild(menubar)
    menubar.appendChild(menubar_flex)
    menubar_flex.appendChild(menubar_ul)
    menubar_flex.appendChild(menubar_ul_2)
    menubar_flex.appendChild(menubar_ul_3)
    
    const Store_menubar = ['쇼핑하기', '최신 제품 쇼핑하기', 'Mac', 'iPad', 'iPhone', 'Apple Watch', '액세서리']
    const Store_menubar2 = ['빠른 링크','매장 찾기', '주문 상태', 'Apple Tarade In', '할부 방식']
    const Store_menubar3 = ['특별 할인 쇼핑하기','인증 리퍼비쉬 제품', '교육', '비즈니스']
    
    const Mac_menubar = ['Mac 살펴보기', 'Mac 모두 살펴보기', 'MacBook Air', 'MacBook Pro', 'iMac', 'Mac mini', 'Mac Studio', ' Mac Pro', '디스플레이']
    const Mac_menubar1 = ['Mac 쇼핑하기', 'Mac 쇼핑하기', 'Mac 악세서리', 'Apple Trade In', '할부방식']
    const Mac_menubar2 = ['Mac 지원', 'Mac을 위한 AppleCare+', 'MacOS Sonoma', 'Apple이 만든 앱', '연속성', 'iCloud+', 'Mac과 비즈니스', '교육']

    const menubar_li_first_store_menubar = document.createElement('li')
    const menubar_li_first_store_menubar2 = document.createElement('li')
    const menubar_li_first_store_menubar3 = document.createElement('li')

    menubar_li_first_store_menubar.innerHTML = Store_menubar[0]
    menubar_li_first_store_menubar.setAttribute('id', 'menubar_li_first_1')
    
    menubar_li_first_store_menubar2.innerHTML = Store_menubar2[0]
    menubar_li_first_store_menubar2.setAttribute('id', 'menubar_li_first_2')

    menubar_li_first_store_menubar3.innerHTML = Store_menubar3[0]
    menubar_li_first_store_menubar3.setAttribute('id', 'menubar_li_first_3')

    const hover_menubar_Store_show = function (){
        menubar.style.cssText = 'display:show; width:100vw; height:auto; background-color:#fff'
        menubar_ul.append(menubar_li_first_store_menubar)
        menubar_ul_2.append(menubar_li_first_store_menubar2)
        menubar_ul_3.append(menubar_li_first_store_menubar3)

        for(i=1; i<=Store_menubar.length-1; i++){
            const menubar_li = document.createElement('li')
            menubar_li.setAttribute('id', 'menubar_li')
            menubar_li.innerHTML = Store_menubar[i]
            menubar_ul.append(menubar_li)
            console.log(menubar_li)
    }
        for(k=0; k<=Store_menubar2.length-1; k++){
            const menubar_li_2 = document.createElement('li')
            menubar_li_2.setAttribute('id', 'menubar_li_2')
            menubar_li_2.innerHTML = Store_menubar2[k]
            menubar_ul_2.appendChild(menubar_li_2)
            console.log(menubar_li_2)
        }
        for(z=0; z<=Store_menubar3.length-1; z++){
            const menubar_li_3 = document.createElement('li')
            menubar_li_3.setAttribute('id', 'menubar_li_3')
            menubar_li_3.innerHTML = Store_menubar3[z]
            menubar_ul_3.appendChild(menubar_li_3)
            console.log(menubar_li_3)
        }
}

const hover_menubar_noneshow = function (){
    menubar.style.cssText = 'display:none; width:0vw; height:0vw;'
    menubar_ul.innerHTML = ''
    menubar_ul_2.innerHTML = ''
    menubar_ul_3.innerHTML = ''
}

let isMenuVisible = false;

globalnav_link_text_Store.addEventListener('mouseover', () => {
    if (!isMenuVisible) {
        hover_menubar_Store_show();
        isMenuVisible = true;
    }
});

menubar.addEventListener('mouseleave', () => {
    if (isMenuVisible) {
        hover_menubar_noneshow();
        isMenuVisible = false;
    }
});


});