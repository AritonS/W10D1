class DOMNodeCollection {
    constructor(array) {
        this.htmlArray = array;
    }

    html(string) {
        if(string !== undefined) {
        this.htmlArray.forEach((node) => {
            node.innerHTML = string;
        })
    }
        else {
            return this.htmlArray[0].innerHTML;
        }
    }

    empty() {
        this.htmlArray.forEach((node) => {
            node.innerHTML = "";
        });  
    }
    append(arg){
        if (arg instanceof DOMNodeCollection) {
            arg.htmlArray.forEach((arg) => {
                this.htmlArray.forEach((node) => {
                    node.innerHTML.concat(arg.outerHTML);
                });
            });
        }else if (typeof arg === "string"){
            this.htmlArray.forEach((node) => {
                node.innerHTML += (arg);
            });
            
        }else if (arg instanceof HTMLElement){
            this.htmlArray.forEach((node) => {
                node.innerHTML.concat(arg.outerHTML);
            });
        
        }
    }
    addClass(newClass) {
      
        this.htmlArray.forEach((node) => {
            node.className += ` ${newClass}`;
        });
        
    }

    removeClass(oldClass) {
        this.htmlArray.forEach((node) => {
            let classes = node.className.split(" ");
            if (classes.includes(oldClass)){
                let oldIdx = classes.indexOf(oldClass);
                classes.splice(oldIdx, 1);
            }
            node.className = classes.join(" ");
        });
    }
}

module.exports = DOMNodeCollection