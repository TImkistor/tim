import DIV from '../lib_element/div.js';
import H1 from '../lib_element/h1.js'
import IMG from '../lib_element/img.js';

export default function home_mob(){
        const div = new DIV('home_div',"90%",window.innerHeight,'black')
        div.element.style.marginLeft = "5%"
        div.element.style.borderRadius = "10%"
        div.element.style.boxShadow = "0px 0px 20px 5px blue"
        div.animationShadow('mouseover','0px 5px 100px 10px blue')
        div.animationShadow('mouseleave','0px 0px 20px 5px blue')
        div.appendTo(document.body)

        const h1 = new H1('home_h1','RusAnonymTeam pressent','white','center');
        h1.element.style.fontSize = "60"
        h1.element.style.textShadow = "blue 1px 0 10px"
            if (parseInt(div.element.style.height) < 1500){
                h1.element.style.paddingTop = "10%"
             }
             else{
                h1.element.style.paddingTop = "40%"
             }
        h1.appendTo(div.element)
        h1.animationShiftText(50)
          .then(() => {
            const h2 = new H1('home_h2', 'Занимаемся разработкой', 'white', 'center');
            h2.element.style.fontSize = "60"
            h2.element.style.fontWeight = "normal"
            h2.element.style.textShadow = "blue 1px 0 10px"
            h2.appendTo(div.element)
            return h2.animationShiftText(50);
          })
          .then(() => {
            const h3 = new H1('home_h3', 'Web приложений', 'white', 'center');
            h3.element.style.fontSize = "60"
            h3.element.style.fontWeight = "normal"
            h3.element.style.textShadow = "blue 1px 0 10px"
            h3.appendTo(div.element)
            return h3.animationShiftText(50);
          }).then(()=>{
            const h4 = new H1('home_h4', 'Мои контакты', 'white', 'center');
            h4.element.style.fontSize = "60"
            h4.element.style.fontWeight = "normal"
            h4.element.style.textShadow = "blue 1px 0 10px"
            h4.appendTo(div.element)
            return h4.animationShiftText(50);
          })
          .then(()=>{
            const div2 = new DIV('home_div2','50%','20%','black') 
            div2.element.style.display = "flex"
            div2.element.style.marginLeft = "25%"
            div2.element.style.flexDirection = "column"
            div2.element.style.alignItems = "center"
            div2.appendTo(div.element)

            const img1 = new IMG('home_img1','https://github.com/rus-https/my-site/blob/main/device/img/github.png?raw=true','180px','180px')
            img1.element.style.borderRadius = '100%'
            img1.element.style.position = "realitive"
            img1.animationAdvent(10)
            img1.AnimationRotate("mouseover","right")
            img1.AnimationRotate("mouseleave","left")
            img1.link("click","https://github.com/rus-https")
            img1.appendTo(div2.element)

            const img2 = new IMG('home_img2','https://github.com/rus-https/my-site/blob/main/device/img/telegram.png?raw=true','180px','180px')
            img2.element.style.borderRadius = '100%'
            img2.element.style.position = "realitive"
            img2.element.style.marginTop = "10%"
            img2.animationAdvent(10)
            img2.AnimationRotate("mouseover","right")
            img2.AnimationRotate("mouseleave","left")
            img2.link("click","https://t.me/Rus_Https")
            img2.appendTo(div2.element)
 
            const img3 = new IMG('home_img3','https://github.com/rus-https/my-site/blob/main/device/img/vk.png?raw=true','180px','180px')
            img3.element.style.borderRadius = '100%'
            img3.element.style.position = "realitive"
            img3.element.style.marginTop = "10%"
            img3.animationAdvent(10)
            img3.AnimationRotate("mouseover","right")
            img3.AnimationRotate("mouseleave","left")
            img3.link("click","https://vk.com/rus_https")
            img3.appendTo(div2.element)
          })
}