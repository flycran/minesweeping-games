///<reference path = "../ts/Flying.d.ts" />
f(() => {
   const main = f('main')
   const flex = f('#flex')
   const hea = f('header')
   hea.html = `
   难度：<input type="text" value="12">
   尺寸：<input type="text" value="16">
   步数：<span></span>
   总格数：<span></span>
   &#22320&#38647数量：<span></span>
   待排雷格数：<span></span>`
   const fin = hea.child
   fin[0].on('change', function () {
      if (this.value > 30) {
         this.value = 30
      } else if (this.value < 3) {
         this.value = 3
      }
      grid.probability = this.value
      grid.newGame()
   })
   fin[1].on('change', function () {
      if (this.value > 36) {
         this.value = 36
      } else if (this.value < 8) {
         this.value = 8
      }
      grid.length = this.value
      grid.newGame()
   })
   const RESIZE = {
      change() {
         clearTimeout(this.tiemId)
         this.tiemId = setTimeout(() => {
            let { x, y, ratio, interval: [ix, iy] } = this
            x -= ix
            y -= iy
            const ra = x / y
            if (ra > ratio) {
               this.box.css.width = y * ratio
               this.box.css.height = y
            } else {
               this.box.css.width = x
               this.box.css.height = x / ratio
            }
         }, 10)
      },
      x: flex.offsetWidth,
      y: flex.offsetHeight,
      box: main,
      ratio: 1,
      interval: [20, 20]
   }
   f.on('resize', () => {
      RESIZE.x = flex.offsetWidth
      RESIZE.y = flex.offsetHeight
      RESIZE.change()
   })
   RESIZE.change()
   const cooMap = [
      [0, - 1],
      [1, - 1],
      [1, 0],
      [1, 1],
      [0, 1],
      [-1, 1],
      [-1, 0],
      [-1, -1]
   ]
   class lattice {
      mine
      x
      y
      expose
      constructor(mine, x, y) {
         this.mine = mine
         this.x = x
         this.y = y
      }
      getMask() {
         const { x, y } = this
         let num = 0
         cooMap.forEach(([cx, cy]) => {
            const a = grid.get(x + cx, y + cy)
            if (a) a.mine && num++
         })
         return num
      }
      reveal() {
         if (this.expose) return
         this.expose = true
         grid.reveal++
         const mask = this.getMask()
         const { x, y } = this
         const n = grid.total - grid.reveal
         fin[5].html = n
         if (n === grid.maxmine) {
            alert('恭喜胜利')
            grid.newGame()
            return
         }
         if (mask) {
            const ele = grid.getEle(x, y)
            if (ele) {
               ele.addClass('reveal')
               ele.f('i').attr('mask', mask)
            }
         } else {
            const ele = grid.getEle(x, y)
            if (ele) ele.addClass('reveal')
            setTimeout(() => {
               cooMap.forEach(([cx, cy]) => {
                  const obj = grid.get(x + cx, y + cy)
                  if (obj) obj.reveal()
               })
            }, 30)
         }
      }
      down(ele) {
         if (this.expose) return
         if (this.mine) {
            if (grid.stepsNum <= grid.invincibleSteps) {
               ele.toggleClass('red')
            } else {
               alert('结束')
               grid.newGame()
            }
         } else {
            this.reveal()
         }
      }
   }
   document.body.oncontextmenu = function () {
      return false
   }
   const grid = {
      length: 16,
      list: [],
      probability: 12,
      randomGrid() {
         this.list = []
         let har
         for (let y = 0; y < this.length; y++) {
            har = []
            for (let x = 0; x < this.length; x++) {
               har.push(new lattice(ranBool(this.probability), x, y))
            }
            this.list.push(har)
         }
         return this.list
      },
      mineNum() {
         let n = 0
         this.list.flat().forEach(a => a.mine && n++)
         return n
      },
      newGame() {
         this.randomGrid()
         main.html = ''
         const w = 100 / this.length
         for (let x = 0; x < this.length; x++) {
            for (let y = 0; y < this.length; y++) {
               main.addhtml(`<div class="lattice" x="${x}" y="${y}" title="${x},${y}" style="width:${w}%;height:${w}%"><span><i></i></span></div>`)
            }
         }
         this.eles = f('.lattice')
         this.maxmine = this.mineNum()
         this.reveal = 0
         this.total = this.length ** 2
         this.time = 300 / this.length
         this.loading = false
         this.stepsNum = 0
         this.invincibleSteps = Math.ceil(this.probability / 5)
         fin[2].html = 0
         fin[3].html = this.total
         fin[4].html = this.maxmine
         fin[5].html = this.total
         this.show(0)
      },
      show(i) {
         this.tiemId = setTimeout(() => {
            if (i < this.length * 2) {
               for (let k = 0; k <= i; k++) {
                  if (k >= this.length || i - k >= this.length) continue
                  this.getEle(k, i - k).addClass('show')
               }
               this.show(i + 1)
            } else {
               this.loading = true
            }
         }, this.time)
      },
      get(x, y) {
         const a = this.list[y]
         if (a !== undefined) return a[x]
      },
      getEle(x, y) {
         if (x >= this.length || y >= this.length) return
         return this.eles[x * this.length + y]
      },
      stepsNum: 0,
      invincibleSteps: 3,
      eles: null
   }
   let highlightCoo = [0, 0]
   main.on('mouseup', function (event) {
      const [x, y] = highlightCoo
      cooMap.forEach(([cx, cy]) => {
         const e = grid.getEle(x + cx, y + cy)
         if (e) e.removeClass('highlight')
      })
   })
   main.en({
      click() {
         if (this.hasClass('reveal') || this.hasClass('red')) return
         grid.stepsNum++
         fin[2].html = grid.stepsNum
         if (!grid.loading) {
            clearTimeout(grid.tiemId)
            grid.eles.addClass('show')
            grid.loading = true
         }
         if (!this.hasClass('red')) {
            const x = this.attr('x')
            const y = this.attr('y')
            grid.get(x, y).down(this)
         }
      },
      mousedown(event) {
         const x = +this.attr('x')
         const y = +this.attr('y')
         highlightCoo = [x, y]
         if (event.button === 2 && this.hasClass('reveal')) {
            cooMap.forEach(([cx, cy]) => {
               const e = grid.getEle(x + cx, y + cy)
               if (e) e.addClass('highlight')
            })
         } else if (event.button === 0) {
            let count = 0
            cooMap.forEach(([cx, cy]) => {
               const e = grid.getEle(x + cx, y + cy)
               if (e && e.hasClass('red')) count++
            })
            const n = +this.f('i').attr('mask')
            if (n) {
               if (n === count) {
                  for (const v of cooMap) {
                     const [cx, cy] = v
                     const ele = grid.getEle(x + cx, y + cy)
                     if (!ele || ele.hasClass('red')) continue
                     const e = grid.get(x + cx, y + cy)
                     if (e) {
                        if (e.mine) {
                           alert('结束')
                           grid.newGame()
                           return
                        } else {
                           e.reveal()
                        }
                     }
                  }
               } else {
                  cooMap.forEach(([cx, cy]) => {
                     const e = grid.getEle(x + cx, y + cy)
                     if (e) e.addClass('highlight')
                  })
               }
            }
         }
      },
      mouseup(event) {
         if (event.button === 2 && !this.hasClass('reveal')) {
            this.toggleClass('red')
         }
      }
   }, '.lattice')
   grid.newGame()
})