class ActorModel{
constructor(fName, lName,birthday, image, aLink){ 
    this.fName= fName;
    this.lName= lName;
    this.birthday= new Date(birthday);
    this.image= image;
    this.aLink= aLink;
}

    age(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

export default ActorModel