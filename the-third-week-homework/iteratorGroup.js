class Group {
    a=[];
    add(value){
      if (!this.has(value)){
        this.a.push(value);
      }
    }
  
    delete(value){
      this.a=this.a.filter(v => v !== value);
    }
  
    has(value){
      return this.a.includes(value);
    }
  
    static from(collect) {
      let group = new Group;
      for(let value of collect){
        group.add(value);
      }
      return group;
    }
  
  }
  
for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
    }
    // → a
    // → b
    // → c