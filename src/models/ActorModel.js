class ActorModel{
constructor(plainActorOrFName, lName,birthday, image, aLink){ 
    if(typeof plainActorOrFName=== 'object'){
    this.fName= plainActorOrFName.fName;
    this.lName= plainActorOrFName.lName;
    this.birthday= plainActorOrFName.birthday;
    this.image= plainActorOrFName.image;
    this.aLink= plainActorOrFName.aLink;
    } else{
        this.fName= plainActorOrFName;
        this.lName= lName;
        this.birthday= birthday;
        this.image= image;
        this.aLink= aLink;
    }
}


    age(){
        const diff = Date.now() - new Date(this.birthday).getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

// const apiKey= "326d3ce51f35b38c9fc46926dc55bfaa";
export default ActorModel