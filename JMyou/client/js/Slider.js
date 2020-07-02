   class Slider {
       constructor(data) {
           this.data = data;
           this.slider = null;
           this.sliderBox = null;
           this.sliderControl = null;
           this.sliderNav = null;
           this.timer = null;
           this.index = 0; 
           this.len = this.data.length;
           this.sliderBoxItemWidth = 1519;
       }
       init() {
           this.createUI(); //1、创建标签
           //    this.setSliderItemBackgroundColor(); //2、设置背景颜色
           this.autoPlayer(); //3、自动播放
           this.addEventHandlerWithSlider();
           this.addEventHandlerWithControl();
           this.addEventHandlerWithSliderNavItem();
       }
       autoPlayer() {
           /* 核心：开启定时器，计算位移并设置标签的left */
           /* 注意：考虑临界情况 */
           this.timer = setInterval(() => {
               this.next();
               this.selectSliderNavItem(this.index);
           }, 2000);
       }
       addEventHandlerWithSlider() {
           this.slider.mouseenter(() => clearInterval(this.timer));
           this.slider.mouseleave(() => this.autoPlayer());
       }
       addEventHandlerWithControl() {
           $(".prev", this.slider).click(() => {
               this.prev();
               this.selectSliderNavItem(self.index)
           });

           $(".next", this.slider).click(() => {
               this.next()
               this.selectSliderNavItem(self.index)
           })
       }
       prev() {
           this.index--;
           if (this.index == -1) {
               this.index = this.len - 1;
           }
           this.sliderBox.css("left", -(this.index * this.sliderBoxItemWidth) + "px");
       }
       next() {
           this.index++;
           if (this.index == this.len) {
               this.index = 0;
           }
           this.sliderBox.css("left", -(this.index * this.sliderBoxItemWidth) + "px");
       }
       addEventHandlerWithSliderNavItem() {
           let self = this;
           //    let navItems = Array.from(this.sliderNav.children);
           //    navItems = this.sliderNav.children()
           this.sliderNav.children().each((idx, item) => {
               console.log("item", item, "idx", idx)
               item.onclick = function() {
                   // console.log(this, idx);
                   /* 当点击焦点的时候：(1) 设置当前标签的选中状态 (2) 切换显示对应的图片 */
                   // navItems.forEach(item => item.classList.remove("active"));
                   // this.classList.add("active");
                   console.log("+++");
                   self.selectSliderNavItem(idx);
                   self.index = idx;
                   //    self.sliderBox.style.left = -(self.index * self.sliderBoxItemWidth) + "px";
                   self.sliderBox.css("left", -(self.index * self.sliderBoxItemWidth) + "px");
               }
           })
       }
       selectSliderNavItem(idx) {
           //    let navItems = Array.from(this.sliderNav.children);
           //    navItems.forEach(item => item.classList.remove("active"));
           //    navItems[idx].classList.add("active");
           this.sliderNav.children().eq(idx).addClass("active").siblings().removeClass("active");
       }
       createUI() {
           let sliderBoxItem = this.data.map(item => `<li class="slider-box-item"><img src=${item}></li>`).join("");
           let sliderNavItem = this.data.map((item, idx) => `<li class="slider-nav-item ${idx == 0 ? "active" : ""}">${idx + 1}</li>
                `).join("");

           this.slider = $(`
                    <div class='slider'>
                        <ul class='slider-box'>
                            ${sliderBoxItem}
                        </ul>
                        <div class='slider-control'>
                            <span class="prev">&lt;</span> <span class="next">&gt;</span>
                        </div>
                        <ol class='slider-nav'>
                            ${sliderNavItem}
                        </ol>
                    </div>`);

           $("body").append(this.slider);
           this.sliderControl = $(".slider-control", this.slider);
           this.sliderBox = $(".slider-box", this.slider);
           this.sliderNav = $(".slider-nav", this.slider);
       }
       setSliderItemBackgroundColor() {
           Array.from(this.sliderBox.children).forEach(item => item.style.background = this.getRandomColor())
       }
       getRandomColor() {
           let r = parseInt(Math.random() * 256);
           let g = parseInt(Math.random() * 256)
           let b = parseInt(Math.random() * 256)
           return `rgb(${r},${g},${b})`;
       }
   }