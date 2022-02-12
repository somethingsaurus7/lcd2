lcd1602.setAddress3()
lcd1602.set_backlight(lcd1602.on_off.on)
lcd1602.clear()
lcd1602.set_LCD_Show(lcd1602.visibled.visible)
lcd1602.putString(
"Hello",
0,
0
)
basic.forever(function () {
	
})
