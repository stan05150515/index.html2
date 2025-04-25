function openiframe(index){
    const c = document.getElementsByClassName('show-classdemo')[0];
    console.log(c);

    switch (index) {
        case 1:
            c.innerHTML = '<iframe src="./411410896w2.html" frameborder="1"></iframe>';
            break;
        case 2:
            c.innerHTML = '<iframe src="411410896_card.html" frameborder="1"></iframe>';    
            break;
        case 3:
            c.innerHTML = '<iframe src="blogs_doge.html" frameborder="1"></iframe>';    
            break;
        case 4:
            c.innerHTML = '<iframe src="blogs_b.html" frameborder="1"></iframe>';    
            break;        
    }
    console.log(index);//控台輸出
}
