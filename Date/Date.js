<script type="text/javascript">
$("#aa").click(function () {
var date = new Date();
this.year = date.getFullYear();
this.month = date.getMonth() + 1;
this.date = date.getDate();
this.day = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[date.getDay()];
this.hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
this.minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
this.second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
var currentTime = "现在是:" + this.year + "年" + this.month + "月" + this.date + "日 " + this.hour + ":" + this.minute + ":" + this.second + " " + this.day;
alert(currentTime);
});
</script>