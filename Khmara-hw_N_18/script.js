class NewElement {
  constructor(tag, innerHtml, attributes){
      this.tag = tag;
      this.innerHtml = innerHtml;
      this.attributes = attributes;
  }
  createEl(){
      const box = document.createElement(this.tag);
      Object.entries(this.attributes).forEach(([key, val]) => {
        if (key === 'className'){
          box.setAttribute('class', val);
        }else{
          box.setAttribute(key, val);
        }
      });
      box.innerHTML = this.innerHtml;
      return box;
  }
  render(id){
    const getEl = document.querySelector(id); 
    getEl.appendChild(this.createEl());
  }
}

const element = new NewElement(
  'div', 
  'Hello from my Function', 
  {
    id: 'myId',
    className: 'myClassName',
    align: 'center'
  }
);

element.render('#root');    
