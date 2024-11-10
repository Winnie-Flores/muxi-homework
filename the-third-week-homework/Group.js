class Group {
    a=[];
  
    add(value){
      if(!this.has(value)){
        this.a.push(value);
      }
    }
    delete(value){
      this.a=this.a.filter(v => v !== value);
    }
  
    has(value){
      return this.a.includes(value);
    }
  
    static from(replaceable) {
      let b=new Group;
      for (let value of replaceable) {
        b.add(value);
      }
      return b;
    }
}
  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false