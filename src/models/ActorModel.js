class ActorModel{
constructor(fName, lName,birthday, image, IMDBlink){ 
    this.fName= fName;
    this.lName= lName;
    this.birthday= new Date(birthday);
    this.image= image;
    this.IMDBlink= IMDBlink;
}

    Age(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

export default ActorModel