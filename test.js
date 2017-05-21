class FooClass {
  constructor(){
    console.log(this)
  }

  create(params){
    console.log(this)
    this.params = params
  }

}
