class NewElement {
  constructor(tag, innerHtml, attributes){
      this.tag = tag;
      this.innerHtml = innerHtml;
      this.attributes = attributes;
  }
  createEl(){
      const box = document.createElement(this.tag);
      Object.entries(this.attributes).forEach(([key, val]) => {
        box.setAttribute(key, val);
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
    class: 'myClass',
    align: 'center'
  }
);

element.render('#root');    
