let Component = function(config:any){
    return function(targetClass:any){
        let tc = new targetClass();
        return class {
            title = tc.title;
            power = config.power;
            selector = config.selector;
            template = config.template;
        }
    }
};

@Component({
    power : 7,
    selector : "app-root",
    template : `
    <h1> {{title}} </h1> 
    <h3>Power is : {{power}}</h3>
    <button>Click Me</button>
    `
})
class MyComp{
    title = "Welcome to DB Training";
}