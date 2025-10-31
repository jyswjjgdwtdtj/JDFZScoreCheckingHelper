let lastiframe=null;
const hrefstart='https://fz.sjtu.edu.cn/jwxx/student/score/scorelist/id/';
const inum=setInterval(() => {
    const node=document.getElementById("ifrtopMenu");
    if(node!=lastiframe){
        lastiframe=node;
            node.addEventListener("load", function(e) {
                const href=String(node.contentWindow.location.href);
                if(href.startsWith(hrefstart)){
                    console.log("href:"+href+" "+"id:"+href.replace(hrefstart,""));
                    const ifdoc=node.contentDocument;
                    Array.from(ifdoc.getElementsByClassName("hidden")).forEach(element => {
                        if(element.className=="hidden"){
                            element.className="";
                        }
                    });
                    ifdoc.getElementById("show")?.remove();
                    Array.from(ifdoc.getElementsByTagName("blockquote")).forEach(element => {
                        element.remove();
                    });
                    const s=ifdoc.styleSheets[ifdoc.styleSheets.length - 1];
                    s.insertRule('.layui-table {background: none !important; }');
                }
            });
    }
}, 5);