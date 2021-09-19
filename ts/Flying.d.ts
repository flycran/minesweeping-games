/*
///<reference path = "Flying.d.ts" />
*/
declare var f: flying
interface flying {
   (str: any): FlyHTML | HTMLElement;
   FlyHTML: new (eles?: any) => FlyHTML,
   on: Function,
   _selector: {
      shell: Function,
      structure: Function,
      indexStr: Function,
      subject: Function
   }
   getJSON(url: string, callback: (data: any) => any): void
}
declare class FlyHTML {
   [x: string]: HTMLElement | any
   [Symbol.iterator]: any
   [Symbol.toStringTag]: any
   length: number
   constructor(eles?: any)
   /**
    * 后代选择器
    * @param str : string 选择器字符
    */
   f(str: string): Array<HTMLElement> | HTMLElement
   /**
    * 子代选择器
    * @param str : string 选择器字符
    */
   d(str: string): Array<HTMLElement> | HTMLElement
   /**
    * 父代选择器
    * @param str : string 选择器字符
    */
   p(str: string): Array<HTMLElement> | HTMLElement
   /**
    * 兄弟代选择器
    * @param str : string 选择器字符
    */
   b(str: string): Array<HTMLElement> | HTMLElement
   /**
    * 添加事件侦听器
    * @param type : string 表示事件类型的字符串
    * @param listener ?: Function 事件函数
    */
   on(type: ElementEvent): this
   /**
    * 添加事件侦听器
    * @param type : ElementEvent 表示一组事件的ElementEvent对象
    * @param listener ?: Function 事件函数
    */
   on(type: string, listener: Function): this
   /**
    * 事件委托
    * @param eve ：string 事件类型
    * @param str : string 委托元素选择器
    * @param listener : Function 事件函数
    */
   en(type: string, str: string, listener?: Function): this
   /**
    * 事件委托
    * @param elementEvent ：ElementEvent 表示一组事件的ElementEvent对象
    * @param str : string 委托元素选择器
    * @param listener : Function 事件函数
    */
   en(elementEvent: ElementEvent, str: string, listener?: Function): this
   /**
    * 子代元素集合，FlyHTML的实例
    */
   child: FlyHTML
   /**
    * 后代元素集合，FlyHTML的实例
    */
   childs: FlyHTML
   /**
    * 父代元素集合，FlyHTML的实例
    */
   parents: FlyHTML
   /**
    * 兄弟元素集合，FlyHTML的实例
    */
   brother: FlyHTML
   /**
    * 遍历元素
    * @param callback : (item: any, index: number, flyHTML: any) => any 回调函数
    */
   forEach(callback: (item: any, index?: number, flyHTML?: any) => any): void
   /**
    * 添加元素
    * @param item : any 添加的元素，可以指定多个
    */
   push(...item: any): any
   /**
    * 操作元素
    * @param index : number | string操作索引
    * @param del : number 删除的元素个数
    * @param item : any 添加的元素，可以指定多个
    */
   splice(index: number | string, del: number, ...item: any): any
   /**
    * 遍历元素并返回数组
    * @param callback : (item: any, index: number, flyHTML: any) => any 回调函数
    */
   map(callback: (item: any, index?: number, flyHTML?: any) => any): Array<any>
   /**
    * 遍历元素并返回符合条件的元素
    * @param callback : (item: any, index: number, flyHTML: any) => any 回调函数
    */
   filter(callback: (index: number, item?: any, flyHTML?: any) => any): FlyHTML
   /**
    * 合并元素集合，改变原数据
    * @param eles 需要合并的元素集合，可以是任意可迭代的对象
    */
   merge(eles: any): this
   /**
    * 清空元素集合，并在页面删除对应的Element元素
    */
   empty(): void
   /**
    * 删除Element元素
    */
   remove(): void
   /**
    * 
    * @param html : any 要插入的HTML字符串
    * @param str : str: string | number 插入位置，默认为
    */
   addhtml(html: any, mode: string | number): this
   /**
    * 添加类名
    * @param str : string 要操作的类名
    */
   addClass(str: any): this
   /**
    * 删除类名
    * @param str : string 要操作的类名
    */
   removeClass(str: any): this
   /**
    * 删除类名
    * @param str 要操作的类名
    */
   /**
    * 根据布尔值操作元素
    * @param str : string 要操作的类名
    * @param bl : boolean true-添加类名，false-删除类名
    */
   boolClass(str: any, bl: any): this
   /**
    * 切换类名，如果存在则删除，不存在则添加
    * @param str 操作的类名
    */
   toggleClass(str: string): this
   /**
    * 添加类名并删除所有兄弟元素的相同类名
    * @param str : string 要操作的类名
    */
   singleClass(str: string): this
   /**
    * 获取或设置属性
    * @param key 要操作的属性名
    * @param value 要设置的属性值
    */
   attr(key: string, value?: string): any
   /**
    * Style对象，访问元素css属性
    */
   css: Style
   /**
    * 访问元素html
    */
   html: string[] | number[]
   /**
    * 访问元素text
    */
   text: string[] | number[]
}
interface HTMLElement {
   [x: string]: any
   [i: number]: HTMLElement
   f(str?: string): FlyHTML | HTMLElement | any
   p(str?: string): FlyHTML | HTMLElement | any
   d(str?: string): FlyHTML | HTMLElement | any
   b(str?: string): FlyHTML | HTMLElement | any
   on(a: ElementEvent | string, b?: any): this
   en(eve: ElementEvent | string, str: string, listener?: Function): this
   forEach(fun: (arg0: any, arg1: number) => any): void
   map(fun: (arg0: any, arg1: number) => any): Array<any>
   filter(fun: (arg0: number, arg1: any) => any): HTMLElement
   win(): { top: number, left: number }
   addhtml(html: string, str: string | number): string
   isDisplay(str: string): boolean
   attr(a: string | number, b?: any): any
   addClass(str: string): this
   removeClass(str: string): this
   boolClass(str: string, bl: boolean): this
   /**
    * 检查是存在指定类名
    * @param str : string 要操作的类名
    */
   hasClass(str: string): boolean
   css: Style
   index: number
}
interface EventHandlers {
   /**
    * 阻止事件冒泡
    */
   stopPropagation(): any
   /**
   * 返回当事件被触发时，\"ALT\" 是否被按下。
   */
   altKey: boolean,
   /**
   * 返回当事件被触发时，哪个鼠标按钮被点击。
   *   0	规定鼠标左键。
   *   1	规定鼠标中键。
   *   2	规定鼠标右键。
   */
   button: number,
   /**
   * 返回当事件被触发时，鼠标指针的水平坐标。
   */
   clientX: number,
   /**
   * 返回当事件被触发时，鼠标指针的垂直坐标。
   */
   clientY: number,
   /**
   * 返回当事件被触发时，\"CTRL\" 键是否被按下。
   */
   ctrlKey: boolean,
   /**
   * 返回当事件被触发时，\"meta\" 键是否被按下。
   */
   metaKey: boolean,
   /**
   * 返回与事件的目标节点相关的节点。
   */
   relatedTarget: Element,
   /**
   * 返回当某个事件被触发时，鼠标指针的水平坐标。
   */
   screenX: number,
   /**
   * 返回当某个事件被触发时，鼠标指针的垂直坐标。
   */
   screenY: number,
   /**
   * 返回当事件被触发时，\"SHIFT\" 键是否被按下。
   */
   shiftKey: boolean,
}
interface ElementEvent {
   [x: string]: Function
   /**
    * 当被鼠标拖动的对象离开其容器范围内时触发此事件
    */
   dragleave?(event: DragEvent): any
   /**
    * 当某被拖动的对象在另一对象容器范围内拖动时触发此事件
    */
   dragover?(event: DragEvent): any
   /**
    * 当被鼠标拖动的对象进入其容器范围内时触发此事件
    */
   dragenter?(event: DragEvent): any
   /**
    * 用户完成元素拖动后触发
    */
   dragend?(event: DragEvent): any
   /**
    * 用户开始拖动元素时触发
    */
   dragstart?(event: DragEvent): any
   /**
    * 元素正在拖动时触发
    */
   drag?(event: DragEvent): any
   /**
    * 在一个拖动过程中，释放鼠标键时触发此事件
    */
   drop?(event: DragEvent): any
   /**
   * 图像的加载被中断。
   */
   abort?(event: EventHandlers): any,
   /**
   * 元素失去焦点。
   */
   blur?(event: EventHandlers): any,
   /**
   * 域的内容被改变。
   */
   change?(event: EventHandlers): any,
   /**
   * 当用户点击某个对象时调用的事件句柄。
   */
   click?(event: EventHandlers): any,
   /**
   * 当用户双击某个对象时调用的事件句柄。
   */
   dblclick?(event: EventHandlers): any,
   /**
   * 在加载文档或图像时发生错误。
   */
   error?(event: EventHandlers): any,
   /**
   * 元素获得焦点。
   */
   focus?(event: EventHandlers): any,
   /**
   * 某个键盘按键被按下。
   */
   keydown?(event: EventHandlers): any,
   /**
   * 某个键盘按键被按下并松开。
   */
   keypress?(event: EventHandlers): any,
   /**
   * 某个键盘按键被松开。
   */
   keyup?(event: EventHandlers): any,
   /**
   * 一张页面或一幅图像完成加载。
   */
   load?(event: EventHandlers): any,
   /**
   * 鼠标按钮被按下。
   */
   mousedown?(event: EventHandlers): any,
   /**
   * 鼠标被移动。
   */
   mousemove?(event: EventHandlers): any,
   /**
   * 鼠标从某元素移开。
   */
   mouseout?(event: EventHandlers): any,
   /**
   * 鼠标移到某元素之上。
   */
   mouseover?(event: EventHandlers): any,
   /**
   * 鼠标按键被松开。
   */
   mouseup?(event: EventHandlers): any,
   /**
   * 重置按钮被点击。
   */
   reset?(event: EventHandlers): any,
   /**
   * 窗口或框架被重新调整大小。
   */
   resize?(event: EventHandlers): any,
   /**
   * 文本被选中。
   */
   select?(event: EventHandlers): any,
   /**
   * 确认按钮被点击。
   */
   submit?(event: EventHandlers): any,
   /**
   * 用户退出页面。
   */
   unload?(event: EventHandlers): any
}
interface Style {
   /**
   * 规定弹性容器内的行之间的对齐方式，当项目不使用所有可用空间时。
   */
   alignContent?: any,
   /**
   * 规定弹性容器内项目的对齐方式。
   */
   alignItems?: any,
   /**
   * 规定弹性容器内所选项目的对齐方式。
   */
   alignSelf?: any,
   /**
   * 重置所有属性（除了 unicode-bidi 和 direction）。
   */
   all?: any,
   /**
   * 所有 animation-* 属性的简写属性。
   */
   animation?: any,
   /**
   * 规定开始动画的延迟。
   */
   animationDelay?: any,
   /**
   * 规定动画是向前播放、向后播放还是交替播放。
   */
   animationDirection?: any,
   /**
   * 规定动画完成一个周期应花费的时间。
   */
   animationDuration?: any,
   /**
   * 规定元素在不播放动画时（在开始之前、结束之后、或同时）的样式。
   */
   animationFillMode?: any,
   /**
   * 规定动画的播放次数。
   */
   animationIterationCount?: any,
   /**
   * 规定 "@keyframes" 动画的名称。
   */
   animationName?: any,
   /**
   * 规定动画是播放还是暂停。
   */
   animationPlayState?: any,
   /**
   * 规定动画的速度曲线。
   */
   animationTimingFunction?: any,
   /**
   * 定义当面对用户时元素的背面是否应可见。
   */
   backfaceVisibility?: any,
   /**
   * 所有 background-* 属性的简写属性。
   */
   background?: any,
   /**
   * 设置背景图像是与页面的其余部分一起滚动还是固定的。
   */
   backgroundAttachment?: any,
   /**
   * 规定每个背景图层（颜色/图像）的混合模式。
   */
   backgroundBlendMode?: any,
   /**
   * 定义背景（颜色或图像）应在元素内延伸的距离。
   */
   backgroundClip?: any,
   /**
   * 规定元素的背景色。
   */
   backgroundColor?: any,
   /**
   * 规定元素的一幅或多幅背景图像。
   */
   backgroundImage?: any,
   /**
   * 规定背景图像的初始位置。
   */
   backgroundOrigin?: any,
   /**
   * 规定背景图像的位置。
   */
   backgroundPosition?: any,
   /**
   * 设置是否以及如何重复背景图像。
   */
   backgroundRepeat?: any,
   /**
   * 规定背景图像的尺寸。
   */
   backgroundSize?: any,
   /**
   * border-width、border-style 以及 border-color 的简写属性。
   */
   border?: any,
   /**
   * border-bottom-width、border-bottom-style 以及 border-bottom-color 的简写属性。
   */
   borderBottom?: any,
   /**
   * 设置下边框的颜色。
   */
   borderBottomColor?: any,
   /**
   * 定义左下角的边框圆角。
   */
   borderBottomLeftRadius?: any,
   /**
   * 定义右下角的边框圆角。
   */
   borderBottomRightRadius?: any,
   /**
   * 设置下边框的样式。
   */
   borderBottomStyle?: any,
   /**
   * 设置下边框的宽度。
   */
   borderBottomWidth?: any,
   /**
   * 设置表格边框是折叠为单一边框还是分开的。
   */
   borderCollapse?: any,
   /**
   * 设置四条边框的颜色。
   */
   borderColor?: any,
   /**
   * border-image-* 属性的简写属性。
   */
   borderImage?: any,
   /**
   * 规定边框图像区域超出边框的量。
   */
   borderImageOutset?: any,
   /**
   * 规定边框图像应重复、圆角、还是拉伸。
   */
   borderImageRepeat?: any,
   /**
   * 规定如何裁切边框图像。
   */
   borderImageSlice?: any,
   /**
   * 规定用作边框的图像的路径。
   */
   borderImageSource?: any,
   /**
   * 规定边框图像的宽度。
   */
   borderImageWidth?: any,
   /**
   * 所有 border-left-* 属性的简写属性。
   */
   borderLeft?: any,
   /**
   * 设置左边框的颜色。
   */
   borderLeftColor?: any,
   /**
   * 设置左边框的样式。
   */
   borderLeftStyle?: any,
   /**
   * 设置左边框的宽度。
   */
   borderLeftWidth?: any,
   /**
   * 四个 border-*-radius 属性的简写属性。
   */
   borderRadius?: any,
   /**
   * 所有 border-right-* 属性的简写属性。
   */
   borderRight?: any,
   /**
   * 设置右边框的颜色。
   */
   borderRightColor?: any,
   /**
   * 设置右边框的样式。
   */
   borderRightStyle?: any,
   /**
   * 设置右边框的宽度。
   */
   borderRightWidth?: any,
   /**
   * 设置相邻单元格边框之间的距离。
   */
   borderSpacing?: any,
   /**
   * 设置四条边框的样式。
   */
   borderStyle?: any,
   /**
   * border-top-width、border-top-style 以及 border-top-color 的简写属性。
   */
   borderTop?: any,
   /**
   * 设置上边框的颜色。
   */
   borderTopColor?: any,
   /**
   * 定义左上角的边框圆角。
   */
   borderTopLeftRadius?: any,
   /**
   * 定义右上角的边框圆角。
   */
   borderTopRightRadius?: any,
   /**
   * 设置上边框的样式。
   */
   borderTopStyle?: any,
   /**
   * 设置上边框的宽度。
   */
   borderTopWidth?: any,
   /**
   * 设置四条边框的宽度。
   */
   borderWidth?: any,
   /**
   * 设置元素相对于其父元素底部的位置。
   */
   bottom?: any,
   /**
   * 设置元素在分页符处的背景和边框的行为，或对于行内元素在换行符处的行为。
   */
   boxDecorationBreak?: any,
   /**
   * 将一个或多个阴影附加到元素。
   */
   boxShadow?: any,
   /**
   * 定义元素的宽度和高度的计算方式：它们是否应包含内边距和边框。
   */
   boxSizing?: any,
   /**
   * 规定指定元素之后是否应出现 page-、column- 或 region-break。
   */
   breakAfter?: any,
   /**
   * 规定指定元素之前是否应出现 page-、column- 或 region-break。
   */
   breakBefore?: any,
   /**
   * 规定指定元素内部是否应出现 page-、column- 或 region-break。
   */
   breakInside?: any,
   /**
   * 规定表格标题的放置方式。
   */
   captionSide?: any,
   /**
   * 规定光标在 input、textarea 或任何可编辑元素中的颜色。
   */
   caretColor?: any,
   /**
   * 规定样式表中使用的字符编码。
   */
   "@charset"?: any,
   /**
   * 规定不允许在元素的哪一侧浮动元素
       */
   clear?: any,
   /**
   * 剪裁绝对定位的元素。
   */
   clip?: any,
   /**
   * 将元素裁剪为基本形状或 SVG 源。
   */
   clipPath?: any,
   /**
   * 设置文本的颜色。
   */
   color?: any,
   /**
   * 规定元素应分为的列数。
   */
   columnCount?: any,
   /**
   * 指定如何填充列（是否 balanced）。
   */
   columnFill?: any,
   /**
   * 规定列间隙。
   */
   columnGap?: any,
   /**
   * 所有 column - rule -* 属性的简写属性。
   */
   columnRule?: any,
   /**
   * 规定列之间规则的颜色。
   */
   columnRuleColor?: any,
   /**
   * 规定列之间的规则样式。
   */
   columnRuleStyle?: any,
   /**
   * 规定列之间的规则宽度。
   */
   columnRuleWidth?: any,
   /**
   * 规定元素应该跨越多少列。
   */
   columnSpan?: any,
   /**
   * 规定列宽度。
   */
   columnWidth?: any,
   /**
   * column - width 和 column - count 的简写属性。
   */
   columns?: any,
   /**
   * 与 : before 和: after 伪元素一起使用，来插入生成的内容。
   */
   content?: any,
   /**
   * 增加或减少一个或多个 CSS 计数器的值。
   */
   counterIncrement?: any,
   /**
   * 创建或重置一个或多个 CSS 计数器。
   */
   counterReset?: any,
   /**
   * 规定当指向元素时要显示的鼠标光标。
   */
   cursor?: any,
   /**
   * 规定文本方向 / 书写方向。
   */
   direction?: any,
   /**
   * 规定如何显示某个 HTML 元素。
   */
   display?: any,
   /**
   * 规定是否在表格中的空白单元格上显示边框和背景。
   */
   emptyCells?: any,
   /**
   * 定义元素显示之前的效果（例如，模糊或颜色偏移）。
   */
   filter?: any,
   /**
   * flex - grow、flex - shrink 以及 flex - basis 的简写属性。
   */
   flex?: any,
   /**
   * 规定弹性项目的初始长度。
   */
   flexBasis?: any,
   /**
   * 规定弹性项目的方向。
   */
   flexDirection?: any,
   /**
   * flex - direction 和 flex - wrap 的简写属性。
   */
   flexFlow?: any,
   /**
   * 规定项目相对于其余项目的增量。
   */
   flexGrow?: any,
   /**
   * 规定项目相对于其余项目的减量。
   */
   flexShrink?: any,
   /**
   * 规定弹性项目是否应该换行。
   */
   flexWrap?: any,
   /**
   * 规定是否应该对盒（box）进行浮动。
   */
   float?: any,
   /**
   * font - style、font - variant、font - weight、font - size / line - height 以及 font - family 的简写属性。
   */
   font?: any,
   /**
   * 允许网站下载和使用 "web-safe" 字体以外的其他字体的规则。
       */
   "@fontFace"?: any,
   /**
   * 规定文本的字体族（字体系列）。
   */
   fontFamily?: any,
   /**
   * 允许控制 OpenType 字体中的高级印刷特性。
   */
   fontFeatureSettings?: any,
   /**
   * 允许创作者使用 font - variant - alternate 中的通用名来实现在 OpenType 中以不同方式激活的特性。
   */
   "@fontFeatureValues"?: any,
   /**
   * 控制字距调整信息的使用（字母间距）。
   */
   fontKerning?: any,
   /**
   * 控制特定语言的字形在字体的使用。
   */
   fontLanguageOverride?: any,
   /**
   * 规定文本的字体大小。
   */
   fontSize?: any,
   /**
   * 保持发生字体回退时的可读性。
   */
   fontSizeAdjust?: any,
   /**
   * 从字体系列中选择一个普通的、压缩的或扩展的字体。
   */
   fontStretch?: any,
   /**
   * 规定文本的字体样式。
   */
   fontStyle?: any,
   /**
   * 控制哪些缺失的字体（粗体或斜体）可以由浏览器合成。
   */
   fontSynthesis?: any,
   /**
   * 规定是否应该以小型大写字体显示文本。
   */
   fontVariant?: any,
   /**
   * 控制与 @font-feature - values 中定义的备用名称关联的备用字形的使用。
   */
   fontVariantAlternates?: any,
   /**
   * 控制大写字母的备用字形的使用。
   */
   fontVariantCaps?: any,
   /**
   * 控制东亚文字（例如中文和日语）的备用字形的使用。
   */
   fontVariantEastAsian?: any,
   /**
   * 控制在适用于元素的文本内容中使用哪些连字和上下文形式。
   */
   fontVariantLigatures?: any,
   /**
   * 控制数字、分数和序号标记的备用字形的使用。
   */
   fontVariantNumeric?: any,
   /**
   * 控制较小字体的替代字形的使用，这些字形相对于字体基线定位为上标或下标。
   */
   fontVariantPosition?: any,
   /**
   * 规定字体的粗细。
   */
   fontWeight?: any,
   /**
   * grid - template - rows、grid - template - columns、grid - template - areas、grid - auto - rows、grid - auto - columns 以及 grid - auto - flow 属性的简写属性。
   */
   grid?: any,
   /**
   * 即可规定网格项的名称，也可以是 grid - row - start、grid - column - start、grid - row - end 以及 grid - column - end 属性的简写属性。
   */
   gridArea?: any,
   /**
   * 规定默认的列尺寸。
   */
   gridAutoColumns?: any,
   /**
   * 规定如何在网格中插入自动放置的项目。
   */
   gridAutoFlow?: any,
   /**
   * 规定默认的行尺寸。
   */
   gridAutoRows?: any,
   /**
   * grid - column - start 和 grid - column - end 属性的简写属性。
   */
   gridColumn?: any,
   /**
   * 规定如何结束网格项目。
   */
   gridColumnEnd?: any,
   /**
   * 规定列间隙的尺寸。
   */
   gridColumnGap?: any,
   /**
   * 规定网格项目从何处开始。
   */
   gridColumnStart?: any,
   /**
   * grid - row - gap 和 grid - column - gap 的简写属性。
   */
   gridGap?: any,
   /**
   * grid - row - start 和 grid - row - end 属性的简写属性。
   */
   gridRow?: any,
   /**
   * 规定网格项目在何处结束。
   */
   gridRowEnd?: any,
   /**
   * 规定列间隙的尺寸。
   */
   gridRowGap?: any,
   /**
   * 规定网格项目从何处开始。
   */
   gridRowStart?: any,
   /**
   * grid - template - rows、grid - template - columns 以及 grid - areas 属性的简写属性。
   */
   gridTemplate?: any,
   /**
   * 规定如何使用命名的网格项显示列和行。
   */
   gridTemplateAreas?: any,
   /**
   * 指定列的尺寸以及网格布局中的列数。
   */
   gridTemplateColumns?: any,
   /**
   * 指定网格布局中的行的尺寸。
   */
   gridTemplateRows?: any,
   /**
   * 规定是否可以在行框外放置标点符号。
   */
   hangingPunctuation?: any,
   /**
   * 设置元素的高度。
   */
   height?: any,
   /**
   * 设置如何分割单词以改善段落的布局。
   */
   hyphens?: any,
   /**
   * 当图像被缩放时，向浏览器提供关于保留图像的哪些最重要的方面的信息。
   */
   imageRendering?: any,
   /**
   * 允许您将样式表导入另一张样式表。
   */
   "@import"?: any,
   /**
   * 定义元素是否必须创建新的堆叠内容。
   */
   isolation?: any,
   /**
   * 规定项目在弹性容器内的对齐方式，当项目未用到所有可用空间时。
   */
   justifyContent?: any,
   /**
   * 规定动画代码。
   */
   "@keyframes"?: any,
   /**
   * 规定定位元素的左侧位置。
   */
   left?: any,
   /**
   * 增加或减少文本中的字符间距。
   */
   letterSpacing?: any,
   /**
   * 如何如何 / 是否换行。
   */
   lineBreak?: any,
   /**
   * 设置行高。
   */
   lineHeight?: any,
   /**
   * 在一条声明中设置所有列表属性。
   */
   listStyle?: any,
   /**
   * 把图像指定为列表项标记。
   */
   listStyleImage?: any,
   /**
   * 规定列表项标记的位置。
   */
   listStylePosition?: any,
   /**
   * 规定列表项标记的类型。
   */
   listStyleType?: any,
   /**
   * 在一条声明中设置所有外边距属性。
   */
   margin?: any,
   /**
   * 设置元素的下外边距。
   */
   marginBottom?: any,
   /**
   * 设置元素的左外边距。
   */
   marginLeft?: any,
   /**
   * 设置元素的右外边距。
   */
   marginRight?: any,
   /**
   * 设置元素的上外边距。
   */
   marginTop?: any,
   /**
   * 通过在特定位置遮罩或剪切图像来隐藏元素。
   */
   mask?: any,
   /**
   * 规定将遮罩元素用作亮度或 Alpha 遮罩。
   */
   maskType?: any,
   /**
   * 设置元素的最大高度。
   */
   maxHeight?: any,
   /**
   * 设置元素的最大宽度。
   */
   maxWidth?: any,
   /**
   * 为不同的媒体类型、设备、尺寸设置样式规则。
   */
   "@media"?: any,
   /**
   * 设置元素的最小高度。
   */
   minHeight?: any,
   /**
   * 设置元素的最小宽度。
   */
   minWidth?: any,
   /**
   * 规定元素内容应如何与其直接父的背景相混合。
   */
   mixBlendMode?: any,
   /**
   * 规定替换元素的内容应如何适合其所用高度和宽度建立的框。
   */
   objectFit?: any,
   /**
   * 指定替换元素在其框内的对齐方式。
   */
   objectPosition?: any,
   /**
   * 设置元素的不透明等级。
   */
   opacity?: any,
   /**
   * 设置弹性项目相对于其余项目的顺序。
   */
   order?: any,
   /**
   * 设置在元素内发生分页时必须保留在页面底部的最小行数。
   */
   orphans?: any,
   /**
   * outline - width、outline - style 以及 outline - color 属性的简写属性。
   */
   outline?: any,
   /**
   * 设置轮廓的颜色。
   */
   outlineColor?: any,
   /**
   * 对轮廓进行偏移，并将其绘制到边框边缘之外。
   */
   outlineOffset?: any,
   /**
   * 设置轮廓的样式。
   */
   outlineStyle?: any,
   /**
   * 设置轮廓的宽度。
   */
   outlineWidth?: any,
   /**
   * 规定如果内容溢出元素框会发生什么情况。
   */
   overflow?: any,
   /**
   * 规定浏览器是否可能为了防止溢出而在单词内折行（当字符串太长而无法适应其包含框时）。
   */
   overflowWrap?: any,
   /**
   * 规定是否剪裁内容的左右边缘，如果它溢出了元素的内容区域。
   */
   overflowX?: any,
   /**
   * 规定是否剪裁内容的上下边缘，如果它溢出了元素的内容区域。
   */
   overflowY?: any,
   /**
   * 所有 padding -* 属性的简写属性。
   */
   padding?: any,
   /**
   * 设置元素的下内边距。
   */
   paddingBottom?: any,
   /**
   * 设置元素的左内边距。
   */
   paddingLeft?: any,
   /**
   * 设置元素的右内边距。
   */
   paddingRight?: any,
   /**
   * 设置元素的上内边距。
   */
   paddingTop?: any,
   /**
   * 设置元素之后的分页（page -break）行为。
   */
   pageBreakAfter?: any,
   /**
   * 设置元素之前的分页（page -break）行为。
   */
   pageBreakBefore?: any,
   /**
   * 设置元素内的分页（page -break）行为。
   */
   pageBreakInside?: any,
   /**
   * 为 3D 定位元素提供透视。
   */
   perspective?: any,
   /**
   * 定义用户观看 3D 定位元素的位置。
   */
   perspectiveOrigin?: any,
   /**
   * 定义元素是否对指针事件做出反应。
   */
   pointerEvents?: any,
   /**
   * 规定用于元素的定位方法的类型（静态、相对、绝对或固定）。
   */
   position?: any,
   /**
   * 设置引号类型。
   */
   quotes?: any,
   /**
   * 定义用户是否以及如何调整元素的尺寸。
   */
   resize?: any,
   /**
   * 规定定位元素的左侧位置。
   */
   right?: any,
   /**
   * 规定可滚动框中是否平滑地滚动，而不是直接跳跃。
   */
   scrollBehavior?: any,
   /**
   * 规定制表符的宽度。
   */
   tabSize?: any,
   /**
   * 定义用于对单元格、行和列进行布局的算法。
   */
   tableLayout?: any,
   /**
   * 规定文本的水平对齐方式。
   */
   textAlign?: any,
   /**
   * 描述当 text - align 为 "justify" 时，如何在强制换行之前对齐块或行的最后一行。
       */
   textAlignLast?: any,
   /**
   * 将多个字符组合到到单个字符的空间中。
   */
   textCombineUpright?: any,
   /**
   * 规定文本装饰。
   */
   textDecoration?: any,
   /**
   * 规定文本装饰（text - decoration）的颜色。
   */
   textDecorationColor?: any,
   /**
   * 规定文本装饰（text - decoration）中的的行类型。
   */
   textDecorationLine?: any,
   /**
   * 规定文本装饰（text - decoration）中的行样式。
   */
   textDecorationStyle?: any,
   /**
   * 规定文本块（text - block）中的的首行缩进。
   */
   textIndent?: any,
   /**
   * 规定当 text - align 为 "justify" 时使用的对齐方法。
       */
   textJustify?: any,
   /**
   * 定义行中的文本方向。
   */
   textOrientation?: any,
   /**
   * 规定当文本溢出包含元素时应该发生的情况。
   */
   textOverflow?: any,
   /**
   * 添加文本阴影。
   */
   textShadow?: any,
   /**
   * 控制文本的大写。
   */
   textTransform?: any,
   /**
   * 规定使用 text - decoration 属性设置的下划线的位置。
   */
   textUnderlinePosition?: any,
   /**
   * 规定定位元素的顶端位置。
   */
   top?: any,
   /**
   * 向元素应用 2D 或 3D 转换。
   */
   transform?: any,
   /**
   * 允许您更改转换元素的位置。
   */
   transformOrigin?: any,
   /**
   * 规定如何在 3D 空间中渲染嵌套的元素。
   */
   transformStyle?: any,
   /**
   * 所有 transition -* 属性的简写属性。
   */
   transition?: any,
   /**
   * 规定合适开始过渡效果。
   */
   transitionDelay?: any,
   /**
   * 规定完成过渡效果所需的秒或毫秒数。
   */
   transitionDuration?: any,
   /**
   * 规定过渡效果对应的 CSS 属性的名称。
   */
   transitionProperty?: any,
   /**
   * 规定过渡效果的速度曲线。
   */
   transitionTimingFunction?: any,
   /**
   * 与 direction 属性一起使用，设置或返回是否应覆写文本来支持同一文档中的多种语言。
   */
   unicodeBidi?: any,
   /**
   * 规定是否能选取元素的文本。
   */
   userSelect?: any,
   /**
   * 设置元素的垂直对齐方式。
   */
   verticalAlign?: any,
   /**
   * 规定元素是否可见。
   */
   visibility?: any,
   /**
   * 规定如何处理元素内的空白字符。
   */
   whiteSpace?: any,
   /**
   * 设置如果元素内发生分页，必须在页面顶部保留的最小行数。
   */
   widows?: any,
   /**
   * 设置元素的宽度。
   */
   width?: any,
   /**
   * 规定单词到达行末后如何换行。
   */
   wordBreak?: any,
   /**
   * 增加或减少文本中的单词间距。
   */
   wordSpacing?: any,
   /**
   * 允许长的、不能折行的单词换到下一行。
   */
   wordWrap?: any,
   /**
   * 规定文本行是水平还是垂直布局。
   */
   writingMode?: any,
   /**
   * 设置定位元素的堆叠顺序。
   */
   zIndex?: any
}